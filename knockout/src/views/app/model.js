import ko from 'knockout';
import $ from 'jquery';
import State from '../../scripts/utils/state';
import {Router} from '../../scripts/utils/router';
import SiteModel from '../../scripts/models/site';
import ProfileModel from '../../scripts/models/profile';
import OrderModel from '../../scripts/models/order';
// import '../../scripts/utils/bindings';

export default class MainVM {
    constructor(){

        this.header = new State('header', this);

        this.currentState = ko.observable(null);
        this.router = new Router(this);
        this.router.start();

        this.footer = new State('footer', this);
    }

    logout () {

    }
}