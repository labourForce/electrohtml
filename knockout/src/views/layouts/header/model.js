import $ from 'jquery';
import 'bootstrap';
import ko from 'knockout';
import 'selectpicker';


export default class HeaderVM{
    constructor(app){
        this.app = app;

        this.searchString = ko.observable();
        this.searchCategory = ko.observable('');
        // this.contentItem = ko.observable();
        this.isLogin = ko.observable(false);
        this.userName = ko.observable('');
        this.toPage = ko.observable('login');

        console.log(this.state);
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

    doSearch() {
        this.app.router.notify('search', {
            query: [
                { key: 'searchTerm', value: this.searchString() },
                { key: 'category', value: this.searchCategory() },

            ]
        });
    }

    logout(){

        this.isLogin(false);
        this.userName('');
        this.toPage('login');
        window.localStorage.removeItem('auth_token');
    }


}