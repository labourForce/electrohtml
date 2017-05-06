import ko from 'knockout';
import { sendRequest } from '../../../scripts/utils/common';

export default class SearchVM {

    constructor (app, props) {
        this.title = ko.observable(props._pageType === 'search' ? `Search results for "${props.query.searchTerm}"` : props.breadcrumbs[props.breadcrumbs.length - 1].name);
        this.currentPage = ko.observable(props.query.page);
        this.pageCount = ko.observable(1);
        this.app = app;
        this.props = props;
        this.products = ko.observableArray([]);
        this.breadcrumbs = ko.observableArray([]);
        this.reload(app, props);
    }

    goToPDP (product) {
        this.app.router.notify('catalog', { path: product.name_path.join('/') + '/' + product.name });
    }

    categorySelect (category) {
        if (this.props._pageType === 'search') {
            let searchedCategories = this.props.query.category.split(';').filter(v => !!v);
            const index = searchedCategories.indexOf(category.categoryDTO.name);
            if (index === -1) {
                searchedCategories.push(category.categoryDTO.name);
            } else {
                searchedCategories.splice(index, 1);
            }
            this.app.router.notify('search', { query: [{key: 'searchTerm', value: this.props.query.searchTerm}, {key: 'category', value: searchedCategories.join(';')}] });
        } else if (this.props._pageType === 'catalog') {
            this.app.router.notify('catalog', { path: category.path.replace(/,/g, '/') });
        }
    }

    reload (app, props) {
        props.query =  Object.assign({
            searchTerm: '',
            category: '',
            page: 0,
            size: 18
        }, props.query);
        this.breadcrumbs(props.breadcrumbs || []);
        this.title(props._pageType === 'search' ? `Search results for "${props.query.searchTerm}"` : props.breadcrumbs[props.breadcrumbs.length - 1].name);
        this.currentPage(props.query.page);
        this.pageCount(1);
        this.app = app;
        this.props = props;
        this.getSearchProducts();
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