import ko from 'knockout';
import $ from 'jquery';
import slick from 'slick';

const objectToArray = (obj) => {
    let result = [];
    for (let key in obj) {
        result.push({ key, data: obj[key] });
    }
    return result;
};

export default class SearchVM {

    constructor (app, props) {

    }

}