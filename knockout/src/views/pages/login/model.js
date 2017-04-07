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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
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

    formValidate(group){

    }

    handleSubmit(data, event){
        event.preventDefault();

        let signInData = {
            username: this.loginModel().username(),
            password: this.loginModel().password(),
            remember: this.loginModel().remember()
        };

        console.dir(event);

        let jsonData = ko.toJSON(signInData);


    }

    accountSubmit(data, event){
        event.preventDefault();

        let accountData = {
            username: this.accountModel().username()
        };

        let jsonData = ko.toJSON(accountData);

    }




}