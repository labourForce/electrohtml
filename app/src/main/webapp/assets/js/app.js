webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/250x232.png";

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/star.svg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/75x75.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/181x168.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/Laptop-600x600.jpg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/Laptop2-600x600.jpg";

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddressModel = function AddressModel() {
	var _this = this;

	_classCallCheck(this, AddressModel);

	this.states = _knockout2.default.observableArray([]);

	this.nickname = _knockout2.default.observable('');
	this.firstName = _knockout2.default.observable('');
	this.lastName = _knockout2.default.observable('');
	this.address1 = _knockout2.default.observable('');
	this.address2 = _knockout2.default.observable('');
	this.city = _knockout2.default.observable('');
	this.country = _knockout2.default.observable("US");
	this.countryState = _knockout2.default.observable('');
	this.postalCode = _knockout2.default.observable('');
	this.phoneNumber = _knockout2.default.observable('');
	this.phoneNumberExt = _knockout2.default.observable('');
	this.phoneNumberAlt = _knockout2.default.observable('');
	this.phoneNumberAltExt = _knockout2.default.observable('');
	this.saveAsPreferred = _knockout2.default.observable(true);
	this.avsPerformed = _knockout2.default.observable(false);
	this.avsValidated = _knockout2.default.observable(false);
	this.isNew = _knockout2.default.observable(true);

	/*
  * Fields for edit
  */
	this.eFirstName = _knockout2.default.observable('');
	this.eLastName = _knockout2.default.observable('');
	this.eAddress1 = _knockout2.default.observable('');
	this.eAddress2 = _knockout2.default.observable('');
	this.eCity = _knockout2.default.observable('');
	this.eCountry = _knockout2.default.observable('US');
	this.eCountryState = _knockout2.default.observable('');
	this.ePostalCode = _knockout2.default.observable('');
	this.ePhoneNumber = _knockout2.default.observable('');
	this.ePhoneNumberExt = _knockout2.default.observable('');
	this.ePhoneNumberAlt = _knockout2.default.observable('');
	this.ePhoneNumberAltExt = _knockout2.default.observable('');
	this.eSaveAsPreferred = _knockout2.default.observable(true);

	this.showEditAddressForm = _knockout2.default.observable(false);
	this.showDeleteAddressForm = _knockout2.default.observable(false);
	this.showAVSAddressForm = _knockout2.default.observable(false);

	this.avsResponseValid = _knockout2.default.observable(false);
	this.avsAddress1 = _knockout2.default.observable('');
	this.avsAddress2 = _knockout2.default.observable('');
	this.avsCity = _knockout2.default.observable('');
	this.avsCountry = _knockout2.default.observable('US');
	this.avsCountryState = _knockout2.default.observable('');
	this.avsPostalCode = _knockout2.default.observable('');

	this.copyEditValuesToMain = function () {
		_this.firstName(_knockout2.default.utils.unwrapObservable(_this.eFirstName));
		_this.lastName(_knockout2.default.utils.unwrapObservable(_this.eLastName));
		_this.address1(_knockout2.default.utils.unwrapObservable(_this.eAddress1));
		_this.address2(_knockout2.default.utils.unwrapObservable(_this.eAddress2));
		_this.city(_knockout2.default.utils.unwrapObservable(_this.eCity));
		_this.country(_knockout2.default.utils.unwrapObservable(_this.eCountry));
		_this.countryState(_knockout2.default.utils.unwrapObservable(_this.eCountryState));
		_this.postalCode(_this.unmaskValue(_knockout2.default.utils.unwrapObservable(_this.ePostalCode)));
		_this.phoneNumber(_this.unmaskValue(_knockout2.default.utils.unwrapObservable(_this.ePhoneNumber)));
		_this.phoneNumberExt(_knockout2.default.utils.unwrapObservable(_this.ePhoneNumberExt));
		_this.phoneNumberAlt(_knockout2.default.utils.unwrapObservable(_this.ePhoneNumberAlt));
		_this.phoneNumberAltExt(_knockout2.default.utils.unwrapObservable(_this.ePhoneNumberAltExt));
		_this.saveAsPreferred(_knockout2.default.utils.unwrapObservable(_this.eSaveAsPreferred));
	};

	this.copyMainValuesToEdit = function () {
		_this.eFirstName(_knockout2.default.utils.unwrapObservable(_this.firstName));
		_this.eLastName(_knockout2.default.utils.unwrapObservable(_this.lastName));
		_this.eAddress1(_knockout2.default.utils.unwrapObservable(_this.address1));
		_this.eAddress2(_knockout2.default.utils.unwrapObservable(_this.address2));
		_this.eCity(_knockout2.default.utils.unwrapObservable(_this.city));
		_this.eCountry(_knockout2.default.utils.unwrapObservable(_this.country));
		_this.eCountryState(_knockout2.default.utils.unwrapObservable(_this.countryState));
		_this.ePostalCode(_knockout2.default.utils.unwrapObservable(_this.postalCode));
		_this.ePhoneNumber(_knockout2.default.utils.unwrapObservable(_this.phoneNumber));
		_this.ePhoneNumberExt(_knockout2.default.utils.unwrapObservable(_this.phoneNumberExt));
		_this.eSaveAsPreferred(_knockout2.default.utils.unwrapObservable(_this.saveAsPreferred));
	};

	this.fill = function (json) {
		if (json) {
			_this.nickname(json.nickname);
			_this.firstName(json.firstName);
			_this.lastName(json.lastName);
			_this.address1(json.address1);
			if (json.address2 != 'null') {
				_this.address2(json.address2);
			}
			_this.city(json.city);
			_this.country(json.country);
			_this.countryState(json.state);
			_this.postalCode(json.postalCode);
			_this.phoneNumber(_this.ensureString(json.phoneNumber));
			_this.phoneNumberExt(_this.ensureString(json.phoneNumberExt));
			_this.phoneNumberAlt(_this.ensureString(json.phoneNumberAlt));
			_this.phoneNumberAltExt(_this.ensureString(json.phoneNumberAltExt));
			if (json.saveAsPreferred == 'true') {
				_this.saveAsPreferred(true);
			} else {
				_this.saveAsPreferred(false);
			}
			if (json.avsPerformed == 'true') {
				_this.avsPerformed(true);
			} else {
				_this.avsPerformed(false);
			}
			if (json.avsValidated == 'true') {
				_this.avsValidated(true);
			} else {
				_this.avsValidated(false);
			}
			_this.copyMainValuesToEdit();
		}
	};

	this.copyAddressValues = function (addressModel) {
		if (addressModel) {
			_this.nickname(addressModel.nickname());
			_this.firstName(addressModel.firstName());
			_this.lastName(addressModel.lastName());
			_this.address1(addressModel.address1());
			if (addressModel.address2() != 'null') {
				_this.address2(addressModel.address2());
			}
			_this.city(addressModel.city());
			_this.country(addressModel.country());
			_this.countryState(addressModel.countryState());
			_this.postalCode(addressModel.postalCode());
			_this.phoneNumber(_this.ensureString(addressModel.phoneNumber()));
			_this.phoneNumberExt(_this.ensureString(addressModel.phoneNumberExt()));
			_this.phoneNumberAlt(_this.ensureString(addressModel.phoneNumberAlt()));
			_this.phoneNumberAltExt(_this.ensureString(addressModel.phoneNumberAltExt()));
			if (addressModel.saveAsPreferred() == 'true' || addressModel.saveAsPreferred() == true) {
				_this.saveAsPreferred(true);
			} else {
				_this.saveAsPreferred(false);
			}
			if (addressModel.avsPerformed() == 'true' || addressModel.avsPerformed() == true) {
				_this.avsPerformed(true);
			} else {
				_this.avsPerformed(false);
			}
			if (addressModel.avsValidated() == 'true' || addressModel.avsValidated() == true) {
				_this.avsValidated(true);
			} else {
				_this.avsValidated(false);
			}
			_this.isNew(false);
		}
	};

	this.fillAvs = function (json) {
		_this.avsAddress1(json.address1);
		_this.avsAddress2(json.address2 ? json.address2 : '');
		_this.avsCity(json.city);
		_this.avsCountry(json.country ? json.country : 'US');
		_this.avsCountryState(json.state);
		_this.avsPostalCode(json.postalCode);
	};

	this.clearAvs = function () {
		_this.avsAddress1("");
		_this.avsAddress2("");
		_this.avsCity("");
		_this.avsCountry("US");
		_this.avsCountryState("");
		_this.avsPostalCode("");
	};

	this.copyAvsToMain = function () {
		_this.address1(_this.avsAddress1());
		_this.address2(_this.avsAddress2());
		_this.city(_this.avsCity());
		_this.country(_this.avsCountry());
		_this.countryState(_this.avsCountryState());
		_this.postalCode(_this.avsPostalCode());
		_this.avsValidated(true);
	};

	this.clear = function () {
		_this.nickname("");
		_this.firstName("");
		_this.lastName("");
		_this.address1("");
		_this.address2("");
		_this.city("");
		_this.country("US");
		_this.countryState("");
		_this.postalCode("");
		_this.phoneNumber("");
		_this.phoneNumberExt("");
		_this.phoneNumberAlt("");
		_this.phoneNumberAltExt("");
		_this.saveAsPreferred(true);
		_this.avsPerformed(false);
		_this.avsValidated(false);
		_this.isNew(true);
		_this.copyMainValuesToEdit();
	};

	this.getData = function () {
		return {
			"nickName": _this.nickname(),
			"firstName": _this.firstName(),
			"lastName": _this.lastName(),
			"address1": _this.address1(),
			"address2": _this.address2(),
			"city": _this.city(),
			"state": _this.countryState(),
			"postalCode": _this.postalCode(),
			"country": _this.country(),
			"phoneNumber": _this.phoneNumber(),
			"phoneNumberAlt": _this.phoneNumberAlt(),
			"phoneNumberExt": _this.phoneNumberExt(),
			"phoneNumberAltExt": _this.phoneNumberAltExt(),
			"saveAsPreferred": _this.ensureBoolean(_this.saveAsPreferred()),
			"avsPerformed": _this.ensureBoolean(_this.avsPerformed()),
			"avsValidated": _this.ensureBoolean(_this.avsValidated())
		};
	};

	this.getEditingData = function () {
		return {
			"nickName": _this.nickname(),
			"firstName": _this.eFirstName(),
			"lastName": _this.eLastName(),
			"address1": _this.eAddress1(),
			"address2": _this.eAddress2(),
			"city": _this.eCity(),
			"state": _this.eCountryState(),
			"postalCode": _this.ePostalCode(),
			"country": _this.eCountry(),
			"phoneNumber": _this.ePhoneNumber(),
			"phoneNumberAlt": _this.ePhoneNumberAlt(),
			"phoneNumberExt": _this.ePhoneNumberExt(),
			"phoneNumberAltExt": _this.ePhoneNumberAltExt(),
			"saveAsPreferred": _this.ensureBoolean(_this.eSaveAsPreferred()),
			"avsPerformed": _this.ensureBoolean(_this.avsPerformed()),
			"avsValidated": _this.ensureBoolean(_this.avsValidated())
		};
	};

	this.statesList = _knockout2.default.computed(function () {
		var country = _this.eCountry();
		if (country != null) {
			var data = {
				"countryCode": country
			};
			_jquery2.default.ajax("/rest/model/atg/userprofiling/ProfileActor/statesList", {
				data: _knockout2.default.toJSON(data),
				type: "post",
				contentType: "application/json",
				success: function success(data) {
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
						_this.states(locations);
					}
				}
			});
		}
	}, this);

	this.isSelected = function (value, choosenValue) {
		if (value == choosenValue) return selected;
	};

	this.displayPostalCode = function (postalCode) {
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

	this.printAddressWithNickname = _knockout2.default.pureComputed(function () {
		var nickname = _this.nickname();
		var address = "";
		if (nickname) {
			address = _this.nickname() + '<br>';
		}
		address = address + _this.getFullBaseAddress();
		return address;
	}, this);

	this.printAddress = _knockout2.default.pureComputed(function () {
		return _this.getFullBaseAddress();
	}, this);

	this.printFullAddress = _knockout2.default.pureComputed(function () {
		var address = _this.getFullBaseAddress();
		if (_this.phoneNumber()) {
			address = address + '<br>' + _this.maskedPhoneNumber();
			if (_this.phoneNumberExt()) {
				address = address + ' ext. ' + _this.phoneNumberExt();
			}
		}
		return address;
	}, this);

	this.maskedPhoneNumber = _knockout2.default.pureComputed(function () {
		var maskedPhoneNumber = _this.phoneNumber();
		if (_this.phoneNumber() && _this.phoneNumber().length == 10) {
			maskedPhoneNumber = "(" + _this.phoneNumber().substring(0, 3) + ") " + _this.phoneNumber().substring(3, 6) + "-" + _this.phoneNumber().substring(6);
		}
		return maskedPhoneNumber;
	}, this);

	this.printBaseAddress = _knockout2.default.pureComputed(function () {
		return _this.getBaseAddress();
	}, this);

	this.printAVSAddress = _knockout2.default.pureComputed(function () {
		return _this.getSuggestedAVSAddress();
	}, this);

	this.printPhoneNumber = _knockout2.default.pureComputed(function () {
		var phoneNumber = _this.phoneNumber();
		var phoneNumberExt = _this.phoneNumberExt();
		if (phoneNumberExt) {
			phoneNumber = phoneNumber + ' ext. ' + phoneNumberExt;
		}
		return phoneNumber;
	}, this);

	this.printPhoneNumberAlt = _knockout2.default.pureComputed(function () {
		var phoneNumber = _this.phoneNumberAlt();
		var phoneNumberExt = _this.phoneNumberAltExt();
		if (phoneNumberExt) {
			phoneNumber = phoneNumber + ' ext. ' + phoneNumberExt;
		}
		return phoneNumber;
	}, this);

	this.getBaseAddress = function () {
		var address = "";

		var address1 = _this.ensureString(_this.address1());
		var address2 = _this.ensureString(_this.address2());
		var city = _this.ensureString(_this.city());
		var countryState = _this.ensureString(_this.countryState());
		var postalCode = _this.ensureString(_this.displayPostalCode(_this.postalCode()));

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

	this.getFullBaseAddress = function () {
		var address = "";
		var firstName = _this.ensureString(_this.firstName());
		var lastName = _this.ensureString(_this.lastName());

		if (firstName) {
			address = address + firstName;
		}
		if (lastName) {
			address = address + ' ' + lastName + '<br>';
		}
		var base = _this.getBaseAddress();
		if (base) {
			address = address + _this.getBaseAddress();
		}
		return address;
	};

	this.getSuggestedAVSAddress = function () {
		var address = "";
		var address1 = _this.ensureString(_this.avsAddress1());
		var address2 = _this.ensureString(_this.avsAddress2());
		var city = _this.ensureString(_this.avsCity());
		var countryState = _this.ensureString(_this.avsCountryState());
		var postalCode = _this.ensureString(_this.avsPostalCode());

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

	this.ensureBoolean = function (value) {
		return value ? value : false;
	};

	this.isEmpty = _knockout2.default.computed(function () {
		if (_this.address1() && _this.city() && _this.firstName() && _this.lastName()) {
			return false;
		} else {
			return true;
		}
	}, this);

	this.ensureString = function (value) {
		return value != 'null' && value ? value : "";
	};

	this.unmaskValue = function (value) {
		value = value.replace(/\(/g, "");
		value = value.replace(/\)/g, "");
		value = value.replace(/_/g, "");
		value = value.replace(/-/g, "");
		value = value.replace(/ /g, "");
		return value;
	};
};

exports.default = AddressModel;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _index = __webpack_require__(38);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(42);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(48);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(50);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(46);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(44);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(40);

var _index14 = _interopRequireDefault(_index13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import landing from '../../views/pages/landing/index';
// import authentication from '../../views/pages/authentication/index';
// import quickOrder from '../../views/pages/quick-order/index';
// import cart from '../../views/pages/cart/index';


// import ContentSlotComp from '../../views/components/cartridges/content-slot/index';
// import HeaderComp from '../../views/components/cartridges/header/index';
// import HeaderSectionUtilityComp from '../../views/components/cartridges/header-section-utility/index';
// import HeaderSectionMainComp from '../../views/components/cartridges/header-section-main/index';
// import HeaderSectionNavigationBCCComp from '../../views/components/cartridges/header-section-navigation-bcc/index';
// import HeaderUtilityPromoComp from '../../views/components/cartridges/header-utility-promo/index';
// import HeaderUtilityLinkComp from '../../views/components/cartridges/header-utility-link/index';
// import HeaderMainLogoComp from '../../views/components/cartridges/header-main-logo/index';
// import HeaderMainMinicartComp from '../../views/components/cartridges/header-main-minicart/index';
// import HeaderMainSignInComp from '../../views/components/cartridges/header-main-sign-in/index';
// import HeaderMainSearchComp from '../../views/components/cartridges/header-main-search/index';
// import HeaderUtilityLinkModalComp from '../../views/components/cartridges/header-utility-link-modal/index';
// import HeaderNavigationUtilityComp from '../../views/components/cartridges/header-navigation-utility/index';
// import SimpleNavigationElementComp from '../../views/components/cartridges/simple-navigation-element/index';
// import HeaderNavigationUtilityLinkComp from '../../views/components/cartridges/header-navigation-utility-link/index';
// import HeaderNavigationUtilityLinkModalComp from '../../views/components/cartridges/header-navigation-utility-link-modal/index';
// import FooterComp from '../../views/components/cartridges/footer/index';
// import FooterSectionBadgesComp from '../../views/components/cartridges/footer-section-badges/index';
// import FooterSectionSubscribeComp from '../../views/components/cartridges/footer-section-subscribe/index';
// import FooterSectionLinksComp from '../../views/components/cartridges/footer-section-links/index';
// import FooterBadgeComp from '../../views/components/cartridges/footer-badge/index';
// import FooterSocialLinkComp from '../../views/components/cartridges/footer-social-link/index';
// import FooterLinksSectionComp from '../../views/components/cartridges/footer-links-section/index';
// import FooterLinkComp from '../../views/components/cartridges/footer-link/index';
// import DynamicFormComp from '../../views/components/cartridges/dynamic-form/index';
// import OneColumnPageComp from '../../views/components/cartridges/one-column-page/index';
// import HomePageInnerWrapperComp from '../../views/components/cartridges/home-page-inner-wrapper/index';
// import HomePageMainSliderComp from '../../views/components/cartridges/home-page-main-slider/index';
// import HomePageMainSlideComp from '../../views/components/cartridges/home-page-main-slide/index';
// import HomePageDoctorsSliderComp from '../../views/components/cartridges/home-page-doctors-slider/index';
// import HomePageFeaturedSectionsComp from '../../views/components/cartridges/home-page-featured-sections/index';
// import HomePageFeaturedSectionComp from '../../views/components/cartridges/home-page-featured-section/index';
// import MainRecordSpotlightComp from '../../views/components/cartridges/main-record-spotlight/index';
// import MainProductSpotlightComp from '../../views/components/cartridges/main-product-spotlight/index';
// import ProductSpotlightComp from '../../views/components/cartridges/product-spotlight/index';
// import HomePageRecentArticlesComp from '../../views/components/cartridges/home-page-recent-articles/index';
// import RecordProductComp from '../../views/components/cartridges/record-product/index';
// import MainRichTextComp from '../../views/components/cartridges/main-rich-text/index';
// import InsertableCollectionComp from '../../views/components/cartridges/insertable-collection/index';

var stateList = {
    app: _index2.default,
    header: _index4.default,
    footer: _index14.default,
    login: _index6.default,
    homepage: _index10.default,
    cart: _index12.default,
    pdp: _index8.default
};

// let componentList = {
//     ContentSlot: ContentSlotComp,
//     Header: HeaderComp,
//     HeaderSectionUtility: HeaderSectionUtilityComp,
//     HeaderSectionMain: HeaderSectionMainComp,
//     HeaderSectionNavigationBCC: HeaderSectionNavigationBCCComp,
//     HeaderUtilityPromo: HeaderUtilityPromoComp,
//     HeaderUtilityLink: HeaderUtilityLinkComp,
//     HeaderMainLogo: HeaderMainLogoComp,
//     HeaderMainMinicart: HeaderMainMinicartComp,
//     HeaderMainSignIn: HeaderMainSignInComp,
//     HeaderMainSearch: HeaderMainSearchComp,
//     HeaderUtilityLinkModal: HeaderUtilityLinkModalComp,
//     HeaderNavigationUtility: HeaderNavigationUtilityComp,
//     simpleNavigationElement: SimpleNavigationElementComp,
//     HeaderNavigationUtilityLink: HeaderNavigationUtilityLinkComp,
//     HeaderNavigationUtilityLinkModal: HeaderNavigationUtilityLinkModalComp,
//     Footer: FooterComp,
//     FooterSectionBadges: FooterSectionBadgesComp,
//     FooterSectionSubscribe: FooterSectionSubscribeComp,
//     FooterSectionLinks: FooterSectionLinksComp,
//     FooterBadge: FooterBadgeComp,
//     FooterSocialLink: FooterSocialLinkComp,
//     FooterLinksSection: FooterLinksSectionComp,
//     FooterLink: FooterLinkComp,
//     dynamicForm: DynamicFormComp,
//     OneColumnPage: OneColumnPageComp,
//     HomepageInnerWrapper: HomePageInnerWrapperComp,
//     HomepageMainSlider: HomePageMainSliderComp,
//     HomepageMainSlide: HomePageMainSlideComp,
//     HomepageDoctorsSlider: HomePageDoctorsSliderComp,
//     HomepageFeaturedSections: HomePageFeaturedSectionsComp,
//     HomepageFeaturedSection: HomePageFeaturedSectionComp,
//     MainBestSeller: MainRecordSpotlightComp,
//     MainRecentlyViewed: MainProductSpotlightComp,
//     productSpotlight: ProductSpotlightComp,
//     HomepageRecentArticles: HomePageRecentArticlesComp,
//     recordProduct: RecordProductComp,
//     MainRichText: MainRichTextComp,
//     insertableCollection: InsertableCollectionComp
// }
//
//
// var myHighPriorityLoader = {
//     getConfig: function (name, callback) {
//         try{
//             callback({viewModel: componentList[name].model,template: componentList[name].template})
//         }catch(e){
//             console.error('component:', name, '-', e);
//         }
//     }
// }
//
// ko.components.loaders.unshift(myHighPriorityLoader);

var State = function State(name, state) {
    _classCallCheck(this, State);

    try {
        this.data = new stateList[name].model(state);
        this.html = stateList[name].template;
    } catch (e) {
        console.error(name, e);
    }
};

// for(let key in componentList){
//     ko.components.register(key, {
//         viewModel: componentList[key].model,
//         template: componentList[key].template
//     });
// }


exports.default = State;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/191x177.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/3docean.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/563x521.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/audiojungle.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/themeforest.png";

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreditCardModel = function CreditCardModel() {
    var _this = this;

    _classCallCheck(this, CreditCardModel);

    this.months = _knockout2.default.observable(['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']);
    this.years = _knockout2.default.observable([]);

    this.states = _knockout2.default.observableArray([]);

    this.creditCardId = _knockout2.default.observable('');
    this.nickname = '';
    this.creditCardNumber = _knockout2.default.observable('');
    this.creditCardNumberDisplay = _knockout2.default.observable('');
    this.token = _knockout2.default.observable('');
    this.creditCardType = _knockout2.default.observable('');
    this.cardVerificationNumber = _knockout2.default.observable('');
    this.firstName = _knockout2.default.observable('');
    this.lastName = _knockout2.default.observable('');
    this.cardholderName = _knockout2.default.observable('');
    this.expirationMonth = _knockout2.default.observable('');
    this.expirationYear = _knockout2.default.observable('');
    this.address1 = _knockout2.default.observable('');
    this.address2 = _knockout2.default.observable('');
    this.city = _knockout2.default.observable('');
    this.country = _knockout2.default.observable('US');
    this.countryState = _knockout2.default.observable('');
    this.postalCode = _knockout2.default.observable('');
    this.phoneNumber = _knockout2.default.observable('');
    this.phoneNumberExt = _knockout2.default.observable('');
    this.saveAsPreferred = _knockout2.default.observable(true);

    /*
     * Fields for edit
     */
    this.eExpirationMonth = _knockout2.default.observable('');
    this.eExpirationYear = _knockout2.default.observable('');
    this.eCardholderName = _knockout2.default.observable('');
    this.eAddress1 = _knockout2.default.observable('');
    this.eAddress2 = _knockout2.default.observable('');
    this.eCity = _knockout2.default.observable('');
    this.eCountry = _knockout2.default.observable('US');
    this.eCountryState = _knockout2.default.observable('');
    this.ePostalCode = _knockout2.default.observable('');
    this.ePhoneNumber = _knockout2.default.observable('');
    this.ePhoneNumberExt = _knockout2.default.observable('');
    this.eSaveAsPreferred = _knockout2.default.observable(true);

    this.isNew = _knockout2.default.observable(true);
    this.showEditForm = _knockout2.default.observable(false);
    this.showDeleteForm = _knockout2.default.observable(false);

    this.copyEditValuesToMain = function () {
        _this.expirationMonth(_knockout2.default.utils.unwrapObservable(_this.eExpirationMonth));
        _this.expirationYear(_knockout2.default.utils.unwrapObservable(_this.eExpirationYear));
        _this.cardholderName(_knockout2.default.utils.unwrapObservable(_this.eCardholderName));
        _this.address1(_knockout2.default.utils.unwrapObservable(_this.eAddress1));
        _this.address2(_knockout2.default.utils.unwrapObservable(_this.eAddress2));
        _this.city(_knockout2.default.utils.unwrapObservable(_this.eCity));
        _this.country(_knockout2.default.utils.unwrapObservable(_this.eCountry));
        _this.countryState(_knockout2.default.utils.unwrapObservable(_this.eCountryState));
        _this.postalCode(_this.unmaskValue(_knockout2.default.utils.unwrapObservable(_this.ePostalCode)));
        _this.phoneNumber(_this.unmaskValue(_knockout2.default.utils.unwrapObservable(_this.ePhoneNumber)));
        _this.phoneNumberExt(_knockout2.default.utils.unwrapObservable(_this.ePhoneNumberExt));
        _this.saveAsPreferred(_knockout2.default.utils.unwrapObservable(_this.eSaveAsPreferred));
    };

    this.copyMainValuesToEdit = function () {
        _this.eExpirationMonth(_knockout2.default.utils.unwrapObservable(_this.expirationMonth));
        _this.eExpirationYear(_knockout2.default.utils.unwrapObservable(_this.expirationYear));
        _this.eCardholderName(_knockout2.default.utils.unwrapObservable(_this.cardholderName));
        _this.eAddress1(_knockout2.default.utils.unwrapObservable(_this.address1));
        _this.eAddress2(_knockout2.default.utils.unwrapObservable(_this.address2));
        _this.eCity(_knockout2.default.utils.unwrapObservable(_this.city));
        _this.eCountry(_knockout2.default.utils.unwrapObservable(_this.country));
        _this.eCountryState(_knockout2.default.utils.unwrapObservable(_this.countryState));
        _this.ePostalCode(_knockout2.default.utils.unwrapObservable(_this.postalCode));
        _this.ePhoneNumber(_knockout2.default.utils.unwrapObservable(_this.phoneNumber));
        _this.ePhoneNumberExt(_knockout2.default.utils.unwrapObservable(_this.phoneNumberExt));
        _this.eSaveAsPreferred(_knockout2.default.utils.unwrapObservable(_this.saveAsPreferred));
    };

    this.fill = function (creditCard) {
        if (creditCard) {
            _this.creditCardId(creditCard.creditCardId);
            _this.nickname = creditCard.nickname;
            if (creditCard.cardholderName) {
                _this.cardholderName(creditCard.cardholderName);
            } else {
                _this.cardholderName(creditCard.firstName + ' ' + creditCard.lastName);
            }
            _this.fillCreditCardType(creditCard.creditCardType);
            _this.creditCardNumber('');
            _this.token(creditCard.token);
            _this.expirationMonth(creditCard.expirationMonth);
            _this.expirationYear(creditCard.expirationYear);
            _this.cardVerificationNumber(creditCard.cardVerificationNumber);
            _this.address1(creditCard.address1);
            _this.address2(creditCard.address2);
            _this.city(creditCard.city);
            _this.countryState(creditCard.state);
            _this.country(creditCard.country);
            _this.postalCode(creditCard.postalCode);
            if (creditCard.phoneNumber) {
                _this.phoneNumber(creditCard.phoneNumber);
            }
            if (creditCard.phoneNumberExt) {
                _this.phoneNumberExt(creditCard.phoneNumberExt);
            }
            if (creditCard.saveAsPreferred == 'true') {
                _this.saveAsPreferred(true);
            } else {
                _this.saveAsPreferred(false);
            }
            _this.fillDisplayName(creditCard.creditCardNumberDisplay);
            _this.copyMainValuesToEdit();
        }
    };

    this.fillCreditCardType = function (creditCardType) {
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
        _this.creditCardType(cardType);
    };

    this.fillDisplayName = function (creditCardNumberDisplay) {
        if (creditCardNumberDisplay) {
            _this.creditCardNumberDisplay(creditCardNumberDisplay);
        } else {
            var name;
            var token = _this.token() ? _this.token() : '';
            if (token || _this.creditCardNumber()) {
                name = token.slice(-4);
                if (!name || 0 === name.length) {
                    name = _this.creditCardNumber().slice(-4);
                }
                _this.creditCardNumberDisplay(name);
            }
        }
    };

    this.clear = function () {
        _this.creditCardNumber('');
        _this.creditCardType('');
        _this.cardholderName('');
        _this.expirationMonth('');
        _this.expirationYear('');
        _this.firstName('');
        _this.lastName('');
        _this.address1('');
        _this.address2('');
        _this.city('');
        _this.countryState('');
        _this.country('US');
        _this.postalCode('');
        _this.phoneNumber('');
        _this.phoneNumberExt('');
        _this.saveAsPreferred(true);
        _this.copyMainValuesToEdit();
    };

    this.getData = function () {
        var data = {
            "creditCardId": _this.creditCardId(),
            "creditCardNickname": _this.nickname,
            "creditCardType": _this.creditCardType(),
            "creditCardNumber": _this.creditCardNumber(),
            "cardholderName": _this.cardholderName(),
            "expirationMonth": _this.expirationMonth(),
            "expirationYear": _this.expirationYear(),
            "firstName": _this.firstName(),
            "lastName": _this.lastName(),
            "address1": _this.address1(),
            "address2": _this.address2(),
            "city": _this.city(),
            "state": _this.countryState(),
            "country": _this.country(),
            "postalCode": _this.postalCode(),
            "phoneNumber": _this.phoneNumber(),
            "phoneNumberExt": _this.phoneNumberExt(),
            "saveAsPreferred": _this.ensureBoolean(_this.saveAsPreferred())
        };
        return data;
    };

    this.getEditingData = function () {
        var data = {
            "creditCardId": _this.creditCardId(),
            "creditCardNickname": _this.nickname,
            "creditCardType": _this.creditCardType(),
            "creditCardNumber": _this.creditCardNumber(),
            "cardholderName": _this.eCardholderName(),
            "expirationMonth": _this.eExpirationMonth(),
            "expirationYear": _this.eExpirationYear(),
            "firstName": _this.firstName(),
            "lastName": _this.lastName(),
            "address1": _this.eAddress1(),
            "address2": _this.eAddress2(),
            "city": _this.eCity(),
            "state": _this.eCountryState(),
            "country": _this.eCountry(),
            "postalCode": _this.ePostalCode(),
            "phoneNumber": _this.ePhoneNumber(),
            "phoneNumberExt": _this.ePhoneNumberExt(),
            "saveAsPreferred": _this.ensureBoolean(_this.eSaveAsPreferred())
        };
        return data;
    };

    this.getDataWithoutAddress = function () {
        var data = {
            "creditCardId": _this.creditCardId(),
            "creditCardNumber": _this.creditCardNumber(),
            "cardholderName": _this.cardholderName(),
            "expirationMonth": _this.expirationMonth(),
            "expirationYear": _this.expirationYear(),
            "saveAsPreferred": _this.ensureBoolean(_this.saveAsPreferred())
        };
        return data;
    };

    this.statesList = _knockout2.default.computed(function () {
        var country = _this.eCountry();
        if (country != null) {
            var data = {
                "countryCode": country
            };
            _jquery2.default.ajax("/rest/model/atg/userprofiling/ProfileActor/statesList", {
                data: _knockout2.default.toJSON(data),
                type: "post",
                contentType: "application/json",
                success: function success(data) {
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
                        _this.states(locations);
                    }
                },
                error: function error(edata) {
                    _this.errors([{
                        "localizedMessage": ["System error"]
                    }]);
                    console.log(edata);
                }
            });
        }
    }, this);

    this.fillYears = function () {
        var years = [];
        var currentYear = new Date().getFullYear();
        for (var i = 0; i <= 10; i++) {
            years.push(currentYear + i);
        }
        _this.years(years);
    };

    if (this.years().length == 0) {
        this.fillYears();
    }

    this.iconClass = _knockout2.default.computed(function () {
        if (_this.creditCardType() == "visa") return "icon-cc visa";
        if (_this.creditCardType() == "masterCard") return "icon-cc mc";
        if (_this.creditCardType() == "discover") return "icon-cc dc";
        if (_this.creditCardType() == "americanExpress") return "icon-cc amex";
        var number = _this.creditCardNumber();
        var re = new RegExp("^4");
        if (number.match(re) != null) return "icon-cc visa";
        re = new RegExp("^5[1-5]");
        if (number.match(re) != null) return "icon-cc mc";
        re = new RegExp("^3[47]");
        if (number.match(re) != null) return "icon-cc amex";
        re = new RegExp("^(6011|64|65)");
        if (number.match(re) != null) return "icon-cc dc";
    }, this);

    this.creditCardTypeForDisplay = _knockout2.default.computed(function () {
        if (_this.creditCardType() == "visa") return "VISA";
        if (_this.creditCardType() == "masterCard") return "MasterCard";
        if (_this.creditCardType() == "discover") return "Discover";
        if (_this.creditCardType() == "americanExpress") return "Amex";
        var number = _this.creditCardNumber();
        var re = new RegExp("^4");
        if (number.match(re) != null) return "VISA";
        re = new RegExp("^5[1-5]");
        if (number.match(re) != null) return "MasterCard";
        re = new RegExp("^3[47]");
        if (number.match(re) != null) return "Amex";
        re = new RegExp("^(6011|64|65)");
        if (number.match(re) != null) return "Discover";
    }, this);

    this.printCreditCard = _knockout2.default.computed(function () {
        var html = '<i class="icon-payment ' + _this.iconClass() + '"></i> ending in ' + _this.creditCardNumberDisplay() + '<br><span>';
        if (_this.expirationMonth() && _this.expirationYear()) {
            html += 'exp. ' + _this.expirationMonth() + '&#47;' + _this.expirationYear() + '</span>';
        }
        return html;
    }, this);

    this.ensureBoolean = function (value) {
        return value ? value : false;
    };

    this.isEmpty = _knockout2.default.computed(function () {
        return !(_this.creditCardNumberDisplay() && _this.expirationMonth() && _this.expirationYear());
    }, this);

    this.maskedPhoneNumber = _knockout2.default.pureComputed(function () {
        var maskedPhoneNumber = _this.phoneNumber();
        if (_this.phoneNumber() && _this.phoneNumber().length == 10) {
            maskedPhoneNumber = "(" + _this.phoneNumber().substring(0, 3) + ") " + _this.phoneNumber().substring(3, 6) + "-" + _this.phoneNumber().substring(6);
        }
        return maskedPhoneNumber;
    }, this);

    this.displayPostalCode = function (postalCode) {
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

    this.unmaskValue = function (value) {
        value = value.replace(/\(/g, "");
        value = value.replace(/\)/g, "");
        value = value.replace(/_/g, "");
        value = value.replace(/-/g, "");
        value = value.replace(/ /g, "");
        return value;
    };
};

exports.default = CreditCardModel;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/Laptop3-600x600.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/Ultrabooks-600x600.jpg";

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

__webpack_require__(37);

var _state = __webpack_require__(10);

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _state2.default('app');

_knockout2.default.applyBindings(app);

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _product = __webpack_require__(30);

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommerceItemModel = function () {
	function CommerceItemModel() {
		var _this = this;

		_classCallCheck(this, CommerceItemModel);

		this.repositoryId = _knockout2.default.observable('');
		this.title = _knockout2.default.observable('');
		this.listPrice = _knockout2.default.observable('');
		this.image = _knockout2.default.observable('');
		this.currentPrice = _knockout2.default.observable('');
		this.priceForOne = _knockout2.default.observable('');
		this.prodId = _knockout2.default.observable('');
		this.skuId = _knockout2.default.observable('');
		this.quantity = _knockout2.default.observable('');
		this.total = _knockout2.default.observable('');
		this.totalRetailPrice = _knockout2.default.observable('');
		this.rawTotalPrice = _knockout2.default.observable();
		this.status = _knockout2.default.observable('');
		this.trackingNumber = _knockout2.default.observable('');
		this.mainQuantity = _knockout2.default.observable('');
		this.cartQuantityLimitFromSite = _knockout2.default.observable('');
		this.autoDelivery = _knockout2.default.observable('');
		this.frequency = _knockout2.default.observable('');
		this.visible = _knockout2.default.observable('');

		this.gwp = _knockout2.default.observable();
		this.discountedQuantity = _knockout2.default.observable();
		this.product = new _product2.default();

		this.productCanonicalUrl = _knockout2.default.observable('');
		this.dataId = _knockout2.default.observable('');

		//visibility check-box = available item to reorder
		this.availableToReorder = _knockout2.default.observable(true);
		//item`s checkbox 
		this.isSelectToReorder = _knockout2.default.observable(false);

		this.selected = _knockout2.default.observable('');
		this.selectedOption = _knockout2.default.observable('');
		this.qtyOptions = _knockout2.default.observableArray([]);
		this.qtyOptionsAD = _knockout2.default.observableArray([]);
		this.qtyOptionsDisplay = _knockout2.default.observableArray([]);

		this.isDiscountedPrice = _knockout2.default.observable(false);
		this.itemIsFree = _knockout2.default.observable(false);

		this.fill = function (ci, addInfo) {
			_this.repositoryId(ci.id);
			_this.title(ci.productDisplayName);
			_this.prodId(ci.productId);
			_this.visible(ci.visible);
			_this.skuId(ci.catalogRefId);
			_this.quantity(ci.quantity);
			if (ci.priceInfo) {
				_this.currentPrice(ci.priceInfo.listPrice);
				_this.total(ci.priceInfo.amount);
			}
			_this.rawTotalPrice('');
			_this.status(ci.status);
			_this.trackingNumber(ci.trackingNumber);
			_this.mainQuantity(ci.mainQuantity);
			_this.autoDelivery(ci.autoDelivery);
			_this.frequency(ci.frequency);
			_this.gwp(ci.gwp);
			_this.discountedQuantity(ci.discountedQuantity);
			_this.fillProduct(ci);
			_this.productCanonicalUrl(ci.productCanonicalUrl);
			_this.dataId('pdp?productId=' + _this.prodId());
			_this.image(ci.id ? "/assets/images/product-images/small/product-" + ci.id + ".jpg" : "/assets/images/product/product-image-not-available.jpg");
			_this.availableToReorder(ci.availableToReorder);

			if (addInfo) {
				var productQuantityOptions = addInfo[_this.prodId()];
				_this.qtyOptions(productQuantityOptions.product.quantityOptions);
				_this.qtyOptionsAD(productQuantityOptions.product.autoDeliveryQuantityOptions);
				if (_this.autoDelivery()) {
					_this.qtyOptionsDisplay(_this.qtyOptionsAD());
				} else {
					_this.qtyOptionsDisplay(_this.qtyOptions());
				}
			}
		};

		this.fillProduct = function (ci) {
			if (ci.auxiliaryData) {
				var product = ci.auxiliaryData.productRef;
				if (product) {
					_this.product.fill(product);
				}
			}
		};

		this.fillPrices = function (priceDisplayBean) {
			_this.listPrice(priceDisplayBean.nowPrice);
			_this.priceForOne(priceDisplayBean.wasPrice);
			_this.isDiscountedPrice(priceDisplayBean.discounted);
			if (priceDisplayBean.freeItem) {
				_this.itemIsFree(true);
			}
			_this.rawTotalPrice(priceDisplayBean.totalPrice);
			_this.totalRetailPrice(priceDisplayBean.totalRetailPrice);
		};

		this.showUpgradeToAD = function () {
			var ad = _this.autoDelivery();
			var productAd = _this.product.isAutoDelivery;
			return !ad && productAd;
		};

		this.updateOrderWithNewCommerceItemAmount = function (callbackFunction) {
			var quantity = _this.selectedOption.quantity;
			var mainQuantity = _this.selectedOption.mainQuantity;
			var discountedQuantity = _this.selectedOption.discountedQuantity;

			var data = {
				"catalogRefId": _this.product.getFirstChildSkuId(),
				"productId": _this.product.repositoryId(),
				"quantity": quantity,
				"mainQuantity": mainQuantity,
				"discountedQuantity": discountedQuantity,
				"autoDelivery": _this.autoDelivery()
			};
			console.info("Update item data", data);
			_jquery2.default.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/updateItem", {
				type: "post",
				contentType: "application/json",
				data: _knockout2.default.toJSON(data),
				success: function success(returnedData) {
					if (callbackFunction && typeof callbackFunction === 'function') {
						callbackFunction();
					}
				}
			});
		};

		this.displayQty = _knockout2.default.computed(function () {
			var discQty = _this.quantity() - _this.mainQuantity();
			if (discQty > 0) {
				return _this.mainQuantity() + " + " + discQty;
			} else {
				return _this.quantity;
			}
		});

		this.printTrackingNumber = _knockout2.default.pureComputed(function () {
			var trackingNumber = _this.trackingNumber();
			if (trackingNumber) {
				return "Tracking: " + trackingNumber;
			}
		}, this);
	}

	_createClass(CommerceItemModel, [{
		key: 'dispose',
		value: function dispose() {
			//this.quantityOptions.dispose();
			this.isDiscountedPrice.dispose();
		}
	}]);

	return CommerceItemModel;
}();

exports.default = CommerceItemModel;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _shippingGroup = __webpack_require__(32);

var _shippingGroup2 = _interopRequireDefault(_shippingGroup);

var _paymentGroup = __webpack_require__(29);

var _paymentGroup2 = _interopRequireDefault(_paymentGroup);

var _commerceItem = __webpack_require__(27);

var _commerceItem2 = _interopRequireDefault(_commerceItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderModel = function OrderModel() {
	var _this = this;

	_classCallCheck(this, OrderModel);

	this.orderNumber = _knockout2.default.observable('');
	this.orderId = _knockout2.default.observable('');
	this.ebsId = _knockout2.default.observable('');
	this.autoDelivery = _knockout2.default.observable('');
	this.status = _knockout2.default.observable('');
	this.trackingNumber = _knockout2.default.observable('');

	this.commerceItems = _knockout2.default.observableArray([]);
	this.firstProdId = _knockout2.default.pureComputed(function () {
		return _this.commerceItems().length ? _this.commerceItems()[0].prodId() : null;
	});

	this.shippingGroup = new _shippingGroup2.default();
	this.paymentGroup = new _paymentGroup2.default();

	this.shippingAddress = {};
	this.shippingMethod = _knockout2.default.observable('');

	this.addedToCartMessage = _knockout2.default.observable('');

	// totals
	this.total = _knockout2.default.observable();
	this.rawSubtotal = _knockout2.default.observable();
	this.shipping = _knockout2.default.observable();
	this.rawShipping = _knockout2.default.observable(0);
	this.tax = _knockout2.default.observable();

	this.retailPrice = _knockout2.default.observable();
	this.quantitySavings = _knockout2.default.observable(0);
	this.adSavings = _knockout2.default.observable(0);
	this.orderPromoSavings = _knockout2.default.observable(0);
	this.itemsPromoSavings = _knockout2.default.observable(0);
	this.shippingPromoSavings = _knockout2.default.observable(0);
	this.salePriceSavings = _knockout2.default.observable(0);
	this.rawTotal = _knockout2.default.observable();
	this.subtotal = _knockout2.default.observable();

	this.orderCoupons = _knockout2.default.observableArray([]);
	this.itemsCoupons = _knockout2.default.observableArray([]);
	this.shippingCoupons = _knockout2.default.observableArray([]);
	this.orderPromotions = _knockout2.default.observableArray([]);
	this.itemsPromotions = _knockout2.default.observableArray([]);
	this.shippingPromotions = _knockout2.default.observableArray([]);

	this.totalSavingsAmount = _knockout2.default.observable(0);
	this.totalSavingsPercentage = _knockout2.default.observable(0);

	this.getOrder = function (callbackFunction) {
		_jquery2.default.ajaxSetup({ cache: false });
		var date = new Date();
		_jquery2.default.ajax('/rest/model/atg/commerce/ShoppingCartActor/fullCartInfo?nocache=' + date.getTime(), {
			type: 'get',
			contentType: 'application/json',
			success: function success(data) {
				_this.fill(data.order, data.addInfo);
				_this.fillCommerceItemsPrices(data.commerceItemsPrices);
				_this.fillOrderTotal(data.orderTotal);
				if (callbackFunction && typeof callbackFunction === 'function') {
					callbackFunction();
				}
			}
		});
	};

	this.fill = function (order, addInfo) {
		if (order) {
			_this.orderId(order.id);
			_this.orderNumber(order.orderNumber);
			if (order.ebsId) {
				_this.ebsId(order.ebsId);
			}
			_this.autoDelivery(order.autoDelivery);
			_this.status(order.status);
			_this.trackingNumber(order.trackingNumber);
			_this.fillPriceInfo(order);
			_this.fillCommerceItems(order, addInfo);
			_this.shippingGroup.fill(order.shippingGroup);
			if (order.token) {
				_this.paymentGroup.token = order.token;
			}
			_this.paymentGroup.fill(order.paymentGroup);
			_this.shippingAddress = order.shippingAddress;
			_this.shippingMethod(order.shippingMethod);
		}
	};

	this.fillPriceInfo = function (order) {
		var priceInfo = order.priceInfo;
		if (priceInfo) {
			_this.total(priceInfo.total);
			_this.rawSubtotal(priceInfo.rawSubtotal * 1);
			_this.tax(priceInfo.tax);
			_this.shipping(priceInfo.shipping);
		}
	};

	this.fillOrderTotal = function (orderTotal) {
		if (orderTotal) {
			_this.retailPrice(orderTotal.retailPrice);
			_this.quantitySavings(orderTotal.quantitySavings);
			_this.adSavings(orderTotal.adSavings);
			_this.rawTotal(orderTotal.rawTotal);
			_this.fillCouponsAndPromotions(orderTotal);
			_this.subtotal(orderTotal.subtotal);
			_this.rawShipping(orderTotal.rawShipping);
			_this.totalSavingsAmount(orderTotal.totalSavingsAmount);
			_this.totalSavingsPercentage(orderTotal.totalSavingsPercentage);
			_this.salePriceSavings(orderTotal.salePriceSavings);
		}
	};

	this.fillCouponsAndPromotions = function (orderTotal) {
		var couponsAndPromotions = orderTotal.couponsAndPromotions;
		if (couponsAndPromotions) {
			_this.orderCoupons(couponsAndPromotions.orderCoupons);
			_this.orderPromotions(couponsAndPromotions.orderPromotions);
			_this.itemsCoupons(couponsAndPromotions.itemsCoupons);
			_this.itemsPromotions(couponsAndPromotions.itemsPromotions);
			_this.shippingCoupons(couponsAndPromotions.shippingCoupons);
			_this.shippingPromotions(couponsAndPromotions.shippingPromotions);
		}
		_this.orderPromoSavings(orderTotal.orderPromoSavings);
		_this.itemsPromoSavings(orderTotal.itemsPromoSavings);
		_this.shippingPromoSavings(orderTotal.shippingPromoSavings);
	};

	this.fillCommerceItems = function (order, addInfo) {
		var commerceItems = order.commerceItems;
		var commerceItemsArray = [];
		if (commerceItems) {
			_jquery2.default.each(commerceItems, function (index, value) {
				var commerceItem = new _commerceItem2.default();
				commerceItem.fill(value, addInfo);
				if (order.cartQuantityLimit) {
					commerceItem.cartQuantityLimitFromSite(order.cartQuantityLimit);
				}
				commerceItemsArray.push(commerceItem);
			});
			_this.commerceItems(commerceItemsArray);
		} else {
			_this.commerceItems([]);
		}
	};

	this.fillCommerceItemsPrices = function (commerceItemsPrices) {
		if (commerceItemsPrices && _this.commerceItems) {
			_knockout2.default.utils.arrayForEach(_this.commerceItems(), function (commerceItem) {
				var commerceItemId = commerceItem.repositoryId();
				var commerceItemPrices = commerceItemsPrices[commerceItemId];
				commerceItem.fillPrices(commerceItemPrices);
			});
		}
	};

	this.orderNumberToDisplay = _knockout2.default.computed(function () {
		if (_this.ebsId()) {
			return _this.ebsId();
		} else {
			return _this.orderId();
		}
	});

	this.printTrackingNumber = _knockout2.default.pureComputed(function () {
		var trackingNumber = _this.trackingNumber();
		if (trackingNumber) {
			return "Tracking: " + trackingNumber;
		}
	}, this);
};

exports.default = OrderModel;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _address = __webpack_require__(9);

var _address2 = _interopRequireDefault(_address);

var _creditCard = __webpack_require__(21);

var _creditCard2 = _interopRequireDefault(_creditCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaymentGroupModel = function PaymentGroupModel() {
	var _this = this;

	_classCallCheck(this, PaymentGroupModel);

	this.paymentMethod = _knockout2.default.observable();
	this.billingAddress = new _address2.default();

	// if applicable
	this.creditCard = new _creditCard2.default();
	this.token = "";

	this.fill = function (paymentGroup) {
		if (paymentGroup) {
			var paymentMethod = paymentGroup.paymentMethod;
			_this.paymentMethod(paymentMethod);
			_this.billingAddress.fill(paymentGroup.billingAddress);
			if (paymentMethod == "creditCard") {
				if (_this.token) {
					paymentGroup.token = _this.token;
				}
				_this.creditCard.fill(paymentGroup);
			}
		}
	};

	this.paymentTypeDisplay = _knockout2.default.pureComputed(function () {
		if (_this.paymentMethod() == 'creditCard') {
			return _this.creditCard.printCreditCard();
		} else {
			return _this.paymentMethod();
		}
	}, this);
};

exports.default = PaymentGroupModel;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductModel = function ProductModel() {
	var _this = this;

	_classCallCheck(this, ProductModel);

	this.repositoryId = _knockout2.default.observable('');
	this.childSKUs = _knockout2.default.observableArray([]);
	this.ebsId = _knockout2.default.observable('');
	this.marketingItemNumber = _knockout2.default.observable('');
	this.available = _knockout2.default.observable(true);
	this.displayName = _knockout2.default.observable('');
	this.heading = _knockout2.default.observable('');
	this.rating = _knockout2.default.observable('');
	this.thumbnailImageUrl = _knockout2.default.observable('');
	this.displayLinkInCart = _knockout2.default.observable(true);

	this.currencyCode = _knockout2.default.observable('');
	this.cartQuantityLimit = _knockout2.default.observable('');
	this.quantityOptions = _knockout2.default.observableArray([]);
	this.autoDeliveryQuantityOptions = _knockout2.default.observableArray([]);
	this.isAutoDelivery = _knockout2.default.observable(false); //is AD available
	this.defaultQtyOptionTab = _knockout2.default.observable('oneTimePurchase');
	this.autoDeliveryDiscount = _knockout2.default.observable('');

	this.defaultQtyOption = _knockout2.default.observable('');
	this.defaultADQtyOption = _knockout2.default.observable('');
	this.purchaseOfferId = _knockout2.default.observable('');

	this.briefDescription = _knockout2.default.observable('');
	this.longDescription = _knockout2.default.observable('');
	this.ingredientsDosage = _knockout2.default.observable('');
	this.scienceQuality = _knockout2.default.observable('');
	this.relatedMediaContent = _knockout2.default.observableArray([]);
	this.parentCategories = _knockout2.default.observableArray([]);
	this.seoUrl = _knockout2.default.observable('');
	this.mainImageAltText = _knockout2.default.observable('');
	this.downloadableContent = _knockout2.default.observable();
	this.availabilityMessage = _knockout2.default.observable('');

	this.badge = _knockout2.default.observable('');

	this.reviewCount = _knockout2.default.observable(0);

	this.fill = function (json) {
		if (json) {
			_this.repositoryId(json.repositoryId);
			if (json.childSKUs.length > 0) {
				_this.childSKUs(json.childSKUs);
			}
			_this.ebsId(json.ebsId);
			_this.marketingItemNumber(json.marketingItemNumber);
			_this.available(json.availabilityMessage == '');
			_this.availabilityMessage(json.availabilityMessage);
			_this.displayName(json.displayName);
			_this.heading(json.heading);
			_this.rating(json.rating);
			_this.thumbnailImageUrl(json.thumbnailImageUrl);
			_this.displayLinkInCart(json.displayLinkInCart);
			if (json.isAutoDelivery) {
				_this.isAutoDelivery(json.isAutoDelivery);
				_this.autoDeliveryDiscount(json.autoDeliveryDiscount);
			}
			_this.defaultQtyOption(json.defaultQtyOption);
			_this.defaultADQtyOption(json.defaultADQtyOption);
			_this.currencyCode(json.currencyCode);
			_this.cartQuantityLimit(json.cartQuantityLimit);
			_this.quantityOptions(json.quantityOptions);
			if (json.autoDeliveryQuantityOptions.length > 0) {
				_this.autoDeliveryQuantityOptions(json.autoDeliveryQuantityOptions);
			} else {
				_this.autoDeliveryQuantityOptions(json.quantityOptions);
			}
			if (json.downloadableContent) {
				_this.downloadableContent(json.downloadableContent.url);
			}
			_this.briefDescription(json.briefDescription);
			_this.longDescription(json.longDescription);
			_this.ingredientsDosage(json.ingredientsDosage);
			_this.scienceQuality(json.scienceQuality);
			_this.addLargeImageToRelated(json);
			_this.relatedMediaContent(json.relatedMediaContent);
			_this.parentCategories(json.parentCategories);
			_this.defaultQtyOptionTab(json.defaultQtyOptionTab);
			_this.seoUrl(json.seoUrl ? json.seoUrl : "/pdp?productId=" + json.repositoryId);
			if (json.mainImageAltText) {
				_this.mainImageAltText = json.mainImageAltText;
			}
			_this.badge(json.badge ? json.badge : '');
		}
	};

	this.getFirstChildSkuId = _knockout2.default.computed(function () {
		if (_this.childSKUs().length > 0) {
			return _this.childSKUs()[0].id;
		}
	}, this);

	this.displayItemNumber = _knockout2.default.computed(function () {
		if (_this.marketingItemNumber()) return "Item #" + _this.marketingItemNumber();else if (_this.ebsId()) return "Item #" + _this.ebsId();
	}, this);

	this.pdpLink = function () {
		var id = _this.repositoryId();
		return "/pdp?productId=" + id;
	};

	this.largeImage = function () {
		var ebsId = _this.ebsId();
		return ebsId ? "/assets/images/product-images/large/product-" + ebsId + ".jpg" : "/assets/images/product/product-image-not-available.jpg";
	};

	this.thumbnailImage = function () {
		var ebsId = _this.ebsId();
		return ebsId ? "/assets/images/product-images/thumbnail/product-" + ebsId + ".jpg" : "/assets/images/product/product-image-not-available.jpg";
	};

	this.addLargeImageToRelated = function (json) {
		var url = _this.largeImage();
		var description = '';
		if (json.mainImageAltText) {
			description = json.mainImageAltText;
		} else if (json.displayName) {
			description = json.displayName;
		}
		var image = { mediaType: "Image", url: url, description: description };
		json.relatedMediaContent.unshift(image);
	};

	this.isEmpty = function () {
		var result = false;
		if (_this.repositoryId() && _this.displayName() && _this.childSKUs().length) {
			result = true;
		}
		return result;
	};
};

exports.default = ProductModel;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _creditCard = __webpack_require__(21);

var _creditCard2 = _interopRequireDefault(_creditCard);

var _address = __webpack_require__(9);

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProfileModel = function ProfileModel() {
	var _this = this;

	_classCallCheck(this, ProfileModel);

	this.firstName = _knockout2.default.observable('');
	this.lastName = _knockout2.default.observable('');
	this.email = _knockout2.default.observable('');
	this.id = _knockout2.default.observable('');
	this.securityStatus = _knockout2.default.observable(1);
	this.nickname = _knockout2.default.observable('');
	this.phoneNumber = _knockout2.default.observable('');
	this.hasCsrRole = _knockout2.default.observable(false);
	this.impersonatedByCsr = _knockout2.default.observable('');
	this.registeredOnCheckout = _knockout2.default.observable(false);
	this.loggedInOnCheckout = _knockout2.default.observable(false);

	this.defaultCreditCard = new _creditCard2.default();
	this.shippingAddress = new _address2.default();
	this.homeAddress = new _address2.default();

	this.userAcceptConditions = _knockout2.default.observable(false);

	this.fullName = _knockout2.default.computed(function () {
		return _this.firstName() + " " + _this.lastName();
	}, this);

	this.loggedin = _knockout2.default.computed(function () {
		return _this.securityStatus() > 1;
	}, this);

	this.isImpersonationMode = _knockout2.default.computed(function () {
		if (_this.impersonatedByCsr().length > 0) {
			return true;
		} else {
			return false;
		}
	}, this);

	this.isCSR = _knockout2.default.computed(function () {
		if (_this.hasCsrRole() || _this.isImpersonationMode()) {
			return true;
		} else {
			return false;
		}
	}, this);

	this.fill = function (profile) {
		if (profile) {
			if (profile.id) {
				_this.id(profile.id);
			}
			_this.firstName(profile.firstName);
			_this.lastName(profile.lastName);
			if (profile.nickname) {
				_this.nickname(profile.nickname);
			}
			_this.email(profile.email);
			if (profile.phoneNumber) {
				_this.phoneNumber(profile.phoneNumber);
			}
			_this.securityStatus(profile.securityStatus);
			if (profile.hasCsrRole != null) {
				_this.hasCsrRole(profile.hasCsrRole);
			}
			if (profile.impersonatedByCsr != null) {
				_this.impersonatedByCsr(profile.impersonatedByCsr);
			} else {
				_this.impersonatedByCsr('');
			}
			_this.defaultCreditCard.fill(profile.defaultCreditCard);
			_this.shippingAddress.fill(profile.shippingAddress);
			_this.homeAddress.fill(profile.homeAddress);
			_this.userAcceptConditions(profile.userAcceptConditions);
		}
	};

	this.getProfile = function (callbackFunction) {
		_jquery2.default.ajax('/rest/model/atg/userprofiling/ProfileActor/summary', {
			type: 'post',
			contentType: 'application/json',
			success: function success(data) {
				var profile = data.profile;
				if (profile) {
					_this.fill(profile);
				}
				_this.isImpersonationMode();
				_this.isCSR();
				if (callbackFunction && typeof callbackFunction === 'function') {
					callbackFunction();
				}
			}
		});
	};

	this.ensureNotAvailable = function (value) {
		return value ? value : "N/A";
	};
};

exports.default = ProfileModel;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _address = __webpack_require__(9);

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShippingGroupModel = function ShippingGroupModel() {
	var _this = this;

	_classCallCheck(this, ShippingGroupModel);

	this.shippingMethod = _knockout2.default.observable();
	this.shippingAddress = new _address2.default();

	this.fill = function (shippingGroup) {
		if (shippingGroup) {
			_this.shippingMethod(shippingGroup.shippingMethod);
			_this.shippingAddress.fill(shippingGroup.shippingAddress);
		}
	};
};

exports.default = ShippingGroupModel;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SiteModel = function SiteModel() {
	var _this = this;

	_classCallCheck(this, SiteModel);

	this.id = _knockout2.default.observable();

	this.pdpDefaultTab = _knockout2.default.observable();
	this.pdpTabsOrder = _knockout2.default.observable();

	this.cartQuantityLimit = _knockout2.default.observable();
	this.payPalEnabled = _knockout2.default.observable(true);
	this.cvvValidationEnabled = _knockout2.default.observable(true);
	this.allowChangeAdOnOrderReview = _knockout2.default.observable(true);
	this.reviewBvApiUrl = _knockout2.default.observable('');
	this.bvStatiscticsUrl = _knockout2.default.observable('');
	this.symantecVerisignTag = _knockout2.default.observable('');
	this.brandName = _knockout2.default.observable('');
	this.dynamicForms = _knockout2.default.observable([]);

	this.fill = function (json) {
		if (json) {
			_this.id(json.id);
			_this.pdpDefaultTab(json.pdpDefaultTab);
			_this.pdpTabsOrder(json.pdpTabsOrder);
			_this.cartQuantityLimit(json.cartQuantityLimit);
			_this.payPalEnabled(json.payPalEnabled);
			_this.cvvValidationEnabled(json.cvvValidationEnabled);
			_this.allowChangeAdOnOrderReview(json.allowChangeAdOnOrderReview);
			_this.reviewBvApiUrl(json.reviewBvApiUrl);
			_this.bvStatiscticsUrl(json.bvStatiscticsUrl);
			_this.symantecVerisignTag(json.symantecVerisignTag);
			_this.brandName(json.brandName);
			_this.dynamicForms(json.dynamicForms);
		}
	};

	this.getSite = function () {
		_jquery2.default.ajax('/rest/model/hd/site/SiteInfoActor/siteInfo', {
			type: 'get',
			contentType: 'application/json',
			success: function success(data) {
				var siteInfo = data.siteInfo;
				if (siteInfo) {
					_this.fill(siteInfo);
				}
			}
		});
	};

	this.isEmpty = _knockout2.default.pureComputed(function () {
		return !_this.id();
	}, this);
};

exports.default = SiteModel;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.errorCSS = errorCSS;
exports.errorMessage = errorMessage;
exports.fixPrice = fixPrice;
exports.clearErrors = clearErrors;
exports.pushState = pushState;
exports.replaceState = replaceState;
exports.changeUrl = changeUrl;
exports.scrollToTop = scrollToTop;
exports.addCustomCss = addCustomCss;
exports.addCustomJs = addCustomJs;
exports.clearCustomCss = clearCustomCss;
exports.errorCSSWithAdditionalClasses = errorCSSWithAdditionalClasses;
exports.getParameterByName = getParameterByName;
exports.callFunctionAfterElementRender = callFunctionAfterElementRender;
exports.callFunctionAfterModelFilled = callFunctionAfterModelFilled;
exports.showDynamicForm = showDynamicForm;
exports.parseRecords = parseRecords;
exports.slickConfigSetup = slickConfigSetup;
exports.goToView = goToView;
exports.goToURL = goToURL;
exports.getApp = getApp;
exports.getNavigationPathname = getNavigationPathname;
exports.getNavigationQuery = getNavigationQuery;
exports.getNavAndQuery = getNavAndQuery;
exports.addItemToCart = addItemToCart;
exports.getErrorMessages = getErrorMessages;

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function errorCSS(propertyName, self, ko) {
	var errors = self.inputErrorLabels();
	return ko.pureComputed(function () {
		var css = "";
		for (var i = 0; i < errors.length; i++) {
			if (propertyName == errors[i]) {
				css = "wl-error";
				break;
			}
		}
		return css;
	}, self);
}

function errorMessage(propertyName, self, ko) {
	var errors = self.inputErrors();
	return ko.pureComputed(function () {
		var message = "";
		for (var i = 0; i < errors.length; i++) {
			var current = errors[i];
			if (ko.unwrap(current['propertyPath']) === propertyName) {
				message = current['localizedMessage'];
				break;
			}
		}
		return message;
	}, self);
}

function fixPrice(price) {
	if (price || price == 0) {
		var total = Number(price);
		var neg = false;
		if (total < 0) {
			neg = true;
			total = Math.abs(total);
		}
		return (neg ? "-$" : '$') + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
	}
}

function clearErrors(self, errors, inputErrors, inputErrorLabels) {
	if (!errors) {
		errors = self.errors;
	}
	if (!inputErrors) {
		inputErrors = self.inputErrors;
	}
	if (!inputErrorLabels) {
		inputErrorLabels = self.inputErrorLabels;
	}
	errors([]);
	inputErrors([]);
	inputErrorLabels([]);
}

function pushState(nav, query, seoUrl) {
	if (!(history.state && history.state.url == seoUrl)) {
		if (seoUrl[0] != '/') {
			seoUrl = '/' + seoUrl;
		}
		seoUrl = seoUrl.replace(/\/+/g, '/');
		window.history.pushState({
			url: seoUrl,
			view: nav,
			params: query,
			prevState: history.state
		}, window.document.title, seoUrl);
	}
}

function replaceState(nav, query, seoUrl) {
	history.replaceState({
		url: seoUrl,
		view: nav,
		params: query,
		prevState: history.state ? history.state.prevState : null
	}, query, seoUrl);
}

function changeUrl(nav, query) {
	if (!window.nav) {
		var url = "/" + nav;
		if ("" != query && undefined != query && !_jquery2.default.isEmptyObject(query)) {
			var queryString = decodeURIComponent(_jquery2.default.param(query));
			url = url + "?" + queryString;
		}
		// window.history.pushState({url : url, view : url, params : query,
		// prevState : history.state}, window.document.title, url);
		pushState(nav, query, url);
	} /*
   * else{ window.nav = ''; }
   */
}

function scrollToTop() {
	(0, _jquery2.default)("html, body").animate({
		scrollTop: 0
	}, 500);
	return false;
}

function addCustomCss(startId, endId, css) {
	clearCustomCss(startId, endId);
	(0, _jquery2.default)("style[data-id='" + startId + "']").after(css);
}
function addCustomJs(id, js) {
	(0, _jquery2.default)("#" + id).empty();
	(0, _jquery2.default)("#" + id).append(js);
}

function clearCustomCss(startId, endId) {
	// var nextElement = $("style[data-id='" + startId + "']").next();
	// while (nextElement.attr("data-id") != endId) {
	// 	nextElement.remove();
	// 	nextElement = $("style[data-id='" + startId + "']").next();
	// }
}

function errorCSSWithAdditionalClasses(propertyName, self, ko, additionalClasses) {
	var errors = self.inputErrorLabels();
	return ko.pureComputed(function () {
		var css = "";
		for (var i = 0; i < errors.length; i++) {
			if (propertyName == errors[i]) {
				css = "wl-error";
				break;
			}
		}
		if (additionalClasses) {
			css += " " + additionalClasses;
		}
		return css;
	}, self);
}

function getParameterByName(name, url, ignorePlus) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	    results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';

	if (ignorePlus) {
		return decodeURIComponent(results[2]);
	} else {
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
}

function callFunctionAfterElementRender(selector, callbackFunction, maxAttemptsCount, recheckAfterMs) {
	if (callbackFunction && typeof callbackFunction === 'function') {
		var loopToFindElement = function loopToFindElement() {
			if (maxAttempts) {
				if ((0, _jquery2.default)(selector).length) {
					callbackFunction();
				} else {
					setTimeout(loopToFindElement, timeToWait);
					maxAttempts--;
				}
			}
		};

		var maxAttempts = maxAttemptsCount ? maxAttemptsCount : 50;
		var timeToWait = recheckAfterMs ? recheckAfterMs : 100;
		loopToFindElement();
	}
}

function callFunctionAfterModelFilled(modelWithIsEmptyFunction, callbackFunction, maxAttemptsCount, recheckAfterMs) {
	if (modelWithIsEmptyFunction && callbackFunction && typeof callbackFunction === 'function' && typeof modelWithIsEmptyFunction.isEmpty === 'function') {
		var loopToCheckModelFilled = function loopToCheckModelFilled() {
			if (maxAttempts) {
				if (!modelWithIsEmptyFunction.isEmpty()) {
					callbackFunction();
				} else {
					setTimeout(loopToCheckModelFilled, timeToWait);
					maxAttempts--;
				}
			}
		};

		var maxAttempts = maxAttemptsCount ? maxAttemptsCount : 50;
		var timeToWait = recheckAfterMs ? recheckAfterMs : 100;
		loopToCheckModelFilled();
	}
}

function showDynamicForm(dynamicForm, ko) {
	if (dynamicForm && dynamicForm.triggeringConfiguration) {
		var triggeringConfig = dynamicForm.triggeringConfiguration;
		setTimeout(function () {
			try {
				var dynamicFormId = dynamicForm.id;
				if (triggeringConfig.type == "directOnPage" || triggeringConfig.type == "promoSlot") {
					var selector = triggeringConfig.selector;
					callFunctionAfterElementRender(selector, function () {
						var componentBindingString = (0, _jquery2.default)('<!-- ko component: {name: "dynamicForm", params: {formId: "' + dynamicFormId + '", formJson: ' + JSON.stringify(dynamicForm) + '}} -->' + '<!-- /ko -->');
						componentBindingString.insertAfter(selector);
						ko.applyBindings({}, componentBindingString[0]);
					});
				} else {
					var componentBindingString = (0, _jquery2.default)('<!-- ko component: {name: "dynamicForm", params: {formId: "' + dynamicFormId + '", formJson: ' + JSON.stringify(dynamicForm) + '}} -->' + '<!-- /ko -->');
					if (triggeringConfig.type == "popUp") {
						componentBindingString.insertAfter("#dynamicFormModalInner");
						ko.applyBindings({}, componentBindingString[0]);
						var triggerWidth = '600';
						var triggerHeight = 'auto';
						var maxModalHeight = (0, _jquery2.default)(window).outerHeight() - (0, _jquery2.default)('.wl-header-top').outerHeight() * 2;
						if ((0, _jquery2.default)(window).outerWidth() < 600) {
							triggerWidth = '320';
						}
						callFunctionAfterElementRender('#dynamicFormModal .dynamic-form', function () {
							var dynamicFormModalHeight = (0, _jquery2.default)('#dynamicFormModal').outerHeight();
							if (dynamicFormModalHeight > maxModalHeight) {
								triggerHeight = maxModalHeight;
								(0, _jquery2.default)('#dynamicFormModal').addClass('scrollable-y');
							}
							(0, _jquery2.default)('#dynamicFormModal').dialog({
								resizable: false,
								draggable: false,
								modal: true,
								show: 'fade',
								hide: 'fade',
								width: triggerWidth,
								height: triggerHeight,
								dialogClass: 'fixed',
								open: function open(event, ui) {},
								close: function close(event, ui) {
									(0, _jquery2.default)(this).dialog('close');
									(0, _jquery2.default)(this).html('<div id="dynamicFormModalInner"></div>');
								}
							});
						});
					} else if (triggeringConfig.type == "lightbox") {
						(0, _jquery2.default)('#dynamicFormFlyoutContainer').html('<div id="dynamicFormFlyoutInner"></div>');
						componentBindingString.insertAfter("#dynamicFormFlyoutInner");
						ko.applyBindings({}, componentBindingString[0]);
						callFunctionAfterElementRender('#dynamicFormFlyoutContainer .dynamic-form', function () {
							openFlyoutForm('#dynamicFormFlyout');
							(0, _jquery2.default)('#dynamicFormFlyout').find('.closeThisFlyoutAction').on('click', function (event) {
								event.preventDefault();
								(0, _jquery2.default)(this).closest('.flyout-form').removeClass('open');
								(0, _jquery2.default)(this).closest('.flyout-form-container').find('.dynamic-form-content').removeAttr('style');
								(0, _jquery2.default)('.flyout-form-overlay').removeClass('open');
								(0, _jquery2.default)('html').removeClass('overlayed');
							});
							(0, _jquery2.default)('.flyout-form-overlay').on('click', function (event) {
								event.preventDefault();
								(0, _jquery2.default)('.flyout-form-overlay').removeClass('open');
								(0, _jquery2.default)('html').removeClass('overlayed');
								var $flyoutForm = (0, _jquery2.default)('.flyout-form');
								$flyoutForm.removeClass('open');
								$flyoutForm.find('.dynamic-form-content').removeAttr('style');
								$flyoutForm.removeAttr('style');
							});
						});
					}
				}
			} catch (error) {
				console.log(error);
			}
		}, triggeringConfig.triggeringTimeout);
	}
}

function parseRecords(records) {
	var result = [];
	if (records) {
		for (var j = 0; j < records.length; j++) {
			var temp = [];
			Object.keys(records[j].records[0].attributes).forEach(function (key) {
				temp[key.replace('.', '_')] = records[j].records[0].attributes[key];
				result[j] = temp;
			});
		}
	}
	return result;
}
function slickConfigSetup(isUseTwoColumnPage) {
	var result = '{\
		"infinite": false,\
		"speed": 300,\
		"slidesToShow": ' + (isUseTwoColumnPage ? 4 : 5) + ',\
		"slidesToScroll": ' + (isUseTwoColumnPage ? 4 : 5) + ',\
		"responsive": [\
		  {\
			"breakpoint": 1280,\
			"settings": {\
			  "slidesToShow": ' + (isUseTwoColumnPage ? 4 : 5) + ',\
			  "slidesToScroll": ' + (isUseTwoColumnPage ? 4 : 5) + '\
			}\
		  },\
		  {\
			"breakpoint": 1024,\
			"settings": {\
			  "slidesToShow": ' + (isUseTwoColumnPage ? 3 : 4) + ',\
			  "slidesToScroll": ' + (isUseTwoColumnPage ? 3 : 4) + '\
			}\
		  },\
		  {\
			"breakpoint": 900,\
			"settings": {\
			  "slidesToShow": ' + (isUseTwoColumnPage ? 2 : 3) + ',\
			  "slidesToScroll": ' + (isUseTwoColumnPage ? 2 : 3) + '\
			}\
		  },\
		  {\
			"breakpoint": 600,\
			"settings": {\
			  "slidesToShow": ' + (isUseTwoColumnPage ? 1 : 2) + ',\
			  "slidesToScroll": ' + (isUseTwoColumnPage ? 1 : 2) + '\
			}\
		  },\
		  {\
			"breakpoint": 400,\
			"settings": {\
			  "slidesToShow": 1,\
			  "slidesToScroll": 1\
			}\
		  }\
		]\
	  }';
	return result;
}

function goToView(e, state) {
	var viewId = (0, _jquery2.default)(e.target).attr("data-id");
	var href = (0, _jquery2.default)(e.target).attr('href');
	var origin = (0, _jquery2.default)(e.target).attr('origin');
	state.origin(origin ? origin : '');
	var data = {};
	var level = 0;
	var $target = (0, _jquery2.default)(e.target);
	while (!viewId && level < 5) {
		$target = $target.parent();
		viewId = $target.data('id');
		href = $target.attr('href');
		level += 1;
	}
	if ("externalNavId" == viewId) {
		if (href) {
			window.location.href = href;
		} else {
			state.router.replace('static', { pageLink: '/page-not-found' }, '/page-not-found');
		}
	} else {
		if (viewId) {
			data = getNavAndQuery(viewId);
		}
		if (e.ctrlKey) {
			window.open(href, '_blank');
		} else if (viewId) {
			state.router.notify(data.nav, data.query, href);
		}
	}
}

window.imgErrorProduct = function (image) {
	image.onerror = "";
	image.src = "/assets/images/product/product-image-not-available.jpg";
	return true;
};
function goToURL(self, url, query, seoUrl) {

	for (var prop in query) {
		if (!query[prop]) {
			delete query[prop];
		}
	}

	if (!url) {
		url = '';
	}
	self.state.data().app.go(url, query, seoUrl);
}
function getApp(self) {
	return self.state;
}
function getNavigationPathname() {
	var pathname = window.location.pathname;
	if (pathname[0] == "/") {
		pathname = pathname.substring(1, pathname.length);
	}
	return pathname;
}
function getNavigationQuery() {
	return window.location.search;
}
function getNavAndQuery(dataId) {
	var index = dataId.indexOf('?');
	if (index == -1) {
		return {
			nav: dataId
		};
	}
	var nav = dataId.substr(0, index);
	var params = dataId.substr(index + 1).split('&');
	var query = {};
	for (var i = 0; i < params.length; i++) {
		var keyValue = params[i].split('=');
		query[keyValue[0]] = keyValue[1];
	}
	return {
		nav: nav,
		query: query
	};
}
function addItemToCart(data, callback, self) {
	if (!data.useDefaultQtyOption) {
		data.useDefaultQtyOption = false;
	}
	_jquery2.default.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/addItemToOrder", {
		type: "post",
		contentType: "application/json",
		data: JSON.stringify(data),
		success: function success(returnedData) {
			callback(returnedData);
			goToURL(self, '/cart', {}, '/cart');
		}
	});
}

function getErrorMessages(formExceptions, self, errors, inputErrors, inputErrorLabels) {
	if (!errors) {
		errors = self.errors;
	}
	if (!inputErrors) {
		inputErrors = self.inputErrors;
	}
	if (!inputErrorLabels) {
		inputErrorLabels = self.inputErrorLabels;
	}
	errors([]);
	inputErrors([]);
	inputErrorLabels([]);
	for (var i = 0; i < formExceptions.length; i++) {
		var exception = formExceptions[i];
		var errorCode = exception.errorCode;
		if ("atg.droplet.DropletException" == errorCode) {
			errors.push(exception);
		} else {
			var path = exception.propertyPath;
			if (path) {
				inputErrors.push(exception);
				inputErrorLabels.push(path);
			} else {
				errors.push(exception);
			}
		}
	}
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Meta = function Meta() {
	_classCallCheck(this, Meta);

	var self = this;
	var metaTitle = (0, _jquery2.default)('meta[name="title"]');
	var metaDescription = (0, _jquery2.default)('meta[name="description"]');
	var metaKeywords = (0, _jquery2.default)('meta[name="keywords"]');

	self.metaTitle = function (title) {
		if (title) {
			metaTitle.attr('content', title + self.metaSuffix);
		}
	};

	self.pagesWithTitle = ['pdp', 'browse', 'static', 'dynamic-form-page'];

	self.description = function (description) {
		if (description) {
			metaDescription.attr('content', description.replace(/\<\/[a-zA-Z]+\>|\<[a-zA-Z]+\>/g, ''));
		} else {
			metaDescription.attr('content', '');
		}
	};

	self.keywords = function (keywords) {
		if (!window.hideSeoKeywords) {
			if (!keywords) {
				keywords = '';
			}
			metaKeywords.attr('content', keywords);
		}
	};

	self.titleSet = true;

	self.defaultTitle = window.defaultPageTitle;
	self.metaSuffix = window.metaSuffix;

	self.pageTitle = function (pageTitle) {
		if (pageTitle) {
			self.titleSet = true;
			document.title = pageTitle + self.metaSuffix;
		} else {
			document.title = self.defaultTitle;
		}
	};
};

exports.default = new Meta();

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Router = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _state = __webpack_require__(10);

var _state2 = _interopRequireDefault(_state);

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _crossroads = __webpack_require__(18);

var _crossroads2 = _interopRequireDefault(_crossroads);

var _hasher = __webpack_require__(19);

var _hasher2 = _interopRequireDefault(_hasher);

var _common = __webpack_require__(34);

var _meta = __webpack_require__(35);

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = exports.Router = function () {
    function Router(app) {
        var _this = this;

        _classCallCheck(this, Router);

        this.app = app;
        this.menu = app.menu;

        this.init = false;
        this.hash = '';

        window.onpopstate = function (event) {
            if (event.state && event.state.url) {
                _this.notify(event.state.view, event.state.params, event.state.url);
                return false;
            } else {
                history.back();
            }
        };

        _crossroads2.default.addRoute('/{name}', function (name) {
            if (name) {
                _this.app.currentState(new _state2.default(name, _this.app));
            }
        });
        _crossroads2.default.addRoute('/{name}{?query}', function (name) {
            if (name) {
                _this.replace(name['name'], name['?query']);
            }
        });
        _crossroads2.default.addRoute('/{?query}', function (name) {
            if (name) {
                _this.replace('', name['?query']);
            }
        });
        _crossroads2.default.addRoute('', function () {
            _this.app.currentState(new _state2.default('homepage', _this.app));
        });
    }

    _createClass(Router, [{
        key: 'start',
        value: function start() {
            var _this2 = this;

            var parseHash = function parseHash(newHash, oldHash) {
                if (newHash) {
                    _this2.hash = '#' + newHash;
                }
            };

            _crossroads2.default.parse(window.location.pathname);
            _crossroads2.default.normalizeFn = _crossroads2.default.NORM_AS_OBJECT;
            _hasher2.default.initialized.add(parseHash);
            _hasher2.default.changed.add(parseHash);
            _hasher2.default.init();
        }
    }, {
        key: 'processMeta',
        value: function processMeta(nav) {
            if (_meta2.default.pagesWithTitle.indexOf(nav) == -1) {
                document.title = _meta2.default.defaultTitle;
            }
            _meta2.default.titleSet = false;
        }
    }, {
        key: 'go',
        value: function go(nav, query, seoUrl, funcToProcessUrl) {
            if (!seoUrl) {
                (0, _common.changeUrl)(nav, query);
            } else {
                funcToProcessUrl(nav, query, seoUrl);
            }
            if (nav === '' || nav === '/') {
                nav = 'landing';
            }
            if (nav && nav.endsWith('/')) {
                nav = nav.substr(0, nav.length - 1);
            }
            this.processMeta(nav);
            this.app.nav(nav);
            if (nav.charAt(0) === '/') {
                nav = nav.replace(/^\//, '');
            }
            var newState = new _state2.default(nav, this.app);
            this.app.currentState(newState);
            (0, _common.scrollToTop)();
            (0, _jquery2.default)("#customJs").empty();
        }
    }, {
        key: 'notify',
        value: function notify(n, query, seoUrl) {
            this.process(n, query, seoUrl, _common.pushState);
        }
    }, {
        key: 'replace',
        value: function replace(n, query, seoUrl) {
            this.process(n, query, seoUrl, _common.replaceState);
        }
    }, {
        key: 'process',
        value: function process(n, query, seoUrl, funcToProcessUrl) {
            this.init = true;
            var nav = n;
            if (window.nav) {
                var data = this.getUriAndQuery(window.nav);
                nav = data.nav;
                query = this.getUrlVars(data.query);
                var q = window.location.search;
                seoUrl = window.location.pathname + q;
                window.nav = '';
            }
            if (this.hash && seoUrl) {
                var indexOfHash = seoUrl.indexOf('#');
                if (indexOfHash < 0) {
                    seoUrl += this.hash;
                } else {
                    seoUrl = seoUrl.substr(0, indexOfHash) + this.hash;
                }
            }
            this.hash = '';
            if (nav === '') {
                seoUrl = '';
            }
            window.navigation = nav;
            window.query = query;
            _jquery2.default.getJSON("/rest/model/hd/userprofiling/AccessControlActor/accessControl?requestURL=" + seoUrl, function (response) {
                if (response.accessAllowed) {
                    this.go(nav, query, seoUrl, funcToProcessUrl);
                } else if (response.csrMessage) {
                    this.app.logout(true);
                    this.go('', { 'impersonatedLogout': 'true' });
                } else {
                    this.go(response.redirectURL, {}, response.redirectURL, _common.replaceState);
                }
            });
        }
    }, {
        key: 'getUrlVars',
        value: function getUrlVars(query_string) {
            var vars = {},
                hash = void 0;

            if (query_string) {
                var hashes = query_string.split('&');
                for (var i = 0; i < hashes.length; i++) {
                    hash = hashes[i].split('=');
                    vars[hash[0]] = hash[1];
                }

                return vars;
            } else {
                return false;
            }
        }
    }, {
        key: 'getUriAndQuery',
        value: function getUriAndQuery(url) {
            var args = url.split('?');
            return { nav: args[0], query: args[1] };
        }
    }]);

    return Router;
}();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_knockout2.default.templateSources.stringTemplate = function (element, html) {
    this.domElement = element;
    this.html = _knockout2.default.utils.unwrapObservable(html);
};
_knockout2.default.templateSources.stringTemplate.prototype.text = function () {
    if (arguments.length == 0) return this.html;
    this.html = _knockout2.default.utils.unwrapObservable(arguments[0]);
};
// The following is the copy-paste of named template data method
_knockout2.default.templateSources.stringTemplate.prototype.data = function (key) {
    if (arguments.length == 1) {
        return _knockout2.default.utils.domData.get(this.domElement, "templateSourceData_" + key);
    } else {
        _knockout2.default.utils.domData.set(this.domElement, "templateSourceData_" + key, arguments[1]);
    }
};

var engine = new _knockout2.default.nativeTemplateEngine();

// Here I have to redefine renderTemplate method. The reason is I want options.html value being accessible in makeTemplateSource method.
// Redefining works fine because makeTemplateSource we call only twice - in renderTemplate and rewriteTemplate methods.
// But rewriteTemplate is turned off by allowTemplateRewriting=false in nativeTemplateEngine.
engine.renderTemplate = function (template, bindingContext, options, templateDocument) {
    var templateSource = this.makeTemplateSource(template, templateDocument, bindingContext, options);
    return this.renderTemplateSource(templateSource, bindingContext, options);
};
// The following is the copy-paste of original method with only two new strings inserted:
engine.makeTemplateSource = function (template, templateDocument, bindingContext, options) {
    // Named template
    if (typeof template == "string") {
        templateDocument = templateDocument || document;
        var elem = templateDocument.getElementById(template);
        if (!elem) throw new Error("Cannot find template with ID " + template);
        return new _knockout2.default.templateSources.domElement(elem);
    }
    // Here we look for options.html and call our stringTemplate source
    else if (options && options.html) {
            // String template
            return new _knockout2.default.templateSources.stringTemplate(template, options.html);
        } else if (template.nodeType == 1 || template.nodeType == 8) {
            // Anonymous template
            return new _knockout2.default.templateSources.anonymousTemplate(template);
        } else throw new Error("Unknown template type: " + template);
};
_knockout2.default.setTemplateEngine(engine);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = __webpack_require__(39);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(59);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { model: _model2.default, template: _view2.default };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _state = __webpack_require__(10);

var _state2 = _interopRequireDefault(_state);

var _router = __webpack_require__(36);

var _site = __webpack_require__(33);

var _site2 = _interopRequireDefault(_site);

var _profile = __webpack_require__(31);

var _profile2 = _interopRequireDefault(_profile);

var _order = __webpack_require__(28);

var _order2 = _interopRequireDefault(_order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import '../../scripts/utils/bindings';

var MainVM = function MainVM() {
    var _this = this;

    _classCallCheck(this, MainVM);

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

    this.header = new _state2.default('header', this);

    this.currentState = _knockout2.default.observable(null);
    this.router = new _router.Router(this);
    this.router.start();
    this.go = function (navigation, query, seoUrl) {
        _this.router.notify(navigation, query, seoUrl);
    };

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
    this.footer = new _state2.default('footer', this);
};

exports.default = MainVM;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = __webpack_require__(41);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(60);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { model: _model2.default, template: _view2.default };

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterVM = function FooterVM(state) {
    _classCallCheck(this, FooterVM);

    this.state = state;

    this.contentItem = _knockout2.default.observable();
};

exports.default = FooterVM;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = __webpack_require__(43);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(61);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { model: _model2.default, template: _view2.default };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(17);

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderVM = function HeaderVM(state) {
    _classCallCheck(this, HeaderVM);

    this.state = state;
    // this.contentItem = ko.observable();

    setTimeout(function () {

        // Select Header
        (0, _jquery2.default)('#changeMoneyHeader').selectpicker({
            style: 'header-changeMoney__button',
            size: 4,
            width: 'fit',
            container: '.header-changeMoney'

        });

        // Select Header
        (0, _jquery2.default)('#header-search').selectpicker({
            style: 'header-search__selectBtn',
            width: 'fit',
            container: '.header-search__selectButton'

        });

        // Toggle Menu
        (0, _jquery2.default)('.header__menuList-item').hide();
        (0, _jquery2.default)('.toggle-menu-bar').on('click', function () {
            (0, _jquery2.default)('.header__menuList-item').toggle();
        });
    }, 0);
};

exports.default = HeaderVM;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = __webpack_require__(45);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(62);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { model: _model2.default, template: _view2.default };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartVM = function CartVM(state) {
    _classCallCheck(this, CartVM);

    var self = this,
        data = {
        products: [{
            img: '/assets/images/Laptop-600x600.jpg',
            title: 'Nerocool EN52377 Dead Silence Gaming Cube Case',
            brand: 'Nerocool',
            price: '1999.00',
            quantity: 1
        }, {
            img: '/assets/images/Laptop-600x600.jpg',
            title: 'Apple EN52377 Life Noise Playing Circle Bag',
            brand: 'Apple',
            price: '3549.35',
            quantity: 1
        }]
    };

    self.products = _knockout2.default.observableArray(data.products);

    this.removeItem = function () {
        self.products.remove(this);
    };

    this.quantityPlus = function () {};

    self.productQuantity = function () {
        console.log(this);
    };
    self.productEnableButton = _knockout2.default.observable();
};

exports.default = CartVM;
;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = __webpack_require__(47);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(63);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { model: _model2.default, template: _view2.default };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

setTimeout(function () {

    // $('.brand-carousel__wrapper').slick({
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     nextArrow: '<i class="fa fa-chevron-right brand-carousel__rightButton"></i>',
    //     prevArrow: '<i class="fa fa-chevron-left brand-carousel__leftButton"></i>',
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //         // You can unslick at a given breakpoint now by adding:
    //         // settings: "unslick"
    //         // instead of a settings object
    //     ]
    // });

    //BestsellersMain
    (0, _jquery2.default)('#BestsellersMain').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-chevron-right title-carousel__rightButton"></i>',
        prevArrow: '<i class="fa fa-chevron-left title-carousel__leftButton"></i>',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    // Big offer

    (0, _jquery2.default)('.offer-big__item').on('init', function (event, slick) {

        var container = (0, _jquery2.default)('.container').width() + 60,
            elementSingleHeight = (0, _jquery2.default)('.offer-big__item-double').outerHeight(),
            elementSingle = (0, _jquery2.default)('.offer-big__item-double').width(container / 4 - 8),
            elementBig = (0, _jquery2.default)('.offer-big__item-single').width(container / 2 - 8);
        console.log(container);
    });

    (0, _jquery2.default)('.offer-big__item').slick({
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        // the magic
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 960,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    (0, _jquery2.default)('.offer-big__item').on('breakpoint', function (event, slick, breakpoint) {

        if (breakpoint == '1200') {
            var container = (0, _jquery2.default)('.container').width() + 60,
                elementSingleHeight = (0, _jquery2.default)('.offer-big__item-double').outerHeight(),
                elementSingle = (0, _jquery2.default)('.offer-big__item-double').width(container / 4 - 8),
                elementBig = (0, _jquery2.default)('.offer-big__item-single').width(container / 2 - 8);
            console.log(1200);
        }
        if (breakpoint == '960') {
            var container = (0, _jquery2.default)('.container').width() + 60,
                elementSingleHeight = (0, _jquery2.default)('.offer-big__item-double').outerHeight(),
                elementSingle = (0, _jquery2.default)('.offer-big__item-double').width(container / 4 - 8),
                elementBig = (0, _jquery2.default)('.offer-big__item-single').width(container / 2 - 8);
        }

        if (breakpoint == '768') {
            var container = (0, _jquery2.default)('.container').width() + 60,
                elementSingleHeight = (0, _jquery2.default)('.offer-big__item-double').outerHeight(),
                elementSingle = (0, _jquery2.default)('.offer-big__item-double').width(container),
                elementBig = (0, _jquery2.default)('.offer-big__item-single').width(container);
        }
    });

    //BestsellersMain
    (0, _jquery2.default)('.bestsellersDouble').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        rows: 2,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                row: 1,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

    (0, _jquery2.default)('.jumbo-carousel').slick({
        dots: true,
        infinite: true,
        arrows: false

    });
}, 0);

var HomepageVM = function HomepageVM(state) {
    _classCallCheck(this, HomepageVM);

    this.state = state;
};

exports.default = HomepageVM;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = __webpack_require__(49);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(64);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { model: _model2.default, template: _view2.default };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

setTimeout(function () {

    (0, _jquery2.default)('.brand-carousel__wrapper').slick({
        dots: false,
        infinite: true,
        speed: 300,
        nextArrow: '<i class="fa fa-chevron-right brand-carousel__rightButton"></i>',
        prevArrow: '<i class="fa fa-chevron-left brand-carousel__leftButton"></i>',
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
}, 0);

var LoginVM = function () {
    function LoginVM(state) {
        _classCallCheck(this, LoginVM);

        var self = this;

        this.state = state;

        this.messageRegistrationSuccess = _knockout2.default.observable(false);

        this.loginModel = _knockout2.default.observable({
            username: _knockout2.default.observable(),
            password: _knockout2.default.observable(),
            remember: _knockout2.default.observable(false)
        });

        this.accountModel = _knockout2.default.observable({
            username: _knockout2.default.observable(),
            password: _knockout2.default.observable()
        });
    }

    _createClass(LoginVM, [{
        key: 'confirmPassword',
        value: function confirmPassword(data, event) {

            var original = (0, _jquery2.default)('[data-validate="password"]').val(),
                parentEl = (0, _jquery2.default)(event.target).parent().parent().parent(),
                confirmElementValue = (0, _jquery2.default)(event.target).val();

            if (original === confirmElementValue) {
                parentEl.removeClass('error');
                parentEl.addClass('success');

                (0, _jquery2.default)('.form__step-navigation-register').removeClass('disabled');
                (0, _jquery2.default)('.form__step-navigation-register').attr('disabled', false);
            } else {
                parentEl.removeClass('success');
                parentEl.addClass('error');

                (0, _jquery2.default)('.form__step-navigation-register').addClass('disabled');
                (0, _jquery2.default)('.form__step-navigation-register').attr('disabled', true);
            }
        }
    }, {
        key: 'formValidate',
        value: function formValidate(event) {
            var form = (0, _jquery2.default)(event.target),
                elements = form.find('input[required], select[required]'),
                mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                password = /^[a-z0-9]+.{6,}$/i;

            elements.removeClass('error');
            elements.removeClass('success');

            elements.each(function (index, el) {
                var type = (0, _jquery2.default)(el).attr('type'),
                    element = (0, _jquery2.default)(el),
                    val = (0, _jquery2.default)(el).val();

                if (type === "email") {

                    if (mail.test(val)) {
                        element.addClass('success');
                    } else {
                        element.addClass('error');
                    }
                }
                if (type === "password") {
                    if (password.test(val)) {
                        element.addClass('success');
                    } else {
                        element.addClass('error');
                    }
                }
            });

            if (this.setErrorMessage(elements)) {
                errorWrapper.addClass('error');
                errorType.text('Error: ');
                errorText.text('Not Valid Fields');
                return false;
            } else {

                elements.each(function (index, el) {
                    var element = (0, _jquery2.default)(el);
                    element.removeClass('success');
                    element.val('');
                });
                return true;
            }
        }
    }, {
        key: 'setErrorMessage',
        value: function setErrorMessage(elements) {
            var errorCounter = 0;
            if (elements.length > 0) {
                elements.each(function (i, el) {
                    if ((0, _jquery2.default)(el).hasClass('error')) {
                        errorCounter++;
                    }
                });
            }
            if (errorCounter) {
                return true;
            }
            return false;
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(data, event) {
            event.preventDefault();

            var signInData = {
                username: this.loginModel().username(),
                password: this.loginModel().password(),
                remember: this.loginModel().remember()
            };

            var jsonData = _knockout2.default.toJSON(signInData);

            if (this.formValidate(event)) {
                _jquery2.default.ajax({
                    url: '/rest/account/signIn',
                    contentType: 'application/json',
                    type: 'post',
                    data: jsonData,
                    success: function success(response) {
                        console.log(response);

                        var data = response,
                            errorWrapper = (0, _jquery2.default)('.form__validation-state'),
                            errorText = errorWrapper.find('span'),
                            errorType = errorWrapper.find('strong');

                        if (!data.error) {

                            errorWrapper.removeClass('error');

                            errorWrapper.addClass('success');
                            errorType.text('Success.');
                            setTimeout(function () {
                                errorWrapper.removeClass('success');
                            }, 2000);
                        } else {

                            errorWrapper.removeClass('success');
                            errorWrapper.addClass('error');
                            errorType.text('Error.');
                        }
                    }
                });
            }
        }
    }, {
        key: 'accountStepValidation',
        value: function accountStepValidation(data, event) {
            var element = (0, _jquery2.default)(event.target);
            this.stepValidate(element);
        }
    }, {
        key: 'stepValidate',
        value: function stepValidate(element) {
            var el = element,
                parentEl = el.parent().parent().parent(),
                dataValidate = el.data('validate'),
                innerText = el.val(),
                dataJSON = _knockout2.default.toJSON({
                username: innerText
            });

            if (dataValidate === 'email') {
                var emailValidatePattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                if (emailValidatePattern.test(innerText)) {

                    _jquery2.default.ajax({
                        url: '/rest/account/checkEmail',
                        contentType: 'application/json',
                        type: 'post',
                        data: dataJSON,
                        success: function success(response) {
                            console.log(response);
                            var data = response;
                            if (!data.error) {

                                parentEl.removeClass('error');
                                parentEl.addClass('success');

                                (0, _jquery2.default)('.form__step-navigation-next').removeClass('hidden-b');
                                (0, _jquery2.default)('.form__step-navigation-next').addClass('visible-b');
                            } else {
                                parentEl.removeClass('success');
                                parentEl.addClass('error');

                                (0, _jquery2.default)('.form__step-navigation-next').addClass('hidden-b');
                                (0, _jquery2.default)('.form__step-navigation-next').removeClass('visible-b');
                            }
                        }
                    });
                }
            }
            if (dataValidate === 'password') {
                var passwordValidatePattern = /^[a-z0-9]+.{6,}$/i;

                if (passwordValidatePattern.test(innerText)) {

                    parentEl.removeClass('error');
                    parentEl.addClass('success');

                    (0, _jquery2.default)('.form__step-navigation-next').removeClass('hidden-b');
                    (0, _jquery2.default)('.form__step-navigation-next').addClass('visible-b');
                } else {
                    parentEl.removeClass('success');
                    parentEl.addClass('error');

                    (0, _jquery2.default)('.form__step-navigation-next').addClass('hidden-b');
                    (0, _jquery2.default)('.form__step-navigation-next').removeClass('visible-b');
                }
            }
        }
    }, {
        key: 'nextStep',
        value: function nextStep(element) {
            var block = (0, _jquery2.default)('.form__steps').find('.current'),
                currentNumber = (0, _jquery2.default)('.account__sign-steps-current'),
                blockData = block.data('step');

            if (blockData == 1 && block.hasClass('success')) {

                block.removeClass('current');

                var newBlock = (0, _jquery2.default)('.form__steps').find('[data-step="2"]');

                newBlock.addClass('current');

                (0, _jquery2.default)('.form__step-navigation-prev').removeClass('hidden-b');
                (0, _jquery2.default)('.form__step-navigation-prev').addClass('visible-b');

                if (!newBlock.hasClass('success')) {
                    (0, _jquery2.default)('.form__step-navigation-next').addClass('hidden-b');
                    (0, _jquery2.default)('.form__step-navigation-next').removeClass('visible-b');
                }

                currentNumber.text('2');
            }

            if (blockData == 2 && block.hasClass('success')) {

                block.removeClass('current');

                var _newBlock = (0, _jquery2.default)('.form__steps').find('[data-step="3"]'),
                    newBlockInput = _newBlock.find('input');

                if (newBlockInput.val() != '') {

                    if (this.accountModel().password() != newBlockInput.val()) {
                        _newBlock.removeClass('success');
                        _newBlock.addClass('error');
                    }
                }
                _newBlock.addClass('current');

                (0, _jquery2.default)('.form__step-navigation-prev').removeClass('hidden-b');
                (0, _jquery2.default)('.form__step-navigation-prev').addClass('visible-b');

                (0, _jquery2.default)('.form__step-navigation-next').addClass('hidden-b');
                (0, _jquery2.default)('.form__step-navigation-next').removeClass('visible-b');

                (0, _jquery2.default)('.form__step-navigation-register').removeClass('hidden-b');

                currentNumber.text('3');
            }
        }
    }, {
        key: 'prevStep',
        value: function prevStep() {
            var block = (0, _jquery2.default)('.form__steps').find('.current'),
                currentNumber = (0, _jquery2.default)('.account__sign-steps-current'),
                blockData = block.data('step');

            if (blockData == 2) {
                var newBlock = (0, _jquery2.default)('.form__steps').find('[data-step="1"]');
                block.removeClass('current');
                newBlock.addClass('current');

                (0, _jquery2.default)('.form__step-navigation-prev').addClass('hidden-b');
                (0, _jquery2.default)('.form__step-navigation-prev').removeClass('visible-b');

                (0, _jquery2.default)('.form__step-navigation-next').addClass('visible-b');
                (0, _jquery2.default)('.form__step-navigation-next').removeClass('hidden-b');

                currentNumber.text('1');
            }

            if (blockData == 3) {

                var _newBlock2 = (0, _jquery2.default)('.form__steps').find('[data-step="2"]');
                block.removeClass('current');
                _newBlock2.addClass('current');

                (0, _jquery2.default)('.form__step-navigation-next').addClass('visible-b');
                (0, _jquery2.default)('.form__step-navigation-next').removeClass('hidden-b');

                currentNumber.text('2');

                (0, _jquery2.default)('.form__step-navigation-register').addClass('hidden-b');
            }
        }
    }, {
        key: 'submitNewAccount',
        value: function submitNewAccount(data, event) {

            var dataJSON = data.accountModel(),
                newJSON = _knockout2.default.toJSON({
                username: dataJSON.username(),
                password: dataJSON.password()
            });

            _jquery2.default.ajax({
                url: '/rest/account/register',
                contentType: 'application/json',
                type: 'post',
                data: newJSON,
                success: function success(response) {
                    console.log(response);
                    var block = (0, _jquery2.default)('.form__steps').find('[data-step]'),
                        first = (0, _jquery2.default)('.form__steps').find('[data-step="1"]'),
                        currentNumber = (0, _jquery2.default)('.account__sign-steps-current'),
                        errorBlock = (0, _jquery2.default)('.form__step-server__response'),
                        text = block.find('input');
                    block.removeClass('success');
                    block.removeClass('current');
                    first.addClass('current');
                    text.val('');

                    (0, _jquery2.default)('.form__step-navigation-register').removeClass('visible-b');
                    (0, _jquery2.default)('.form__step-navigation-register').addClass('hidden-b');

                    (0, _jquery2.default)('.form__step-navigation-prev').addClass('hidden-b');
                    (0, _jquery2.default)('.form__step-navigation-prev').removeClass('visible-b');

                    (0, _jquery2.default)('.form__step-navigation-next').addClass('hidden-b');
                    (0, _jquery2.default)('.form__step-navigation-next').removeClass('visible-b');

                    currentNumber.text('1');

                    errorBlock.addClass('success');
                    errorBlock.find('.form__step-server__response-text').text('Success');
                    errorBlock.fadeIn();

                    setTimeout(function () {
                        errorBlock.fadeOut();
                    }, 4000);
                }
            });
        }
    }]);

    return LoginVM;
}();

exports.default = LoginVM;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = __webpack_require__(51);

var _model2 = _interopRequireDefault(_model);

var _view = __webpack_require__(65);

var _view2 = _interopRequireDefault(_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { model: _model2.default, template: _view2.default };

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _knockout = __webpack_require__(1);

var _knockout2 = _interopRequireDefault(_knockout);

var _jquery = __webpack_require__(2);

var _jquery2 = _interopRequireDefault(_jquery);

var _slick = __webpack_require__(20);

var _slick2 = _interopRequireDefault(_slick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PDPVM = function PDPVM() {
    _classCallCheck(this, PDPVM);

    (0, _jquery2.default)(function () {
        (0, _jquery2.default)('.single-product__carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.single-product__gallery'
        });
        (0, _jquery2.default)('.single-product__gallery').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.single-product__carousel',
            dots: false,
            arrows: false,
            focusOnSelect: true
        });
    });
};

exports.default = PDPVM;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/321x297.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/Payment.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/ad-banner2.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/media-1.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/media-2.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/media-3.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/star-empty.svg";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<!-- ko with: header -->\n    <!-- ko template: {\n        html: html,\n        data: data\n    } -->\n    <!-- /ko -->\n<!-- /ko -->\n<!-- ko with: currentState -->\n    <!-- ko template: {\n        html: html,\n        data: data\n    } -->\n    <!-- /ko -->\n<!-- /ko -->\n\n<!-- ko with: footer -->\n    <!-- ko template: {\n        html: html,\n        data: data\n    } -->\n    <!-- /ko -->\n<!-- /ko -->";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<footer class=\"footer-main\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-5\">\n                <div class=\"footer-logo\"><a href=\"#\"><svg version=\"1.1\" x=\"0px\" y=\"0px\" width=\"175.748px\" height=\"42.52px\" viewBox=\"0 0 175.748 42.52\" enable-background=\"new 0 0 175.748 42.52\">\n                    <ellipse class=\"ellipse-bg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FDD700\" cx=\"170.05\" cy=\"36.341\" rx=\"5.32\" ry=\"5.367\"></ellipse>\n                    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#333E48\" d=\"M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056\n\tC30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187\n\tc0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731\n\tc-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733\n\tc-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725\n\tc0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766\n\tc0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277\n\tc0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443\n\tc-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z\n\t M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0\n\tc-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842\n\tc-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381\n\tc0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21\n\tc-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z\n\t M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9\n\tc6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467\n\tc-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563\n\tC26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627\n\tC17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056\n\tc-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781\n\tc-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508\n\tc-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037\n\tC61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686\n\tc3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064\n\tc-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007\n\tc0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684\n\tc2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952\n\tc-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77\n\tc0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967\n\tC157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402\n\tc-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612\n\tc3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072\n\tc0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846\n\tc-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377\n\tc5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z\"></path>\n                </svg></a></div>\n                <div class=\"call-us\">\n                    <div class=\"call-us__img\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"57\" height=\"54\" viewBox=\"0 0 57 54\">\n                        <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                            <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                    <rdf:Description rdf:about=\"\"/>\n                                </rdf:RDF>\n                            </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                            <?xpacket end=\"w\"?></metadata>\n                        <defs>\n                            <style>\n                                .cls-1 {\n                                    fill: #fed700;\n                                    fill-rule: evenodd;\n                                }\n                            </style>\n                        </defs>\n                        <path id=\"Support_icon\" data-name=\"Support icon\" class=\"cls-1\" d=\"M402.275,5017h2.45c10.94,1.54,17.283,7.7,19.148,18.37a6.629,6.629,0,0,1,2.337,2.46c3.65,1.07,5.1,4.36,5.789,8.4v2.46c-0.711,3.95-2.156,7.17-5.677,8.29a7.193,7.193,0,0,1-2.338,2.35c-0.7,5.5-3.629,8.9-9.129,9.3-1.27.09-3.073-.45-4.453,0-1.05.34-1.7,2.61-3.228,2.35h-6.123c-3.565-.24-4.546-5.73-0.78-6.83a26.639,26.639,0,0,1,7.682.11c1.264,0.44,1.667,1.4,2.338,2.02,4.627,0.35,8.428-.29,10.13-2.8,0.508-.75,1.567-2.81,1.225-4.04-0.195-.7-1.623-1.26-2-2.24-0.773-1.98-.223-6.53-0.223-9.85v-5.04c0-3.3-.107-5.83,2.227-6.72a18.27,18.27,0,0,0-19.482-16.24c-9.516.6-15.3,7.29-16.81,16.13,3.05,1.34,2.226,6.58,2.226,11.98,0,5.26,1.218,12.56-3.9,11.98-1.5-.16-2.166-1.29-2.9-2.46-3.639-1.04-5.065-4.31-5.788-8.29v-2.46c0.72-4.05,2.127-7.42,5.9-8.4,0.3-1.26,1.413-1.71,2.226-2.46C384.979,5024.69,391.339,5018.54,402.275,5017Zm-19.036,20.94c-0.4,4.35-.223,9.9-0.223,14.56,0,1.59-.321,3.39.445,4.59a4.981,4.981,0,0,0,1.336,0c0.763-1.18.445-2.87,0.445-4.48,0-4.87.181-10.34-.222-14.67A1.772,1.772,0,0,0,383.239,5037.94Zm38.741,0c-0.4,4.35-.223,9.9-0.223,14.56,0,1.59-.321,3.39.446,4.59a4.981,4.981,0,0,0,1.336,0c0.763-1.18.445-2.87,0.445-4.48,0-4.87.18-10.34-.223-14.67A1.772,1.772,0,0,0,421.98,5037.94Zm-41.3,16.69c-0.074-4.78.149-9.86-.111-14.45C376.243,5042.05,376.152,5052.91,380.678,5054.63Zm45.755,0c4.347-1.87,4.384-12.72-.111-14.45C426.4,5044.96,426.173,5050.04,426.433,5054.63Zm-26.162,13.66a17.576,17.576,0,0,0,7.571,0,1.736,1.736,0,0,0,0-1.68C406.006,5066.68,398.575,5065.05,400.271,5068.29Z\" transform=\"translate(-375 -5017)\"/>\n                    </svg>\n\n                    </div>\n                    <div class=\"call-us__text\"><span class=\"call-us__title\">Got questions? Call us 24/7!</span><span class=\"call-us__number\">(800) 8001-8588, (0600) 874 548</span></div>\n                </div>\n                <div class=\"contact-us\">\n                    <h5 class=\"contact-us__title\">Contact Info</h5>\n                    <address>17 Princess Road, London, Greater London NW1 8JR, UK</address>\n                </div>\n                <div class=\"footer-social\">\n                    <ul class=\"footer-social__wrapper\">\n                        <li class=\"footer-social__item\"><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.594\" height=\"20.97\" viewBox=\"0 0 10.594 20.97\">\n                            <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                    <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                        <rdf:Description rdf:about=\"\"/>\n                                    </rdf:RDF>\n                                </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                <?xpacket end=\"w\"?></metadata>\n                            <defs>\n                                <style>\n                                    .cls-1 {\n                                        fill-rule: evenodd;\n                                    }\n                                </style>\n                            </defs>\n                            <path id=\"facebook\" class=\"cls-1\" d=\"M383.312,5200.49h2.29V5197h-2.933v0.01c-3.888.14-4.935,2.3-5,4.58h-0.007v2.4h-2.648v3.49h2.648v10.49h4.405v-10.49h2.676l0.643-3.49h-3.319v-2.15A1.266,1.266,0,0,1,383.312,5200.49Z\" transform=\"translate(-375 -5197)\"/>\n                        </svg>\n                        </a></li>\n                        <li class=\"footer-social__item\"><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.187\" height=\"17.19\" viewBox=\"0 0 21.187 17.19\">\n                            <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                    <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                        <rdf:Description rdf:about=\"\"/>\n                                    </rdf:RDF>\n                                </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                <?xpacket end=\"w\"?></metadata>\n                            <defs>\n                                <style>\n                                    .cls-1 {\n                                        fill-rule: evenodd;\n                                    }\n                                </style>\n                            </defs>\n                            <path id=\"twitter\" class=\"cls-1\" d=\"M434.143,5201.26a7.94,7.94,0,0,1-2.424.68,4.593,4.593,0,0,0,1.821-2.35,7.126,7.126,0,0,1-2.726.96h0a4.525,4.525,0,0,0-3.158-1.48,4.454,4.454,0,0,0-4.068,5.43h0a12.705,12.705,0,0,1-9.2-4.65,4.513,4.513,0,0,0,1.326,5.88,2.826,2.826,0,0,1-1.908-.49,4.177,4.177,0,0,0,3.371,4.23,3.629,3.629,0,0,1-1.82.14c0.139,1.27,1.939,2.93,3.907,2.93a7.81,7.81,0,0,1-6.3,1.8,13.239,13.239,0,0,0,6.836,1.91,12.323,12.323,0,0,0,12.536-12.63c0-.01,0-0.02,0-0.03s0-.03,0-0.05,0-.04,0-0.07A6.994,6.994,0,0,0,434.143,5201.26Z\" transform=\"translate(-412.969 -5199.06)\"/>\n                        </svg>\n                        </a></li>\n                        <li class=\"footer-social__item\"><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.156\" height=\"20.94\" viewBox=\"0 0 21.156 20.94\">\n                            <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                    <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                        <rdf:Description rdf:about=\"\"/>\n                                    </rdf:RDF>\n                                </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                <?xpacket end=\"w\"?></metadata>\n                            <defs>\n                                <style>\n                                    .cls-1 {\n                                        fill-rule: evenodd;\n                                    }\n                                </style>\n                            </defs>\n                            <path id=\"rss\" class=\"cls-1\" d=\"M458.417,5211.88a3.031,3.031,0,1,0,3.087,3.03A3.062,3.062,0,0,0,458.417,5211.88Zm-2.925-7.86c-0.054,0-.109.01-0.163,0.01v3.87c0.054,0,.109-0.01.163-0.01a10.041,10.041,0,0,1,9.993,9.84c0,0.09-.011.16-0.013,0.25h3.941c0-.09.014-0.16,0.014-0.25A13.948,13.948,0,0,0,455.492,5204.02Zm0-6.99h-0.163v3.9h0.163a17.056,17.056,0,0,1,17.109,16.8c0,0.08,0,.16-0.007.25h3.887c0-.09.006-0.17,0.006-0.25A20.94,20.94,0,0,0,455.492,5197.03Z\" transform=\"translate(-455.344 -5197.03)\"/>\n                        </svg>\n                        </a></li>\n                        <li class=\"footer-social__item\"><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.187\" height=\"18.37\" viewBox=\"0 0 21.187 18.37\">\n                            <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                    <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                        <rdf:Description rdf:about=\"\"/>\n                                    </rdf:RDF>\n                                </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                <?xpacket end=\"w\"?></metadata>\n                            <defs>\n                                <style>\n                                    .cls-1 {\n                                        fill-rule: evenodd;\n                                    }\n                                </style>\n                            </defs>\n                            <path id=\"google_plus\" data-name=\"google plus\" class=\"cls-1\" d=\"M508.079,5208.57c-0.541-.38-1.578-1.31-1.578-1.85,0-.63.184-0.95,1.152-1.7a3.6,3.6,0,0,0,1.583-2.96c0-1.5-.562-3.3-1.823-3.3h1.9l1.343-.88h-6c-2.69,0-5.22,1.84-5.22,4.18a4.249,4.249,0,0,0,4.569,4.23c0.189,0,.374-0.05.556-0.06a2.045,2.045,0,0,0,.512,2.71c-0.344,0-.678.01-1.041,0.01-3.33,0-6.362,1.77-6.362,3.94,0,2.15,3.279,3.35,6.61,3.35,3.8,0,5.757-1.67,5.757-3.81A4.011,4.011,0,0,0,508.079,5208.57Zm-3.2-2.98c-1.547-.04-3.015-1.71-3.28-3.72s0.768-3.54,2.313-3.5,3.013,1.66,3.281,3.67S506.421,5205.64,504.876,5205.59Zm-0.6,9.7c-2.3,0-3.965-.98-3.965-2.71,0-1.7,2.061-3.11,4.364-3.09a5.413,5.413,0,0,1,1.493.24c1.25,0.86,1.926,1.35,2.178,2.33a2.639,2.639,0,0,1,.074.61C508.415,5214.4,507.508,5215.29,504.271,5215.29Zm11.973-16.57v2.66h2.642v1.76h-2.642v2.62h-1.766v-2.62h-2.644v-1.76h2.644v-2.66h1.766Z\" transform=\"translate(-497.688 -5197.88)\"/>\n                        </svg>\n                        </a></li>\n                        <li class=\"footer-social__item\"><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.187\" height=\"9.63\" viewBox=\"0 0 21.187 9.63\">\n                            <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                    <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                        <rdf:Description rdf:about=\"\"/>\n                                    </rdf:RDF>\n                                </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                <?xpacket end=\"w\"?></metadata>\n                            <defs>\n                                <style>\n                                    .cls-1 {\n                                        fill-rule: evenodd;\n                                    }\n                                </style>\n                            </defs>\n                            <path id=\"flickr\" class=\"cls-1\" d=\"M549.794,5207.06a4.862,4.862,0,1,1-4.861-4.79A4.831,4.831,0,0,1,549.794,5207.06Zm11.463,0.01a4.854,4.854,0,1,1-4.853-4.81A4.83,4.83,0,0,1,561.257,5207.07Z\" transform=\"translate(-540.063 -5202.25)\"/>\n                        </svg>\n                        </a></li>\n                        <li class=\"footer-social__item\"><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.187\" height=\"20.97\" viewBox=\"0 0 21.187 20.97\">\n                            <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                    <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                        <rdf:Description rdf:about=\"\"/>\n                                    </rdf:RDF>\n                                </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                <?xpacket end=\"w\"?></metadata>\n                            <defs>\n                                <style>\n                                    .cls-1 {\n                                        fill-rule: evenodd;\n                                    }\n                                </style>\n                            </defs>\n                            <path id=\"dribbble\" class=\"cls-1\" d=\"M593.036,5197.03a10.486,10.486,0,1,0,10.593,10.48A10.535,10.535,0,0,0,593.036,5197.03Zm6.951,5.07a8.67,8.67,0,0,1,1.891,5.17,19,19,0,0,0-6.2-.15c-0.225-.51-0.456-1-0.692-1.48A12.9,12.9,0,0,0,599.987,5202.1Zm-1.219-1.25a11.143,11.143,0,0,1-4.585,3.23,45.172,45.172,0,0,0-3.232-5.08,8.948,8.948,0,0,1,2.085-.25A8.833,8.833,0,0,1,598.768,5200.85Zm-9.536-1.24a42.466,42.466,0,0,1,3.273,5.03,31.5,31.5,0,0,1-8.079.86A8.809,8.809,0,0,1,589.232,5199.61Zm-5.044,7.9c0-.09,0-0.19.007-0.28h0.048a32.828,32.828,0,0,0,9.09-1.02c0.209,0.42.415,0.85,0.616,1.3a13.749,13.749,0,0,0-7.572,5.76A8.661,8.661,0,0,1,584.188,5207.51Zm3.478,6.96a12.147,12.147,0,0,1,6.962-5.36,29.734,29.734,0,0,1,1.778,6.5A8.919,8.919,0,0,1,587.666,5214.47Zm10.368,0.27a31.592,31.592,0,0,0-1.67-5.97,17.722,17.722,0,0,1,5.39.23A8.8,8.8,0,0,1,598.034,5214.74Z\" transform=\"translate(-582.438 -5197.03)\"/>\n                        </svg>\n                        </a></li>\n                        <li class=\"footer-social__item\"><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"21.531\" height=\"19.46\" viewBox=\"0 0 21.531 19.46\">\n                            <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                    <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                        <rdf:Description rdf:about=\"\"/>\n                                    </rdf:RDF>\n                                </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                <?xpacket end=\"w\"?></metadata>\n                            <defs>\n                                <style>\n                                    .cls-1 {\n                                        fill-rule: evenodd;\n                                    }\n                                </style>\n                            </defs>\n                            <path id=\"linkedin\" class=\"cls-1\" d=\"M624.825,5217.11h4.409V5204h-4.409v13.11Zm15.7-13.55a4.925,4.925,0,0,0-4.277,2.23V5204H631.87v13.11h4.409V5210c0-1.5.769-2.96,2.509-2.96a2.835,2.835,0,0,1,2.8,2.93v7.14H646v-7.44C646,5204.51,642.455,5203.56,640.529,5203.56Zm-13.48-5.94a2.321,2.321,0,1,0,2.592,2.31A2.467,2.467,0,0,0,627.049,5197.62Z\" transform=\"translate(-624.469 -5197.63)\"/>\n                        </svg>\n                        </a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"col-lg-7\">\n                <div class=\"footer-nav\">\n                    <div class=\"footer-nav__column\">\n                        <h4 class=\"footer-nav__title\">Find it Fast</h4>\n                        <ul class=\"footer-nav__wrapper\">\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Laptops & Computers</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Cameras & Photography</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Smart Phones & Tablets</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Video Games & Consoles</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">TV & Audio</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Gadgets</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Car Electronic & GPS</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"footer-nav__column\">\n                        <h4 class=\"footer-nav__title\">&nbsp;</h4>\n                        <ul class=\"footer-nav__wrapper\">\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Printers & Ink</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Software</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Office Supplies</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Computer Components</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Accesories</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"footer-nav__column\">\n                        <h4 class=\"footer-nav__title\">Customer Care</h4>\n                        <ul class=\"footer-nav__wrapper\">\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">My Account</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Order Tracking</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Wish List</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Customer Service</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Returns / Exchange</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">FAQs</a></li>\n                            <li class=\"footer-nav__item\"><a href=\"#\" class=\"footer-nav__link\">Product Support</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n<div class=\"footer__bottom-wrap\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"footer__bottom\">\n                <div class=\"footer__bottom-name\"><span>©</span><a href=\"#\"> Electro</a><span>- All rights Reserved</span></div>\n                <div class=\"footer__bottom-cart\">\n                    <ul>\n                        <li><img src=\"" + __webpack_require__(53) + "\" alt=\"Img\"></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"header__top\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"header__top-left\">\n                    <div class=\"header__contacts\">\n                        <div class=\"header__contacts-item\"><a href=\"#\" class=\"header__contacts-link\">\n                            <div class=\"header__contacts-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"13\" viewBox=\"0 0 11 13\">\n                                <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                    <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                        <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                            <rdf:Description rdf:about=\"\"/>\n                                        </rdf:RDF>\n                                    </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                    <?xpacket end=\"w\"?></metadata>\n                                <path  d=\"M11,10.738v0.019a1.091,1.091,0,0,1-.446.806,5,5,0,0,1-1.462,1.16,3.958,3.958,0,0,1-2.852.02A9.324,9.324,0,0,1,2.409,9.539,14.024,14.024,0,0,1,.983,7.4,8.01,8.01,0,0,1,.056,4.7,4.3,4.3,0,0,1,1.375.709,1.864,1.864,0,0,1,2.427,0c0.55-.05,1.068.917,1.265,1.259a3.3,3.3,0,0,1,.677,1.868C4.3,4.174,3.158,4.33,2.89,5.154a1.7,1.7,0,0,0,.071.9A5.058,5.058,0,0,0,3.6,7.218,8.991,8.991,0,0,0,5.261,9.146a1.492,1.492,0,0,0,1.23.492,1.82,1.82,0,0,0,.8-0.669,2.215,2.215,0,0,1,.82-0.61,1.905,1.905,0,0,1,1.747.787A3.061,3.061,0,0,1,11,10.738Z\"/>\n                            </svg>\n\n                            </div>\n                            <div class=\"header__contacts-text\"><span>+060 (800) 801-858</span></div></a></div>\n                        <div class=\"header__contacts-item\"><a href=\"#\" class=\"header__contacts-link\">\n                            <div class=\"header__contacts-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"13\" viewBox=\"0 0 19 13\">\n                                <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                    <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                        <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                            <rdf:Description rdf:about=\"\"/>\n                                        </rdf:RDF>\n                                    </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                    <?xpacket end=\"w\"?></metadata>\n\n                                <path d=\"M1.771,0H16.233a1.863,1.863,0,0,1,1.632,1.1,10,10,0,0,1,.1,2.667V9.332A8.855,8.855,0,0,1,17.832,12a1.836,1.836,0,0,1-1.152.928,8.966,8.966,0,0,1-1.855.058H3.211c-1.685,0-2.743.03-3.1-1.188A11.4,11.4,0,0,1,.044,9.158V3.767A9.409,9.409,0,0,1,.14,1.13,1.74,1.74,0,0,1,1.771,0Zm0.064,1.71v9.651H16.169V1.622H1.867C1.83,1.628,1.833,1.668,1.835,1.709Zm0.9,0.406C4.808,3.306,6.9,4.484,8.97,5.68c2.135-1.129,4.237-2.441,6.3-3.536-0.136.432,0.179,1.077,0,1.536a2.882,2.882,0,0,1-.736.493c-1.79,1.041-3.836,2.112-5.5,3.13Q5.85,5.535,2.731,3.709V2.115Z\"/>\n                            </svg>\n\n                            </div>\n                            <div class=\"header__contacts-text\"><span>info@electro.com</span></div></a></div>\n                    </div>\n                </div>\n                <div class=\"header__top-right\">\n                    <ul class=\"header__info\">\n                        <li class=\"header__info-list\"><a href=\"#\">\n                            <div class=\"header__info-item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"13\" viewBox=\"0 0 10 13\">\n                                <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                    <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                        <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                            <rdf:Description rdf:about=\"\"/>\n                                        </rdf:RDF>\n                                    </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                    <?xpacket end=\"w\"?></metadata>\n                                <defs>\n                                    <style>\n                                        .cls-1 {\n                                            fill: #333e48;\n                                            fill-rule: evenodd;\n                                        }\n                                    </style>\n                                </defs>\n                                <path id=\"Marker_icon\" data-name=\"Marker icon\" class=\"cls-1\" d=\"M981.758,14h0.517c3.123,0.258,5.521,2.812,4.478,6.348-0.808,2.737-2.927,4.869-4.721,6.652H982a19.1,19.1,0,0,1-3.046-3.463,8.613,8.613,0,0,1-1.949-4.556,4.63,4.63,0,0,1,1.371-3.493A5.217,5.217,0,0,1,981.758,14ZM978.042,17.7a4.993,4.993,0,0,0,.517,3.432,16.026,16.026,0,0,0,2.8,3.979,3.8,3.8,0,0,0,.67.7,4.372,4.372,0,0,0,.639-0.7,20.432,20.432,0,0,0,1.8-2.248,7.687,7.687,0,0,0,1.645-3.766,3.7,3.7,0,0,0-1.371-3.25,4.131,4.131,0,0,0-2.984-.972A4.065,4.065,0,0,0,978.042,17.7Zm3.685-1.063a2.377,2.377,0,0,1,2.193.912,2.316,2.316,0,0,1-.152,2.612c-1.222,1.41-3.935.714-4.051-1.245a3.017,3.017,0,0,1,.335-1.276A2.276,2.276,0,0,1,981.727,16.641Zm-1.1,2.157a1.387,1.387,0,0,0,2.771-.03,1.322,1.322,0,0,0-1.614-1.276A1.285,1.285,0,0,0,980.631,18.8Z\" transform=\"translate(-977 -14)\"/>\n                            </svg>\n                                Store Locator\n                            </div></a></li>\n                        <li class=\"header__info-list\"><a href=\"#\">\n                            <div class=\"header__info-item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"12\" viewBox=\"0 0 18 12\">\n                                <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                    <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                        <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                            <rdf:Description rdf:about=\"\"/>\n                                        </rdf:RDF>\n                                    </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                    <?xpacket end=\"w\"?></metadata>\n                                <defs>\n                                    <style>\n                                        .cls-1 {\n                                            fill: #333e48;\n                                            fill-rule: evenodd;\n                                        }\n                                    </style>\n                                </defs>\n                                <path id=\"Track_order_icon\" data-name=\"Track order icon\" class=\"cls-1\" d=\"M1129.78,15v2.186h4.89c0.29,0.866.66,1.858,0.98,2.779a6.3,6.3,0,0,1,.3.917,15.219,15.219,0,0,1,0,2.24v2.24h-1.75a2.319,2.319,0,0,1-1.58,1.565,2.248,2.248,0,0,1-2.73-1.565h-4.67a2.5,2.5,0,0,1-.91,1.268,2.263,2.263,0,0,1-3.39-1.268h-1.78v-3.8h1.11v2.7a2.657,2.657,0,0,0,.61.027c0.15-.229.18-0.443,0.31-0.647a2.285,2.285,0,0,1,4.05.647h3.42c0.07-2.68.01-5.478,0.03-8.2H1118V15h11.78Zm0,3.345c0.02,1.97-.04,4.012.03,5.937a2.719,2.719,0,0,0,.33-0.62,2.2,2.2,0,0,1,.92-0.81,2.273,2.273,0,0,1,3.14,1.43h0.64c-0.12-1.152.16-2.189,0-3.238a9.938,9.938,0,0,0-.47-1.4c-0.17-.487-0.35-0.951-0.5-1.376h-4.06C1129.78,18.269,1129.78,18.307,1129.78,18.345ZM1122,25.226a1.137,1.137,0,0,0,2.11-.836,1.108,1.108,0,0,0-1.22-.648A1.078,1.078,0,0,0,1122,25.226Zm8.98,0a1.152,1.152,0,0,0,2.19-.432A1.127,1.127,0,1,0,1130.98,25.226Zm-12.37-8.041h5v1.079h-5.03A9.419,9.419,0,0,1,1118.61,17.185Zm3.89,2.186V20.45h-3.36a7.584,7.584,0,0,1,.03-1.079h3.33Z\" transform=\"translate(-1118 -15)\"/>\n                            </svg>\n                                Track Your Order\n                            </div></a></li>\n                        <li class=\"header__info-list\">\n                            <div class=\"header-changeMoney\">\n                                <select id=\"changeMoneyHeader\">\n                                    <option value=\"Dollar\" data-content=\"&lt;i class=&quot;fa fa-usd&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt; Dollar\"></option>\n                                    <option value=\"Euro\" data-content=\"&lt;i class=&quot;fa fa-eur&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt; Euro\"></option>\n                                </select>\n                            </div>\n                        </li>\n                        <li class=\"header__info-list\"><a href=\"#\">\n                            <div class=\"header__info-item\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"13\" viewBox=\"0 0 12 13\">\n                                <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                    <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                        <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                            <rdf:Description rdf:about=\"\"/>\n                                        </rdf:RDF>\n                                    </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                    <?xpacket end=\"w\"?></metadata>\n                                <defs>\n                                    <style>\n                                        .cls-1 {\n                                            fill: #384246;\n                                            fill-rule: evenodd;\n                                        }\n                                    </style>\n                                </defs>\n                                <path id=\"User_icon\" data-name=\"User icon\" class=\"cls-1\" d=\"M1430,27.919V28h-1.21a4.674,4.674,0,0,0-1.31-3.27,4.8,4.8,0,0,0-6.6-.3A4.486,4.486,0,0,0,1419.21,28H1418V27.946a5.873,5.873,0,0,1,3.64-5.352A4.152,4.152,0,0,1,1424.03,15a4.167,4.167,0,0,1,4.08,4.946,4.479,4.479,0,0,1-1.75,2.648A5.86,5.86,0,0,1,1430,27.919Zm-8.96-9.3a2.981,2.981,0,0,0,1.18,2.919,3.131,3.131,0,0,0,3.34.108,2.907,2.907,0,0,0,1.43-2.892,3.128,3.128,0,0,0-.83-1.676A3.033,3.033,0,0,0,1421.04,18.621Z\" transform=\"translate(-1418 -15)\"/>\n                            </svg>\n                                Register <span class=\"grey__letter\">or</span> Sign in\n                            </div></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"header__middle\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"header__middle-wrapper\">\n                    <div class=\"header__logo\"><a href=\"#\" class=\"header__logo-link\"><svg version=\"1.1\" x=\"0px\" y=\"0px\" width=\"175.748px\" height=\"42.52px\" viewBox=\"0 0 175.748 42.52\" enable-background=\"new 0 0 175.748 42.52\">\n                        <ellipse class=\"ellipse-bg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#FDD700\" cx=\"170.05\" cy=\"36.341\" rx=\"5.32\" ry=\"5.367\"></ellipse>\n                        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"#333E48\" d=\"M30.514,0.71c-0.034,0.003-0.066,0.008-0.056,0.056\n\tC30.263,0.995,29.876,1.181,29.79,1.5c-0.148,0.548,0,1.568,0,2.427v36.459c0.265,0.221,0.506,0.465,0.725,0.734h6.187\n\tc0.2-0.25,0.423-0.477,0.669-0.678V1.387C37.124,1.185,36.9,0.959,36.701,0.71H30.514z M117.517,12.731\n\tc-0.232-0.189-0.439-0.64-0.781-0.734c-0.754-0.209-2.039,0-3.121,0h-3.176V4.435c-0.232-0.189-0.439-0.639-0.781-0.733\n\tc-0.719-0.2-1.969,0-3.01,0h-3.01c-0.238,0.273-0.625,0.431-0.725,0.847c-0.203,0.852,0,2.399,0,3.725\n\tc0,1.393,0.045,2.748-0.055,3.725h-6.41c-0.184,0.237-0.629,0.434-0.725,0.791c-0.178,0.654,0,1.813,0,2.765v2.766\n\tc0.232,0.188,0.439,0.64,0.779,0.733c0.777,0.216,2.109,0,3.234,0c1.154,0,2.291-0.045,3.176,0.057v21.277\n\tc0.232,0.189,0.439,0.639,0.781,0.734c0.719,0.199,1.969,0,3.01,0h3.01c1.008-0.451,0.725-1.889,0.725-3.443\n\tc-0.002-6.164-0.047-12.867,0.055-18.625h6.299c0.182-0.236,0.627-0.434,0.725-0.79c0.176-0.653,0-1.813,0-2.765V12.731z\n\t M135.851,18.262c0.201-0.746,0-2.029,0-3.104v-3.104c-0.287-0.245-0.434-0.637-0.781-0.733c-0.824-0.229-1.992-0.044-2.898,0\n\tc-2.158,0.104-4.506,0.675-5.74,1.411c-0.146-0.362-0.451-0.853-0.893-0.96c-0.693-0.169-1.859,0-2.842,0h-2.842\n\tc-0.258,0.319-0.625,0.42-0.725,0.79c-0.223,0.82,0,2.338,0,3.443c0,8.109-0.002,16.635,0,24.381\n\tc0.232,0.189,0.439,0.639,0.779,0.734c0.707,0.195,1.93,0,2.955,0h3.01c0.918-0.463,0.725-1.352,0.725-2.822V36.21\n\tc-0.002-3.902-0.242-9.117,0-12.473c0.297-4.142,3.836-4.877,8.527-4.686C135.312,18.816,135.757,18.606,135.851,18.262z\n\t M14.796,11.376c-5.472,0.262-9.443,3.178-11.76,7.056c-2.435,4.075-2.789,10.62-0.501,15.126c2.043,4.023,5.91,7.115,10.701,7.9\n\tc6.051,0.992,10.992-1.219,14.324-3.838c-0.687-1.1-1.419-2.664-2.118-3.951c-0.398-0.734-0.652-1.486-1.616-1.467\n\tc-1.942,0.787-4.272,2.262-7.134,2.145c-3.791-0.154-6.659-1.842-7.524-4.91h19.452c0.146-2.793,0.22-5.338-0.279-7.563\n\tC26.961,15.728,22.503,11.008,14.796,11.376z M9,23.284c0.921-2.508,3.033-4.514,6.298-4.627c3.083-0.107,4.994,1.976,5.685,4.627\n\tC17.119,23.38,12.865,23.38,9,23.284z M52.418,11.376c-5.551,0.266-9.395,3.142-11.76,7.056\n\tc-2.476,4.097-2.829,10.493-0.557,15.069c1.997,4.021,5.895,7.156,10.646,7.957c6.068,1.023,11-1.227,14.379-3.781\n\tc-0.479-0.896-0.875-1.742-1.393-2.709c-0.312-0.582-1.024-2.234-1.561-2.539c-0.912-0.52-1.428,0.135-2.23,0.508\n\tc-0.564,0.262-1.223,0.523-1.672,0.676c-4.768,1.621-10.372,0.268-11.537-4.176h19.451c0.668-5.443-0.419-9.953-2.73-13.037\n\tC61.197,13.388,57.774,11.12,52.418,11.376z M46.622,23.343c0.708-2.553,3.161-4.578,6.242-4.686\n\tc3.08-0.107,5.08,1.953,5.686,4.686H46.622z M160.371,15.497c-2.455-2.453-6.143-4.291-10.869-4.064\n\tc-2.268,0.109-4.297,0.65-6.02,1.524c-1.719,0.873-3.092,1.957-4.234,3.217c-2.287,2.519-4.164,6.004-3.902,11.007\n\tc0.248,4.736,1.979,7.813,4.627,10.326c2.568,2.439,6.148,4.254,10.867,4.064c4.457-0.18,7.889-2.115,10.199-4.684\n\tc2.469-2.746,4.012-5.971,3.959-11.063C164.949,21.134,162.732,17.854,160.371,15.497z M149.558,33.952\n\tc-3.246-0.221-5.701-2.615-6.41-5.418c-0.174-0.689-0.26-1.25-0.4-2.166c-0.035-0.234,0.072-0.523-0.045-0.77\n\tc0.682-3.698,2.912-6.257,6.799-6.547c2.543-0.189,4.258,0.735,5.52,1.863c1.322,1.182,2.303,2.715,2.451,4.967\n\tC157.789,30.669,154.185,34.267,149.558,33.952z M88.812,29.55c-1.232,2.363-2.9,4.307-6.13,4.402\n\tc-4.729,0.141-8.038-3.16-8.025-7.563c0.004-1.412,0.324-2.65,0.947-3.726c1.197-2.061,3.507-3.688,6.633-3.612\n\tc3.222,0.079,4.966,1.708,6.632,3.668c1.328-1.059,2.529-1.948,3.9-2.99c0.416-0.315,1.076-0.688,1.227-1.072\n\tc0.404-1.031-0.365-1.502-0.891-2.088c-2.543-2.835-6.66-5.377-11.704-5.137c-6.02,0.288-10.218,3.697-12.484,7.846\n\tc-1.293,2.365-1.951,5.158-1.729,8.408c0.209,3.053,1.191,5.496,2.619,7.508c2.842,4.004,7.385,6.973,13.656,6.377\n\tc5.976-0.568,9.574-3.936,11.816-8.354c-0.141-0.271-0.221-0.604-0.336-0.902C92.929,31.364,90.843,30.485,88.812,29.55z\"></path>\n                    </svg></a></div>\n                    <div class=\"header-search\">\n                        <form action=\"#\" method=\"GET\">\n                            <div class=\"header-search__wrapper\">\n                                <div class=\"header-search__input\">\n                                    <input type=\"search\" placeholder=\"Search for products\">\n                                </div>\n                                <div class=\"header-search__select\">\n                                    <div class=\"header-search__selectButton\">\n                                        <select id=\"header-search\">\n                                            <option value=\"1\">All Categories</option>\n                                            <option value=\"2\">Select 2</option>\n                                            <option value=\"2\">Select 3</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"header-search__button\">\n                                    <button><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"20\" viewBox=\"0 0 19 20\">\n                                        <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                            <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                                <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                                    <rdf:Description rdf:about=\"\"/>\n                                                </rdf:RDF>\n                                            </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                            <?xpacket end=\"w\"?></metadata>\n                                        <defs>\n                                            <style>\n                                                .cls-1 {\n                                                    fill: #333e48;\n                                                    fill-rule: evenodd;\n                                                }\n                                            </style>\n                                        </defs>\n                                        <path id=\"search_icon\" data-name=\"search icon\" class=\"cls-1\" d=\"M1236.52,88.01a8.735,8.735,0,1,1-8.52,8.733A8.625,8.625,0,0,1,1236.52,88.01Zm0,1.027a7.708,7.708,0,1,1-7.52,7.705A7.616,7.616,0,0,1,1236.52,89.037Zm6.13,13.059,4.36,4.464-1.4,1.437-4.36-4.464Z\" transform=\"translate(-1228 -88)\"/>\n                                    </svg>\n\n                                    </button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                    <ul class=\"header__navbar\">\n                        <li class=\"header__navbar-link\"><a href=\"#\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n                            <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                    <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                        <rdf:Description rdf:about=\"\"/>\n                                    </rdf:RDF>\n                                </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                <?xpacket end=\"w\"?></metadata>\n                            <defs>\n                                <style>\n                                    .cls-1 {\n                                        fill: #333e48;\n                                        fill-rule: evenodd;\n                                    }\n                                </style>\n                            </defs>\n                            <path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n                        </svg>\n                        </a></li>\n                        <li class=\"header__navbar-link\"><a href=\"#\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n                            <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                            <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n                            <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n                        </a></li>\n                        <li class=\"header__navbar-link\"><a href=\"#\">\n                            <div class=\"header__navbar-summary\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"20\" viewBox=\"0 0 17 20\">\n                                <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                    <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                        <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                            <rdf:Description rdf:about=\"\"/>\n                                        </rdf:RDF>\n                                    </x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                                    <?xpacket end=\"w\"?></metadata>\n                                <defs>\n                                    <style>\n                                        .cls-1 {\n                                            fill: #333e48;\n                                            fill-rule: evenodd;\n                                        }\n                                    </style>\n                                </defs>\n                                <path id=\"Shopping_Cart_icon\" data-name=\"Shopping Cart icon\" class=\"cls-1\" d=\"M1448.07,92h-3.3V91.166a4.23,4.23,0,0,0-8.46,0v4.166H1438V93.666h3.39V92H1438V91.166a2.54,2.54,0,0,1,5.08,0v4.166h1.69V93.666h1.78l0.76,11.667h-13.45l0.68-11.667h0.08V92h-1.61L1432,107h17Z\" transform=\"translate(-1432 -87)\"/>\n                            </svg>\n\n                                <div class=\"header__navbar-counter\"><span>4</span></div>\n                            </div>\n                            <div class=\"header__navbar-quantity\"><span class=\"header__navbar-quantity-dollar\">$</span><span class=\"header__navbar-quantity-current\">3 215.99</span></div></a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"header__bottom\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-3\">\n                    <ul class=\"header__menuList\">\n                        <li class=\"header__menuList-title toggle-menu-bar\"><span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"12\" viewBox=\"0 0 17 12\">\n  <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n      <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n   <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n      <rdf:Description rdf:about=\"\"/>\n   </rdf:RDF>\n</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <?xpacket end=\"w\"?></metadata>\n<defs>\n    <style>\n      .cls-1 {\n          fill: #333e48;\n          fill-rule: evenodd;\n      }\n    </style>\n  </defs>\n  <path id=\"category_list_icon\" data-name=\"category list icon\" class=\"cls-1\" d=\"M0.008,10H2.02v2H0.008V10ZM3.969,0H17V2H3.969V0Zm0,5H17V7H3.969V5Zm0,5H17v2H3.969V10ZM0.008,5H2.02V7H0.008V5Zm0-5H2.02V2H0.008V0Z\"/>\n</svg>\nAll Departments</span></li>\n                        <li class=\"header__menuList-item\"><a href=\"#\" class=\"header__menuList-link bold-link\">Value of the Day</a></li>\n                        <li class=\"header__menuList-item\"><a href=\"#\" class=\"header__menuList-link bold-link\">Top 100 Offers</a></li>\n                        <li class=\"header__menuList-item\"><a href=\"#\" class=\"header__menuList-link bold-link\">New Arrivals</a></li>\n                        <li class=\"header__menuList-item header__menuList-underList\"><a href=\"#\" class=\"header__menuList-link\">Laptops & Computers</a>\n                            <ul class=\"header-dropmenu\">\n                                <li></li>\n                            </ul>\n                        </li>\n                        <li class=\"header__menuList-item header__menuList-underList\"><a href=\"#\" class=\"header__menuList-link\">Cameras & Photography</a></li>\n                        <li class=\"header__menuList-item header__menuList-underList\"><a href=\"#\" class=\"header__menuList-link\">Smart Phones & Tablets</a></li>\n                        <li class=\"header__menuList-item header__menuList-underList\"><a href=\"#\" class=\"header__menuList-link\">Video Games & Consoles</a></li>\n                        <li class=\"header__menuList-item header__menuList-underList\"><a href=\"#\" class=\"header__menuList-link\">TV & Audio</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-lg-9\">\n                    <nav class=\"header__nav\">\n                        <ul class=\"header__nav-wrapper\">\n                            <li class=\"header__nav-item\"><a href=\"#\" class=\"header__nav-link_active\">SuperDeals</a></li>\n                            <li class=\"header__nav-item\"><a href=\"#\" class=\"header__nav-link\">Featured Brands</a></li>\n                            <li class=\"header__nav-item\"><a href=\"#\" class=\"header__nav-link\">Trending Styles</a></li>\n                            <li class=\"header__nav-item\"><a href=\"#\" class=\"header__nav-link\">Gift Cards</a></li>\n                            <li class=\"header__nav-item\"><a href=\"#\" class=\"header__nav-link\">Blog</a></li>\n                        </ul><a href=\"#\" class=\"header-special-link\">Free Shipping on Orders $50+</a>\n                    </nav>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<main>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t\t<div class=\"shopping-cart\">\n\t\t\t\t\t<header>\n\t\t\t\t\t\t<div class=\"shopping-cart__title\">Shopping Cart Summary</div>\n\t\t\t\t\t</header>\n\t\t\t\t\t<form action=\"#\" method=\"POST\">\n\t\t\t\t\t\t<div class=\"shopping-cart__table\">\n\t\t\t\t\t\t\t<div class=\"shopping-cart__table-head\">\n\t\t\t\t\t\t\t\t<div class=\"shopping-cart__table-row\">\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart__head-close\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart__head-thumbnail\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart__head-product\">Product</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart__head-price\">Price</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart__head-quantity\">Quantity</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart__head-total\">Total</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shopping-cart__table-body\" data-bind=\"foreach: products\">\n\t\t\t\t\t\t\t\t<div class=\"shopping-cart__table-row\">\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart__table-close\">\n\t\t\t\t\t\t\t\t\t\t<span data-bind=\"click: $parent.removeItem\">\n\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 21.9 21.9\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 21.9 21.9\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path d=\"M14.1,11.3c-0.2-0.2-0.2-0.5,0-0.7l7.5-7.5c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.5-0.3-0.7l-1.4-1.4C20,0.1,19.7,0,19.5,0  c-0.3,0-0.5,0.1-0.7,0.3l-7.5,7.5c-0.2,0.2-0.5,0.2-0.7,0L3.1,0.3C2.9,0.1,2.6,0,2.4,0S1.9,0.1,1.7,0.3L0.3,1.7C0.1,1.9,0,2.2,0,2.4  s0.1,0.5,0.3,0.7l7.5,7.5c0.2,0.2,0.2,0.5,0,0.7l-7.5,7.5C0.1,19,0,19.3,0,19.5s0.1,0.5,0.3,0.7l1.4,1.4c0.2,0.2,0.5,0.3,0.7,0.3  s0.5-0.1,0.7-0.3l7.5-7.5c0.2-0.2,0.5-0.2,0.7,0l7.5,7.5c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.4-1.4c0.2-0.2,0.3-0.5,0.3-0.7  s-0.1-0.5-0.3-0.7L14.1,11.3z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shopping-cart__table-thumbnail\"><a href=\"#\"><img src=\"" + __webpack_require__(6) + "\" alt=\"Picture\"></a></div>\n\t\t\t\t\t\t\t\t\t<div data-title=\"Product:\" class=\"shopping-cart__table-product\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\">\n\t\t\t\t\t\t\t\t\t\t\t<h5 data-bind=\"text: title\"></h5>\n\t\t\t\t\t\t\t\t\t\t\t<p data-bind=\"text: brand\"></p>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div data-title=\"Price:\" class=\"shopping-cart__table-price\" data-bind=\"text: '$' + price\"></div>\n\t\t\t\t\t\t\t\t\t<div data-title=\"Quantity:\" class=\"shopping-cart__table-quantity\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"single-product__quantity-add\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"single-product__quantity-counter\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" value=\"1\" data-bind=\" value: quantity \">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"single-product__quantity-switcher\">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"single-product__quantity-plus\" data-bind=\"click: $parent.quantityPlus\">+</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"single-product__quantity-minus\">-</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div data-title=\"Total:\" class=\"shopping-cart__table-total\">$1,999.00</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- ko if: products().length == 0 -->\n\t\t\t\t\t\t<div class=\"shopping-cart__empty\">\n\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t\t\t\t\t\t\t\t  width=\"142.916px\" height=\"142.916px\" viewBox=\"0 0 142.916 142.916\" style=\"enable-background:new 0 0 142.916 142.916;\"\n\t\t\t\t\t\t\t\t  xml:space=\"preserve\">\n\t\t\t\t\t\t\t\t  <path d=\"M32.901,114.799l-12.015,16.507c-2.375,3.265-1.656,7.835,1.608,10.21c1.301,0.945,2.807,1.4,4.295,1.4\n\t\t\t\t\t\t\t\t\t c2.261,0,4.487-1.043,5.917-3.006l12.11-16.638c7.951,4.239,17.019,6.651,26.644,6.651c31.342,0,56.84-25.499,56.84-56.842\n\t\t\t\t\t\t\t\t\t c0-15.979-6.636-30.427-17.283-40.764l15.074-20.709c2.375-3.265,1.655-7.834-1.607-10.21c-3.273-2.377-7.84-1.651-10.209,1.608\n\t\t\t\t\t\t\t\t\t L99.313,23.562c-8.241-4.655-17.739-7.323-27.856-7.323c-31.343,0-56.842,25.499-56.842,56.841\n\t\t\t\t\t\t\t\t\t C14.615,89.557,21.665,104.409,32.901,114.799z M113.682,73.08c0,23.284-18.94,42.226-42.226,42.226\n\t\t\t\t\t\t\t\t\t c-6.407,0-12.461-1.477-17.905-4.039l48.729-66.951C109.331,51.864,113.682,61.964,113.682,73.08z M71.457,30.856\n\t\t\t\t\t\t\t\t\t c6.901,0,13.403,1.698,19.159,4.646l-49.043,67.381c-7.623-7.643-12.344-18.181-12.344-29.801\n\t\t\t\t\t\t\t\t\t C29.232,49.798,48.173,30.856,71.457,30.856z\"/>\n\t\t\t\t\t\t\t   </svg>\n\t\t\t\t\t\t\t<h3>Your shopping cart is empty. Please add products</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /ko  -->\n\t\t\t\t\t\t<!-- ko if: products().length > 0 -->\n\t\t\t\t\t\t<div class=\"shopping-cart__order-info\">\n\t\t\t\t\t\t\t<p>Free Delivery</p>\n\t\t\t\t\t\t\t<p>Total<span class=\"shopping-cart__order-total\">$ 770</span>TTC</p>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"shopping-cart__buttons-wrap right-item\">\n\t\t\t\t\t\t\t<div class=\"shopping-cart__buttons-row\">\n\t\t\t\t\t\t\t\t<button class=\"shopping-cart__checkout\" data-bind=\"enable: productEnableButton\">Proceed to Checkout</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- /ko -->\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</main>\n";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<section class=\"jumbo\">\n\t<div class=\"jumbo-carousel\">\n\t\t<div class=\"jumbo-slide\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-3\"></div>\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<div class=\"jumbo-content\">\n\t\t\t\t\t\t\t<h1 class=\"jumbo-content__title\">THE NEW STANDA</h1>\n\t\t\t\t\t\t\t<h4 class=\"jumbo-content__subtitle\">UNDER FAVORABLE SMARTWATCHES</h4>\n\t\t\t\t\t\t\t<div class=\"jumbo-content__price\"><span>from</span>\n\t\t\t\t\t\t\t\t<div class=\"jumbo-content__number\">749<span>99</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"jumbo-slide\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-3\"></div>\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<div class=\"jumbo-content\">\n\t\t\t\t\t\t\t<h1 class=\"jumbo-content__title\">THE NEW STANDA</h1>\n\t\t\t\t\t\t\t<h4 class=\"jumbo-content__subtitle\">UNDER FAVORABLE SMARTWATCHES</h4>\n\t\t\t\t\t\t\t<div class=\"jumbo-content__price\"><span>from</span>\n\t\t\t\t\t\t\t\t<div class=\"jumbo-content__number\">749<span>99</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"jumbo-slide\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-3\"></div>\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<div class=\"jumbo-content\">\n\t\t\t\t\t\t\t<h1 class=\"jumbo-content__title\">THE NEW STANDA</h1>\n\t\t\t\t\t\t\t<h4 class=\"jumbo-content__subtitle\">UNDER FAVORABLE SMARTWATCHES</h4>\n\t\t\t\t\t\t\t<div class=\"jumbo-content__price\"><span>from</span>\n\t\t\t\t\t\t\t\t<div class=\"jumbo-content__number\">749<span>99</span></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<main>\n\t<section class=\"media-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t<div class=\"media-banner\">\n\t\t\t\t\t\t<div class=\"media-banner__img\"><img src=\"" + __webpack_require__(55) + "\" alt=\"picture\"/></div>\n\t\t\t\t\t\t<div class=\"media-banner__text\">\n\t\t\t\t\t\t\t<div class=\"media-banner__inner\">\n\t\t\t\t\t\t\t\t<p>catch big<br/><strong>deals</strong>on the<br/>\n\t\t\t\t\t\t\t\t\tcameras\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<div class=\"shop-now__wrapper\">\n\t\t\t\t\t\t\t\t\t<button>Shop now</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t<div class=\"media-banner\">\n\t\t\t\t\t\t<div class=\"media-banner__img\"><img src=\"" + __webpack_require__(56) + "\" alt=\"picture\"/></div>\n\t\t\t\t\t\t<div class=\"media-banner__text\">\n\t\t\t\t\t\t\t<div class=\"media-banner__inner\">\n\t\t\t\t\t\t\t\t<p>catch big<br/><strong>deals</strong>on the<br/>\n\t\t\t\t\t\t\t\t\tcameras\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<div class=\"shop-now__wrapper\">\n\t\t\t\t\t\t\t\t\t<button>Shop now</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4 col-md-4 col-xs-12\">\n\t\t\t\t\t<div class=\"media-banner\">\n\t\t\t\t\t\t<div class=\"media-banner__img\"><img src=\"" + __webpack_require__(57) + "\" alt=\"picture\"/></div>\n\t\t\t\t\t\t<div class=\"media-banner__text\">\n\t\t\t\t\t\t\t<div class=\"media-banner__inner\">\n\t\t\t\t\t\t\t\t<p>catch big<br/><strong>deals</strong>on the<br/>\n\t\t\t\t\t\t\t\t\tcameras\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<div class=\"shop-now__wrapper\">\n\t\t\t\t\t\t\t\t\t<button>Shop now</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<section class=\"offer-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-4 col-md-4\">\n\t\t\t\t\t<div class=\"special-offer\">\n\t\t\t\t\t\t<div class=\"special-offer__header\">\n\t\t\t\t\t\t\t<div class=\"special-offer__header-title\">\n\t\t\t\t\t\t\t\t<h5><strong>Special<br/></strong>Offer</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"special-offer__header-button\">\n\t\t\t\t\t\t\t\t<button>\n\t\t\t\t\t\t\t\t\tSave<br/>\n\t\t\t\t\t\t\t\t\t$20\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"special-offer__img\"><img src=\"" + __webpack_require__(52) + "\" alt=\"Picture\"></div>\n\t\t\t\t\t\t<div class=\"special-offer__title\"><a href=\"#\">\n\t\t\t\t\t\t\t<h3>Game Console Controller <br/>+ USB 3.0 Cable</h3></a></div>\n\t\t\t\t\t\t<div class=\"special-offer__price\"><span class=\"special-offer__price-old\">$99,00</span><span class=\"special-offer__price-new\">$79,00</span></div>\n\t\t\t\t\t\t<div class=\"special-offer__bar\">\n\t\t\t\t\t\t\t<div class=\"special-offer__bar-text\"><span>Availavle: <strong>6</strong></span><span>Already Sold: <strong>28</strong></span></div>\n\t\t\t\t\t\t\t<div class=\"special-offer__progress\">\n\t\t\t\t\t\t\t\t<div class=\"special-offer__progress-active\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"special-offer__countdown-wrap\">\n\t\t\t\t\t\t\t<h6>Hurry Up! Offer ends in:</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-8 col-md-8\">\n\t\t\t\t\t<div class=\"offer-tabs\">\n\t\t\t\t\t\t<div class=\"offer-tabs__header single-product__tabs-navigation\">\n\t\t\t\t\t\t\t<ul role=\"tablist\" class=\"nav nav-tabs\">\n\t\t\t\t\t\t\t\t<li class=\"active\"><a href=\"#Accesories\" aria-controls=\"Accesories\" role=\"tab\" data-toggle=\"tab\">Accesories</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#Description\" aria-controls=\"Description\" role=\"tab\" data-toggle=\"tab\">Description</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#Specification\" aria-controls=\"Specification\" role=\"tab\" data-toggle=\"tab\">Specification</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offer-tabs__container tab-content\">\n\t\t\t\t\t\t\t<div id=\"Accesories\" role=\"tabpanel\" class=\"tab-pane active offer-tab__item\">\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"Description\" role=\"tabpanel\" class=\"tab-pane offer-tab__item\">\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div id=\"Specification\" role=\"tabpanel\" class=\"tab-pane offer-tab__item\">\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n</main>\n<section class=\"grey-section items-row\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"offer-big\">\n\t\t\t\t<div class=\"offer-big__tab-header single-product__tabs-navigation\">\n\t\t\t\t\t<ul role=\"tablist\" class=\"nav nav-tabs\">\n\t\t\t\t\t\t<li class=\"active\"><a href=\"#Best\" aria-controls=\"Accesories\" role=\"tab\" data-toggle=\"tab\">Best Deals</a></li>\n\t\t\t\t\t\t<li><a href=\"#TV\" aria-controls=\"TV\" role=\"tab\" data-toggle=\"tab\">TV</a></li>\n\t\t\t\t\t\t<li><a href=\"#Cameras\" aria-controls=\"Cameras\" role=\"tab\" data-toggle=\"tab\">Cameras</a></li>\n\t\t\t\t\t\t<li><a href=\"#Audio\" aria-controls=\"Audio\" role=\"tab\" data-toggle=\"tab\">Audio</a></li>\n\t\t\t\t\t\t<li><a href=\"#Cell\" aria-controls=\"Cell\" role=\"tab\" data-toggle=\"tab\">Cell</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"offer-tabs__container tab-content\">\n\t\t\t\t\t<div id=\"Best\" role=\"tabpanel\" class=\"tab-pane active offer-big__item\">\n\t\t\t\t\t\t<div class=\"offer-big__item-double\">\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offer-big__item-single\">\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(13) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offer-big__item-double\">\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offer-big__item-double\">\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offer-big__item-single\">\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(13) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offer-big__item-double\">\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offer-big__item-double\">\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offer-big__item-single\">\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(13) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"offer-big__item-double\">\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"TV\" role=\"tabpanel\" class=\"tab-pane active offer-big__item\"></div>\n\t\t\t\t\t<div id=\"Cameras\" role=\"tabpanel\" class=\"tab-pane active offer-big__item\"></div>\n\t\t\t\t\t<div id=\"Audio\" role=\"tabpanel\" class=\"tab-pane active offer-big__item\"></div>\n\t\t\t\t\t<div id=\"Cell\" role=\"tabpanel\" class=\"tab-pane active offer-big__item\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"best\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"main-title__wrapper\">\n\t\t\t\t<h3 class=\"main-title__text title--big\">Bestsellers</h3>\n\t\t\t\t<hr/>\n\t\t\t</div>\n\t\t\t<div class=\"items-row\">\n\t\t\t\t<div class=\"bestsellersDouble\">\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(5) + "\"/></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__tag\"><a href=\"#\">Laptops</a></div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$9490.00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__cart\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(5) + "\"/></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__tag\"><a href=\"#\">Laptops</a></div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$9842.00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__cart\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(5) + "\"/></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__tag\"><a href=\"#\">Laptops</a></div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$7449.00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__cart\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(5) + "\"/></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__tag\"><a href=\"#\">Laptops</a></div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$4185.00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__cart\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(5) + "\"/></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__tag\"><a href=\"#\">Laptops</a></div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$8354.00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__cart\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(5) + "\"/></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__tag\"><a href=\"#\">Laptops</a></div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$1129.00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__cart\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(5) + "\"/></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__tag\"><a href=\"#\">Laptops</a></div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$9862.00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__cart\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(5) + "\"/></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__tag\"><a href=\"#\">Laptops</a></div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$8712.00</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__cart\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<div class=\"items-row\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"banner\"><a href=\"#\">\n\t\t\t\t\t\t\t<div class=\"banner__wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"banner__text\">\n\t\t\t\t\t\t\t\t\t<h2>SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS</h2>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"banner__price\">\n\t\t\t\t\t\t\t\t\t<h6>Starting at</h6><span class=\"jumbo-content__number\">749<span>99</span></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"banner-full__text\"></div></a></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<section class=\"best\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"main-title__wrapper\">\n\t\t\t\t<h3 class=\"main-title__text title--big\">Recently Viewed</h3>\n\t\t\t\t<hr/>\n\t\t\t</div>\n\t\t\t<div class=\"items-row\">\n\t\t\t\t<div id=\"BestsellersMain\">\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t\t<li class=\"shop-item\">\n\t\t\t\t\t\t\t<div class=\"shop-item__header\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__image\"><img src=\"" + __webpack_require__(0) + "\" alt=\"item\"/></div>\n\t\t\t\t\t\t\t<div class=\"shop-item__descr\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a href=\"#\" class=\"shop-item__title\">\n\t\t\t\t\t\t\t\t\t<h3>Smartphone 6S 32GB LTE</h3></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"shop-item__footer\">\n\t\t\t\t\t\t\t\t<div class=\"shop-item__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shop-item__cost-current\">$1 999,00</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__basket\"></div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"shop-item__hidden\">\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n\t\t\t\t\t\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t\t\t\t\t\t<defs>\n\t\t\t\t\t\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t</style>\n\t\t\t\t\t\t\t\t\t\t</defs>\n\t\t\t\t\t\t\t\t\t\t<path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\" d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\" transform=\"translate(-1321 -89)\"/>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Compare</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n\t\t\t\t\t\t\t\t\t\t<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n\t\t\t\t\t\t\t\t\t\t<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n\t\t\t\t\t\t\t\t\t\t<span>Add to Wishlist</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<div class=\"items-row\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<!-- Variables-->\n\t\t\t\t<!-- Mixin render all images-->\n\t\t\t\t<!-- Wrap Section-->\n\t\t\t\t<div class=\"brand-carousel\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"brand-carousel__wrapper\">\n\t\t\t\t\t\t\t\t<div class=\"brand-carousel__item\"><img src=\"" + __webpack_require__(12) + "\" alt=\"Brand Image\"></div>\n\t\t\t\t\t\t\t\t<div class=\"brand-carousel__item\"><img src=\"" + __webpack_require__(14) + "\" alt=\"Brand Image\"></div>\n\t\t\t\t\t\t\t\t<div class=\"brand-carousel__item\"><img src=\"" + __webpack_require__(15) + "\" alt=\"Brand Image\"></div>\n\t\t\t\t\t\t\t\t<div class=\"brand-carousel__item\"><img src=\"" + __webpack_require__(12) + "\" alt=\"Brand Image\"></div>\n\t\t\t\t\t\t\t\t<div class=\"brand-carousel__item\"><img src=\"" + __webpack_require__(14) + "\" alt=\"Brand Image\"></div>\n\t\t\t\t\t\t\t\t<div class=\"brand-carousel__item\"><img src=\"" + __webpack_require__(15) + "\" alt=\"Brand Image\"></div>\n\t\t\t\t\t\t\t\t<div class=\"brand-carousel__item\"><img src=\"" + __webpack_require__(12) + "\" alt=\"Brand Image\"></div>\n\t\t\t\t\t\t\t\t<div class=\"brand-carousel__item\"><img src=\"" + __webpack_require__(14) + "\" alt=\"Brand Image\"></div>\n\t\t\t\t\t\t\t\t<div class=\"brand-carousel__item\"><img src=\"" + __webpack_require__(15) + "\" alt=\"Brand Image\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"items-row\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-4 col-md-4\">\n\t\t\t\t<div class=\"main-title__wrapper\">\n\t\t\t\t\t<h3 class=\"main-title__text title--small\">Featured Products</h3>\n\t\t\t\t\t<hr/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$2908.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$2523.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$9901.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$9480.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-4\">\n\t\t\t\t<div class=\"main-title__wrapper\">\n\t\t\t\t\t<h3 class=\"main-title__text title--small\">Onsale Products</h3>\n\t\t\t\t\t<hr/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$776.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$3700.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$1287.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$8442.00</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-4\">\n\t\t\t\t<div class=\"main-title__wrapper\">\n\t\t\t\t\t<h3 class=\"main-title__text title--small\">Top Rated Products</h3>\n\t\t\t\t\t<hr/>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__rating\"><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$8832.00</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__oldPrice\">222$</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__rating\"><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$4629.00</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__oldPrice\">222$</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__rating\"><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$9691.00</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__oldPrice\">222$</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"simple-element defaultSmall\">\n\t\t\t\t\t<div class=\"simple-element__wrap defaultSmall\">\n\t\t\t\t\t\t<div class=\"simple-element__img\">\n\t\t\t\t\t\t\t<div class=\"simple-element__background\"><img src=\"" + __webpack_require__(4) + "\"/></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"simple-element__text defaultSmall\">\n\t\t\t\t\t\t\t<div class=\"simple-element__header\">\n\t\t\t\t\t\t\t\t<h5 class=\"blue-text\">Ribka Lorem</h5>\n\t\t\t\t\t\t\t\t<div class=\"simple-element__rating\"><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/><img src=\"" + __webpack_require__(3) + "\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"simple-element__footer\">\n\t\t\t\t\t\t\t\t<div class=\"simple-element__price\">\n\t\t\t\t\t\t\t\t\t<div class=\"simple-element__priceNumber\"><span>$9167.00</span>\n\t\t\t\t\t\t\t\t\t\t<div class=\"simple-element__oldPrice\">222$</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"sign-up\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t<div class=\"sign-up__title\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">\n\t\t\t\t\t<metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n\t\t\t\t\t\t<x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n\t\t\t\t\t\t\t<rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n\t\t\t\t\t\t\t\t<rdf:Description rdf:about=\"\"/>\n\t\t\t\t\t\t\t</rdf:RDF>\n\t\t\t\t\t\t</x:xmpmeta>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\t\t\t<?xpacket end=\"w\"?></metadata>\n\t\t\t\t\t<defs>\n\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</style>\n\t\t\t\t\t</defs>\n\t\t\t\t\t<path id=\"newsletter_icon\" data-name=\"newsletter icon\" class=\"cls-1\" d=\"M400.265,4857H400.21a11.021,11.021,0,0,1-2.411-2.13c-2.308-2.3-4.628-4.54-6.96-6.78-1.57,1.76-3.025,3.56-4.659,5.36-0.243.26-1.168,1.68-1.918,1.47-0.637-.17-0.348-1.39-0.274-2.18,0.25-2.66.487-5.27,0.768-7.71-2.486-.88-4.859-1.57-7.563-2.46-0.685-.23-2.172-0.51-2.193-1.2s1.247-1.12,1.809-1.42c10.017-5.42,19.772-10.58,29.649-16.02,0.343-.19,1.738-1.17,2.3-0.87,0.511,0.26.065,1.59-.055,2.07-2.546,10.17-5,19.95-7.508,30.01C401.022,4855.84,400.851,4857,400.265,4857Zm-22.908-15.8c1.965,0.65,3.95,1.26,5.974,1.92a7.912,7.912,0,0,0,1.973.65,4.922,4.922,0,0,0,1.1-.87c4.941-3.98,9.456-7.65,14.358-11.54,0.575-.45,1.684-1.73,2.357-1.64,1.064,0.15.278,1.3-.055,1.75-3.822,5.26-7.7,10.52-11.344,15.58,2.514,2.42,5.171,5.05,7.617,7.49a0.769,0.769,0,0,0,.494.33c2.5-9.91,5.115-20.01,7.453-29.9C397.346,4830.42,387.3,4835.76,377.357,4841.2Zm10.3,2.41a6.21,6.21,0,0,0-1.589,1.42,8.808,8.808,0,0,0-.165,1.8c-0.167,1.9-.334,3.52-0.548,5.36,5.33-5.25,9.543-11.91,13.921-17.93C395.521,4837.27,391.523,4840.55,387.66,4843.61Z\" transform=\"translate(-375 -4823)\"/>\n\t\t\t\t</svg>\n\t\t\t\t\t<span>Sign up to Newsletter</span>\n\t\t\t\t\t<div class=\"sign-up__innertext\"> ...and receive<strong>$20 coupon for first shopping</strong></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t<div class=\"sign-up__searchWrap\">\n\t\t\t\t\t<input placeholder=\"Enter your email address\" class=\"sign-up__search\">\n\t\t\t\t\t<button class=\"sign-up__searchButton\">Sign Up</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"breadcrumbs\">\n\t\t\t\t<nav>\n\t\t\t\t\t<ul class=\"breadcrumbs__wrap\">\n\t\t\t\t\t\t<li class=\"breadcrumbs__list\"><a href=\"#\" class=\"breadcrumbs__link\">Home</a></li>\n\t\t\t\t\t\t<li class=\"breadcrumbs__list\"><a href=\"#\" class=\"breadcrumbs__link-active\">Laptops & Computers</a></li>\n\t\t\t\t\t\t<li class=\"breadcrumbs__list\"><a href=\"#\" class=\"breadcrumbs__link\">Laptops & Computers Categories</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12\">\n\t\t\t<div class=\"form__validation-state\">\n\t\t\t\t<p>\n\t\t\t\t\t<strong>Error :</strong>\n\t\t\t\t\t<span></span>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"account__wrapper\">\n\t\t\t\t<div class=\"account__sign-in\">\n\t\t\t\t\t<form data-bind=\"event: {submit: handleSubmit}, with: loginModel\"  id=\"AccountSignIn\" novalidate>\n\t\t\t\t\t\t<div class=\"main-title__wrapper\">\n\t\t\t\t\t\t\t<h3 class=\"main-title__text title--small\">Sign In</h3>\n\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"account__sign-in-text\">Welcome back! Sign in to Your Account</p>\n\t\t\t\t\t\t<div class=\"form-element__wrapper\">\n\t\t\t\t\t\t\t<label class=\"form-element__label\">\n\t\t\t\t\t\t\t\t<input data-bind=\"value: username\" type=\"email\" placeholder=\"Email Address*\" class=\"form-element__input\" minlength=\"3\" required/>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-element__wrapper\">\n\t\t\t\t\t\t\t<label class=\"form-element__label\">\n\t\t\t\t\t\t\t\t<input type=\"password\" data-bind=\"value: password\" placeholder=\"Password*\" class=\"form-element__input\" size=\"30\" minlength=\"6\" required/>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"account__sign-in-remember\">\n\t\t\t\t\t\t\t<div class=\"form-element__wrapper\">\n\t\t\t\t\t\t\t\t<label class=\"form-element__label checkbox-label\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\"  class=\"form-element__hidden-checkbox\" data-bind=\"checked: remember\"/>\n\t\t\t\t\t\t\t\t\t<div class=\"form-element__checkbox\">\n\t\t\t\t\t\t\t\t\t\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 26\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" enable-background=\"new 0 0 26 26\">\n\t\t\t\t\t\t\t\t\t\t\t<path d=\"m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z\"/>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\n\t\t\t\t\t\t\t\t\t</div><span class=\"form-element__name\">Remember Me</span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div><a href=\"#\">Forgotten Password?</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"account__sign-in-button\">\n\t\t\t\t\t\t\t<button class=\"form-button\" type=\"submit\">Login</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"account__create-new\">\n\t\t\t\t\t<form data-bind=\"event: {'keyup': accountStepValidation}\"  novalidate>\n\t\t\t\t\t\t<div class=\"main-title__wrapper\">\n\t\t\t\t\t\t\t<h3 class=\"main-title__text title--small\">Create New Account</h3>\n\t\t\t\t\t\t\t<hr/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p class=\"account__sign-in-text\">Create Your very own Electro Account</p>\n\t\t\t\t\t\t<div class=\"account__sign-steps\">\n\t\t\t\t\t\t\t<div class=\"account__sign-steps-current\">1</div>\n\t\t\t\t\t\t\t<div class=\"account__sign-steps-last\">3</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form__steps\">\n\t\t\t\t\t\t\t<div data-step=\"1\" class=\"form__steps-container current\" data-bind=\"with: accountModel\">\n\t\t\t\t\t\t\t\t<div class=\"form-element__wrapper\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-element__label\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Email Address\" class=\"form-element__input\" data-bind=\"value: username\"  data-validate=\"email\"/>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div data-step=\"2\" class=\"form__steps-container\" data-bind=\"with: accountModel\" >\n\t\t\t\t\t\t\t\t<div class=\"form-element__wrapper\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-element__label\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" placeholder=\"Password\" class=\"form-element__input\" data-validate=\"password\" data-bind=\"value: password\"/>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div data-step=\"3\" class=\"form__steps-container\">\n\t\t\t\t\t\t\t\t<div class=\"form-element__wrapper\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-element__label\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" placeholder=\"Confirm Password\" class=\"form-element__input\" data-bind=\"event: {'keyup': confirmPassword}\"  data-validate=\"password-confirm\">\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form__step-navigation\">\n\t\t\t\t\t\t\t\t<button class=\"form__step-navigation-prev hidden-b\" data-bind=\"event: {'click': prevStep}\">\n\t\t\t\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\"  viewBox=\"0 0 511.63 511.631\" style=\"enable-background:new 0 0 511.63 511.631;\" xml:space=\"preserve\">\n      \t\t\t\t\t\t\t\t\t<path d=\"M496.5,233.842c-30.841-76.706-114.112-115.06-249.823-115.06h-63.953V45.693c0-4.952-1.809-9.235-5.424-12.85   c-3.617-3.617-7.896-5.426-12.847-5.426c-4.952,0-9.235,1.809-12.85,5.426L5.424,179.021C1.809,182.641,0,186.922,0,191.871   c0,4.948,1.809,9.229,5.424,12.847L151.604,350.9c3.619,3.613,7.902,5.428,12.85,5.428c4.947,0,9.229-1.814,12.847-5.428   c3.616-3.614,5.424-7.898,5.424-12.848v-73.094h63.953c18.649,0,35.349,0.568,50.099,1.708c14.749,1.143,29.413,3.189,43.968,6.143   c14.564,2.95,27.224,6.991,37.979,12.135c10.753,5.144,20.794,11.756,30.122,19.842c9.329,8.094,16.943,17.7,22.847,28.839   c5.896,11.136,10.513,24.311,13.846,39.539c3.326,15.229,4.997,32.456,4.997,51.675c0,10.466-0.479,22.176-1.428,35.118   c0,1.137-0.236,3.375-0.715,6.708c-0.473,3.333-0.712,5.852-0.712,7.562c0,2.851,0.808,5.232,2.423,7.136   c1.622,1.902,3.86,2.851,6.714,2.851c3.046,0,5.708-1.615,7.994-4.853c1.328-1.711,2.561-3.806,3.71-6.283   c1.143-2.471,2.43-5.325,3.854-8.562c1.431-3.237,2.43-5.513,2.998-6.848c24.17-54.238,36.258-97.158,36.258-128.756   C511.63,291.039,506.589,259.344,496.5,233.842z\"/>\n  \t\t\t\t\t\t\t\t\t </svg>\n\t\t\t\t\t\t\t\t\t<span>prev</span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"form__step-navigation-next hidden-b\" data-bind=\"event: {'click': nextStep}\">next</button>\n\t\t\t\t\t\t\t\t<button href=\"#\" disabled=\"\" data-bind=\"click: submitNewAccount\" class=\"form__step-navigation-register disabled hidden-b\">Register</button>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form__step-server__response\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<div class=\"form__step-server__response-img\">\n\t\t\t\t\t\t\t\t\t\t<!--<svg version=\"1.1\"  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"-->\n\t\t\t\t\t\t\t\t\t\t\t <!--viewBox=\"0 0 512.602 512.602\" style=\"enable-background:new 0 0 512.602 512.602;\" xml:space=\"preserve\">-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<path d=\"M501.9,356.616l0.28-0.151L283.582,136.702l-0.324-103.41L177.54,4.969l-11.282,11.303l56.257,56.106l-54.79,54.919-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--l-56.257-56.149l-11.26,11.174l28.344,105.654l100.563,0.388l-0.669,0.539l220.065,221.144l0.28-0.259-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c14.733,14.323,38.267,14.323,52.719-0.28C516.201,395.012,516.266,371.435,501.9,356.616z M487.663,395.551-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c-6.536,6.558-17.106,6.558-23.555,0c-6.514-6.493-6.558-16.976-0.043-23.512c6.493-6.536,17.084-6.536,23.62-0.043-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--C494.134,378.489,494.22,389.037,487.663,395.551z\"/>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<path d=\"M47.101,232.67c1.79,0.345,43.638,8.693,52.633,55.911c-11.368,12.058-18.465,28.905-18.465,47.607-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c0,0.216,0.043,0.367,0.043,0.475h119.286c0-0.173,0-0.324,0-0.475c0-18.702-7.097-35.549-18.443-47.607-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c8.995-47.197,50.821-55.566,52.59-55.911c3.904-0.755,6.558-4.487,5.846-8.434c-0.712-3.904-4.465-6.536-8.413-5.846-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c-0.496,0.108-48.75,9.426-62.534,59.988c-8.52-5.134-18.314-8.089-28.732-8.089c-10.376,0-20.169,2.977-28.711,8.132-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c-13.827-50.605-62.016-59.88-62.555-59.988c-3.904-0.69-7.636,1.941-8.348,5.846C40.522,228.184,43.175,231.915,47.101,232.67z\"-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--/>-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!--<path d=\"M275.083,290.696c-5.069-1.596-10.462,1.273-12.08,6.363c0,0-11.799,38.051-14.301,46.226-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c-5.112,1.381-20.751,5.803-31.536,8.779c-0.41-1.726-0.712-3.43-1.122-5.112H65.781c-0.367,1.683-0.712,3.387-1.079,5.112-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c-10.785-3.041-26.446-7.399-31.536-8.779c-2.545-8.175-14.323-46.248-14.323-46.248c-1.553-5.069-6.967-7.96-12.036-6.363-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c-5.112,1.532-7.96,6.924-6.363,12.036l17.408,56.257l44.069,12.274c-0.28,4.055-0.539,8.175-0.539,12.382-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c0,5.134,0.324,10.246,0.777,15.229L18.11,418.567L4.348,496.309c-0.906,5.22,2.588,10.268,7.852,11.174-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c5.22,0.928,10.246-2.524,11.152-7.787c0,0,10.462-58.91,11.972-67.711c4.249-1.92,18.184-8.175,30.091-13.417-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c10.419,44.479,40.316,76.663,75.562,76.663c35.225,0,65.165-32.14,75.606-76.663c11.842,5.242,25.799,11.497,30.048,13.417-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--c1.488,8.736,11.95,67.711,11.95,67.711c0.928,5.263,5.932,8.715,11.217,7.787c5.263-0.906,8.693-5.889,7.809-11.174-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--l-13.784-77.741l-44.004-19.651c0.453-4.983,0.755-10.095,0.755-15.207c0-4.206-0.259-8.348-0.539-12.425l44.048-12.252-->\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!--l17.429-56.278C283.021,297.642,280.152,292.249,275.083,290.696z\"/>-->\n\t\t\t\t\t\t\t\t\t\t<!---->\n\t\t\t\t\t\t\t\t\t\t<!--</svg>-->\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form__step-server__response-text\">Sorry! The server does not respond.</div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h5 class=\"account__title\">Sign up today and you will be able to:</h5>\n\t\t\t\t\t\t<ul class=\"account__list\">\n\t\t\t\t\t\t\t<li>Speed your way through the checkout</li>\n\t\t\t\t\t\t\t<li>Track your orders easily</li>\n\t\t\t\t\t\t\t<li>Keep a record of all your purchases</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>\n<div class=\"sign-up\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-7\">\n\t\t\t\t<div class=\"sign-up__title\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">\n\t\t\t\t\t\t<style>\n\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\tfill: #333e48;\n\t\t\t\t\t\t\t\tfill-rule: evenodd;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</style>\n\t\t\t\t\t</defs>\n\t\t\t\t\t<path id=\"newsletter_icon\" data-name=\"newsletter icon\" class=\"cls-1\" d=\"M400.265,4857H400.21a11.021,11.021,0,0,1-2.411-2.13c-2.308-2.3-4.628-4.54-6.96-6.78-1.57,1.76-3.025,3.56-4.659,5.36-0.243.26-1.168,1.68-1.918,1.47-0.637-.17-0.348-1.39-0.274-2.18,0.25-2.66.487-5.27,0.768-7.71-2.486-.88-4.859-1.57-7.563-2.46-0.685-.23-2.172-0.51-2.193-1.2s1.247-1.12,1.809-1.42c10.017-5.42,19.772-10.58,29.649-16.02,0.343-.19,1.738-1.17,2.3-0.87,0.511,0.26.065,1.59-.055,2.07-2.546,10.17-5,19.95-7.508,30.01C401.022,4855.84,400.851,4857,400.265,4857Zm-22.908-15.8c1.965,0.65,3.95,1.26,5.974,1.92a7.912,7.912,0,0,0,1.973.65,4.922,4.922,0,0,0,1.1-.87c4.941-3.98,9.456-7.65,14.358-11.54,0.575-.45,1.684-1.73,2.357-1.64,1.064,0.15.278,1.3-.055,1.75-3.822,5.26-7.7,10.52-11.344,15.58,2.514,2.42,5.171,5.05,7.617,7.49a0.769,0.769,0,0,0,.494.33c2.5-9.91,5.115-20.01,7.453-29.9C397.346,4830.42,387.3,4835.76,377.357,4841.2Zm10.3,2.41a6.21,6.21,0,0,0-1.589,1.42,8.808,8.808,0,0,0-.165,1.8c-0.167,1.9-.334,3.52-0.548,5.36,5.33-5.25,9.543-11.91,13.921-17.93C395.521,4837.27,391.523,4840.55,387.66,4843.61Z\" transform=\"translate(-375 -4823)\"/>\n\t\t\t\t</svg>\n\t\t\t\t\t<span>Sign up to Newsletter</span>\n\t\t\t\t\t<div class=\"sign-up__innertext\"> ...and receive<strong>$20 coupon for first shopping</strong></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-5\">\n\t\t\t\t<div class=\"sign-up__searchWrap\">\n\t\t\t\t\t<input placeholder=\"Enter your email address\" class=\"sign-up__search\">\n\t\t\t\t\t<button class=\"sign-up__searchButton\">Sign Up</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"breadcrumbs\">\n                <nav>\n                    <ul class=\"breadcrumbs__wrap\">\n                        <li class=\"breadcrumbs__list\"><a href=\"#\" class=\"breadcrumbs__link\">Home</a></li>\n                        <li class=\"breadcrumbs__list\"><a href=\"#\" class=\"breadcrumbs__link-active\">Laptops &\n                            Computers</a></li>\n                        <li class=\"breadcrumbs__list\"><a href=\"#\" class=\"breadcrumbs__link\">Laptops & Computers\n                            Categories</a></li>\n                    </ul>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-md-3\">\n            <aside>\n                <div class=\"category-filter\">\n                    <ul class=\"category-filter__wrapper\">\n                        <li class=\"category-filter__item\"><a data-toggle=\"collapse\" href=\"#CategoryMainList\"\n                                                             aria-expanded=\"true\" aria-controls=\"CategoryMainList\"\n                                                             class=\"category-filter__link\">Show All Categories</a>\n                            <ul id=\"CategoryMainList\" class=\"category-filter__underWrap collapse in\">\n                                <li class=\"category-filter__underItem\"><a href=\"#\"\n                                                                          class=\"category-filter__underLink-active\">Laptops\n                                    & Computers<span class=\"category-filter__counterItem\">2079</span></a>\n                                    <ul class=\"category-filter__subWrap\">\n                                        <li class=\"category-filter__subItem\"><a data-toggle=\"collapse\"\n                                                                                href=\"#CategoryOne\" aria-expanded=\"true\"\n                                                                                aria-controls=\"CategoryOne\"\n                                                                                class=\"category-filter__subLink\">Laptops<span\n                                                class=\"category-filter__counterItem\">800</span></a>\n                                            <ul id=\"CategoryOne\" class=\"collapse in\">\n                                                <li><a href=\"#\">11.6 \"</a><span\n                                                        class=\"category-filter__counterItem\">345</span></li>\n                                                <li><a href=\"#\">11.6 \"</a><span\n                                                        class=\"category-filter__counterItem\">345</span></li>\n                                                <li><a href=\"#\">11.6 \"</a><span\n                                                        class=\"category-filter__counterItem\">345</span></li>\n                                                <li><a href=\"#\">11.6 \"</a><span\n                                                        class=\"category-filter__counterItem\">345</span></li>\n                                                <li><a href=\"#\">11.6 \"</a><span\n                                                        class=\"category-filter__counterItem\">345</span></li>\n                                            </ul>\n                                        </li>\n                                    </ul>\n                                </li>\n                                <li class=\"category-filter__underItem\"><a href=\"#\" class=\"category-filter__underLink\">Laptops\n                                    & Computers<span class=\"category-filter__counterItem\">3222</span></a></li>\n                                <li class=\"category-filter__underItem\"><a href=\"#\" class=\"category-filter__underLink\">Laptops\n                                    & Computers<span class=\"category-filter__counterItem\">4333</span></a></li>\n                                <li class=\"category-filter__underItem\"><a href=\"#\" class=\"category-filter__underLink\">Laptops\n                                    & Computers<span class=\"category-filter__counterItem\">5555</span></a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"banner-img\"><a href=\"#\"><img src=\"" + __webpack_require__(54) + "\" alt=\"Image\"></a></div>\n            </aside>\n        </div>\n        <div class=\"col-lg-9 col-md-9\">\n            <div class=\"single-product__wrapper\">\n                <div class=\"single-product\">\n                    <div class=\"single-product__img\">\n                        <div class=\"single-product__carousel\">\n                            <div class=\"single-product__carousel-item\"><img src=\"" + __webpack_require__(23) + "\"\n                                                                            alt=\"product\"></div>\n                            <div class=\"single-product__carousel-item\"><img src=\"" + __webpack_require__(6) + "\" alt=\"product\">\n                            </div>\n                            <div class=\"single-product__carousel-item\"><img src=\"" + __webpack_require__(7) + "\" alt=\"product\">\n                            </div>\n                            <div class=\"single-product__carousel-item\"><img src=\"" + __webpack_require__(22) + "\" alt=\"product\">\n                            </div>\n                            <div class=\"single-product__carousel-item\"><img src=\"" + __webpack_require__(6) + "\" alt=\"product\">\n                            </div>\n                            <div class=\"single-product__carousel-item\"><img src=\"" + __webpack_require__(7) + "\" alt=\"product\">\n                            </div>\n                        </div>\n                        <div class=\"single-product__gallery\">\n                            <div class=\"single-product__gallery-item\"><img src=\"" + __webpack_require__(23) + "\"\n                                                                           alt=\"product\"></div>\n                            <div class=\"single-product__gallery-item\"><img src=\"" + __webpack_require__(6) + "\" alt=\"product\">\n                            </div>\n                            <div class=\"single-product__gallery-item\"><img src=\"" + __webpack_require__(7) + "\" alt=\"product\">\n                            </div>\n                            <div class=\"single-product__gallery-item\"><img src=\"" + __webpack_require__(22) + "\" alt=\"product\">\n                            </div>\n                            <div class=\"single-product__gallery-item\"><img src=\"" + __webpack_require__(6) + "\" alt=\"product\">\n                            </div>\n                            <div class=\"single-product__gallery-item\"><img src=\"" + __webpack_require__(7) + "\" alt=\"product\">\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"single-product__descr\">\n                        <div class=\"single-product__tag\"><a href=\"#\">Smartphones</a></div>\n                        <div class=\"single-product__title\">\n                            <h2>Ultra Wireless S50 Headphones S50 with Bluetooth</h2>\n                        </div>\n                        <div class=\"single-product__rating\"><img src=\"" + __webpack_require__(3) + "\" alt=\"star\"><img\n                                src=\"" + __webpack_require__(3) + "\" alt=\"star\"><img src=\"" + __webpack_require__(3) + "\" alt=\"star\"><img\n                                src=\"" + __webpack_require__(58) + "\" alt=\"star\"><span\n                                class=\"category-filter__counterItem\">3</span></div>\n                        <div class=\"single-product__avialabity\"><span>Avialabity:</span><span\n                                class=\"single-product__stage\">In stock</span></div>\n                        <div class=\"single-product__action\">\n                            <div class=\"shop-item__add\">\n                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"17\" height=\"17\" viewBox=\"0 0 17 17\">\n                                    <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                                        <x:xmpmeta xmlns:x=\"adobe:ns:meta/\"\n                                                   x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                            <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                                <rdf:Description rdf:about=\"\"/>\n                                            </rdf:RDF>\n                                        </x:xmpmeta>\n                                        <?xpacket end=\"w\"?></metadata>\n                                    <defs>\n                                        <style>\n                                            .cls-1 {\n                                                fill: #333e48;\n                                                fill-rule: evenodd;\n                                            }\n                                        </style>\n                                    </defs>\n                                    <path id=\"Compare_icon\" data-name=\"Compare icon\" class=\"cls-1\"\n                                          d=\"M1336.39,92.286c-1.05,1.015-2.09,2.267-3.11,3.179V93.236c-2.26.11-4.63-.148-6.62,0a4.179,4.179,0,0,0-3.66,5.119,16.441,16.441,0,0,1-1.54,1.569,6.628,6.628,0,0,1,1.27-6.811,5.926,5.926,0,0,1,3.97-1.858c1.99-.118,4.22.087,6.54,0,0.09-.647.01-1.472,0.04-2.188-0.01-.074.04-0.084,0.04-0.041C1334.35,90.1,1335.42,91.141,1336.39,92.286ZM1325.76,103.8c-0.09.647-.02,1.473-0.04,2.188a0.484,0.484,0,0,1-.36-0.289c-0.86-.9-1.87-1.939-2.75-2.848,0.97-1.125,2.1-2.309,3.11-3.261v2.187c2.24-.031,4.66.186,6.58,0.042a4.15,4.15,0,0,0,3.78-4.376,3.368,3.368,0,0,1-.08-0.7,14.262,14.262,0,0,1,1.5-1.61c0.03-.008.03,0.016,0.03,0.041a6.561,6.561,0,0,1-1.26,6.771,5.929,5.929,0,0,1-3.97,1.857C1330.31,103.923,1328.08,103.717,1325.76,103.8Z\"\n                                          transform=\"translate(-1321 -89)\"/>\n                                </svg>\n                                <span>Add to Compare</span>\n                            </div>\n                            <div class=\"shop-item__add\"><?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n                                <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n                                <!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\"\n                                \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n                                <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"979.494px\" height=\"979.494px\" viewBox=\"0 0 979.494 979.494\" style=\"enable-background:new 0 0 979.494 979.494;\"\n\t xml:space=\"preserve\">\n<g>\n\t<g>\n\t\t<path d=\"M964.616,227.519c-15.63-44.595-43.082-84.824-79.389-116.338c-36.341-31.543-80.051-53.048-126.404-62.188\n\t\t\tc-17.464-3.444-35.421-5.19-53.371-5.19c-52.371,0-103.306,14.809-147.296,42.827c-26.482,16.867-49.745,38.022-68.908,62.484\n\t\t\tc-19.158-24.415-42.405-45.53-68.859-62.364C376.42,58.773,325.52,43.985,273.189,43.985c-0.003,0,0.001,0-0.001,0\n\t\t\tc-43.604,0-87.367,10.77-126.546,31.143c-39.15,20.358-73.104,49.978-98.188,85.658C22.752,197.343,7.096,238.278,1.92,282.453\n\t\t\tc-4.532,38.687-1.032,80.217,10.405,123.436c22.656,85.615,72.803,163.707,110.882,214.142\n\t\t\tc82.795,109.659,196.636,209.196,348.028,304.301l18.085,11.36l18.086-11.36C693.624,807.35,823.602,683.842,904.764,546.749\n\t\t\tc46.678-78.844,70.994-149.084,74.343-214.733C980.972,295.429,976.096,260.271,964.616,227.519z M489.322,855.248\n\t\t\tc-135.253-87.096-237.398-177.586-311.846-276.192c-34.407-45.571-79.583-115.623-99.414-190.562\n\t\t\tc-9.245-34.937-12.14-67.951-8.604-98.128c3.846-32.824,15.494-63.262,34.623-90.47c18.844-26.803,44.41-49.085,73.932-64.436\n\t\t\tc29.533-15.357,62.444-23.474,95.176-23.474c39.377,0,77.654,11.113,110.692,32.136c32.204,20.492,58.094,49.399,74.868,83.596\n\t\t\tl30.559,62.292l30.505-62.318c16.759-34.238,42.648-63.183,74.872-83.705c33.057-21.054,71.358-32.182,110.767-32.182\n\t\t\tc13.544,0,27.074,1.314,40.216,3.905c34.739,6.85,67.585,23.042,94.986,46.826c27.39,23.774,48.064,54.023,59.79,87.476\n\t\t\tc8.547,24.385,12.164,50.811,10.75,78.542c-2.772,54.379-24.017,114.42-64.944,183.553\n\t\t\tC773.338,635.262,656.457,747.659,489.322,855.248z\"/>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>\n                                <span>Add to Wishlist</span>\n                            </div>\n                        </div>\n                        <div class=\"single-product__detail\">\n                            <ul class=\"shop-item__details\">\n                                <li>4.5 inch HD Screen</li>\n                                <li>1.4 GHz Quad Core™ Processor</li>\n                                <li>3GB Ram</li>\n                                <li>Android 4.4 KitKat OS</li>\n                            </ul>\n                            <div class=\"single-product__text\">\n                                <p>Nullam mollis vel ipsum sit amet fringilla. Suspendisse mattis tortor a dui euismod\n                                    finibus ac eget metus. Pellentesque habitant morbi tristique senectus et netus et\n                                    malesuada fames ac turpis egestas.</p>\n                            </div>\n                        </div>\n                        <div class=\"single-product__price\">\n                            <div class=\"single-product__price-new\">$1 215,00</div>\n                            <div class=\"single-product__price-old\">$2 229,00</div>\n                        </div>\n                        <div class=\"single-product__quantity\">\n                            <div class=\"single-product__quantity-add-wrapper\"><span>Quantity:</span>\n                                <div class=\"single-product__quantity-add\">\n                                    <div class=\"single-product__quantity-counter\">\n                                        <input type=\"text\" value=\"1\">\n                                    </div>\n                                    <div class=\"single-product__quantity-switcher\">\n                                        <button class=\"single-product__quantity-plus\">+</button>\n                                        <button class=\"single-product__quantity-minus\">-</button>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"single-product__quantity-cart\">\n                                <button>\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\">\n                                        <path id=\"Add_to_cart_icon\" data-name=\"Add to cart icon\" class=\"cls-1\"\n                                              d=\"M0.011,1.648V0.656C0.332-.171,1.9.061,2.722,0.324a3.567,3.567,0,0,1,1.371.752c1.049,1.018,1.167,2.945,1.523,4.7,0.168,0.829.37,1.709,0.548,2.558,0.245,1.164.266,2.679,1.188,3.1a9.55,9.55,0,0,0,3.168.181h1.675a7.457,7.457,0,0,0,1.675,0A4.459,4.459,0,0,0,14.905,10.2c0.652-1.049,1.116-2,1.706-3.161a2.017,2.017,0,0,1,1.1-1.324,1.066,1.066,0,0,1,1.279,1.355A4.6,4.6,0,0,1,18.56,8a28.422,28.422,0,0,1-2.436,4.365,3.652,3.652,0,0,1-1.432,1.354,6.609,6.609,0,0,1-1.645.03c-1.576,0-3.416.105-5,0a4.061,4.061,0,0,1-2.741-1.264A5.637,5.637,0,0,1,4.184,9.655C3.866,8.09,3.544,6.337,3.209,4.689,3.027,3.79,2.985,2.8,2.265,2.431S0.446,2.53.011,1.648ZM12.164,1.2q0.16,1.557.213,3.22c0.637,0.113,1.948-.271,2.041.3a2.482,2.482,0,0,1-.7,1.174A26.91,26.91,0,0,1,11.494,8.3a1.058,1.058,0,0,1-.518.391,2.006,2.006,0,0,1-1.036-.842C9.3,7.167,8.739,6.56,8.174,5.862A1.99,1.99,0,0,1,7.5,4.749c0.12-.612,1.3-0.22,2.01-0.331,0.088-1.067.1-2.2,0.244-3.22A2.163,2.163,0,0,1,12.164,1.2ZM7.352,14.531a1.8,1.8,0,0,1,2.132,1.445A1.841,1.841,0,0,1,6.1,17.21,1.786,1.786,0,0,1,7.352,14.531Zm6.579,0a1.769,1.769,0,0,1,2.132,1.716,1.828,1.828,0,0,1-3.655.03A1.73,1.73,0,0,1,13.931,14.531Z\"/>\n                                    </svg>\n                                    <span>Add to Cart</span>\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"single-product__tabs\">\n                    <div class=\"single-product__tabs-navigation\">\n                        <ul role=\"tablist\" class=\"nav nav-tabs\">\n                            <li class=\"active\"><a href=\"#Accesories\" aria-controls=\"Accesories\" role=\"tab\"\n                                                  data-toggle=\"tab\">Accesories</a></li>\n                            <li><a href=\"#Description\" aria-controls=\"Description\" role=\"tab\" data-toggle=\"tab\">Description</a>\n                            </li>\n                            <li><a href=\"#Specification\" aria-controls=\"Specification\" role=\"tab\" data-toggle=\"tab\">Specification</a>\n                            </li>\n                            <li><a href=\"#Reviews\" aria-controls=\"Reviews\" role=\"tab\" data-toggle=\"tab\">Reviews</a></li>\n                        </ul>\n                    </div>\n                    <div class=\"single-product__tabs-content tab-content\">\n                        <div id=\"Accesories\" role=\"tabpanel\" class=\"tab-pane active\">\n                            <div class=\"single-product__accesories\">\n                                <ul class=\"single-product__accesories-list\">\n                                    <li class=\"shop-item\">\n                                        <div class=\"shop-item__header\"><a href=\"#\"\n                                                                          class=\"shop-item__tag\">Smartphones</a><a\n                                                href=\"#\" class=\"shop-item__title\">\n                                            <h3>Smartphone 6S 32GB LTE</h3></a>\n                                        </div>\n                                        <div class=\"shop-item__image\"><img src=\"" + __webpack_require__(11) + "\" alt=\"item\"/></div>\n                                        <div class=\"shop-item__descr\">\n                                            <div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a\n                                                    href=\"#\" class=\"shop-item__title\">\n                                                <h3>Smartphone 6S 32GB LTE</h3></a>\n                                            </div>\n                                        </div>\n                                        <div class=\"shop-item__footer\">\n                                            <div class=\"shop-item__price\">\n                                                <div class=\"shop-item__cost\">\n                                                    <div class=\"shop-item__cost-current\">$1 999,00</div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </li>\n                                    <li class=\"shop-item\">\n                                        <div class=\"shop-item__header\"><a href=\"#\"\n                                                                          class=\"shop-item__tag\">Smartphones</a><a\n                                                href=\"#\" class=\"shop-item__title\">\n                                            <h3>Smartphone 6S 32GB LTE</h3></a>\n                                        </div>\n                                        <div class=\"shop-item__image\"><img src=\"" + __webpack_require__(11) + "\" alt=\"item\"/></div>\n                                        <div class=\"shop-item__descr\">\n                                            <div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a\n                                                    href=\"#\" class=\"shop-item__title\">\n                                                <h3>Smartphone 6S 32GB LTE</h3></a>\n                                            </div>\n                                        </div>\n                                        <div class=\"shop-item__footer\">\n                                            <div class=\"shop-item__price\">\n                                                <div class=\"shop-item__cost\">\n                                                    <div class=\"shop-item__cost-current\">$1 999,00</div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </li>\n                                    <li class=\"shop-item\">\n                                        <div class=\"shop-item__header\"><a href=\"#\"\n                                                                          class=\"shop-item__tag\">Smartphones</a><a\n                                                href=\"#\" class=\"shop-item__title\">\n                                            <h3>Smartphone 6S 32GB LTE</h3></a>\n                                        </div>\n                                        <div class=\"shop-item__image\"><img src=\"" + __webpack_require__(11) + "\" alt=\"item\"/></div>\n                                        <div class=\"shop-item__descr\">\n                                            <div class=\"shop-item__header-hidden\"><a href=\"#\" class=\"shop-item__tag\">Smartphones</a><a\n                                                    href=\"#\" class=\"shop-item__title\">\n                                                <h3>Smartphone 6S 32GB LTE</h3></a>\n                                            </div>\n                                        </div>\n                                        <div class=\"shop-item__footer\">\n                                            <div class=\"shop-item__price\">\n                                                <div class=\"shop-item__cost\">\n                                                    <div class=\"shop-item__cost-current\">$1 999,00</div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </li>\n                                </ul>\n                                <div class=\"single-product__accesories-total\">\n                                    <div class=\"single-product__price-old\">$2 229,00</div>\n                                    <div class=\"single-product__accesories-new\">$1 424,00</div>\n                                    <div class=\"single-product__accesories-text\"><span>For all Three items</span></div>\n                                    <button class=\"form-button\">Add all to Cart</button>\n                                </div>\n                            </div>\n                            <div class=\"single-product__accesories-checkboxes\">\n                                <div class=\"form-element__wrapper\">\n                                    <label class=\"form-element__label checkbox-label\">\n                                        <input type=\"checkbox\" disabled class=\"form-element__hidden-checkbox\">\n                                        <div class=\"form-element__checkbox\">\n                                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 26\"\n                                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                 enable-background=\"new 0 0 26 26\">\n                                                <path d=\"m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z\"/>\n                                            </svg>\n\n                                        </div>\n                                        <span class=\"form-element__name\"><strong>This product:&nbsp;</strong><span>Ultra Wireless S50 Headphones S50 with Bluetooth  -&nbsp;</span><span\n                                                class=\"form-element__checkbox-price\">$1 215,00</span></span>\n                                    </label>\n                                </div>\n                                <div class=\"form-element__wrapper\">\n                                    <label class=\"form-element__label checkbox-label\">\n                                        <input type=\"checkbox\" class=\"form-element__hidden-checkbox\">\n                                        <div class=\"form-element__checkbox\">\n                                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 26\"\n                                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                 enable-background=\"new 0 0 26 26\">\n                                                <path d=\"m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z\"/>\n                                            </svg>\n\n                                        </div>\n                                        <span class=\"form-element__name\"><a href=\"#\">Uniwersal Headphones Case in Black&nbsp</a><span>-&nbsp;</span><span\n                                                class=\"form-element__checkbox-price\">$1 215,00</span></span>\n                                    </label>\n                                </div>\n                                <div class=\"form-element__wrapper\">\n                                    <label class=\"form-element__label checkbox-label\">\n                                        <input type=\"checkbox\" class=\"form-element__hidden-checkbox\">\n                                        <div class=\"form-element__checkbox\">\n                                            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 26\"\n                                                 xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                                                 enable-background=\"new 0 0 26 26\">\n                                                <path d=\"m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z\"/>\n                                            </svg>\n\n                                        </div>\n                                        <span class=\"form-element__name\"><a href=\"#\">Headphones USB Wires&nbsp</a><span>-&nbsp;</span><span\n                                                class=\"form-element__checkbox-price\">$1 215,00</span></span>\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                        <div id=\"Description\" role=\"tabpanel\" class=\"tab-pane\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-12\">\n                                    <div class=\"single-product__tabs-block\">\n                                        <h3>Perfectly Done</h3>\n                                        <p>Praesent ornare, ex a interdum consectetur, lectus diam sodales elit, vitae\n                                            egestas est enim ornare nisl. Nullam in lectus nec sem semper viverra. In\n                                            lobortis egestas massa. Nam nec massa nisi. Suspendisse potenti. Quisque\n                                            suscipit vulputate dui quis volutpat. Ut id elit facilisis, feugiat est in,\n                                            tempus lacus. Ut ultrices dictum metus, a ultricies ex vulputate ac. Ut id\n                                            cursus tellus, non tempor quam. Morbi porta diam nisi, id finibus nunc\n                                            tincidunt eu.</p>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <h3>Wireless</h3>\n                                    <p>Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros\n                                        tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut\n                                        mollis. Donec luctus condimentum ante et euismod.</p>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-lg-6\">\n                                    <h3>Wireless</h3>\n                                    <p>Integer bibendum aliquet ipsum, in ultrices enim sodales sed. Quisque ut urna\n                                        vitae lacus laoreet malesuada eu at massa. Pellentesque nibh augue, pellentesque\n                                        nec dictum vel, pretium a arcu. Duis eu urna suscipit, lobortis elit quis,\n                                        ullamcorper massa.</p>\n                                </div>\n                            </div>\n                            <div class=\"single-product__tabs-meta\"></div>\n                        </div>\n                        <div id=\"Specification\" role=\"tabpanel\" class=\"tab-pane\">\n                            <h3>Technical Specs</h3>\n                            <ul>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Brand</div>\n                                    <div class=\"single-product__specification-descr\">Apple</div>\n                                </li>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Item Height</div>\n                                    <div class=\"single-product__specification-descr\">18 Millimeters</div>\n                                </li>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Item Width</div>\n                                    <div class=\"single-product__specification-descr\">31.4 Centimeters</div>\n                                </li>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Screen Size</div>\n                                    <div class=\"single-product__specification-descr\">13 Inches</div>\n                                </li>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Item Weight</div>\n                                    <div class=\"single-product__specification-descr\">1.6 Kg</div>\n                                </li>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Product Dimensions</div>\n                                    <div class=\"single-product__specification-descr\">21.9 x 31.4 x 1.8 cm</div>\n                                </li>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Item model number</div>\n                                    <div class=\"single-product__specification-descr\">MF841HN/A</div>\n                                </li>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Processor Brand</div>\n                                    <div class=\"single-product__specification-descr\">MF841HN/A</div>\n                                </li>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Processor Type</div>\n                                    <div class=\"single-product__specification-descr\">Core i5</div>\n                                </li>\n                                <li class=\"single-product__specification-item\">\n                                    <div class=\"single-product__specification-name\">Processor Speed</div>\n                                    <div class=\"single-product__specification-descr\">2.9 GHz</div>\n                                </li>\n                            </ul>\n                        </div>\n                        <div id=\"Reviews\" role=\"tabpanel\" class=\"tab-pane\">...</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"sign-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <div class=\"sign-up__title\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" viewBox=\"0 0 34 34\">\n                        <metadata><?xpacket begin=\"﻿\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?>\n                            <x:xmpmeta xmlns:x=\"adobe:ns:meta/\"\n                                       x:xmptk=\"Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        \">\n                                <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\">\n                                    <rdf:Description rdf:about=\"\"/>\n                                </rdf:RDF>\n                            </x:xmpmeta>\n\n\n                            <?xpacket end=\"w\"?></metadata>\n                        <defs>\n                            <style>\n                                .cls-1 {\n                                    fill: #333e48;\n                                    fill-rule: evenodd;\n                                }\n                            </style>\n                        </defs>\n                        <path id=\"newsletter_icon\" data-name=\"newsletter icon\" class=\"cls-1\"\n                              d=\"M400.265,4857H400.21a11.021,11.021,0,0,1-2.411-2.13c-2.308-2.3-4.628-4.54-6.96-6.78-1.57,1.76-3.025,3.56-4.659,5.36-0.243.26-1.168,1.68-1.918,1.47-0.637-.17-0.348-1.39-0.274-2.18,0.25-2.66.487-5.27,0.768-7.71-2.486-.88-4.859-1.57-7.563-2.46-0.685-.23-2.172-0.51-2.193-1.2s1.247-1.12,1.809-1.42c10.017-5.42,19.772-10.58,29.649-16.02,0.343-.19,1.738-1.17,2.3-0.87,0.511,0.26.065,1.59-.055,2.07-2.546,10.17-5,19.95-7.508,30.01C401.022,4855.84,400.851,4857,400.265,4857Zm-22.908-15.8c1.965,0.65,3.95,1.26,5.974,1.92a7.912,7.912,0,0,0,1.973.65,4.922,4.922,0,0,0,1.1-.87c4.941-3.98,9.456-7.65,14.358-11.54,0.575-.45,1.684-1.73,2.357-1.64,1.064,0.15.278,1.3-.055,1.75-3.822,5.26-7.7,10.52-11.344,15.58,2.514,2.42,5.171,5.05,7.617,7.49a0.769,0.769,0,0,0,.494.33c2.5-9.91,5.115-20.01,7.453-29.9C397.346,4830.42,387.3,4835.76,377.357,4841.2Zm10.3,2.41a6.21,6.21,0,0,0-1.589,1.42,8.808,8.808,0,0,0-.165,1.8c-0.167,1.9-.334,3.52-0.548,5.36,5.33-5.25,9.543-11.91,13.921-17.93C395.521,4837.27,391.523,4840.55,387.66,4843.61Z\"\n                              transform=\"translate(-375 -4823)\"/>\n                    </svg>\n                    <span>Sign up to Newsletter</span>\n                    <div class=\"sign-up__innertext\"> ...and receive<strong>$20 coupon for first shopping</strong></div>\n                </div>\n            </div>\n            <div class=\"col-lg-5\">\n                <div class=\"sign-up__searchWrap\">\n                    <input placeholder=\"Enter your email address\" class=\"sign-up__search\">\n                    <button class=\"sign-up__searchButton\">Sign Up</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(25);


/***/ })
],[71]);