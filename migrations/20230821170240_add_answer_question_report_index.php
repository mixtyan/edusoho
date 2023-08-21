<?php

use Phpmig\Migration\Migration;

class AddAnswerQuestionReportIndex extends Migration
{
    /**
     * Do the migration
     */
    public function up()
    {
        $connection = $this->getContainer()['db'];
        if (!$this->isIndexExist('biz_answer_question_report', 'item_id')) {
            $connection->exec('ALTER TABLE `biz_answer_question_report` ADD INDEX `item_id` (`item_id`);');
        }
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $connection = $this->getContainer()['db'];
        if ($this->isIndexExist('biz_answer_question_report', 'item_id')) {
            $connection->exec('ALTER TABLE `biz_answer_question_report` DROP INDEX `item_id`;');
        }
    }

    protected function isIndexExist($table, $indexName)
    {
        $sql = "show index from `{$table}`  where Key_name='{$indexName}';";
        $result = $this->getContainer()['db']->fetchAssoc($sql);

        return empty($result) ? false : true;
    }
}
