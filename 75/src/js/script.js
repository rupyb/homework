import $ from 'jquery';
import '../css/style.css';

/* global google */
(function () {
    'use strict';

    const OriginalLocation = {
        lat: 40.09680866454403,
        lng: -74.2213982035816
    };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: OriginalLocation,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.Map
    });

    const infoWindow = new google.maps.InfoWindow({
        content: '',
        maxWidth: 250
    });

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    const tagInput = $('#tag');
    const rowCountInput = $('#rows');
    const placesList = $('#placesList');
    const allMarkerBounds = new google.maps.LatLngBounds();
    let markers = [];
    let currentSummary;

    $('#go').click(getGeoNameData);

    function getGeoNameData() {
        $.getJSON('http://api.geonames.org/wikipediaSearch?username=rupyb&type=json', {
            q: tagInput.val(),
            maxRows: rowCountInput.val()
        },
        processGeoNamesData);
    }

    function processGeoNamesData(geoNamesData) {
        // zoom to new stuff only
        // const allMarkerBounds = new google.maps.LatLngBounds();

        geoNamesData.geonames.forEach(place => {
            // add marker to map
            const location = {
                lat: place.lat,
                lng: place.lng
            };
            const marker = new google.maps.Marker({
                position: location,
                title: place.title,
                map,
                icon: place.thumbnailImg ? {
                    url: place.thumbnailImg,
                    scaledSize: new google.maps.Size(50, 50)
                } : null
            });

            marker.addListener('click', () => {
                infoWindow.setContent(`${place.summary}<br><small><a href="http://${place.wikipediaUrl}" target="_blank">see more</a></small>`);
                infoWindow.open(map, marker);
            });

            allMarkerBounds.extend(location);
            console.log(allMarkerBounds.extend(location));
            markers.push(marker);

            // add to sidebar
            // const summaryShowing = false;
            $(`<li>
                    <img src="${place.thumbnailImg || 'https://png.icons8.com/ios/1600/camera.png'}" />
                    <span>${place.title}</span>
                    <div class="summary">${place.summary}</div>
               </li>`).appendTo(placesList)
                .click(function () {
                    const lastSummary = currentSummary;
                    currentSummary = $(this).find('.summary').slideDown();
                    if (lastSummary && !lastSummary.is(currentSummary)) {
                        lastSummary.slideUp();
                    }

                    map.panTo(location);
                    setTimeout(() => map.setZoom(18), 1510);
                });
        });
        map.fitBounds(allMarkerBounds);
    }

    $('#clear').click(() => {
        placesList.empty();
        markers.forEach(marker => {
            marker.setMap(null);
        });
        markers = [];
    });

    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        const saveCircles = localStorage.circle ? JSON.parse(localStorage.circle) : { circles: [] };
        const saveMarkers = localStorage.marker ? JSON.parse(localStorage.marker) : { markers: [] };
        const saveRects = localStorage.rect ? JSON.parse(localStorage.rect) : { rects: [] };
        const savePolygon = localStorage.polygon ? JSON.parse(localStorage.polygon) : { polys: [] };
        const savePolyline = localStorage.polyline ? JSON.parse(localStorage.polyline) : { polyline: [] };
        console.log(event);
        if (event.type === 'circle') {
            const getNewCircle = {
                center: {
                    lat: event.overlay.center.lat(),
                    lng: event.overlay.center.lng()
                },
                radius: event.overlay.radius
            };
            saveCircles.circles.push(getNewCircle);
            localStorage.circle = JSON.stringify(saveCircles);
        } else if (event.type === 'marker') {
            const getNewMarker = {
                latlng: {
                    lat: event.overlay.position.lat(),
                    lng: event.overlay.position.lng()
                }
            };
            saveMarkers.markers.push(getNewMarker);
            localStorage.marker = JSON.stringify(saveMarkers);
        } else if (event.type === 'rectangle') {
            const getNewRect = {
                bounds: event.overlay.bounds
            };
            saveRects.rects.push(getNewRect);
            localStorage.rect = JSON.stringify(saveRects);
            // console.log(event);
            map.fitBounds(event.overlay.bounds);
        } else if (event.type === 'polygon') {
            console.log('hellobello', event);
            console.log(event.overlay.latLngs.b[0].b);
            const getNewPolygon = {
                coords: event.overlay.latLngs.b[0].b
            };
            savePolygon.polys.push(getNewPolygon);
            localStorage.polygon = JSON.stringify(savePolygon);
        } else if (event.type === 'polyline') {
            const getNewPolyline = {
                coords: event.overlay.latLngs.b[0].b
            };
            savePolyline.polyline.push(getNewPolyline);
            localStorage.polyline = JSON.stringify(savePolyline);
        }
    });

    if (localStorage.marker) {
        const loc = JSON.parse(localStorage.marker);
        console.log(loc);
        loc.markers.forEach((element) => {
            console.log(element);
            new google.maps.Marker({
                position: {
                    lat: element.latlng.lat,
                    lng: element.latlng.lng
                },
                title: 'marker from last time',
                map
            });
        });
        console.log('hello');
    }
    if (localStorage.circle) {
        const loc = JSON.parse(localStorage.circle);
        loc.circles.forEach((element) => {
            new google.maps.Circle({
                map,
                center: element.center,
                radius: element.radius,
                draggable: true,
                geodesic: false
            });
        });
    }
    if (localStorage.rect) {
        const loc = JSON.parse(localStorage.rect);
        loc.rects.forEach((element) => {
            new google.maps.Rectangle({
                map,
                bounds: element.bounds,
                draggable: true
            });
        });
    }
    if (localStorage.polygon) {
        const loc = JSON.parse(localStorage.polygon);
        console.log(loc);
        loc.polys.forEach((element) => {
            new google.maps.Polygon({
                map,
                paths: element.coords,
                draggable: true
            });
        });
    }
    if (localStorage.polyline) {
        console.log('how are you');
        const loc = JSON.parse(localStorage.polyline);
        console.log(loc);
        loc.polyline.forEach((element) => {
            console.log('hi', element.coords);
            const line = new google.maps.Polyline({
                path: element.coords,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2,
                draggable: true
            });
            line.setMap(map);
        });
    }
}());
