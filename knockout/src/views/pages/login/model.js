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

    accountSubmit(data, event){
        event.preventDefault();

        let accountData = {
            username: this.accountModel().username()
        };

        this.formValidate(event);

        let jsonData = ko.toJSON(accountData);

    }




}