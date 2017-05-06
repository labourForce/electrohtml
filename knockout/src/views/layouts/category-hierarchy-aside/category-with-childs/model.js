import ko from 'knockout';

export default class CategoryWithChildren {

    constructor (params) {
        this.category = ko.observable(params.category);
        this.onClick = params.onClick || (() => {});
    }

}