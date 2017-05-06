import ko from 'knockout';

export default class Breadcrumbs {
    constructor(props) {
        this.breadcrumbs = props.breadcrumbs;
        this.app = props.app;
    }

    goTo(breadcrumb) {
        this.app.router.notify(breadcrumb.type, breadcrumb.data)
    }
}