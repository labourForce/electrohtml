import ko from 'knockout';
import $ from 'jquery';

setTimeout(function(){

    // $('.brand-carousel__wrapper').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     nextArrow: '<i class="fa fa-chevron-right brand-carousel__rightButton"></i>',
    //     prevArrow: '<i class="fa fa-chevron-left brand-carousel__leftButton"></i>',
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //     ]
    // });

    //BestsellersMain
    $('#BestsellersMain').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-chevron-right title-carousel__rightButton"></i>',
        prevArrow: '<i class="fa fa-chevron-left title-carousel__leftButton"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
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

    // Big offer

    $('.offer-big__item').on('init', function(event, slick){

        var container = $('.container').width() + 60,
            elementSingleHeight = $('.offer-big__item-double').outerHeight(),
            elementSingle = $('.offer-big__item-double').width(container/4 - 8),
            elementBig = $('.offer-big__item-single').width(container/2 - 8);
        console.log(container);


    });

    $('.offer-big__item').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        // the magic
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.offer-big__item').on('breakpoint', function(event, slick, breakpoint){

        if ( breakpoint == '1200') {
            var container = $('.container').width() + 60,
                elementSingleHeight = $('.offer-big__item-double').outerHeight(),
                elementSingle = $('.offer-big__item-double').width(container/4 - 8),
                elementBig = $('.offer-big__item-single').width(container/2 - 8);
            console.log(1200);
        }
        if ( breakpoint == '960') {
            var container = $('.container').width() + 60,
                elementSingleHeight = $('.offer-big__item-double').outerHeight(),
                elementSingle = $('.offer-big__item-double').width(container/4 - 8),
                elementBig = $('.offer-big__item-single').width(container/2 - 8);
        }

        if ( breakpoint == '768') {
            var container = $('.container').width() + 60,
                elementSingleHeight = $('.offer-big__item-double').outerHeight(),
                elementSingle = $('.offer-big__item-double').width(container),
                elementBig = $('.offer-big__item-single').width(container);
        }
    });

    //BestsellersMain
    $('.bestsellersDouble').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    row: 1,
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

    $('.jumbo-carousel').slick({
        dots: true,
        infinite: true,
        arrows: false

    });

}, 0);

export default class HomepageVM{
    constructor(state){
		this.state = state;


    }





}