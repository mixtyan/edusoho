<?php

namespace AppBundle\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class DeleteNotExitItemBankExerciseCommand extends BaseCommand
{
    protected function configure()
    {
        $this->setName('delete:noExit-itemBankExercise');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        //在升级第二天的凌晨2点执行
        $execTime = strtotime(date('Y-m-d', time())) + 86400 + 3600 * 2;
        $jobFields = [
            'name' => 'DeleteNotExistItemBankExerciseJob',
            'expression' => $execTime,
            'class' => 'Biz\ItemBankExercise\Job\DeleteNotExistItemBankExerciseJob',
            'misfire_policy' => 'executing',
            'misfire_threshold' => 0,
            'args' => [],
        ];

        $this->getSchedulerService()->register($jobFields);
        $output->writeln('<info>注册定时任务DeleteNotExistItemBankExerciseJob成功</info>');
    }

    /**
     * @return \Codeages\Biz\Framework\Scheduler\Service\SchedulerService
     */
    private function getSchedulerService()
    {
        return $this->createService('Scheduler:SchedulerService');
    }
}
