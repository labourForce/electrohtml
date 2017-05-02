import ko from 'knockout';
import $ from 'jquery';
import { setAuthToken } from '../../../scripts/utils/common';
import { sendRequest } from '../../../scripts/utils/common';



setTimeout(function(){

    $('.brand-carousel__wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        nextArrow: '<i class="fa fa-chevron-right brand-carousel__rightButton"></i>',
        prevArrow: '<i class="fa fa-chevron-left brand-carousel__leftButton"></i>',
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}, 0);

export default class LoginVM{
    constructor(state){

        var self = this;

		this.state = state;

        this.messageRegistrationSuccess = ko.observable(false);

		this.loginModel = ko.observable({
		    username: ko.observable(),
            password: ko.observable(),
            remember: ko.observable(false)
        });

		this.accountModel = ko.observable({
		    username: ko.observable(),
		    password: ko.observable()
        });


    }

    confirmPassword(data, event){

         let original = $('[data-validate="password"]').val(),
             parentEl = $(event.target).parent().parent().parent(),
             confirmElementValue = $(event.target).val();

        if (original === confirmElementValue) {
            parentEl.removeClass('error');
            parentEl.addClass('success');


            $('.form__step-navigation-register').removeClass('disabled');
            $('.form__step-navigation-register').attr('disabled', false);


        } else {
            parentEl.removeClass('success');
            parentEl.addClass('error');

            $('.form__step-navigation-register').addClass('disabled');
            $('.form__step-navigation-register').attr('disabled', true);
        }

    }


    formValidate(event){
        let form = $(event.target),
            elements = form.find('input[required], select[required]'),
            mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            password =  /^[a-z0-9]+.{6,}$/i;



        elements.removeClass('error');
        elements.removeClass('success');

        elements.each(function(index, el){
            let type = $(el).attr('type'),
                element = $(el),
                val = $(el).val();

            if(type === "email"){

                if(mail.test(val)){
                    element.addClass('success');
                } else {
                    element.addClass('error');
                }

            }
            if(type === "password"){
                if(password.test(val)){
                    element.addClass('success');
                } else {
                    element.addClass('error');
                }
            }



        });

        if (this.setErrorMessage(elements)){
            errorWrapper.addClass('error');
            errorType.text('Error: ');
            errorText.text('Not Valid Fields');
            return false;


        } else {

            elements.each(function(index, el){
                let element = $(el);
                element.removeClass('success');
                element.val('');
            });
            return true;
        }

    }

    setErrorMessage(elements) {
        let errorCounter = 0;
        if(elements.length > 0){
            elements.each(function(i, el){
               if( $(el).hasClass('error') ){
                   errorCounter++;
               }
            });
        }
        if(errorCounter){
            return true;
        }
        return false;
    }

    handleSubmit(data, event){
        event.preventDefault();

        let signInData = {
            username: this.loginModel().username(),
            password: this.loginModel().password(),
            remember: this.loginModel().remember()
        };

        let jsonData = ko.toJSON(signInData);

       if( this.formValidate(event) ) {
           sendRequest({
               url: '/rest/account/signIn',
               contentType: 'application/json',
               type: 'post',
               data: jsonData ,
               success: this.getData.bind(this)
           }, true);
       }

    }
    getData(response){
        console.log(response);

        let data = response,
            errorWrapper = $('.form__validation-state'),
            errorText = errorWrapper.find('span'),
            errorType = errorWrapper.find('strong');

        if(!data.error){
            this.state.header.data.isLogin(true);
            this.state.header.data.userName(data.user.username);
            this.state.header.data.toPage('');
            console.log(response.token);
            setAuthToken(response.token);
            window.location.pathname = '';

        } else {

            errorWrapper.removeClass('success');
            errorWrapper.addClass('error');
            errorType.text('Error.');
        }

    }





    setHeaderInfo(){

    }

    accountStepValidation(data, event){
        var element = $(event.target);
       this.stepValidate(element);
    }


    stepValidate(element){
        var el = element,
            parentEl = el.parent().parent().parent(),
            dataValidate = el.data('validate'),
            innerText = el.val(),
            dataJSON = ko.toJSON({
                username: innerText
            });

        if(dataValidate === 'email'){
           let emailValidatePattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if(emailValidatePattern.test(innerText)) {

                $.ajax({
                    url: '/rest/account/checkEmail',
                    contentType: 'application/json',
                    type: 'post',
                    data: dataJSON ,
                    success: function(response){
                        console.log(response);
                        let data = response;
                        if(!data.error){

                            parentEl.removeClass('error');
                            parentEl.addClass('success');

                            $('.form__step-navigation-next').removeClass('hidden-b');
                            $('.form__step-navigation-next').addClass('visible-b');

                        } else {
                                parentEl.removeClass('success');
                                parentEl.addClass('error');

                                $('.form__step-navigation-next').addClass('hidden-b');
                                $('.form__step-navigation-next').removeClass('visible-b');

                        }
                    }
                });

            }

        }
        if(dataValidate === 'password'){
            let passwordValidatePattern = /^[a-z0-9]+.{6,}$/i;


            if(passwordValidatePattern.test(innerText)) {

                parentEl.removeClass('error');
                parentEl.addClass('success');

                $('.form__step-navigation-next').removeClass('hidden-b');
                $('.form__step-navigation-next').addClass('visible-b');
            } else {
                parentEl.removeClass('success');
                parentEl.addClass('error');

                $('.form__step-navigation-next').addClass('hidden-b');
                $('.form__step-navigation-next').removeClass('visible-b');
            }
        }

    }
    nextStep(element){
        let block = $('.form__steps').find('.current'),
            currentNumber = $('.account__sign-steps-current'),
            blockData = block.data('step');

           if ( blockData == 1 && block.hasClass('success') ){

               block.removeClass('current');

              let newBlock = $('.form__steps').find('[data-step="2"]');

               newBlock.addClass('current');

               $('.form__step-navigation-prev').removeClass('hidden-b');
               $('.form__step-navigation-prev').addClass('visible-b');

               if( !newBlock.hasClass('success') ){
                   $('.form__step-navigation-next').addClass('hidden-b');
                   $('.form__step-navigation-next').removeClass('visible-b');
               }

               currentNumber.text('2');

           }

        if ( blockData == 2 && block.hasClass('success') ){

            block.removeClass('current');

            let newBlock = $('.form__steps').find('[data-step="3"]'),
                newBlockInput = newBlock.find('input');

            if(newBlockInput.val() != ''){

                if(this.accountModel().password() != newBlockInput.val()){
                    newBlock.removeClass('success');
                    newBlock.addClass('error');
                }
            }
            newBlock.addClass('current');



            $('.form__step-navigation-prev').removeClass('hidden-b');
            $('.form__step-navigation-prev').addClass('visible-b');

            $('.form__step-navigation-next').addClass('hidden-b');
            $('.form__step-navigation-next').removeClass('visible-b');

            $('.form__step-navigation-register').removeClass('hidden-b');

            currentNumber.text('3');

        }



    }
    prevStep(){
        let block = $('.form__steps').find('.current'),
            currentNumber = $('.account__sign-steps-current'),
            blockData = block.data('step');

        if(blockData == 2) {
            let newBlock = $('.form__steps').find('[data-step="1"]');
            block.removeClass('current');
            newBlock.addClass('current');

            $('.form__step-navigation-prev').addClass('hidden-b');
            $('.form__step-navigation-prev').removeClass('visible-b');

            $('.form__step-navigation-next').addClass('visible-b');
            $('.form__step-navigation-next').removeClass('hidden-b');

            currentNumber.text('1');
        }

        if(blockData == 3) {

            let newBlock = $('.form__steps').find('[data-step="2"]');
            block.removeClass('current');
            newBlock.addClass('current');

            $('.form__step-navigation-next').addClass('visible-b');
            $('.form__step-navigation-next').removeClass('hidden-b');

            currentNumber.text('2');

            $('.form__step-navigation-register').addClass('hidden-b');
        }
    }

    submitNewAccount(data, event){


        let dataJSON = data.accountModel(),
            newJSON = ko.toJSON({
                username: dataJSON.username(),
                password: dataJSON.password()
            });



        $.ajax({
            url: '/rest/account/register',
            contentType: 'application/json',
            type: 'post',
            data: newJSON ,
            success: function(response){
                console.log(response);
                let block = $('.form__steps').find('[data-step]'),
                    first = $('.form__steps').find('[data-step="1"]'),
                    currentNumber = $('.account__sign-steps-current'),
                    errorBlock = $('.form__step-server__response'),
                    text = block.find('input');
                block.removeClass('success');
                block.removeClass('current');
                first.addClass('current');
                text.val('');

                $('.form__step-navigation-register').removeClass('visible-b');
                $('.form__step-navigation-register').addClass('hidden-b');

                $('.form__step-navigation-prev').addClass('hidden-b');
                $('.form__step-navigation-prev').removeClass('visible-b');

                $('.form__step-navigation-next').addClass('hidden-b');
                $('.form__step-navigation-next').removeClass('visible-b');

                currentNumber.text('1');

                errorBlock.addClass('success');
                errorBlock.find('.form__step-server__response-text').text('Success');
                errorBlock.fadeIn();

                setTimeout(function(){
                    errorBlock.fadeOut();

                },4000);



            }
        });



    }







}