import ko from 'knockout';
import { sendRequest } from '../../../scripts/utils/common';

export default class CategoryHierarchyAside {
    constructor (params) {
        console.log('HIERARCHY CONSTRUCTOR');
        this.categories = ko.observableArray([]);
        this.getCategoryHierarchy();
    }

    getCategoryHierarchy () {
        console.log('GET HIERARCHY');
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