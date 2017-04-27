import ko from 'knockout';
import $ from 'jquery';

let json = {
        "products": [{
            "uid": 321321321,
            "productLink": "string",
            "parentCategory": "string",
            "parentSubcategory": "string",
            "featuredImage": "string",
            "displayName": "string",
            "listPrice": 322.2,
            "salePrice": 322.2,
            "quantity": 1,
            "totalPrice": 323.33,
            "nestedSKUs": {
                "uid": 432423423432423,
                "featuredImage": "string",
                "displayName": "Apple MacBook Air 13 [MMGF2]",
                "listPrice": 432.43,
                "salePrice": 433.78,
                "quantity": 1,
                "nestedVariableSKUs": [
                    {
                        "uid": 4324456456456,
                        "featuredImage": "string",
                        "displayName": "A4Tech Bloody V8",
                        "listPrice": 32.0,
                        "salePrice": 54.4,
                        "quantity": 1
                    }
                ]
            }
        },
            {
                "uid": 3214325265565756768,
                "productLink": "string",
                "parentCategory": "string",
                "parentSubcategory": "string",
                "featuredImage": "string",
                "displayName": "string",
                "listPrice": 322.2,
                "salePrice": 322.2,
                "quantity": 1,
                "totalPrice": 323.33,
                "nestedSKUs": {
                    "uid": 432423423432423,
                    "featuredImage": "string",
                    "displayName": "Xiaomi Mi Book Air 13,3 Silver",
                    "listPrice": 432.43,
                    "salePrice": 433.78,
                    "quantity": 10,
                    "nestedVariableSKUs": [
                        {
                            "uid": 3445653654654656,
                            "featuredImage": "string",
                            "displayName": "Logitech G102 Prodigy [910-004939]",
                            "listPrice": 32.0,
                            "salePrice": 54.4,
                            "quantity": 1
                        },
                        {
                            "uid": 634656356546546,
                            "featuredImage": "string",
                            "displayName": "Logitech G900 Chaos Spectrum [910-004607]",
                            "listPrice": 32.0,
                            "salePrice": 54.4,
                            "quantity": 1
                        }
                    ]
                }
            },
            {
                "uid": 3214325265565756768,
                "productLink": "string",
                "parentCategory": "string",
                "parentSubcategory": "string",
                "featuredImage": "string",
                "displayName": "string",
                "listPrice": 322.2,
                "salePrice": 322.2,
                "quantity": 1,
                "totalPrice": 323.33,
                "nestedSKUs": {
                    "uid": 432423423432423,
                    "featuredImage": "string",
                    "displayName": "Xiaomi Mi Book Air 13,3 Silver",
                    "listPrice": 432.43,
                    "salePrice": 433.78,
                    "quantity": 10,
                    "nestedVariableSKUs": [
                    ]
                }
            }
        ],
        "order": {
            "orderUID": 4234523534543,
            "shippingPrice": 2.00,
            "discounted": true,
            "orderTotalPrice": 3220.00
        }
    },
    data = ko.toJS(json);

export default class CartVM {
    constructor(state) {
        this.products = ko.observableArray();
        this.nestedSKU = ko.observableArray();
        this.totalPrice = ko.observable(data.order.orderTotalPrice);

        this.setCart(data.products);
        console.log(this.nestedSKU());

    }

    setCart (data) {
        this.products(data.map((product) => {
            product.quantity = ko.observable(product.quantity);
            return product;
        }));

    }

    quantityPlus(el){

        let jsonData = ko.toJSON({
            uid: el.uid,
            quantity: el.quantity() + 1
        });
        console.log(jsonData);

        // $.ajax({
        //     url: '',
        //     contentType: 'application/json',
        //     type: 'post',
        //     data: jsonData ,
        //     success: (response) => {
        //         console.log(response);
        //         this.setCart(data)
        //     }
        // });
    }

    quantityMinus(el){

        let quantityFunction = () => {

            if (el.quantity() > 1) {

                return el.quantity() - 1;
            } else {

                return 1;
            }
        };


        let jsonData = ko.toJSON({
            uid: el.uid,
            quantity: quantityFunction()
        });
        console.log(jsonData);

        // $.ajax({
        //     url: '',
        //     contentType: 'application/json',
        //     type: 'post',
        //     data: jsonData ,
        //     success: function(response){
        //         console.log(response);
        //
        //     }
        // });
    }

    deleteField(el){
        let jsonData = ko.toJSON({
            uid: el.uid
        });
        console.log(jsonData);

        // self.contacts.remove(el);
        // $.ajax({
        //     url: '',
        //     contentType: 'application/json',
        //     type: 'DELETE',
        //     data: jsonData ,
        //     success: function(response){
        //         console.log(response);
        //
        //     }
        // });
    }



};