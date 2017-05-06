import State from './state';
import ko from 'knockout';
import $ from 'jquery';
import crossroads from 'crossroads';
import hasher from 'hasher';
import {replaceState, pushState, scrollToTop, sendRequest} from 'common';
import meta from './meta';

const createRouteObject = (url, state) => { return { url, state } };

const routing = {
    homepage: createRouteObject('/', 'homepage'),
    search: createRouteObject('/search{?query}', 'search'),
    searchDefault: createRouteObject('/search', 'search'),
    pdp: createRouteObject('/pdp/{id}', 'pdp'),
    checkout: createRouteObject('/checkout', 'checkout'),
    login: createRouteObject('/login', 'login'),
    catalog: createRouteObject('/catalog/{path*}', '?')
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
                if (routing[key].state === '?' && key === 'catalog') {
                    sendRequest({
                        method: 'GET',
                        url: '/rest' + window.location.pathname,
                        data: {
                            fullInformation: true
                        },
                        success: (routes) => {

                            const breadcrumbs = this.createBreadcrumbs(routes, 'catalog');

                            if (routes[routes.length - 1].objectType === 1) {
                                let params = {
                                    id: routes[routes.length - 1].object.id,
                                    breadcrumbs: breadcrumbs
                                };
                                this.app.currentState(new State('pdp', this.app, params));
                            } else {
                                let params = {
                                    query: {
                                        searchTerm: '',
                                        category: routes[routes.length - 1].object.name
                                    },
                                    breadcrumbs: breadcrumbs
                                };
                                this.app.currentState(new State('search', this.app, params));
                            }
                        },
                        error: () => {
                            console.error('GET PAGE TYPE ERROR');
                            this.replace('homepage');
                        }
                    });
                } else {
                    let index = 0;
                    let data = {};
                    const regexr = /\{\??([\w\d]+)\}/g;
                    let match;
                    while (match = regexr.exec(routing[key].url)) {
                        data[match[1]] = params[index++];
                    }
                    data._pageType = key;
                    console.log(data);
                    this.app.currentState(new State(routing[key].state, this.app, data));
                }
            });
        }

        crossroads.bypassed.add(() => {
            console.log('BYPASS', arguments);
        });
    }

    createBreadcrumbs(routes, type) {
        return [{ name: 'Home', type: 'homepage' }].concat(routes.map((route, index, routes) => {
            let breadcrumbObj = {
                name: route.object.displayName,
                data: { path: [] },
                type
            };
            for (let i = 0; i <= index; i++) {
                breadcrumbObj.data.path.push(routes[i].objectType === 1 ? routes[i].object.name : routes[i].object.name);
            }
            breadcrumbObj.data.path = breadcrumbObj.data.path.join('/');
            return breadcrumbObj;
        }));
    }

    start() {
        crossroads.parse(window.location.pathname + window.location.search);
    }

    go(url, params, funcToProcessUrl) {
        funcToProcessUrl(url, params);
        this.start();
        scrollToTop();
    };

    process(pageName, params, funcToProcessUrl) {

        const url = routing[pageName].url.replace(/\{(\?)?([\w\d]+)(\*)?\}/g, (string, isQuery, param, multiple) => {
            let replaceStr = '';
            if (isQuery) {
                replaceStr = '?' + params[param].map((v) => v.key + '=' + v.value).join('&');
            } else {
                replaceStr = params[param];
            }
            return replaceStr;
        });

        this.go(url, params, funcToProcessUrl);
    }

    notify(pageName, params) {
        this.process(pageName, params, pushState);
    };

    replace(pageName, params) {
        this.process(pageName, params, replaceState);
    };
}


