import ko from 'knockout';
import $ from 'jquery';

export default class CreditCardModel {
    constructor() {
        this.months = ko.observable(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']);
        this.years = ko.observable([]);

        this.states = ko.observableArray([]);

        this.creditCardId = ko.observable('');
        this.nickname = '';
        this.creditCardNumber = ko.observable('');
        this.creditCardNumberDisplay = ko.observable('');
        this.token = ko.observable('');
        this.creditCardType = ko.observable('');
        this.cardVerificationNumber = ko.observable('');
        this.firstName = ko.observable('');
        this.lastName = ko.observable('');
        this.cardholderName = ko.observable('');
        this.expirationMonth = ko.observable('');
        this.expirationYear = ko.observable('');
        this.address1 = ko.observable('');
        this.address2 = ko.observable('');
        this.city = ko.observable('');
        this.country = ko.observable('US');
        this.countryState = ko.observable('');
        this.postalCode = ko.observable('');
        this.phoneNumber = ko.observable('');
        this.phoneNumberExt = ko.observable('');
        this.saveAsPreferred = ko.observable(true);

        /*
         * Fields for edit
         */
        this.eExpirationMonth = ko.observable('');
        this.eExpirationYear = ko.observable('');
        this.eCardholderName = ko.observable('');
        this.eAddress1 = ko.observable('');
        this.eAddress2 = ko.observable('');
        this.eCity = ko.observable('');
        this.eCountry = ko.observable('US');
        this.eCountryState = ko.observable('');
        this.ePostalCode = ko.observable('');
        this.ePhoneNumber = ko.observable('');
        this.ePhoneNumberExt = ko.observable('');
        this.eSaveAsPreferred = ko.observable(true);

        this.isNew = ko.observable(true);
        this.showEditForm = ko.observable(false);
        this.showDeleteForm = ko.observable(false);


        this.copyEditValuesToMain = () => {
            this.expirationMonth(ko.utils.unwrapObservable(this.eExpirationMonth));
            this.expirationYear(ko.utils.unwrapObservable(this.eExpirationYear));
            this.cardholderName(ko.utils.unwrapObservable(this.eCardholderName));
            this.address1(ko.utils.unwrapObservable(this.eAddress1));
            this.address2(ko.utils.unwrapObservable(this.eAddress2));
            this.city(ko.utils.unwrapObservable(this.eCity));
            this.country(ko.utils.unwrapObservable(this.eCountry));
            this.countryState(ko.utils.unwrapObservable(this.eCountryState));
            this.postalCode(this.unmaskValue(ko.utils.unwrapObservable(this.ePostalCode)));
            this.phoneNumber(this.unmaskValue(ko.utils.unwrapObservable(this.ePhoneNumber)));
            this.phoneNumberExt(ko.utils.unwrapObservable(this.ePhoneNumberExt));
            this.saveAsPreferred(ko.utils.unwrapObservable(this.eSaveAsPreferred));
        };

        this.copyMainValuesToEdit = () => {
            this.eExpirationMonth(ko.utils.unwrapObservable(this.expirationMonth));
            this.eExpirationYear(ko.utils.unwrapObservable(this.expirationYear));
            this.eCardholderName(ko.utils.unwrapObservable(this.cardholderName));
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

        this.fill = (creditCard) => {
            if (creditCard) {
                this.creditCardId(creditCard.creditCardId);
                this.nickname = creditCard.nickname;
                if (creditCard.cardholderName) {
                    this.cardholderName(creditCard.cardholderName);
                } else {
                    this.cardholderName(creditCard.firstName + ' ' + creditCard.lastName);
                }
                this.fillCreditCardType(creditCard.creditCardType);
                this.creditCardNumber('');
                this.token(creditCard.token);
                this.expirationMonth(creditCard.expirationMonth);
                this.expirationYear(creditCard.expirationYear);
                this.cardVerificationNumber(creditCard.cardVerificationNumber);
                this.address1(creditCard.address1);
                this.address2(creditCard.address2);
                this.city(creditCard.city);
                this.countryState(creditCard.state);
                this.country(creditCard.country);
                this.postalCode(creditCard.postalCode);
                if (creditCard.phoneNumber) {
                    this.phoneNumber(creditCard.phoneNumber);
                }
                if (creditCard.phoneNumberExt) {
                    this.phoneNumberExt(creditCard.phoneNumberExt);
                }
                if (creditCard.saveAsPreferred == 'true') {
                    this.saveAsPreferred(true);
                } else {
                    this.saveAsPreferred(false);
                }
                this.fillDisplayName(creditCard.creditCardNumberDisplay);
                this.copyMainValuesToEdit();
            }
        };

        this.fillCreditCardType = (creditCardType) => {
            var cardType = creditCardType;
            if (creditCardType == "VI") {
                cardType = "visa";
            } else if (creditCardType == "MC") {
                cardType = "masterCard";
            } else if (creditCardType == "DI") {
                cardType = "discover";
            } else if (creditCardType == "AX") {
                cardType = "americanExpress";
            }
            this.creditCardType(cardType);
        };

        this.fillDisplayName = (creditCardNumberDisplay) => {
            if (creditCardNumberDisplay) {
                this.creditCardNumberDisplay(creditCardNumberDisplay);
            } else {
                var name;
                var token = this.token() ? this.token() : '';
                if (token || this.creditCardNumber()) {
                    name = token.slice(-4);
                    if ((!name || 0 === name.length)) {
                        name = this.creditCardNumber().slice(-4);
                    }
                    this.creditCardNumberDisplay(name);
                }
            }
        };

        this.clear = () => {
            this.creditCardNumber('');
            this.creditCardType('');
            this.cardholderName('');
            this.expirationMonth('');
            this.expirationYear('');
            this.firstName('');
            this.lastName('');
            this.address1('');
            this.address2('');
            this.city('');
            this.countryState('');
            this.country('US');
            this.postalCode('');
            this.phoneNumber('');
            this.phoneNumberExt('');
            this.saveAsPreferred(true);
            this.copyMainValuesToEdit();
        };

        this.getData = () => {
            var data = {
                "creditCardId": this.creditCardId(),
                "creditCardNickname": this.nickname,
                "creditCardType": this.creditCardType(),
                "creditCardNumber": this.creditCardNumber(),
                "cardholderName": this.cardholderName(),
                "expirationMonth": this.expirationMonth(),
                "expirationYear": this.expirationYear(),
                "firstName": this.firstName(),
                "lastName": this.lastName(),
                "address1": this.address1(),
                "address2": this.address2(),
                "city": this.city(),
                "state": this.countryState(),
                "country": this.country(),
                "postalCode": this.postalCode(),
                "phoneNumber": this.phoneNumber(),
                "phoneNumberExt": this.phoneNumberExt(),
                "saveAsPreferred": this.ensureBoolean(this.saveAsPreferred())
            };
            return data;
        };

        this.getEditingData = () => {
            var data = {
                "creditCardId": this.creditCardId(),
                "creditCardNickname": this.nickname,
                "creditCardType": this.creditCardType(),
                "creditCardNumber": this.creditCardNumber(),
                "cardholderName": this.eCardholderName(),
                "expirationMonth": this.eExpirationMonth(),
                "expirationYear": this.eExpirationYear(),
                "firstName": this.firstName(),
                "lastName": this.lastName(),
                "address1": this.eAddress1(),
                "address2": this.eAddress2(),
                "city": this.eCity(),
                "state": this.eCountryState(),
                "country": this.eCountry(),
                "postalCode": this.ePostalCode(),
                "phoneNumber": this.ePhoneNumber(),
                "phoneNumberExt": this.ePhoneNumberExt(),
                "saveAsPreferred": this.ensureBoolean(this.eSaveAsPreferred())
            };
            return data;
        };

        this.getDataWithoutAddress = () => {
            var data = {
                "creditCardId": this.creditCardId(),
                "creditCardNumber": this.creditCardNumber(),
                "cardholderName": this.cardholderName(),
                "expirationMonth": this.expirationMonth(),
                "expirationYear": this.expirationYear(),
                "saveAsPreferred": this.ensureBoolean(this.saveAsPreferred())
            };
            return data;
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
                            if (data.states.length > 0) {
                                for (var i = 0; i < data.states.length; i++) {
                                    var states = [];
                                    if (data.states[i]) {
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
                    },
                    error: (edata) => {
                        this.errors([{
                            "localizedMessage": ["System error"]
                        }]);
                        console.log(edata);
                    }
                });
            }
        }, this);

        this.fillYears = () => {
            var years = [];
            var currentYear = new Date().getFullYear();
            for (let i = 0; i <= 10; i++) {
                years.push(currentYear + i);
            }
            this.years(years);
        };

        if (this.years().length == 0) {
            this.fillYears();
        }

        this.iconClass = ko.computed(() => {
            if (this.creditCardType() == "visa")
                return "icon-cc visa";
            if (this.creditCardType() == "masterCard")
                return "icon-cc mc";
            if (this.creditCardType() == "discover")
                return "icon-cc dc";
            if (this.creditCardType() == "americanExpress")
                return "icon-cc amex";
            var number = this.creditCardNumber();
            var re = new RegExp("^4");
            if (number.match(re) != null)
                return "icon-cc visa";
            re = new RegExp("^5[1-5]");
            if (number.match(re) != null)
                return "icon-cc mc";
            re = new RegExp("^3[47]");
            if (number.match(re) != null)
                return "icon-cc amex";
            re = new RegExp("^(6011|64|65)");
            if (number.match(re) != null)
                return "icon-cc dc";
        }, this);

        this.creditCardTypeForDisplay = ko.computed(() => {
            if (this.creditCardType() == "visa")
                return "VISA";
            if (this.creditCardType() == "masterCard")
                return "MasterCard";
            if (this.creditCardType() == "discover")
                return "Discover";
            if (this.creditCardType() == "americanExpress")
                return "Amex";
            var number = this.creditCardNumber();
            var re = new RegExp("^4");
            if (number.match(re) != null)
                return "VISA";
            re = new RegExp("^5[1-5]");
            if (number.match(re) != null)
                return "MasterCard";
            re = new RegExp("^3[47]");
            if (number.match(re) != null)
                return "Amex";
            re = new RegExp("^(6011|64|65)");
            if (number.match(re) != null)
                return "Discover";
        }, this);

        this.printCreditCard = ko.computed(() => {
            var html = '<i class="icon-payment ' + this.iconClass() + '"></i> ending in ' + this.creditCardNumberDisplay() + '<br><span>';
            if (this.expirationMonth() && this.expirationYear()) {
                html += 'exp. ' + this.expirationMonth() + '&#47;' + this.expirationYear() + '</span>';
            }
            return html;
        }, this);

        this.ensureBoolean = (value) => {
            return value ? value : false;
        };

        this.isEmpty = ko.computed(() => {
            return !(this.creditCardNumberDisplay() && this.expirationMonth() && this.expirationYear());
        }, this);

        this.maskedPhoneNumber = ko.pureComputed(() => {
            var maskedPhoneNumber = this.phoneNumber();
            if (this.phoneNumber() && this.phoneNumber().length == 10) {
                maskedPhoneNumber = "(" + this.phoneNumber().substring(0, 3) + ") "
                    + this.phoneNumber().substring(3, 6) + "-" + this.phoneNumber().substring(6);
            }
            return maskedPhoneNumber;
        }, this);

        this.displayPostalCode = (postalCode) => {
            var result = "";
            if (postalCode) {
                if (postalCode.length == 9) {
                    var firstPart = postalCode.substr(0, 5);
                    var secPart = postalCode.substr(5, 9);
                    result = firstPart + '-' + secPart;
                } else {
                    result = postalCode;
                }
            }
            return result;
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