import ko from 'knockout';
import $ from 'jquery';
import { sendRequest } from '../../../../../scripts/utils/common';




export default class paymentVM{
    constructor(state){
        this.state = state;




    }
    more(){
        console.log(state);
    }

}