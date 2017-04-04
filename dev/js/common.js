$(function() {



    // Single Product Gallery
    $('.single-product__carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-product__gallery'
    });
    $('.single-product__gallery').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.single-product__carousel',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    // Select Shop Filter
    $('.shop-bar__filter select').selectpicker({
        style: 'shop-filter__select',
        width: 'fit'

    });

    // Select Header
    $('#changeMoneyHeader').selectpicker({
        style: 'header-changeMoney__button',
        size: 4,
        width: 'fit',
        container: '.header-changeMoney'

    });

    // Select Header
    $('#header-search').selectpicker({
        style: 'header-search__selectBtn',
        width: 'fit',
        container: '.header-search__selectButton'

    });

    // Brand Carousel

    $('.brand-carousel__wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        nextArrow: '<i class="fa fa-chevron-right brand-carousel__rightButton"></i>',
        prevArrow: '<i class="fa fa-chevron-left brand-carousel__leftButton"></i>',
        slidesToShow: 5,
        slidesToScroll: 1,
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

	// Jumbo
	$('.jumbo-carousel').slick({
        dots: true,
        infinite: true,
		arrows: false

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


	// Slider Jquery UI
    $( ".js-filter-block" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ]
    });

	// Latest Product
	$('#LatestProductCarousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        nextArrow: '<i class="fa fa-chevron-right title-carousel__rightButton"></i>',
        prevArrow: '<i class="fa fa-chevron-left title-carousel__leftButton"></i>'
    });

    //#PeopleBuyingCategory
    $('#PeopleBuyingCategory').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-chevron-right title-carousel__rightButton"></i>',
        prevArrow: '<i class="fa fa-chevron-left title-carousel__leftButton"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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

	//Bestsellers
    $('#Bestsellers').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-chevron-right title-carousel__rightButton"></i>',
        prevArrow: '<i class="fa fa-chevron-left title-carousel__leftButton"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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

    //Item slider lrg
    $('.item-slider-lrg-2row').slick({
        dots: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
    });
    //Item slider small
    $('.titled-layout__body').slick({
        dots: true,
        arrows: false,
        rows: 2,
        slidesPerRow: 3
    });

	// Toggle Menu
    $('.header__menuList-item').hide();
	$('.toggle-menu-bar').on('click', function(){
		$('.header__menuList-item').toggle();
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

// Shop Bar Grid State Change
$('.shop-bar__grid-change').on('click', function(){

    var button = $(this),
        buttonState = $(this).data('change-grid'),
        elements = $("[data-shop-grid]").find('.shop-item'),
        descr = elements.find(".shop-item__descr"),
        code = elements.find('.shop-item__code'),
        title = elements.find('.shop-item__header');


    if (button.hasClass('active-button')){
        return false;
    }

    $('.shop-bar__grid-change').removeClass('active-button');
    button.addClass('active-button');

    if(elements.length > 0){

        if(buttonState === 'grid view'){
            elements.removeClass('small--column');
            elements.removeClass('shop-item-column');
            code.hide(0);
            descr.hide(0);
        }

        if(buttonState === 'grid view extended'){
            elements.removeClass('small--column');
            elements.removeClass('shop-item-column');
            code.show(0);
            descr.show(0);
        }

        if(buttonState === 'list view'){
            elements.removeClass('small--column');
            elements.addClass('shop-item-column');
            descr.show(0);
            code.hide(0);
        }
        if(buttonState === 'list view small'){
            elements.addClass('shop-item-column').addClass('small--column');
            descr.show(0);
            code.hide(0);
        }

    }





});

