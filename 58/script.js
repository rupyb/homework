(function () {
    'use strict';

    const theButton = document.getElementById('theButton');
    const theDiv = document.getElementById('theDiv');
    const theBody = document.getElementById('theBody');
    const fontColor = document.getElementById('fontColor');
    theButton.addEventListener('mouseover', (event) => {
        theDiv.style.backgroundColor = fontColor.value;
        theButton.style.color = fontColor.value;
        theBody.style.color = 'pink';
        console.log(event);
        theButton.addEventListener();
    });
}());
