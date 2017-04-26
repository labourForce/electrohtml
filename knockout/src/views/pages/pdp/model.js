import ko from 'knockout';
import $ from 'jquery';
import slick from 'slick';

export default class PDPVM {

    constructor () {
        $(() => {
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
        });

    }

}