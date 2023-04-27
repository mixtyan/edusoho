<?php

namespace ApiBundle\Api\Resource\UnifiedPayment;

use ApiBundle\Api\Annotation\ApiConf;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\Exception\InvalidArgumentException;
use AppBundle\Common\SettingToolkit;
use Biz\Common\CommonException;
use Biz\UnifiedPayment\Service\UnifiedPaymentService;
use Firebase\JWT\JWT;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class UnifiedPayment extends AbstractResource
{
    /**
     * @ApiConf(isRequiredAuth=false)
     */
    public function add(ApiRequest $request)
    {
        $params = $request->request->all();
        if (empty($params['token'])) {
            throw CommonException::ERROR_PARAMETER_MISSING();
        }
        $storage = $this->getSettingService()->get('storage', []);
        if (empty($storage['cloud_secret_key'])) {
            throw new InvalidArgumentException('请配置授权码');
        }

        $payload = (array) JWT::decode($params['token'], $storage['cloud_secret_key'], ['HS256']);
        if (empty($payload)) {
            throw new InvalidArgumentException('令牌内容错误');
        }

        if (empty($payload['tradeSn'])) {
            throw new InvalidArgumentException('令牌内容订单信息缺失：'.json_encode($payload));
        }

        $trade = $this->getUnifiedPaymentService()->getTradeByTradeSn($payload['tradeSn']);
        if (empty($trade)) {
            throw new NotFoundHttpException(sprintf('订单#%s未找到', $payload['tradeSn']));
        }
        if (!$this->getUnifiedPaymentService()->isEnabledPlatform($trade['platform'])) {
            return ['success' => false, 'message' => '支付方式未配置，请联系机构处理。'];
        }
        if ('paid' === $trade['status']) {
            return ['success' => false, 'message' => '已支付'];
        }
        $config = $this->getUnifiedPaymentService()->createPlatformTradeByTradeSn($payload['tradeSn']);

        return [
            'config' => $config,
            'orderSn' => $trade['orderSn'],
            'amount' => $trade['amount'],
            'siteName' => SettingToolkit::getSetting('site.name'),
            'redirectUrl' => $trade['redirectUrl'],
        ];
    }

    /**
     * @return UnifiedPaymentService
     */
    protected function getUnifiedPaymentService()
    {
        return $this->service('UnifiedPayment:UnifiedPaymentService');
    }
}
