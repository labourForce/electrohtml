import State from './state';
import ko from 'knockout';
import $ from 'jquery';
import crossroads from 'crossroads';
import hasher from 'hasher';
import {replaceState, pushState, changeUrl, scrollToTop, clearCustomCss, callFunctionAfterModelFilled, showDynamicForm} from 'common';
import meta from './meta';

export class Router {
    constructor(app) {
        var self = this;
		self.app = app;
		self.menu = app.menu;

		self.init = false;
		self.hash = '';

		self.notify = function() {
			console.log('go!');
		};

		self.replace = function(n, query, seoUrl){
			process(n, query, seoUrl, replaceState);
		};

		self.replaceKeepUrl = function(n, query, seoUrl){
			process(n, query, seoUrl, replaceAndKeep)
		};

		function processMeta(nav){
			if ( meta.pagesWithTitle.indexOf(nav) == -1){
				document.title = meta.defaultTitle;
			}
			meta.titleSet = false;
		}

		function process(n, query, seoUrl, funcToProcessUrl) {
			self.init = true;
			var nav = n;
			if (window.nav) {
				var data = getUriAndQuery(window.nav);
				nav = data.nav;
				query = getUrlVars(data.query);
				var q = window.location.search;
				seoUrl = window.location.pathname + q;
				window.nav = '';
			}
			if ( self.hash && seoUrl){
				var indexOfHash = seoUrl.indexOf('#');
				if ( indexOfHash < 0) {
					seoUrl += self.hash;
				} else {
					seoUrl = seoUrl.substr(0, indexOfHash ) + self.hash;
				}
			}
			self.hash = '';
			if ( nav == ''){
				seoUrl = '';
			}
			window.navigation = nav;
			window.query = query;
			$.getJSON("/rest/model/hd/userprofiling/AccessControlActor/accessControl?requestURL=" + seoUrl, function (response) {
					if (response.accessAllowed) {
						go(nav, query, seoUrl, funcToProcessUrl);
					} else if (response.csrMessage) {
						self.app.logout(true);
						go('', {'impersonatedLogout': 'true'});
					} else {
						go(response.redirectURL, {}, response.redirectURL, replaceState);
					}
				}
			);
		}

		function go(nav, query, seoUrl, funcToProcessUrl) {
			if (!seoUrl) {
				changeUrl(nav, query);
			} else {
				funcToProcessUrl(nav, query, seoUrl);
			}
			if (nav == '' || nav == '/') {
				nav = 'landing';
			}
			if (nav && nav.endsWith('/')) {
				nav = nav.substr(0, nav.length - 1);
			}
			processMeta(nav);
			self.app.nav(nav);
			if(nav.charAt(0) == '/'){
				nav = nav.replace(/^\//, '');
			}
			var newState = new State(nav, self.app);
			self.app.currentState(newState);
			scrollToTop();
			$("#customJs").empty();
			clearCustomCss("customStyleStart", "customStyleEnd");
			showDynamicForms(seoUrl ? seoUrl : nav);
		}

		window.onpopstate = function (event) {
			console.log('onpopstate', event.state);

			if (event.state && event.state.url) {
				self.notify(event.state.view, event.state.params, event.state.url);
				return false;
			} else {
				history.back();
			}
		};

		crossroads.addRoute('/{name}', function(name) {
			if (name) {
				//self.replace(name[0], '');
                self.app.currentState(new State(name, self.app));
			}
		});
		crossroads.addRoute('/{name}{?query}', function(name) {
			if (name) {
				self.replace(name['name'], name['?query']);
			}
		});
		crossroads.addRoute('/{?query}', function(name) {
			if (name) {
				self.replace('', name['?query']);
			}
		});
		crossroads.addRoute('', function() {

            self.app.currentState(new State( 'homepage', self.app));
		});



        self.start = function() {
			function parseHash(newHash, oldHash) {
				if (newHash) {
					self.hash = '#' + newHash;
				}
			}
            crossroads.parse(window.location.pathname);
			crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
			hasher.initialized.add(parseHash);
			hasher.changed.add(parseHash);
			hasher.init();
		};

		function getUrlVars(query_string) {
			var vars = {}, hash;

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

		function getUriAndQuery(url){
			var args = url.split('?');
			return {nav : args[0], query : args[1]};
		}

		function checkFormConfigPageUrl (triggeringConfig, pageUrl) {
            if (pageUrl && triggeringConfig) {
                if (triggeringConfig.pageUrls && triggeringConfig.pageUrls.length > 0) {
                    var configPageUrls = triggeringConfig.pageUrls;
                    for (var i = 0; i < configPageUrls.length; i++) {
                        var configPageUrl = configPageUrls[i];
                        if (configPageUrl.indexOf('/') === 0) {
                            configPageUrl = configPageUrl.substr(1);
                        }
                        if (pageUrl == configPageUrl || (pageUrl == 'landing' && configPageUrl == '')) {
                            return true;
                        }
                    }
                }
            }
            return false;
        }

		function showDynamicForms(pageUrl) {
			callFunctionAfterModelFilled(self.app.site, function () {
				var siteModel = self.app.site;
				if (siteModel && siteModel.dynamicForms()) {
					for (var index = 0; index < siteModel.dynamicForms().length; index++) {
						(function () {
							var dynamicForm = siteModel.dynamicForms()[index];
                            if (pageUrl.indexOf('/') === 0) {
                                pageUrl = pageUrl.substr(1);
                            }
							if (checkFormConfigPageUrl(dynamicForm.triggeringConfiguration, pageUrl)) {
								showDynamicForm(dynamicForm, ko);
							}
						})();
					}
				}
			}, 50, 200);
		}
    }
}


