import State from './state';
import ko from 'knockout';
import $ from 'jquery';
import crossroads from 'crossroads';
import hasher from 'hasher';
import {replaceState, pushState, changeUrl, scrollToTop} from 'common';
import meta from './meta';

export class Router {
    constructor(app) {
		this.app = app;
		this.menu = app.menu;

		this.init = false;
		this.hash = '';

		this.notify = function(n, query, seoUrl) {
            process(n, query, seoUrl, pushState);
		};

		this.replace = function(n, query, seoUrl){
			process(n, query, seoUrl, replaceState);
		};

		this.replaceKeepUrl = function(n, query, seoUrl){
			process(n, query, seoUrl, replaceAndKeep)
		};

		const processMeta = (nav) => {
			if ( meta.pagesWithTitle.indexOf(nav) === -1){
				document.title = meta.defaultTitle;
			}
			meta.titleSet = false;
		};

		const process = (n, query, seoUrl, funcToProcessUrl) => {
			this.init = true;
			var nav = n;
			if (window.nav) {
				var data = getUriAndQuery(window.nav);
				nav = data.nav;
				query = getUrlVars(data.query);
				var q = window.location.search;
				seoUrl = window.location.pathname + q;
				window.nav = '';
			}
			if ( this.hash && seoUrl){
				var indexOfHash = seoUrl.indexOf('#');
				if ( indexOfHash < 0) {
					seoUrl += this.hash;
				} else {
					seoUrl = seoUrl.substr(0, indexOfHash ) + this.hash;
				}
			}
			this.hash = '';
			if ( nav == ''){
				seoUrl = '';
			}
			window.navigation = nav;
			window.query = query;
			go(n, query, seoUrl, funcToProcessUrl);
		}

		const go = (nav, query, seoUrl, funcToProcessUrl) => {
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
			this.app.nav(nav);
			if(nav.charAt(0) == '/'){
				nav = nav.replace(/^\//, '');
			}
			var newState = new State(nav, this.app);
			this.app.currentState(newState);
			scrollToTop();
		};

		window.onpopstate = (event) => {
			console.log('onpopstate', event.state);

			if (event.state && event.state.url) {
				this.notify(event.state.view, event.state.params, event.state.url);
				return false;
			} else {
				history.back();
			}
		};

        crossroads.addRoute('/pdp/{id}', (id) => {
            this.app.currentState(new State('pdp', this.app, { id }));
        });

		crossroads.addRoute('/{name}', (name) => {
			if (name) {
                this.app.currentState(new State(name, this.app));
			}
		});
		crossroads.addRoute('/{?query}', (name) => {
			if (name) {
				this.replace('', name['?query']);
			}
		});
		crossroads.addRoute('', () => {
			console.log(1);
            this.app.currentState(new State( 'homepage', this.app));
		});
    }

    start() {
        const parseHash = (newHash, oldHash) => {
            if (newHash) {
                this.hash = '#' + newHash;
            }
        };
        crossroads.parse(window.location.pathname);
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    };
}


