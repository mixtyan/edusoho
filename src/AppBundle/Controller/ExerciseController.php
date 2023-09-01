<?php

namespace AppBundle\Controller;

use Biz\Activity\Constant\ActivityMediaType;
use Biz\Activity\Service\ActivityService;
use Biz\Activity\Service\ExerciseActivityService;
use Biz\Common\CommonException;
use Biz\Course\CourseException;
use Biz\Course\Service\CourseService;
use Biz\Task\Service\TaskService;
use Biz\Testpaper\ExerciseException;
use Biz\User\UserException;
use Codeages\Biz\ItemBank\Answer\Constant\AnswerRecordStatus;
use Codeages\Biz\ItemBank\Answer\Constant\ExerciseMode;
use Codeages\Biz\ItemBank\Answer\Service\AnswerRecordService;
use Codeages\Biz\ItemBank\Answer\Service\AnswerService;
use Codeages\Biz\ItemBank\Assessment\Service\AssessmentService;
use Symfony\Component\HttpFoundation\Request;
use Topxia\Service\Common\ServiceKernel;

class ExerciseController extends BaseController
{
    public function startDoAction(Request $request, $lessonId, $exerciseId)
    {
        $activity = $this->getActivityService()->getActivity($lessonId, true);
        if (!$this->getCourseService()->canTakeCourse($activity['fromCourseId'])) {
            $this->createNewException(CourseException::FORBIDDEN_TAKE_COURSE());
        }

        if (!$this->getExerciseActivityService()->isExerciseAssessment($request->get('assessmentId'), $activity['ext'])) {
            $this->createNewException(ExerciseException::EXERCISE_NOTDO());
        }

        $user = $this->getCurrentUser();
        $latestAnswerRecord = $this->getAnswerRecordService()->getLatestAnswerRecordByAnswerSceneIdAndUserId($activity['ext']['answerSceneId'], $user['id']);
        if ($latestAnswerRecord && AnswerRecordStatus::FINISHED != $latestAnswerRecord['status'] && ExerciseMode::SUBMIT_SINGLE == $latestAnswerRecord['exercise_mode']) {
            $this->createNewException(ExerciseException::EXERCISE_IS_DOING());
        }
        if (empty($latestAnswerRecord) || AnswerRecordStatus::FINISHED === $latestAnswerRecord['status']) {
            $latestAnswerRecord = $this->getAnswerService()->startAnswer($activity['ext']['answerSceneId'], $request->get('assessmentId'), $user['id']);
        }
        $task = $this->getTaskService()->getTaskByCourseIdAndActivityId($activity['fromCourseId'], $activity['id']);

        return $this->forward('AppBundle:AnswerEngine/AnswerEngine:do', [
            'answerRecordId' => $latestAnswerRecord['id'],
            'submitGotoUrl' => $this->generateUrl('course_task_activity_show', ['courseId' => $activity['fromCourseId'], 'id' => $task['id']]),
            'saveGotoUrl' => $this->generateUrl('my_course_show', ['id' => $activity['fromCourseId']]),
        ]);
    }

    public function showResultAction(Request $request, $answerRecordId)
    {
        if (!$this->canLookAnswerRecord($answerRecordId)) {
            $this->createNewException(CommonException::FORBIDDEN_DRAG_CAPTCHA_ERROR());
        }

        $answerRecord = $this->getAnswerRecordService()->get($answerRecordId);
        $assessment = $this->getAssessmentService()->getAssessment($answerRecord['assessment_id']);

        return $this->render('exercise/result.html.twig', [
            'answerRecordId' => $answerRecordId,
            'assessment' => $assessment,
            'restartUrl' => $this->generateUrl('exercise_start_do', ['lessonId' => $this->getActivityIdByAnswerSceneId($answerRecord['answer_scene_id']), 'exerciseId' => 1]),
        ]);
    }

    protected function getActivityIdByAnswerSceneId($answerSceneId)
    {
        $activity = $this->getActivityService()->getActivityByAnswerSceneIdAndMediaType($answerSceneId, ActivityMediaType::EXERCISE);

        return $activity['id'];
    }

    protected function canLookAnswerRecord($answerRecordId)
    {
        $user = $this->getCurrentUser();

        if (!$user->isLogin()) {
            $this->createNewException(UserException::UN_LOGIN());
        }

        $answerRecord = $this->getAnswerRecordService()->get($answerRecordId);

        if (!$answerRecord) {
            $this->createNewException(CommonException::ERROR_PARAMETER());
        }

        if ('doing' === $answerRecord['status'] && ($answerRecord['user_id'] != $user['id'])) {
            $this->createNewException(CommonException::FORBIDDEN_DRAG_CAPTCHA_ERROR());
        }

        if ($user->isAdmin()) {
            return true;
        }

        $exerciseActivity = $this->getExerciseActivityService()->getByAnswerSceneId($answerRecord['answer_scene_id']);
        $activity = $this->getActivityService()->getByMediaIdAndMediaType($exerciseActivity['id'], 'testpaper');

        $course = $this->getCourseService()->getCourse($activity['fromCourseId']);
        $member = $this->getCourseMemberService()->getCourseMember($course['id'], $user['id']);

        if ('teacher' === $member['role']) {
            return true;
        }

        if ($answerRecord['user_id'] == $user['id']) {
            return true;
        }

        if ($course['parentId'] > 0) {
            $classroom = $this->getClassroomService()->getClassroomByCourseId($course['id']);
            $member = $this->getClassroomService()->getClassroomMember($classroom['id'], $user['id']);

            if ($member && array_intersect($member['role'], ['assistant', 'teacher', 'headTeacher'])) {
                return true;
            }
        }

        return false;
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->createService('Activity:ActivityService');
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->createService('Course:CourseService');
    }

    /**
     * @return ServiceKernel
     */
    protected function getServiceKernel()
    {
        return ServiceKernel::instance();
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->createService('Task:TaskService');
    }

    /**
     * @return AssessmentService
     */
    protected function getAssessmentService()
    {
        return $this->createService('ItemBank:Assessment:AssessmentService');
    }

    /**
     * @return AnswerRecordService
     */
    protected function getAnswerRecordService()
    {
        return $this->createService('ItemBank:Answer:AnswerRecordService');
    }

    protected function getCourseMemberService()
    {
        return $this->createService('Course:MemberService');
    }

    /**
     * @return ExerciseActivityService
     */
    protected function getExerciseActivityService()
    {
        return $this->getBiz()->service('Activity:ExerciseActivityService');
    }

    /**
     * @return AnswerService
     */
    protected function getAnswerService()
    {
        return $this->createService('ItemBank:Answer:AnswerService');
    }
}
