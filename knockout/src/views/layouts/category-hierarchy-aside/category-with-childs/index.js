import ko from 'knockout';
import model from './model';
import template from './view';

ko.components.register('category-with-children', {model, template});