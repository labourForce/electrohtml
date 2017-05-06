import ko from 'knockout';
import $ from 'jquery';
import State from '../../scripts/utils/state';
import {Router} from '../../scripts/utils/router';
import SiteModel from '../../scripts/models/site';
import ProfileModel from '../../scripts/models/profile';
import OrderModel from '../../scripts/models/order';
import { sendRequest } from '../../scripts/utils/common';
import '../layouts/breadcrumbs';
import '../layouts/category-hierarchy-aside';

export default class MainVM {
    constructor(){

        this.header = new State('header', this);

        this.currentState = ko.observable(null);
        this.router = new Router(this);
        this.router.start();

        this.footer = new State('footer', this);
        this.getUser();
    }

    getUser () {

        let result = ko.toJSON(window.localStorage.getItem('auth_token'));
        sendRequest({
            url: '/rest/account/info',
            contentType: 'application/json',
            type: 'GET',
            data: result ,
            success: function(res){
                let data = res;
                console.log(data);
                this.header.data.isLogin(true);
                this.header.data.userName(data.username);
                this.header.data.toPage('');
            }.bind(this)
        }, false);
    }
}