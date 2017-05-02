import ko from 'knockout';
import { sendRequest } from '../../../scripts/utils/common';

export default class SearchVM {

    constructor (app, props) {
        props.query =  Object.assign({
            searchTerm: '',
            category: '',
            page: 1,
            size: 18
        }, props.query);
        this.currentPage = ko.observable(props.query.page);
        this.pageCount = ko.observable(1);
        this.app = app;
        this.props = props;
        this.products = ko.observableArray([]);
        this.getSearchProducts();
    }

    goToPDP (product) {
        this.app.router.notify('pdp', { id: product.product_id });
    }

    getSearchProducts() {
        sendRequest({
            method: 'GET',
            url: '/rest/search/category',
            data: this.props.query,
            contentType: 'application/json',
            success: (data) => {
                console.log(data);
                this.pageCount(data.pageCount);
                this.products(data.products);
            }
        }, true);
    }

    pageNavigation (type, page) {
        console.log(this, type, page);
        switch (type) {
            case 'prev':
                if (this.props.query.page > 1) {
                    this.props.query.page--;
                    this.currentPage(this.props.query.page);
                } else {
                    if (this.props.query.page === 1) {
                        return;
                    }
                    this.props.query.page = 1;
                }
                break;
            case 'next':
                if (this.props.query.page < this.pageCount()) {
                    this.props.query.page++;
                    this.currentPage(this.props.query.page);
                } else {
                    if (this.props.query.page === this.pageCount()) {
                        return;
                    }
                    this.props.query.page = this.pageCount();
                }
                break;
            case 'go':
                if (this.props.query.page === page) {
                    return;
                }
                this.currentPage(this.props.query.page = page < 1 ? 1 : page > this.pageCount() ? this.pageCount() : page);
                break;
        }

        this.getSearchProducts();
    }

}