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

        // this.site = new SiteModel();
        // this.profile = new ProfileModel();
        // this.order = new OrderModel();
        // this.headerSearchState = ko.observable();
        // this.nav = ko.observable('');
        // this.loginFromPathname = ko.observable('');
        // this.loginFromQuerystring = ko.observable('');
        // this.loginFromSeo = ko.observable('');
        // this.orderMergeMessages = ko.observableArray([]);
        // // this.origin = ko.observable('');
        // var reg = /^[^\/]{1}\S+$/g

        this.header = new State('header', this);

        this.currentState = ko.observable(null);
        this.router = new Router(this);
        this.router.start();


        // this.logout = (plogout) => {
		// 	$.ajax("/rest/model/atg/userprofiling/ProfileActor/logout", {
		// 		type : "post",
		// 		contentType : "application/json",
		// 		success : (odata) => {
		// 			if (odata.formError) {
		// 				console.log(odata.formExceptions);
		// 			} else {
		// 				this.profile.getProfile();
		// 				this.order.getOrder();
		// 				if (!plogout) {
		// 					this.go('', {'logout':'true'});
		// 				}
		// 			}
		// 		},
		// 		error : function(jqXHR, textStatus, errorThrown) {
		// 			console.error("Logout error: ", errorThrown, ", status: ,", textStatus);
		// 		}
		// 	});
		// };

        // this.site.getSite();
        // this.profile.getProfile();
        // this.order.getOrder();
        this.footer = new State('footer', this);


    }
}