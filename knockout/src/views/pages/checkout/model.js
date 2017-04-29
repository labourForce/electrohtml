import ko from 'knockout';
import $ from 'jquery';
import { sendRequest } from '../../../scripts/utils/common';
import stepCheckout from '../../../scripts/utils/checkoutStepState';





export default class CheckoutVM{

    constructor(state){

        this.state = state;

        this.steps = [
            new stepCheckout('sign', this),
            new stepCheckout('billing', this),
            new stepCheckout('payment', this),
            new stepCheckout('more', this),
        ];


        // Current Step
        this.currentStep = ko.observable(0);

        this.nextStep = () => {
            this.currentStep(this.currentStep() + 1);
        };

        this.prevStep = () => {
            this.currentStep(this.currentStep() - 1);
        };

        this.result = {};
        this.json = ko.toJSON(this.result);



    }



}