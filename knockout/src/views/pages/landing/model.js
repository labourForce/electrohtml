import ko from 'knockout';
import $ from 'jquery';

export default class LandingVM{
    constructor(state){
        this.state = state;
        this.contentItem = ko.observable('');
		this.type = ko.observable('');
		
		$.getJSON("/rest/model/hd/content/ContentActor/getContentItem?contentCollection=/content/Web/HomePage", (returnedData) => {
			if ( returnedData ) {
				this.contentItem(returnedData.contentItem);
			}
		});
    }
}