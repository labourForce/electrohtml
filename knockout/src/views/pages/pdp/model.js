import ko from 'knockout';
import $ from 'jquery';
import slick from 'slick';

const objectToArray = (obj) => {
    let result = [];
    for (let key in obj) {
        result.push({ key, data: obj[key] });
    }
    return result;
};

export default class PDPVM {

    constructor (app, props) {
        this.props = props;
        $(() => {
            $('.single-product__carousel').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.single-product__gallery'
            });
            $('.single-product__gallery').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.single-product__carousel',
                dots: false,
                arrows: false,
                focusOnSelect: true
            });
        });
        this.product = {};
        this.product.id = ko.observable();
        this.product.name = ko.observable();
        this.product.displayName = ko.observable();
        this.product.rating = ko.observable(0);
        this.product.availability = ko.observable();
        this.product.displayFlag = ko.observable();
        this.product.longDescription = ko.observable();
        this.product.shortDescription = ko.observable();
        this.product.brand = ko.observable();
        this.product.techline = ko.observable([]);
        this.product.onSale = ko.observable();
        this.product.upSale = ko.observable();
        this.product.listPrice = ko.observable();
        this.product.salePrice = ko.observable();
        this.product.image = ko.observable();
        this.product.rootCategoryId = ko.observable();

        this.skus = ko.observableArray([]);

        this.getProduct();
        this.getAdditionalInfo();
    }

    getProduct () {
        $.ajax({
            method: 'GET',
            url: '/rest/product/getProduct',
            data: this.props,
            contentType: 'application/json',
            success: (data) => {
                for (let key in data) {
                    if (typeof this.product[key] === 'function') {
                        if (key === 'techline') {
                            try {
                                this.product[key](objectToArray(JSON.parse(data[key])));
                            } catch (e) {
                                this.product[key]([]);
                            }
                        } else {
                            this.product[key](data[key]);
                        }
                    } else {
                        console.error('THERE IS NO KEY IN PRODUCT', key, data[key]);
                    }
                }
            },
            error: (err) => {
                // reject(err);
            }
        });
    }

    addToCart (...props) {
        console.log(props);
    }

    configure () {
        $('.single-product__tabs').slideToggle('slow');
    }

    getAdditionalInfo () {
        $.ajax({
            method: 'GET',
            url: '/rest/product/getAdditionalInfo',
            data: this.props,
            contentType: 'application/json',
            success: (data) => {
                this.skus(data.map((sku) => {
                    try {
                        sku.techline = objectToArray(JSON.parse(sku.techline));
                    } catch (e) {
                        sku.techline = [];
                    }
                    sku.confProperties = sku.confProperties.map((prop) => {
                        prop._selectedOption = ko.observable();
                        return prop;
                    });
                    sku._totalListPrice = ko.pureComputed(function () {
                        return sku.listPrice +
                            sku.confProperties.reduce((accum, prop) => {
                                return accum + (
                                    prop._selectedOption() || prop._selectedOption() === 0 ?
                                        prop.confOptions[prop._selectedOption()].variableSKU.listPrice :
                                        0
                                    );
                            }, 0);

                    });
                    sku._totalSalePrice = ko.pureComputed(function () {
                        return sku.salePrice +
                            sku.confProperties.reduce((accum, prop) => {
                                return accum + (
                                        prop._selectedOption() || prop._selectedOption() === 0 ?
                                            prop.confOptions[prop._selectedOption()].variableSKU.salePrice :
                                            0
                                    );
                            }, 0);

                    });
                    console.log(sku._totalListPrice(), sku._totalSalePrice());
                    return sku;
                }));
            },
            error: (err) => {
                // reject(err);
            }
        });
    }

}