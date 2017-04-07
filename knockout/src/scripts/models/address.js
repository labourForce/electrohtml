import ko from 'knockout';
import $ from 'jquery';

export default class AddressModel {
    constructor(){
        this.states = ko.observableArray([]);

		this.nickname = ko.observable('');
		this.firstName = ko.observable('');
		this.lastName = ko.observable('');
		this.address1 = ko.observable('');
		this.address2 = ko.observable('');
		this.city = ko.observable('');
		this.country = ko.observable("US");
		this.countryState = ko.observable('');
		this.postalCode = ko.observable('');
		this.phoneNumber = ko.observable('');
		this.phoneNumberExt = ko.observable('');
		this.phoneNumberAlt = ko.observable('');
		this.phoneNumberAltExt = ko.observable('');
		this.saveAsPreferred = ko.observable(true);
		this.avsPerformed = ko.observable(false);
		this.avsValidated = ko.observable(false);
		this.isNew = ko.observable(true);

		/*
		 * Fields for edit
		 */
		this.eFirstName = ko.observable('');
		this.eLastName = ko.observable('');
		this.eAddress1 = ko.observable('');
		this.eAddress2 = ko.observable('');
		this.eCity = ko.observable('');
		this.eCountry = ko.observable('US');
		this.eCountryState = ko.observable('');
		this.ePostalCode = ko.observable('');
		this.ePhoneNumber = ko.observable('');
		this.ePhoneNumberExt = ko.observable('');
		this.ePhoneNumberAlt = ko.observable('');
		this.ePhoneNumberAltExt = ko.observable('');
		this.eSaveAsPreferred = ko.observable(true);

		this.showEditAddressForm = ko.observable(false);
		this.showDeleteAddressForm = ko.observable(false);
		this.showAVSAddressForm = ko.observable(false);

		this.avsResponseValid = ko.observable(false);
		this.avsAddress1 = ko.observable('');
		this.avsAddress2 = ko.observable('');
		this.avsCity = ko.observable('');
		this.avsCountry = ko.observable('US');
		this.avsCountryState = ko.observable('');
		this.avsPostalCode = ko.observable('');

		this.copyEditValuesToMain = () => {
			this.firstName(ko.utils.unwrapObservable(this.eFirstName));
			this.lastName(ko.utils.unwrapObservable(this.eLastName));
			this.address1(ko.utils.unwrapObservable(this.eAddress1));
			this.address2(ko.utils.unwrapObservable(this.eAddress2));
			this.city(ko.utils.unwrapObservable(this.eCity));
			this.country(ko.utils.unwrapObservable(this.eCountry));
			this.countryState(ko.utils.unwrapObservable(this.eCountryState));
			this.postalCode(this.unmaskValue(ko.utils.unwrapObservable(this.ePostalCode)));
			this.phoneNumber(this.unmaskValue(ko.utils.unwrapObservable(this.ePhoneNumber)));
			this.phoneNumberExt(ko.utils.unwrapObservable(this.ePhoneNumberExt));
			this.phoneNumberAlt(ko.utils.unwrapObservable(this.ePhoneNumberAlt));
			this.phoneNumberAltExt(ko.utils.unwrapObservable(this.ePhoneNumberAltExt));
			this.saveAsPreferred(ko.utils.unwrapObservable(this.eSaveAsPreferred));
		};

		this.copyMainValuesToEdit = () => {
			this.eFirstName(ko.utils.unwrapObservable(this.firstName));
			this.eLastName(ko.utils.unwrapObservable(this.lastName));
			this.eAddress1(ko.utils.unwrapObservable(this.address1));
			this.eAddress2(ko.utils.unwrapObservable(this.address2));
			this.eCity(ko.utils.unwrapObservable(this.city));
			this.eCountry(ko.utils.unwrapObservable(this.country));
			this.eCountryState(ko.utils.unwrapObservable(this.countryState));
			this.ePostalCode(ko.utils.unwrapObservable(this.postalCode));
			this.ePhoneNumber(ko.utils.unwrapObservable(this.phoneNumber));
			this.ePhoneNumberExt(ko.utils.unwrapObservable(this.phoneNumberExt));
			this.eSaveAsPreferred(ko.utils.unwrapObservable(this.saveAsPreferred));
		};

		this.fill = (json) => {
			if (json) {
				this.nickname(json.nickname);
				this.firstName(json.firstName);
				this.lastName(json.lastName);
				this.address1(json.address1);
				if (json.address2 != 'null') {
					this.address2(json.address2);
				}
				this.city(json.city);
				this.country(json.country);
				this.countryState(json.state);
				this.postalCode(json.postalCode);
				this.phoneNumber(this.ensureString(json.phoneNumber));
				this.phoneNumberExt(this.ensureString(json.phoneNumberExt));
				this.phoneNumberAlt(this.ensureString(json.phoneNumberAlt));
				this.phoneNumberAltExt(this.ensureString(json.phoneNumberAltExt));
				if (json.saveAsPreferred == 'true') {
					this.saveAsPreferred(true);
				} else {
					this.saveAsPreferred(false);
				}
				if (json.avsPerformed == 'true') {
					this.avsPerformed(true);
				} else {
					this.avsPerformed(false);
				}
				if (json.avsValidated == 'true') {
					this.avsValidated(true);
				} else {
					this.avsValidated(false);
				}
				this.copyMainValuesToEdit();
			}
		};

		this.copyAddressValues = (addressModel) => {
			if (addressModel) {
				this.nickname(addressModel.nickname());
				this.firstName(addressModel.firstName());
				this.lastName(addressModel.lastName());
				this.address1(addressModel.address1());
				if (addressModel.address2() != 'null') {
					this.address2(addressModel.address2());
				}
				this.city(addressModel.city());
				this.country(addressModel.country());
				this.countryState(addressModel.countryState());
				this.postalCode(addressModel.postalCode());
				this.phoneNumber(this.ensureString(addressModel.phoneNumber()));
				this.phoneNumberExt(this.ensureString(addressModel.phoneNumberExt()));
				this.phoneNumberAlt(this.ensureString(addressModel.phoneNumberAlt()));
				this.phoneNumberAltExt(this.ensureString(addressModel.phoneNumberAltExt()));
				if (addressModel.saveAsPreferred() == 'true' || addressModel.saveAsPreferred() == true) {
					this.saveAsPreferred(true);
				} else {
					this.saveAsPreferred(false);
				}
				if (addressModel.avsPerformed() == 'true' || addressModel.avsPerformed() == true) {
					this.avsPerformed(true);
				} else {
					this.avsPerformed(false);
				}
				if (addressModel.avsValidated() == 'true' || addressModel.avsValidated() == true) {
					this.avsValidated(true);
				} else {
					this.avsValidated(false);
				}
				this.isNew(false);
			}
		};

		this.fillAvs = (json) => {
			this.avsAddress1(json.address1);
			this.avsAddress2(json.address2 ? json.address2 : '');
			this.avsCity(json.city);
			this.avsCountry(json.country ? json.country : 'US');
			this.avsCountryState(json.state);
			this.avsPostalCode(json.postalCode);
		};

		this.clearAvs = () => {
			this.avsAddress1("");
			this.avsAddress2("");
			this.avsCity("");
			this.avsCountry("US");
			this.avsCountryState("");
			this.avsPostalCode("");
		};

		this.copyAvsToMain = () => {
			this.address1(this.avsAddress1());
			this.address2(this.avsAddress2());
			this.city(this.avsCity());
			this.country(this.avsCountry());
			this.countryState(this.avsCountryState());
			this.postalCode(this.avsPostalCode());
			this.avsValidated(true);
		};

		this.clear = () => {
			this.nickname("");
			this.firstName("");
			this.lastName("");
			this.address1("");
			this.address2("");
			this.city("");
			this.country("US");
			this.countryState("");
			this.postalCode("");
			this.phoneNumber("");
			this.phoneNumberExt("");
			this.phoneNumberAlt("");
			this.phoneNumberAltExt("");
			this.saveAsPreferred(true);
			this.avsPerformed(false);
			this.avsValidated(false);
			this.isNew(true);
			this.copyMainValuesToEdit();
		};

		this.getData = () => {
			return {
				"nickName": this.nickname(),
				"firstName": this.firstName(),
				"lastName": this.lastName(),
				"address1": this.address1(),
				"address2": this.address2(),
				"city": this.city(),
				"state": this.countryState(),
				"postalCode": this.postalCode(),
				"country": this.country(),
				"phoneNumber": this.phoneNumber(),
				"phoneNumberAlt": this.phoneNumberAlt(),
				"phoneNumberExt": this.phoneNumberExt(),
				"phoneNumberAltExt": this.phoneNumberAltExt(),
				"saveAsPreferred": this.ensureBoolean(this.saveAsPreferred()),
				"avsPerformed": this.ensureBoolean(this.avsPerformed()),
				"avsValidated": this.ensureBoolean(this.avsValidated())
			};
		};
		
		this.getEditingData = () => {
			return {
				"nickName": this.nickname(),
				"firstName": this.eFirstName(),
				"lastName": this.eLastName(),
				"address1": this.eAddress1(),
				"address2": this.eAddress2(),
				"city": this.eCity(),
				"state": this.eCountryState(),
				"postalCode": this.ePostalCode(),
				"country": this.eCountry(),
				"phoneNumber": this.ePhoneNumber(),
				"phoneNumberAlt": this.ePhoneNumberAlt(),
				"phoneNumberExt": this.ePhoneNumberExt(),
				"phoneNumberAltExt": this.ePhoneNumberAltExt(),
				"saveAsPreferred": this.ensureBoolean(this.eSaveAsPreferred()),
				"avsPerformed": this.ensureBoolean(this.avsPerformed()),
				"avsValidated": this.ensureBoolean(this.avsValidated())
			};
		};

		this.statesList = ko.computed(() => {
			var country = this.eCountry();
			if (country != null) {
				var data = {
					"countryCode": country
				};
				$.ajax("/rest/model/atg/userprofiling/ProfileActor/statesList", {
					data: ko.toJSON(data),
					type: "post",
					contentType: "application/json",
					success: (data) => {
						var locations = [];
						if (data.states) {
							if(data.states.length > 0) {
								for (var i = 0; i < data.states.length; i++) {
									var states = [];
									if(data.states[i]) {
										if (data.states[i].stateList) {
											if (data.states[i].stateList.length > 0) {
												for (var j = 0; j < data.states[i].stateList.length; j++) {
													states.push({
														'code': data.states[i].stateList[j].code,
														'displayName': data.states[i].stateList[j].displayName
													});
												}
												locations.push({
													'stateGroup': data.states[i].displayName,
													'stateList': states
												});
											}
										}
									}
								}
							}
							this.states(locations);
						}
					}
				});
			}
		}, this);

		this.isSelected = (value, choosenValue) => {
			if (value == choosenValue)
				return selected;
		};

		this.displayPostalCode = (postalCode) => {
			var result = "";
			if(postalCode){
				if(postalCode.length==9){
					var firstPart = postalCode.substr(0, 5);
					var secPart = postalCode.substr(5, 9);
					result = firstPart+'-'+secPart;
				}else {
					result = postalCode;
				}
			}
			return result;
		};

		this.printAddressWithNickname = ko.pureComputed(() => {
			var nickname = this.nickname();
			var address = "";
			if (nickname) {
				address = this.nickname() + '<br>';
			}
			address = address + this.getFullBaseAddress();
			return address;
		}, this);

		this.printAddress = ko.pureComputed(() => {
			return this.getFullBaseAddress();
		}, this);

		this.printFullAddress = ko.pureComputed(() => {
			var address = this.getFullBaseAddress();
			if (this.phoneNumber()) {
				address = address + '<br>' + this.maskedPhoneNumber();
				if (this.phoneNumberExt()) {
					address = address + ' ext. ' + this.phoneNumberExt();
				}
			}
			return address;
		}, this);

		this.maskedPhoneNumber = ko.pureComputed(() => {
			var maskedPhoneNumber = this.phoneNumber();
			if (this.phoneNumber() && this.phoneNumber().length == 10) {
				maskedPhoneNumber = "(" + this.phoneNumber().substring(0, 3)+  ") "
					+ this.phoneNumber().substring(3, 6) + "-" + this.phoneNumber().substring(6);
			}
			return maskedPhoneNumber;
		}, this);

		this.printBaseAddress = ko.pureComputed(() => {
			return this.getBaseAddress();
		}, this);

		this.printAVSAddress = ko.pureComputed(() => {
			return this.getSuggestedAVSAddress();
		}, this);

		this.printPhoneNumber = ko.pureComputed(() => {
			var phoneNumber = this.phoneNumber();
			var phoneNumberExt = this.phoneNumberExt();
			if (phoneNumberExt) {
				phoneNumber = phoneNumber + ' ext. ' + phoneNumberExt;
			}
			return phoneNumber;
		}, this);

		this.printPhoneNumberAlt = ko.pureComputed(() => {
			var phoneNumber = this.phoneNumberAlt();
			var phoneNumberExt = this.phoneNumberAltExt();
			if (phoneNumberExt) {
				phoneNumber = phoneNumber + ' ext. ' + phoneNumberExt;
			}
			return phoneNumber;
		}, this);


		this.getBaseAddress = () => {
			var address = "";

			var address1 = this.ensureString(this.address1());
			var address2 = this.ensureString(this.address2());
			var city = this.ensureString(this.city());
			var countryState = this.ensureString(this.countryState());
			var postalCode = this.ensureString(this.displayPostalCode(this.postalCode()));

			if (address1) {
				address = address1 + '<br>';
			}
			if (address2) {
				address = address + address2 + '<br>';
			}
			address = address + city;
			if (city && (countryState || postalCode)) {
				address = address + ', ';
			}
			address = address + countryState + ' ' + postalCode;
			return address;
		};

		this.getFullBaseAddress = () => {
			var address = "";
			var firstName = this.ensureString(this.firstName());
			var lastName = this.ensureString(this.lastName());

			if (firstName) {
				address = address + firstName;
			}
			if (lastName) {
				address = address + ' ' + lastName + '<br>';
			}
			var base = this.getBaseAddress();
			if (base) {
				address = address + this.getBaseAddress();
			}
			return address;
		};

		this.getSuggestedAVSAddress = () => {
			var address = "";
			var address1 = this.ensureString(this.avsAddress1());
			var address2 = this.ensureString(this.avsAddress2());
			var city = this.ensureString(this.avsCity());
			var countryState = this.ensureString(this.avsCountryState());
			var postalCode = this.ensureString(this.avsPostalCode());

			if (address1) {
				address = address1 + '<br>';
			}
			if (address2) {
				address = address + address2 + '<br>';
			}
			address = address + city;
			if (city && (countryState || postalCode)) {
				address = address + ', ';
			}
			address = address + countryState + ' ' + postalCode;
			return address;
		};

		this.ensureBoolean =  (value) => {
			return value ? value : false;
		};

		this.isEmpty = ko.computed(() => {
			if (this.address1() && this.city() && this.firstName() && this.lastName()) {
				return false;
			} else {
				return true;
			}
		}, this);

		this.ensureString = (value) => {
			return value != 'null' && value ? value : "";
		};

		this.unmaskValue = (value) => {
			value = value.replace(/\(/g, "");
			value = value.replace(/\)/g, "");
			value = value.replace(/_/g, "");
			value = value.replace(/-/g, "");
			value = value.replace(/ /g, "");
			return value;
		}
    }
}