<?php

namespace Biz\Visualization\Service;

interface ActivityLearnDataService
{
    public function sumCourseSetLearnTime($courseSetIds);

    public function findActivityLearnDailyByCourseSetIds($courseSetIds);

    public function sumLearnedTimeGroupByTaskIds(array $taskIds);

    public function searchCoursePlanLearnDailyData($conditions, $orderBys, $start, $limit, $columns = array());

    public function countCoursePlanLearnDailyData($conditions);

    public function searchActivityLearnDailyData($conditions, $orderBys, $start, $limit, $columns = array());

    public function countActivityLearnDailyData($conditions);

    public function searchUserLearnDailyData($conditions, $orderBys, $start, $limit, $columns = array());

    public function countUserLearnDailyData($conditions);
}
