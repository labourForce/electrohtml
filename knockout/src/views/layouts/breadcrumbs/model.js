import ko from 'knockout';

export default class Breadcrumbs {
    constructor(props) {
        console.log('BC MODEL:', props);
        this.breadcrumbs = props.breadcrumbs;
        this.app = props.app;
    }

    goTo(breadcrumb) {
        console.log(breadcrumb);
        this.app.router.notify(breadcrumb.type, breadcrumb.data)
    }
}