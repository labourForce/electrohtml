import ko from 'knockout';
import $ from 'jquery';
import { sendRequest } from '../../../../../scripts/utils/common';




export default class paymentVM{
    constructor(state){
        this.state = state;

        this.name = ko.observable();
        this.cartNumber = ko.observable();
        this.cvv = ko.observable();
        this.date = {
            month: ko.observable(),
            year: ko.observable()
        };


    }

    pay(){
        let $elements = $('#checkoutPay').find('input, textarea'),
            errors = 0;

        const regularList = {
            text: /^[0-9a-zA-Z]+$/,
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            number: /^\d+$/
        };

        $elements.each(function(i, e){
            let el = $(e);
            let datAttr =el.data('validation'),
                val = el.val();

            if(datAttr === 'text'){

                if( regularList['text'].test(val) && val.length >= 6 ){

                    el.removeClass('error');
                    el.addClass('success');

                } else {
                    el.removeClass('success');
                    el.addClass('error');
                    errors++;
                }

            }

            if( datAttr === 'number' ){

                if( regularList['number'].test(val) && val.length >= 6 ){

                    el.removeClass('error');
                    el.addClass('success');

                } else {
                    el.removeClass('success');
                    el.addClass('error');
                    errors++;
                }
            }

            if( datAttr === 'cvv' ){

                if(val.length === 3){
                    el.removeClass('error');
                    el.addClass('success');
                } else {
                    el.removeClass('success');
                    el.addClass('error');
                    errors++;
                }


            }
            if( datAttr === 'mm' ){

                if(val.length === 2){
                    el.removeClass('error');
                    el.addClass('success');
                } else {
                    el.removeClass('success');
                    el.addClass('error');
                    errors++;
                }

            }
            if( datAttr === 'yyyy' ){

                if(val.length === 4){
                    el.removeClass('error');
                    el.addClass('success');
                } else {
                    el.removeClass('success');
                    el.addClass('error');
                    errors++;
                }

            }
        });


        if( errors === 0){
            let request = {
                name: this.name(),
                cartNumber: this.cartNumber(),
                cvv: this.cvv(),
                date: {
                    month: this.date.month(),
                    year: this.date.year()
                }
            };

            this.state.result['pay'] = request;
            let result = ko.toJSON(this.state.result);
            console.log(result);
            $.ajax({
                url: '/rest/checkout/billing',
                contentType: 'application/json',
                type: 'post',
                data: result ,
                success: function(response){
                    console.log(response);
                }
            });
            this.state.nextStep();

        } else {
            console.log('Error');
        }



    }

}