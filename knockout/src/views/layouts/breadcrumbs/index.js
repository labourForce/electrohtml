import ko from 'knockout';
import viewModel from './model';
import template from './view';

ko.components.register('breadcrumbs', {viewModel, template});