import ko from 'knockout';
import 'utils/stringTemplateEngine';
import State from 'utils/state';



let app = new State('app');

ko.applyBindings(app);