<?php

namespace Tests\Unit\AppBundle\Component\Export\Classroom;

use AppBundle\Component\Export\Classroom\ClassroomStatisticsCourseLearnDetailExporter;
use Biz\BaseTestCase;

class ClassroomStatisticsCourseLearnDetailExporterTest extends BaseTestCase
{
    public function testGetTitles()
    {
        self::getContainer()->set('biz', $this->getBiz());
        $exporter = new ClassroomStatisticsCourseLearnDetailExporter(self::getContainer(), []);
        self::assertEquals([
            '用户名',
            '学习情况',
            '学习进度',
            '完成时间',
        ], $exporter->getTitles());
    }

    public function testGetContent()
    {
    }
}
