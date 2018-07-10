(function () {
    const theButton = document.getElementById('theButton');
    const theDiv = document.getElementById('theDiv');
    theButton.addEventListener('click', () => {
        const fontColor = document.getElementById('fontColor').value;
        theDiv.style.backgroundColor = fontColor;
    });
}());
