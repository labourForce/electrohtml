import ko from 'knockout';
import $ from 'jquery';

export default class CartVM{
    constructor(state){
        var self = this,
            data = {
                products: [
                    {
                        img: '/assets/images/Laptop-600x600.jpg',
                        title: 'Nerocool EN52377 Dead Silence Gaming Cube Case',
                        brand: 'Nerocool',
                        price: '1999.00',
                        quantity: 1
                    },
                    {
                        img: '/assets/images/Laptop-600x600.jpg',
                        title: 'Apple EN52377 Life Noise Playing Circle Bag',
                        brand: 'Apple',
                        price: '3549.35',
                        quantity: 1
                    }
                ]
            };


		self.products = ko.observableArray(data.products);

		this.removeItem = function(){
		    self.products.remove(this);
        };

        this.quantityPlus = function(){


        };

		self.productQuantity = function(){
            console.log(this);
        };
		self.productEnableButton = ko.observable();









    }
};