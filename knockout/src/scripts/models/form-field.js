import ko from 'knockout';

export default class FormFielModel{
    constructor(){
        var self = this;

		var TYPE_INPUT = "input",
			TYPE_TEXTAREA = "textarea",
			TYPE_SELECT = "select",
			TYPE_CHECKBOX = "checkbox",
			TYPE_OPTIONS_GROUP = "optionsGroup";

		var ATTRIBUTE_POSTFIX = "Attribute",
			ADDITIONAL_ATTRIBUTES_PROPERTY_NAME = "additionalAttributes",
			CLASS_ATTRIBUTE = "class",
			NAME_ATTRIBUTE = "name";

		self.type = ko.observable('');
		self.name = ko.observable('');
		self.label = ko.observable('');
		self.value = ko.observable('');
		self.classAttribute = ko.observable('');
		self.tagAttributes = ko.observable({});
		self.options = ko.observableArray([]);

		self.checked = ko.observable(false);
		self.checkedValue = ko.observable(true);
		self.uncheckedValue = ko.observable(false);

		self.checkboxGroupValue = ko.observableArray([]);
		self.allowMultipleChoice = ko.observable(false);
		self.valuesSeparator = ko.observable(",");
		self.displayInSingleRow = ko.observable(false);


		self.fill = function(data) {
			self.type(data.type);
			self.name(data.name);
			self.label(data.label);
			self.processAttributes(data);
			self.processOptions(data);
			if (self.isCheckbox()) {
				self.fillCheckboxProperties(data);
			}
			if (self.isOptionsGroup()) {
				self.fillOptionsGroupProperties(data);
			}
		};

		self.processAttributes = function (data) {
			self.processAttribute(NAME_ATTRIBUTE, data.name);
			for (var propertyName in data) {
				if (data.hasOwnProperty(propertyName) && self.propertyIsTagAttribute(propertyName)) {
					var attributeValue = data[propertyName];
					if (attributeValue) {
						var attributeName = propertyName.replace(ATTRIBUTE_POSTFIX, "");
						self.processAttribute(attributeName, attributeValue);
					}
				}
			}
			var additionalAttributes = data[ADDITIONAL_ATTRIBUTES_PROPERTY_NAME];
			if (additionalAttributes) {
				for (attributeName in additionalAttributes) {
					if (additionalAttributes.hasOwnProperty(attributeName)) {
						self.processAttribute(attributeName,  additionalAttributes[attributeName]);
					}
				}
			}
		};

		self.propertyIsTagAttribute = function(propertyName) {
			return propertyName && (propertyName.indexOf(ATTRIBUTE_POSTFIX) != -1)
				&& (propertyName != ADDITIONAL_ATTRIBUTES_PROPERTY_NAME);
		};

		self.processAttribute = function(attributeName, attributeValue) {
			if (attributeName == CLASS_ATTRIBUTE) {
				self.classAttribute(self.classAttribute() + " " + attributeValue);
			} else {
				self.tagAttributes()[attributeName] = attributeValue;
			}
		};

		self.processOptions = function(data) {
			var options = data.options;
			if (options) {
				if (data.type == TYPE_SELECT && data.placeholder) {
					var option = {};
					option.name = data.placeholder;
					option.value = "";
					self.options.push(option);
				}
				for (var optionKey in options) {
					if (options.hasOwnProperty(optionKey)) {
						option = {};
						option.value = optionKey;
						option.name = options[optionKey];
						self.options.push(option);
					}
				}
			}
		};

		self.fillCheckboxProperties = function(data) {
			if (data.checked) {
				self.checked(data.checked);
			}
			if (data.checkedValue) {
				self.checkedValue(data.checkedValue);
			}
			if (data.uncheckedValue) {
				self.uncheckedValue(data.uncheckedValue);
			}
		};

		self.fillOptionsGroupProperties = function(data) {
			self.allowMultipleChoice(data.allowMultipleChoice);
			self.displayInSingleRow(data.displayInSingleRow);
			if (data.valuesSeparator) {
				self.valuesSeparator(data.valuesSeparator);
			}
		};

		self.getValue = function() {
			if (self.isCheckbox()) {
				return self.checked() ? self.checkedValue() : self.uncheckedValue();
			} else if (self.isOptionsGroupCheckboxes()) {
				return self.checkboxGroupValue().join(self.valuesSeparator());
			} else {
				return self.value();
			}
		};


		self.optionClass = ko.pureComputed(function() {
			var optionClass = '';
			if (self.isOptionsGroup() && self.displayInSingleRow()) {
				optionClass = self.isOptionsGroupCheckboxes() ? 'checkbox-inline' : 'radio-inline';
			}
			return optionClass;
		}, self);


		self.isInput = ko.pureComputed(function () {
			return self.type() == TYPE_INPUT;
		}, self);

		self.isTextarea = ko.pureComputed(function () {
			return self.type() == TYPE_TEXTAREA;
		}, self);

		self.isSelect = ko.pureComputed(function () {
			return self.type() == TYPE_SELECT;
		}, self);

		self.isCheckbox = ko.pureComputed(function () {
			return self.type() == TYPE_CHECKBOX;
		}, self);

		self.isOptionsGroup = ko.pureComputed(function () {
			return self.type() == TYPE_OPTIONS_GROUP;
		}, self);

		self.isOptionsGroupCheckboxes = ko.pureComputed(function () {
			return self.type() == TYPE_OPTIONS_GROUP && self.allowMultipleChoice();
		}, self);

		self.isOptionsGroupRadios = ko.pureComputed(function () {
			return self.type() == TYPE_OPTIONS_GROUP && !self.allowMultipleChoice();
		}, self);
    }
}