<?php

namespace Biz\CloudPlatform;

use Biz\System\Service\SettingService;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Topxia\Service\Common\ServiceKernel;
use Codeages\RestApiClient\RestApiClient;
use Codeages\RestApiClient\Specification\JsonHmacSpecification;
use Codeages\Biz\Framework\Util\ReadableJsonFormatter;

class IMAPIFactory
{
    private static $client;

    private static $logger;

    public static function create()
    {
        if (!empty(self::$client)) {
            return self::$client;
        }

        /**
         * @var SettingService
         */
        $setting = ServiceKernel::instance()->getBiz()->service('System:SettingService');

        $storage = $setting->get('storage', array());
        $developer = $setting->get('developer', array());

        $config = array(
            'accessKey' => empty($storage['cloud_access_key']) ? '' : $storage['cloud_access_key'],
            'secretKey' => empty($storage['cloud_secret_key']) ? '' : $storage['cloud_secret_key'],
            'endpoint' => empty($storage['cloud_api_im_server']) ? 'http://imapi.edusoho.net/v1/' : $storage['cloud_api_im_server'],
        );

        $logger = self::getLogger();
        $spec = new JsonHmacSpecification('sha1');
        $client = new RestApiClient($config, $spec, null, $logger, empty($developer['debug']) ? false : true);

        self::$client = $client;

        return $client;
    }

    public static function getLogger()
    {
        if (!empty(self::$logger)) {
            return self::$logger;
        }

        $logger = new Logger('IM');
        $stream = new StreamHandler(ServiceKernel::instance()->getParameter('kernel.logs_dir').'/cloud-api.log', Logger::DEBUG);
        $formatter = new ReadableJsonFormatter();
        $stream->setFormatter($formatter);
        $logger->pushHandler($stream);
        if (isset($_SERVER['TRACE_ID']) && $_SERVER['TRACE_ID']) {
            $logger->pushProcessor(function ($record) {
                $record['extra']['trace_id'] = $_SERVER['TRACE_ID'];

                return $record;
            });
        }

        self::$logger = $logger;

        return $logger;
    }
}
