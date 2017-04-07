import ko from 'knockout';

export default class AuthenticationModel{
    constructor(){
        var self = this;

		self.firstName = ko.observable();
		self.lastName = ko.observable();
		self.login = ko.observable();
		self.email = ko.observable();
		self.password = ko.observable();
		self.loginPassword = ko.observable();
		self.confirmPassword = ko.observable();
		self.confirmEmail = ko.observable();
		self.autoLogin = ko.observable(false);


		self.getLoginData = function() {
			return {
				"login": self.login(),
				"password": self.loginPassword(),
				"autoLogin": self.ensureBoolean(self.autoLogin())
			};
		};

		self.getRegistrationData = function() {
			return {
				"firstName" : self.firstName(),
				"lastName" : self.lastName(),
				"email" : self.email(),
				"password" : self.password(),
				"confirmPassword" : self.confirmPassword()
			};
		};

		self.ensureBoolean = function(value) {
			return value ? value : false;
		};
    }
}