import sign from '../../views/pages/checkout/steps/sign/index';
import billing from '../../views/pages/checkout/steps/billing/index';
import payment from '../../views/pages/checkout/steps/payment/index';
import more from '../../views/pages/checkout/steps/more/index';

const stepList = {
    sign: sign,
    billing: billing,
    payment: payment,
    more: more
};


export default class checkoutStep {
    constructor(name, state){
        try {
            this.data = new stepList[name].model(state);
            this.html = stepList[name].template;
        }catch(e){
            console.error(name, e);
        }
    }
}
