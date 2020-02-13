<?php

namespace Biz\DestroyAccount\Service\Impl;

use Biz\BaseService;
use AppBundle\Common\ArrayToolkit;
use Biz\Common\CommonException;
use Biz\DestroyAccount\Dao\DestroyAccountRecordDao;
use Biz\DestroyAccount\DestroyAccountException;
use Biz\DestroyAccount\Service\DestroyAccountRecordService;

class DestroyAccountRecordServiceImpl extends BaseService implements DestroyAccountRecordService
{
    public function getDestroyAccountRecord($id)
    {
        return $this->getDestroyAccountRecordDao()->get($id);
    }

    public function updateDestroyAccountRecord($id, $fields)
    {
        $fields = ArrayToolkit::parts($fields, array('status'));

        return $this->getDestroyAccountRecordDao()->update($id, $fields);
    }

    public function createDestroyAccountRecord($fields)
    {
        if (!ArrayToolkit::requireds($fields, array('userId', 'nickname', 'reason'))) {
            $this->createNewException(CommonException::ERROR_PARAMETER_MISSING());
        }

        if (mb_strlen($fields['reason'], 'UTF-8') > 200) {
            $this->createNewException(DestroyAccountException::REASON_TOO_LONG());
        }

        $fields = ArrayToolkit::parts($fields, array('userId', 'nickname', 'reason'));

        return $this->getDestroyAccountRecordDao()->create($fields);
    }

    public function deleteDestroyAccountRecord($id)
    {
        return $this->getDestroyAccountRecordDao()->delete($id);
    }

    public function cancelDestroyAccountRecord()
    {
        $user = $this->getCurrentUser();
        $lastAuditRecord = $this->getLastAuditDestroyAccountRecordByUserId($user['id']);
        if (empty($lastAuditRecord)) {
            $this->createNewException(DestroyAccountException::NOT_FOUND_RECORD());
        }

        return $this->updateDestroyAccountRecord($lastAuditRecord['id'], array('status' => 'cancel'));
    }

    public function getLastDestroyAccountRecordByUserId($userId)
    {
        return $this->getDestroyAccountRecordDao()->getLastDestroyAccountRecordByUserId($userId);
    }

    public function getLastAuditDestroyAccountRecordByUserId($userId)
    {
        return $this->getDestroyAccountRecordDao()->getLastAuditDestroyAccountRecordByUserId($userId);
    }

    public function searchDestroyAccountRecords($conditions, $orderBy, $start, $limit)
    {
        $records = $this->getDestroyAccountRecordDao()->search($conditions, $orderBy, $start, $limit);

        return $records;
    }

    public function countDestroyAccountRecords($conditions)
    {
        return $this->getDestroyAccountRecordDao()->count($conditions);
    }

    /**
     * @return DestroyAccountRecordDao
     */
    protected function getDestroyAccountRecordDao()
    {
        return $this->createDao('DestroyAccount:DestroyAccountRecordDao');
    }
}
