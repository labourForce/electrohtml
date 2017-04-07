import ko from 'knockout';
import $ from 'jquery';

export function errorCSS(propertyName, self, ko) {
	var errors = self.inputErrorLabels();
	return ko.pureComputed(function() {
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

export function errorMessage(propertyName, self, ko) {
	var errors = self.inputErrors();
	return ko.pureComputed(function() {
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

export function fixPrice(price) {
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

export function clearErrors(self, errors, inputErrors, inputErrorLabels) {
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

export function pushState(nav, query, seoUrl) {
	if (!(history.state && history.state.url == seoUrl)) {
		if ( seoUrl[0] != '/'){
			seoUrl = '/' + seoUrl;
		}
		seoUrl = seoUrl.replace(/\/+/g, '/');
		window.history.pushState({
			url : seoUrl,
			view : nav,
			params : query,
			prevState : history.state
		}, window.document.title, seoUrl);
	}
}

export function replaceState(nav, query, seoUrl) {
	history.replaceState({
		url: seoUrl,
		view: nav,
		params: query,
		prevState: history.state ? history.state.prevState : null
	}, query, seoUrl);
}

export function changeUrl(nav, query) {
	if (!window.nav) {
		var url = "/" + nav;
		if ("" != query && undefined != query && !$.isEmptyObject(query)) {
			var queryString = decodeURIComponent($.param(query));
			url = url + "?" + queryString;
		}
		// window.history.pushState({url : url, view : url, params : query,
		// prevState : history.state}, window.document.title, url);
		pushState(nav, query, url);
	} /*
		 * else{ window.nav = ''; }
		 */
}

export function scrollToTop() {
	$("html, body").animate({
		scrollTop : 0
	}, 500);
	return false;
}

export function addCustomCss(startId, endId, css){
	clearCustomCss(startId, endId);
	$("style[data-id='" + startId + "']").after(css);
}
export function addCustomJs(id, js){
	$("#" + id).empty();
	$("#" + id).append(js);
}

export function clearCustomCss(startId, endId){
	// var nextElement = $("style[data-id='" + startId + "']").next();
	// while (nextElement.attr("data-id") != endId) {
	// 	nextElement.remove();
	// 	nextElement = $("style[data-id='" + startId + "']").next();
	// }
}

export function errorCSSWithAdditionalClasses(propertyName, self, ko, additionalClasses) {
	var errors = self.inputErrorLabels();
	return ko.pureComputed(function() {
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

export function getParameterByName(name, url, ignorePlus) {
	if (!url)
		url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
	if (!results)
		return null;
	if (!results[2])
		return '';

	if (ignorePlus) {
		return decodeURIComponent(results[2]);
	} else {
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
}

export function callFunctionAfterElementRender(selector, callbackFunction, maxAttemptsCount, recheckAfterMs) {
	if (callbackFunction && (typeof callbackFunction === 'function')) {
		var maxAttempts = maxAttemptsCount ? maxAttemptsCount : 50;
		var timeToWait = recheckAfterMs ? recheckAfterMs : 100;
		loopToFindElement();
		function loopToFindElement () {
			if (maxAttempts) {
				if ($(selector).length) {
					callbackFunction();
				} else {
					setTimeout(loopToFindElement, timeToWait);
					maxAttempts--;
				}
			}
		}
	}
}

export function callFunctionAfterModelFilled(modelWithIsEmptyFunction, callbackFunction, maxAttemptsCount, recheckAfterMs) {
	if (modelWithIsEmptyFunction && callbackFunction && (typeof callbackFunction === 'function')
			&& (typeof modelWithIsEmptyFunction.isEmpty === 'function') ) {
		var maxAttempts = maxAttemptsCount ? maxAttemptsCount : 50;
		var timeToWait = recheckAfterMs ? recheckAfterMs : 100;
		loopToCheckModelFilled();
		function loopToCheckModelFilled () {
			if (maxAttempts) {
				if (!modelWithIsEmptyFunction.isEmpty()) {
					callbackFunction();
				} else {
					setTimeout(loopToCheckModelFilled, timeToWait);
					maxAttempts--;
				}
			}
		}
	}
}

export function showDynamicForm(dynamicForm, ko) {
	if (dynamicForm && dynamicForm.triggeringConfiguration) {
		var triggeringConfig = dynamicForm.triggeringConfiguration;
		setTimeout(function () {
			try {
				var dynamicFormId = dynamicForm.id;
				if (triggeringConfig.type == "directOnPage" || triggeringConfig.type == "promoSlot") {
					var selector = triggeringConfig.selector;
					callFunctionAfterElementRender(selector, function () {
						var componentBindingString
							= $('<!-- ko component: {name: "dynamicForm", params: {formId: "' + dynamicFormId
							+ '", formJson: ' + JSON.stringify(dynamicForm) + '}} -->' +
							'<!-- /ko -->');
						componentBindingString.insertAfter(selector);
						ko.applyBindings({}, componentBindingString[0]);
					});
				} else {
					var componentBindingString
						= $('<!-- ko component: {name: "dynamicForm", params: {formId: "'
						+ dynamicFormId + '", formJson: ' + JSON.stringify(dynamicForm) + '}} -->' +
						'<!-- /ko -->');
					if (triggeringConfig.type == "popUp") {
						componentBindingString.insertAfter("#dynamicFormModalInner");
						ko.applyBindings({}, componentBindingString[0]);
						var triggerWidth = '600';
						var triggerHeight = 'auto';
						var maxModalHeight = $(window).outerHeight() - ($('.wl-header-top').outerHeight() * 2);
						if ($(window).outerWidth() < 600) {
							triggerWidth = '320';
						}
                        callFunctionAfterElementRender('#dynamicFormModal .dynamic-form', function() {
                            var dynamicFormModalHeight = $('#dynamicFormModal').outerHeight();
                            if (dynamicFormModalHeight > maxModalHeight) {
                                triggerHeight = maxModalHeight;
                                $('#dynamicFormModal')
                                    .addClass('scrollable-y');
                            }
							$('#dynamicFormModal').dialog({
								resizable: false,
								draggable: false,
								modal: true,
								show: 'fade',
								hide: 'fade',
								width: triggerWidth,
								height: triggerHeight,
								dialogClass: 'fixed',
								open: function (event, ui) {
								},
								close: function (event, ui) {
									$(this).dialog('close');
									$(this).html('<div id="dynamicFormModalInner"></div>');
								}
							});
                        });
                    } else if (triggeringConfig.type == "lightbox") {
						$('#dynamicFormFlyoutContainer').html('<div id="dynamicFormFlyoutInner"></div>');
						componentBindingString.insertAfter("#dynamicFormFlyoutInner");
						ko.applyBindings({}, componentBindingString[0]);
						callFunctionAfterElementRender('#dynamicFormFlyoutContainer .dynamic-form', function() {
							openFlyoutForm('#dynamicFormFlyout');
							$('#dynamicFormFlyout').find('.closeThisFlyoutAction').on('click', function(event) {
								event.preventDefault();
								$(this).closest('.flyout-form').removeClass('open');
								$(this).closest('.flyout-form-container').find('.dynamic-form-content').removeAttr('style');
								$('.flyout-form-overlay').removeClass('open');
								$('html').removeClass('overlayed');
							});
							$('.flyout-form-overlay').on('click', function(event) {
								event.preventDefault();
								$('.flyout-form-overlay').removeClass('open');
								$('html').removeClass('overlayed');
								var $flyoutForm = $('.flyout-form');
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

export function parseRecords(records) {
	var result = [];
	if (records) {
		for (var j = 0; j < records.length; j++) {
			var temp = [];
			Object.keys(records[j].records[0].attributes).forEach(function(key) {
				temp[key.replace('.', '_')] = records[j].records[0].attributes[key];
				result[j] = temp;
			});
		}
	}
	return result;
}
export function slickConfigSetup(isUseTwoColumnPage) {
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

export function goToView(e, state) {
	var viewId = $(e.target).attr("data-id");
	var href = $(e.target).attr('href');
	var origin = $(e.target).attr('origin');
	state.origin(origin ? origin : '');
	var data = {};
	var level = 0;
	var $target = $(e.target);
	while ( !viewId && level < 5) {
		$target = $target.parent();
		viewId = $target.data('id');
		href = $target.attr('href');
		level += 1;
	}
	if ("externalNavId" == viewId) {
		if (href) {
			window.location.href = href;
		} else {
			state.router.replace('static', {pageLink : '/page-not-found'}, '/page-not-found');
		}
	} else {
		if (viewId) {
			data = getNavAndQuery(viewId);
		}
		if ( e.ctrlKey){
			window.open(href, '_blank');
		} else 	if ( viewId){
			state.router.notify(data.nav, data.query, href)
		}
	}
}

window.imgErrorProduct =  function(image) {
	image.onerror = "";
	image.src = "/assets/images/product/product-image-not-available.jpg";
	return true;
}
export function goToURL(self, url, query, seoUrl) {

	for ( var prop in query) {
		if (!query[prop]) {
			delete query[prop];
		}
	}

	if (!url) {
		url = '';
	}
	self.state.data().app.go(url, query, seoUrl);
}
export function getApp(self) {
	return self.state;
}
export function getNavigationPathname() {
	var pathname = window.location.pathname;
	if (pathname[0] == "/") {
		pathname = pathname.substring(1, pathname.length);
	}
	return pathname;
}
export function getNavigationQuery(){
	return window.location.search;
}
export function getNavAndQuery(dataId) {
	var index = dataId.indexOf('?');
	if (index == -1) {
		return {
			nav : dataId
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
		nav : nav,
		query : query
	}
}
export function addItemToCart(data, callback, self){
	if ( !data.useDefaultQtyOption){
		data.useDefaultQtyOption = false;
	}
	$.ajax("/rest/model/atg/commerce/order/purchase/CartModifierActor/addItemToOrder", {
		type: "post",
		contentType: "application/json",
		data: JSON.stringify(data),
		success: function (returnedData) {
			callback(returnedData);
            goToURL(self, '/cart', {}, '/cart');
        }
	});
}

export function getErrorMessages(formExceptions, self, errors, inputErrors, inputErrorLabels) {
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
	for (let i = 0; i < formExceptions.length; i++) {
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
