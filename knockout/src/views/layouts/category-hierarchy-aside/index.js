import ko from 'knockout';
import viewModel from './model';
import template from './view';
import './category-with-childs';

ko.components.register('category-hierarchy-aside', {viewModel, template});