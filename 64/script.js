(function() {
'use strict';

const vidDiv = $('#vidDiv');
const select = $('select');
$.getJSON('vids.json', (loadedData) => {
    loadedData.forEach(element => {
        const newOption = $(`<option value="${element.name}" data_url="${element.url}" data_pic="${element.picture}">${element.name}</option>`);
        select.append(newOption);
    });
    select.on('change', () => {
        vidDiv.empty();
        const input = $('select option:selected');
        input.each(() => {
            console.log();
            const newDiv = $(`<div class="${input[0].attributes.value.value}"><p>${input[0].attributes.value.value}</p></div>`);
            const vid = $(`<video src="${input[0].attributes.data_url.value}" width="640" height="480" poster="${input[0].attributes.data_pic.value}" controls></video>`);
            vidDiv.append(newDiv);
            newDiv.append(vid);
        });

    });

});
})();
