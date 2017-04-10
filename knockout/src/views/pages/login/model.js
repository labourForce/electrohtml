import ko from 'knockout';
import $ from 'jquery';



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

export default class HomepageVM{
    constructor(state){
		this.state = state;

		this.loginModel = ko.observable({
		    username: ko.observable(),
            password: ko.observable(),
            remember: ko.observable(false)
        });
		this.accountModel = ko.observable({
		    username: ko.observable()
        });


    }

    formValidate(event){
        let form = $(event.target),
            elements = form.find('input[required], select[required]'),
            errorWrapper = $('.form__validation-state'),
            errorText = errorWrapper.find('span'),
            errorType = errorWrapper.find('strong'),
            text = /^[a-z0-9]+$/i;


        elements.removeClass('error');
        elements.removeClass('success');

        errorWrapper.removeClass('error');
        errorWrapper.removeClass('success');

        elements.each(function(index, el){
            let type = $(el).attr('type'),
                element = $(el),
                val = $(el).val();

            if(type === 'text' || type === 'password'){

                if ( val.length > 0 && val != undefined && val != null){
                    element.addClass('success');
                } else {
                    element.addClass('error');
                }
            }
        });

        if(this.setErrorMessage(elements)){
            errorWrapper.addClass('error');
            errorType.text('Error: ');
            errorText.text('Not valid.');
        } else {
            errorWrapper.addClass('success');
            errorType.text('Success. ');
            errorText.text('');
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

        this.formValidate(event);


        let jsonData = ko.toJSON(signInData);


    }

    accountStepValidation(data, event){
        var element = $(event.target);
       this.stepValidate(element);
    }

    stepValidate(element){
        var el = element,
            parentEl = el.parent().parent().parent(),
            dataValidate = el.data('validate'),
            innerText = el.val();

        if(dataValidate === 'email'){
           let emailValidatePattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(emailValidatePattern.test(innerText)) {
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

            let newBlock = $('.form__steps').find('[data-step="3"]');

            newBlock.addClass('current');

            $('.form__step-navigation-prev').removeClass('hidden-b');
            $('.form__step-navigation-prev').addClass('visible-b');

            $('.form__step-navigation-next').addClass('hidden-b');
            $('.form__step-navigation-next').removeClass('visible-b');

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
        }
    }
    confirmPassword(data, event){
        let original = $('[data-validate="password"]').val(),
            parentEl = $(event.target).parent().parent().parent(),
            confirmElementValue = $(event.target).val();

       if (original === confirmElementValue) {
           parentEl.removeClass('error');
           parentEl.addClass('success');


           $('[data-validate="registration-button"]').removeClass('disabled');
           $('[data-validate="registration-button"]').attr('disabled', false);
       } else {
           parentEl.removeClass('success');
           parentEl.addClass('error');

           $('[data-validate="registration-button"]').addClass('disabled');
           $('[data-validate="registration-button"]').attr('disabled', true);
       }

    }





}