(function () {
    'use strict';

    let picArray = [];
    const displayButton = $('#displayButton');
    displayButton.hide();
    const picDiv = $('#picDiv');
    $('#theButton').click(() => {
        picArray = [];
        picDiv.empty();
        getPics($('#theInput').val());
        //  console.log(picArray);
    });

    let picture = '';
    let count = 0;
    function displayPictures() {
        if (picArray.length === 0) {
            return;
        }
        console.log(picArray[0].title);
        picture = $(`<figure><img src="${picArray[count++].media}" alt="${picArray[count].title}"/><figcaption>${picArray[count].title}</figcaption></figure>`);
        picture.appendTo(picDiv);
        displayButton.show();
    }

    displayButton.click(() => {
        if (picArray[count] === undefined) {
            count = 0;
        }
        picDiv.empty();
        picture = $(`<figure><img src="${picArray[count].media}" alt="${picArray[count].title}"/><figcaption>${picArray[count++].title}</figcaption></figure>`);
        picture.appendTo(picDiv);
    });
    function getPics(inputValue) {
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${inputValue}&format=json&jsoncallback=?`, (loadedData) => {
            loadedData.items.forEach((element) => {
                const picObject = {
                    title: element.title,
                    media: element.media.m
                };
                picArray.push(picObject);
            });
            displayPictures();
            console.log(loadedData);
        });
    }
}());
