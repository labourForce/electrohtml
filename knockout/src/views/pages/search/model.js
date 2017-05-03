import ko from 'knockout';
import { sendRequest } from '../../../scripts/utils/common';

export default class SearchVM {

    constructor (app, props) {
        props.query =  Object.assign({
            searchTerm: '',
            category: '',
            page: 0,
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
        this.app.router.notify('catalog', { path: product.path.join('/') + '/' + product.name });
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
        });
    }

    pageNavigation (type, page) {
        console.log(this, type, page);
        switch (type) {
            case 'prev':
                if (this.props.query.page > 0) {
                    this.props.query.page--;
                    this.currentPage(this.props.query.page + 1);
                } else {
                    if (this.props.query.page === 0) {
                        return;
                    }
                    this.props.query.page = 0;
                }
                break;
            case 'next':
                if (this.props.query.page < this.pageCount()) {
                    this.props.query.page++;
                    this.currentPage(this.props.query.page + 1);
                } else {
                    if (this.props.query.page === this.pageCount() - 1) {
                        return;
                    }
                    this.props.query.page = this.pageCount() -1;
                }
                break;
            case 'go':
                if (this.props.query.page === page) {
                    return;
                }
                this.currentPage(this.props.query.page = page < 0 ? 0 : page > this.pageCount() - 1 ? this.pageCount() - 1 : page);
                break;
        }

        this.getSearchProducts();
    }

}