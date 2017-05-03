import ko from 'knockout';
import $ from 'jquery';

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

export function pushState(url, params) {
    window.history.pushState({
        url : url,
        _params: params,
        prevState : history.state
    }, window.document.title, url);
}

export function replaceState(url, params) {
	history.replaceState({
		url: url,
        _params: params,
		prevState: history.state ? history.state.prevState : null
	}, window.document.title, url);
}

export function scrollToTop() {
	$("html, body").animate({
		scrollTop : 0
	}, 500);
	return false;
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

window.imgErrorProduct =  function(image) {
	image.onerror = "";
	image.src = "/assets/images/product/product-image-not-available.jpg";
	return true;
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

export function sendRequest (config, noAuth) {
	const token = window.localStorage.getItem('auth_token') || undefined;

	if (!noAuth) {
        config.headers = config.headers ? Object.assign(config.headers, { authorization: token }) : { authorization: token };
	}

	$.ajax(config);
}

export function setAuthToken (token, res) {
    window.localStorage.setItem('auth_token', token);

}


