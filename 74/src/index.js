import $ from 'jquery';

(function () {
   
    'use strict';

    const button = $('#theButton');
    const theDiv = $('#theDiv');
    theDiv.hide();
    button.click(() => {
        theDiv.show();
    });
}());
