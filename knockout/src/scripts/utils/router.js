import State from './state';
import ko from 'knockout';
import $ from 'jquery';
import crossroads from 'crossroads';
import hasher from 'hasher';
import {
    replaceState,
    pushState,
    changeUrl,
    scrollToTop,
    clearCustomCss,
    callFunctionAfterModelFilled,
    showDynamicForm
} from 'common';
import meta from './meta';

export class Router {

    constructor(app) {
        this.app = app;
        this.menu = app.menu;

        this.init = false;
        this.hash = '';

        window.onpopstate = (event) => {
            if (event.state && event.state.url) {
                this.notify(event.state.view, event.state.params, event.state.url);
                return false;
            } else {
                history.back();
            }
        };

        crossroads.addRoute('/{name}', (name) => {
            if (name) {
                this.app.currentState(new State(name, this.app));
            }
        });
        crossroads.addRoute('/{name}{?query}', (name) => {
            if (name) {
                this.replace(name['name'], name['?query']);
            }
        });
        crossroads.addRoute('/{?query}', (name) => {
            if (name) {
                this.replace('', name['?query']);
            }
        });
        crossroads.addRoute('', () => {
            this.app.currentState(new State('homepage', this.app));
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
    }

    processMeta (nav) {
        if (meta.pagesWithTitle.indexOf(nav) == -1) {
            document.title = meta.defaultTitle;
        }
        meta.titleSet = false;
    }

    go (nav, query, seoUrl, funcToProcessUrl) {
        if (!seoUrl) {
            changeUrl(nav, query);
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
        const newState = new State(nav, this.app);
        this.app.currentState(newState);
        scrollToTop();
        $("#customJs").empty();
    }

    notify(n, query, seoUrl) {
        this.process(n, query, seoUrl, pushState);
    }

    replace(n, query, seoUrl) {
        this.process(n, query, seoUrl, replaceState);
    }

    process(n, query, seoUrl, funcToProcessUrl) {
        this.init = true;
        let nav = n;
        if (window.nav) {
            let data = this.getUriAndQuery(window.nav);
            nav = data.nav;
            query = this.getUrlVars(data.query);
            let q = window.location.search;
            seoUrl = window.location.pathname + q;
            window.nav = '';
        }
        if (this.hash && seoUrl) {
            let indexOfHash = seoUrl.indexOf('#');
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
        $.getJSON("/rest/model/hd/userprofiling/AccessControlActor/accessControl?requestURL=" + seoUrl, function (response) {
                if (response.accessAllowed) {
                    this.go(nav, query, seoUrl, funcToProcessUrl);
                } else if (response.csrMessage) {
                    this.app.logout(true);
                    this.go('', {'impersonatedLogout': 'true'});
                } else {
                    this.go(response.redirectURL, {}, response.redirectURL, replaceState);
                }
            }
        );
    }

    getUrlVars(query_string) {
        let vars = {}, hash;

        if (query_string) {
            let hashes = query_string.split('&');
            for (let i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars[hash[0]] = hash[1];
            }

            return vars;
        } else {
            return false;
        }
    }

    getUriAndQuery(url) {
        let args = url.split('?');
        return {nav: args[0], query: args[1]};
    }
}


