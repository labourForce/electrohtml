import State from './state';
import ko from 'knockout';
import $ from 'jquery';
import crossroads from 'crossroads';
import hasher from 'hasher';
import {replaceState, pushState, changeUrl, scrollToTop} from 'common';
import meta from './meta';

const createRouteObject = (url, state) => { return { url, state } };

const routing = {
    homepage: createRouteObject('', 'homepage'),
    search: createRouteObject('/search{?query}', 'search'),
    searchDefault: createRouteObject('/search', 'search'),
    pdp: createRouteObject('/pdp/{id}', 'pdp'),
    checkout: createRouteObject('/checkout', 'checkout'),
    login: createRouteObject('/login', 'login')
};

export class Router {

    constructor(app) {
        this.app = app;

        window.onpopstate = () => {
            this.start();
        };

        const parseHash = (newHash, oldHash) => {
            if (newHash) {
                this.hash = '#' + newHash;
            }
        };
        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();

        for (let key in routing) {
            crossroads.addRoute(routing[key].url, (...params) => {
                let index = 0;
                let data = {};
                const regexr = /\{\??([\w\d]+)\}/g;
                let match;
                while (match = regexr.exec(routing[key].url)) {
                    data[match[1]] = params[index++];
                }
                console.log(data);
                this.app.currentState(new State(routing[key].state, this.app, data));
            });
        }

        crossroads.bypassed.add(() => {
            console.log('BYPASS', arguments);
        });
    }

    start() {
        crossroads.parse(window.location.pathname + window.location.search);
    }

    go(url, params, funcToProcessUrl) {
        window.history.pushState({
            url : url,
            prevState : history.state
        }, window.document.title, url);
        this.start();
        scrollToTop();
    };

    process(pageName, params, funcToProcessUrl) {

        const url = routing[pageName].url.replace(/\{(\?)?([\w\d]+)\}/g, (string, isQuery, param) => {
            return (isQuery ? '?' + params[param].map((v) => v.key + '=' + v.value).join('&') : params[param]);
        });

        this.go(url, params, funcToProcessUrl);
    }

    notify(pageName, params) {
        this.process(pageName, params, pushState);
    };

    replace(pageName, params) {
        this.process(pageName, params, replaceState);
    };

    replaceKeepUrl(pageName, params) {
        this.process(pageName, params, replaceAndKeep)
    };
}


