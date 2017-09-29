define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'custompayment',
                component: 'Pipwave_Payment/js/view/custompayment/method-renderer/pipwavepayment'
            }
        );
        return Component.extend({});
    }
);