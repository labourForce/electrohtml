import $ from 'jquery';
import 'bootstrap';
import ko from 'knockout';
import 'selectpicker';


export default class HeaderVM{
    constructor(state){
        this.state = state;
        // this.contentItem = ko.observable();

        setTimeout(function(){



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

            // Toggle Menu
            $('.header__menuList-item').hide();
            $('.toggle-menu-bar').on('click', function(){
                $('.header__menuList-item').toggle();
            });

        }, 0);
    }
}