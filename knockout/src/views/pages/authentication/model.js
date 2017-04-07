import ko from 'knockout';
import $ from 'jquery';
import AuthenticationModel from '../../../scripts/models/authentication';
import {getApp,scrollToTop,clearErrors, goToURL,goToView, errorCSS, errorMessage, getErrorMessages} from 'common';

export default class AuthenticationVM{
    constructor(state){
        var self = this;

		self.state = state;
		self.authenticationModel = new AuthenticationModel();
		self.errors = ko.observableArray([]);
		self.loginErrors = ko.observableArray([]);
		self.registrationErrors = ko.observableArray([]);
		self.inputErrors = ko.observableArray([]);
		self.inputErrorLabels = ko.observableArray([]);

		self.retriveUserData = function() {
			$.ajax("/rest/model/atg/userprofiling/ProfileActor/cookieProfileDataDroplet", {
				type : "post",
				contentType : "application/json",
				success : function(data) {
					var email = data.email;
					if(email){
						self.authenticationModel.login(email);
					}
				}
			});
		};

		self.retriveUserData();

		self.facebook = function() {
			self.registrationErrors([]);
			self.loginErrors([]);
			FB.login(function() {
				FB.api('/me', 'get', {
					fields : 'id,first_name,middle_name,last_name,gender,email'
				}, function(response) {
					if(!response.error)
						setFacebookData(response);
				});
			}, {
				'scope' : 'email'
			});

			function setFacebookData(response) {

				var data = {
					"facebookUID" : response.id,
					"email" : response.email,
					"firstName" : response.first_name,
					"middleName" : response.middle_name,
					"lastName" : response.last_name,
					"gender" : response.gender
				};
				$.ajax("/rest/model/atg/userprofiling/ProfileActor/loginFacebook", {
					data : ko.toJSON(data),
					type : "post",
					contentType : "application/json",
					success : function(odata) {
						if (odata.formError) {
							getErrorMessages(odata.formExceptions, self, self.loginErrors);
							self.authenticationModel.password('');
						} else {
							clearErrors(self);
							getApp(self).profile.getProfile();
							getApp(self).order.getOrder();
							var seo = getApp(self).loginFromSeo();
							var loginFromPathname = getApp(self).loginFromPathname();
							var loginFromQuerystring = getApp(self).loginFromQuerystring();
							// goToURL(self, loginFromPathname, loginFromQuerystring);

							omniture.triggerLogin();

							self.redirect(seo, loginFromPathname, loginFromQuerystring);
						}
					},
					error : function(edata) {
						self.loginErrors([ {
							"localizedMessage" : [ "System error" ]
						} ]);
						console.log(edata);
					}
				});
			}
		};

		self.dologin = function() {
			self.registrationErrors([]);
			var data = self.authenticationModel.getLoginData();
			$.ajax("/rest/model/atg/userprofiling/ProfileActor/login", {
				data : ko.toJSON(data),
				type : "post",
				contentType : "application/json",
				success : function(odata) {
					if (odata.formError) {
						getErrorMessages(odata.formExceptions, self, self.loginErrors);
						self.authenticationModel.loginPassword('');
						scrollToTop();
					} else {
						clearErrors(self);
						getApp(self).profile.getProfile();
						getApp(self).order.getOrder();
						if(odata.message && odata.message.orderMergeMessages){
							getApp(self).orderMergeMessages(odata.message.orderMergeMessages);
						}
						var seo = getApp(self).loginFromSeo();
						var loginFromPathname = getApp(self).loginFromPathname();
						var loginFromQuerystring = getApp(self).loginFromQuerystring();
						// goToURL(self, loginFromPathname, loginFromQuerystring);]
						// getApp(self).router.notify(loginFromPathname, loginFromQuerystring, seo);
						omniture.triggerLogin();

						self.redirect(seo, loginFromPathname, loginFromQuerystring);
					}
				},
				error : function(edata) {
					self.loginErrors([ {
						"localizedMessage" : [ "System error" ]
					} ]);
					console.log(edata);
				}
			});
		};

		self.redirect = function(loginFromSeo, loginFromPathname, loginFromQuerystring) {
			var data = {
					"loginFromSeo" : loginFromSeo,
					"loginFromPathname" : loginFromPathname,
					"loginFromQuerystring" : loginFromQuerystring
				};
			$.ajax("/rest/model/atg/userprofiling/ProfileActor/loginRedirect", {
				data : ko.toJSON(data),
				type : "post",
				contentType : "application/json",
				success : function(odata) {
					var query = odata.loginFromQuerystring;
					if (query) {
						query = JSON.parse(query);
					}
					getApp(self).router.notify(odata.loginFromPathname, query, odata.loginFromSeo);
				}
			});
		};

		self.processRegisterForm = function() {
			self.loginErrors([]);
			var data = self.authenticationModel.getRegistrationData();
			$.ajax("/rest/model/atg/userprofiling/ProfileActor/create", {
				data : ko.toJSON(data),
				type : "post",
				contentType : "application/json",
				success : function(odata) {
					if (odata.formError) {
						getErrorMessages(odata.formExceptions, self);
						self.authenticationModel.password('');
						self.authenticationModel.confirmPassword('');
						scrollToTop();
					} else {
						clearErrors(self);
						getApp(self).profile.getProfile();

						omniture.triggerRegistration();

						goToURL(self, '');
					}
				},
				error : function(edata) {
					self.registrationErrors([ {
						"localizedMessage" : [ "System error" ]
					} ]);
					console.log(edata);
				}
			});
		};

		self.gotoView = function(obj,e) {
			goToView(e, self.state);
		};

		self.cancel = function() {
			self.state.data().app.go('');
		};

		self.ensureBoolean = function(value) {
			return value ? value : false;
		};

		self.errorCSS = function(propertyName) {
			return errorCSS(propertyName, self, ko);
		};

		self.errorMessage = function(propertyName) {
			return errorMessage(propertyName, self, ko);
		}
    }
}