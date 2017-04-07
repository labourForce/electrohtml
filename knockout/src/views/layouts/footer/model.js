import ko from 'knockout';
import $ from 'jquery';

export default class FooterVM {
    constructor(state){
        this.state = state;
		
		this.contentItem = ko.observable();
		


    }
}