import ko from 'knockout';
import $ from 'jquery';
import { sendRequest } from '../../../../../scripts/utils/common';




export default class BillingVM{
    constructor(state){
        this.state = state;

        this.shippingDetails = ko.observable(false);
        this.next = ko.observable(false);

        this.billingFirstName = ko.observable();
        this.billingLastName = ko.observable();
        this.billingCompanyName = ko.observable();
        this.billingEmail = ko.observable();
        this.billingPhone = ko.observable();
        this.billingCountry = ko.observable();
        this.billingAddress = ko.observable();
        this.billingZip = ko.observable();
        this.billingCity = ko.observable();
        this.billingNotes = ko.observable();

        // Shipping
        this.shippingNumber = ko.observable();
        this.shippingCountry = ko.observable();
        this.shippingAddress = ko.observable();
        this.shippingZip = ko.observable();
        this.shippingCity = ko.observable();
        this.shippingOrder = ko.observable();

        setTimeout(function(){

            $('.differBillingAddress').on('click', function(){

                let formElements = $('#differStepBilling').find('textarea, input');
                formElements.each(function(i, e){
                    let el = $(e);
                    el.removeClass('success');
                    el.removeClass('error');
                    el.val('');
                });

            });

        }, 0);



    }


    formValidation(data, event){

        let element = $(event.target),
            elementValue = element.val(),
            dataAttr = element.data('validation'),
            elements = element.parents('form').find('input, textarea');


        const regularList = {
            text: /^[0-9a-zA-Z]+$/,
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            number: /^\d+$/
        };


        if( regularList[dataAttr].test(elementValue) && elementValue.length >= 4 ){
            this.setSuccess(element);
        } else {
            this.setError(element);
        }
        this.checkAllElements();


    } // Form Validation

    checkAllElements(){

        const main = $('main'),
              forms = main.find('textarea, input[type="text"], input[type="email"], input[type="tel"]');

        let errors = 0;
        forms.each(function(i, e){
            let el = $(e);
            if(el.hasClass('success')){

            } else {
                errors++;
            }
        });
        if(errors === 0 ){
            this.next(true);
            return true;
        }
        this.next(false);
        return false;

    };


    setSuccess(element){
        let el = element;
        el.removeClass('error');
        el.addClass('success');
    }

    setError(element){

        let el = element;
        el.removeClass('success');
        el.addClass('error');

    }

    nextStep(event){

       if( this.checkAllElements() ) {
           let billingList = {
               billing : {
                   firstName: this.billingFirstName(),
                   lastName: this.billingLastName(),
                   companyName: this.billingCompanyName(),
                   email: this.billingEmail(),
                   phone: this.billingPhone(),
                   country: this.billingCountry(),
                   address: this.billingAddress(),
                   zip: this.billingZip(),
                   city: this.billingCity(),
                   notes: this.billingNotes()
               }
           };
           this.state.result['billing'] = billingList.billing;

           if(this.shippingDetails() === true){

               let shippingList = {
                   shipping : {
                       number: this.shippingNumber(),
                       country:this.shippingCountry(),
                       address:this.shippingAddress(),
                       zip:this.shippingZip(),
                       city:this.shippingCity(),
                       order:this.shippingOrder()
                   }
               };
               this.state.result['shipping'] = shippingList.shipping;

           }


            this.state.nextStep();
       }
    }


}