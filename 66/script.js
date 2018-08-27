/* global google */
(function () {
    'use strict';

    const input = $('#search');
    $('#theButton').click(() => {
        $('#asideDiv').empty();
        getData();
    });

    function getData() {
        $.getJSON('http://api.geonames.org/wikipediaSearch?&maxRows=10&username=rupyb&type=json', {
            q: input.val()
        },
        (loadedData) => {
            loadedData.geonames.forEach(element => {
                const pics = $(`<figure>
                                        <img class="thumbNail" data-lat="${element.lat}" data-lng="${element.lng}" src="${element.thumbnailImg}" alt="element.title"/>
                                        <figcaption>${element.summary}<a href="https://${element.wikipediaUrl}">wiki</a></figcaption>
                                        <figure>`);
                pics.appendTo($('#asideDiv'));
            });
            $('.thumbNail').click((event) => {
                const lng = parseFloat(event.target.dataset.lng, 10);
                const lat = parseFloat(event.target.dataset.lat, 10);
                setMap(lat, lng);
            });
        });
    }
    window.initMap = function () {
        setMap(40.09680866454403, -74.2213982035816);
    };

    function setMap(lat, lng) {
        console.log('called');
        const location = {
            lat,
            lng
        };

        const map = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }
}());
