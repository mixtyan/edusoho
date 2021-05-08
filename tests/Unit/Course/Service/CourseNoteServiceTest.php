<?php

namespace Tests\Unit\Course\Service;

use AppBundle\Common\ArrayToolkit;
use AppBundle\Common\ReflectionUtils;
use Biz\BaseTestCase;
use Biz\Course\Service\CourseNoteService;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\Task\Service\TaskService;

class CourseNoteServiceTest extends BaseTestCase
{
    public function testFindPublicNotesByCourseSetId()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);

        $result = $this->getNoteService()->findPublicNotesByCourseSetId($courseSet['id']);
        self::assertEquals($note['id'], reset($result)['id']);
    }

    public function testFindPublicNotesByCourseId()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);

        $result = $this->getNoteService()->findPublicNotesByCourseId($course['id']);
        self::assertEquals($note['id'], reset($result)['id']);
    }

    public function testFindCourseNotesByUserIdAndCourseId()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);

        $user = $this->getCurrentUser();
        $result = $this->getNoteService()->findCourseNotesByUserIdAndCourseId($user['id'], $course['id']);
        self::assertEquals($note['id'], reset($result)['id']);
    }

    public function testWaveLikeNum()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $this->getNoteService()->waveLikeNum($note['id'], 2);

        $result = $this->getNoteService()->getNote($note['id']);

        $this->assertEquals(2, $result['likeNum']);
    }

    public function testLike()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $result = $this->getNoteService()->like($note['id']);
        $this->assertTrue($result);
    }

    /**
     * @throws \Biz\Course\CourseNoteException
     * @throws \Exception
     * @expectedException \Biz\Course\CourseNoteException
     */
    public function testLikeWithEmptyNote()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $result = $this->getNoteService()->like($note['id'] + 100);
    }

    /**
     * @throws \Biz\Course\CourseNoteException
     * @throws \Exception
     * @expectedException \Biz\Course\CourseNoteException
     */
    public function testLikeWithRetry()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $this->getNoteService()->like($note['id']);
        $this->getNoteService()->like($note['id']);
    }

    public function testCancelLike()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $this->getNoteService()->like($note['id']);
        $result1 = $this->getNoteService()->getNote($note['id']);
        $this->assertEquals(1, $result1['likeNum']);

        $this->getNoteService()->cancelLike($note['id']);
        $result2 = $this->getNoteService()->getNote($note['id']);
        $this->assertEquals(0, $result2['likeNum']);
    }

    /**
     * @throws \Biz\Course\CourseNoteException
     * @throws \Exception
     * @expectedException \Biz\Course\CourseNoteException
     */
    public function testCancelLikeWithException()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $this->getNoteService()->like($note['id']);
        $result1 = $this->getNoteService()->getNote($note['id']);
        $this->assertEquals(1, $result1['likeNum']);

        $this->getNoteService()->cancelLike($note['id'] + 100);
    }

    public function testPrepareSearchNoteConditions()
    {
        $result = ReflectionUtils::invokeMethod($this->getNoteService(), 'prepareSearchNoteConditions', [
            [
                'keywordType' => 'courseId',
                'keyword' => 1,
                'author' => 'test',
            ],
        ]);
        $this->assertEquals(1, $result['courseId']);
    }

    /**
     * @expectedException \Biz\Common\CommonException
     */
    public function testPrepareSearchNoteConditionsWithException()
    {
        $result = ReflectionUtils::invokeMethod($this->getNoteService(), 'prepareSearchNoteConditions', [
            [
                'keywordType' => 'courseId-wrong',
                'keyword' => 1,
            ],
        ]);
    }

    public function testFindNoteLikesByUserId()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $this->getNoteService()->like($note['id']);
        $results = $this->getNoteService()->findNoteLikesByUserId($this->getCurrentUser()->getId());
        $this->assertCount(1, $results);
    }

    public function testFindNoteLikesByNoteId()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $this->getNoteService()->like($note['id']);
        $results = $this->getNoteService()->findNoteLikesByNoteId($note['id']);
        $this->assertCount(1, $results);
    }

    public function testFindNoteLikesByNoteIds()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $this->getNoteService()->like($note['id']);
        $results = $this->getNoteService()->findNoteLikesByNoteIds([$note['id']]);
        $this->assertCount(1, $results);
    }

    public function testFindNoteLikesByNoteIdsAndUserId()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);
        $this->assertEquals(0, $note['likeNum']);

        $this->getNoteService()->like($note['id']);
        $results = $this->getNoteService()->findNoteLikesByNoteIdsAndUserId([$note['id']], $this->getCurrentUser()->getId());
        $this->assertCount(1, $results);
    }

    public function testGetNote()
    {
        $note = $this->createNote();
        $foundNote = $this->getNoteService()->getNote($note['id']);
        $this->assertEquals($note['userId'], $foundNote['userId']);
    }

    public function testGetNoteWithNotExistNote()
    {
        $result = $this->getNoteService()->getNote(999);
        $this->assertEquals(false, $result);
    }

    public function testGetUserLessonNote()
    {
        $note = $this->createNote();

        $foundNote = $this->getNoteService()->getCourseNoteByUserIdAndTaskId($note['userId'], $note['taskId']);

        $this->assertEquals($note['id'], $foundNote['id']);
        $this->assertEquals($note['userId'], $foundNote['userId']);
        $this->assertEquals($note['taskId'], $foundNote['taskId']);
    }

    public function testsearchNoteCount()
    {
        $user = $this->getCurrentUser();
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);

        $task1 = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);

        $task2 = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);

        $createdNote1 = $this->getNoteService()->saveNote([
            'content' => 'note_content1',
            'taskId' => $task1['id'],
            'courseId' => $task1['courseId'],
        ]);

        $createdNote2 = $this->getNoteService()->saveNote([
            'content' => 'note_content1',
            'taskId' => $task2['id'],
            'courseId' => $task2['courseId'],
        ]);

        $resultCount = $this->getNoteService()->countCourseNotes(['courseId' => $task1['courseId'], 'taskId' => $task2['id']]);
        $this->assertEquals(1, $resultCount);
        $resultCount = $this->getNoteService()->countCourseNotes(['courseId' => $course['id']]);
        $this->assertEquals(2, $resultCount);
    }

    public function testSearchNotes()
    {
        $user = $this->getCurrentUser();
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);

        $task1 = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);

        $task2 = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);

        $createdNote1 = $this->getNoteService()->saveNote([
            'content' => 'note_content1',
            'taskId' => $task1['id'],
            'courseId' => $task1['courseId'],
        ]);

        $createdNote2 = $this->getNoteService()->saveNote([
            'content' => 'note_content1',
            'taskId' => $task2['id'],
            'courseId' => $task2['courseId'],
        ]);

        $searchedNotes = ArrayToolkit::index($this->getNoteService()->searchNotes(
            ['courseId' => $course['id']],
            ['createdTime' => 'DESC'], 0, 30), 'id');
        $this->assertEquals(2, count($searchedNotes));
        $this->assertEquals($createdNote2['id'], $searchedNotes[$createdNote2['id']]['id']);
    }

    public function testSaveNote()
    {
        $note = $this->createNote();

        $savedNote = $this->getNoteService()->saveNote([
            'content' => 'Save Second Time',
            'taskId' => $note['taskId'],
            'courseId' => $note['courseId'],
        ]);

        $this->assertNotNull($savedNote);
    }

    public function testDeleteNote()
    {
        $note = $this->createNote();
        $this->getNoteService()->deleteNote($note['id']);
        $note = $this->getNoteService()->getNote($note['id']);
        $this->assertNull($note);
    }

    /**
     * @expectedException \Biz\Course\CourseNoteException
     */
    public function testDeleteNoteWithNotExist()
    {
        $this->getNoteService()->deleteNote(999);
    }

    public function testDeleteNotes()
    {
        $user = $this->getCurrentUser();
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);

        $task1 = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);

        $task2 = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);

        $createdNote1 = $this->getNoteService()->saveNote([
            'content' => 'note_content1',
            'taskId' => $task1['id'],
            'courseId' => $task1['courseId'],
        ]);

        $createdNote2 = $this->getNoteService()->saveNote([
            'content' => 'note_content1',
            'taskId' => $task2['id'],
            'courseId' => $task2['courseId'],
        ]);

        $ids = [$createdNote1['id'], $createdNote2['id']];
        $result = $this->getNoteService()->deleteNotes($ids);

        $note1 = $this->getNoteService()->getNote($createdNote1['id']);
        $this->assertNull($note1);

        $note2 = $this->getNoteService()->getNote($createdNote1['id']);
        $this->assertNull($note2);
    }

    protected function createCourseSet()
    {
        $courseSet = $this->getCourseSetService()->createCourseSet([
            'title' => 'test set',
            'type' => 'normal',
        ]);

        return $courseSet;
    }

    protected function createTask()
    {
        $courseSet = $this->createCourseSet();
        $course = $this->getCourseService()->getDefaultCourseByCourseSetId($courseSet['id']);
        $task = $this->getTaskService()->createTask([
            'fromCourseId' => $course['id'],
            'title' => 'test task',
            'mode' => 'lesson',
            'mediaType' => 'text',
            'content' => 'task content',
            'fromCourseSetId' => $courseSet['id'],
        ]);

        return $task;
    }

    protected function createNote()
    {
        $task = $this->createTask();
        $note = $this->getNoteService()->saveNote([
            'content' => 'note content',
            'taskId' => $task['id'],
            'courseId' => $task['courseId'],
        ]);

        return $note;
    }

    /**
     * @return CourseNoteService
     */
    protected function getNoteService()
    {
        return $this->createService('Course:CourseNoteService');
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->createService('Course:CourseService');
    }

    /**
     * @return CourseSetService
     */
    protected function getCourseSetService()
    {
        return $this->createService('Course:CourseSetService');
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->createService('Task:TaskService');
    }
}
