<?php

namespace Codeages\Biz\ItemBank\Item\Dao;

use Codeages\Biz\Framework\Dao\AdvancedDaoInterface;

interface ItemDao extends AdvancedDaoInterface
{
    public function findByIds($ids);

    public function findByCategoryIds($categoryIds);

    public function getItemCountGroupByTypes($conditions);

    public function countItemQuestionNumByBankId($bankId);

    public function countItemQuestionNumByCategoryId($categoryId);

    public function findRepeatMaterialHashByBankId($bankId);

    public function findRepeatMaterial($bankId, $materialHashes);
}
