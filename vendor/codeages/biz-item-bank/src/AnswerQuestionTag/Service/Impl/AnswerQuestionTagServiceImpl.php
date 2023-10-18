<?php

namespace Codeages\Biz\ItemBank\AnswerQuestionTag\Service\Impl;

use Codeages\Biz\ItemBank\AnswerQuestionTag\Dao\AnswerQuestionTagDao;
use Codeages\Biz\ItemBank\AnswerQuestionTag\Service\AnswerQuestionTagService;
use Codeages\Biz\ItemBank\BaseService;

class AnswerQuestionTagServiceImpl  extends BaseService implements AnswerQuestionTagService
{
    public function createAnswerQuestionTag($answerRecordId, $questionIds)
    {
        return $this->getAnswerQuestionTagDao()->create([
            'answer_record_id' => $answerRecordId,
            'tag_question_ids' => $questionIds
        ]);
    }

    public function updateByAnswerRecordId($answerRecordId, $questionIds)
    {
        return $this->getAnswerQuestionTagDao()->update(['answer_record_id' => $answerRecordId], ['tag_question_ids' => $questionIds]);
    }

    public function deleteByAnswerRecordId($answerRecordId)
    {
        return $this->getAnswerQuestionTagDao()->batchDelete(['answer_record_id' => $answerRecordId]);
    }

    /**
     * @return AnswerQuestionTagDao
     */
    protected function getAnswerQuestionTagDao()
    {
        return $this->biz->dao('ItemBank:AnswerQuestionTag:AnswerQuestionTagDao');
    }
}