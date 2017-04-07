import ko from 'knockout';
import $ from 'jquery';
import 'flexslider';
import Modernizr from 'modernizr';
import 'slick';

ko.bindingHandlers.initHomepageSlider = {
    update : function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        setTimeout(function() {
            var touchEnabled = Modernizr.touch, viewport = $(window).innerWidth();
            $('.flexslider').each(function() {
                var $el = $(this), controlNavStr = $el.data('control-nav'), controlNav = (typeof (controlNavStr) === 'undefined') ? true : controlNavStr;
                $el.flexslider({
                    animation : 'slide',
                    controlNav : controlNav,
                    directionNav : !!$el.data('direction-nav'),
                    pauseOnHover : !touchEnabled,
                    pauseOnAction : touchEnabled,
                    useCSS : !touchEnabled,
                    animationSpeed : $el.data('animationspeed'),
                    slideshowSpeed : $el.data('slideshowspeed')
                });
                if (!!$el.data('image-hover') && controlNav && !touchEnabled) {
                    $el.addClass('image-hover');
                    $el.on('mouseenter', '.flex-control-nav a', function() {
                        var $hovered = $(this), index, slideImage;
                        if ($hovered.find('img').length) {
                            return;
                        }
                        index = $hovered.parent('li').index() + 1;
                        slideImage = $el.find('.slides li').eq(index).find('img').first();
                        $hovered.addClass('hover-preview').prepend(slideImage.clone());
                    });
                }
            });
        }, 0);
    }
};
ko.bindingHandlers.initSkickSlider = {
    update : function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        setTimeout(function() {
            var slickId = $(element).data('slick-id');
            var $this = $("#" + slickId);
            $this.slick();
        }, 0);
    }
};