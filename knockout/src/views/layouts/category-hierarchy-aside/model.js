import ko from 'knockout';
import { sendRequest } from '../../../scripts/utils/common';

export default class CategoryHierarchyAside {
    constructor (params) {
        this.onClick = params.onClick || (() => {});
        this.categories = ko.observableArray([]);
        this.getCategoryHierarchy();
    }

    getCategoryHierarchy () {
        sendRequest({
            method: 'GET',
            url: '/rest/categoryHierarchy',
            contentType: 'application/json',
            success: (data) => {
                this.categories(data);
            }
        });
    }
}