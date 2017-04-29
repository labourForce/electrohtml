import ko from 'knockout';
import app from '../../views/app/index';
import header from '../../views/layouts/header/index';

import login from '../../views/pages/login/index';
import pdp from '../../views/pages/pdp/index';
import checkout from '../../views/pages/checkout/index';
import homepage from '../../views/pages/homepage/index';
import search from '../../views/pages/search/index';
import cart from '../../views/pages/cart/index';
import footer from '../../views/layouts/footer/index';

let stateList = {
    app: app,
    header: header,
    footer: footer,
    login: login,
    homepage: homepage,
    cart: cart,
    pdp: pdp,
    checkout: checkout,
    search: search
};

export default class State {
    constructor(name, state, props){
        try {
            this.data = new stateList[name].model(state, props);
            this.html = stateList[name].template;
        }catch(e){
            console.error(name, e);
        }
    }
}


// for(let key in componentList){
//     ko.components.register(key, {
//         viewModel: componentList[key].model,
//         template: componentList[key].template
//     });
// }