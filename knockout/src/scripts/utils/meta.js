import $ from 'jquery';

class Meta {
    constructor(){
        var self = this;
		var metaTitle = $('meta[name="title"]');
		var metaDescription = $('meta[name="description"]');
		var metaKeywords = $('meta[name="keywords"]');

		self.metaTitle = function (title) {
			if ( title) {
				metaTitle.attr('content', title + self.metaSuffix)
			}
		};

		self.pagesWithTitle = ['pdp', 'browse', 'static', 'dynamic-form-page'];

		self.description = function (description) {
			if (description) {
				metaDescription.attr('content', description.replace(/\<\/[a-zA-Z]+\>|\<[a-zA-Z]+\>/g, ''));
			} else {
				metaDescription.attr('content', '');
			}
		};

		self.keywords = function (keywords) {
			if (!window.hideSeoKeywords) {
				if (!keywords) {
					keywords = '';
				}
				metaKeywords.attr('content', keywords)
			}
		};

		self.titleSet = true;

		self.defaultTitle = window.defaultPageTitle;
		self.metaSuffix = window.metaSuffix;

		self.pageTitle = function(pageTitle){
			if ( pageTitle) {
				self.titleSet = true;
				document.title = pageTitle + self.metaSuffix;
			} else {
				document.title = self.defaultTitle;
			}
		}
    }
}

export default new Meta();