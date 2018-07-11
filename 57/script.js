(function () {
    const theButton = document.getElementById('theButton');
    const theDiv = document.getElementById('theDiv');
    const theBody = document.getElementById('theBody');
    theButton.addEventListener('click', (event) => {
        const fontColor = document.getElementById('fontColor').value;
        theDiv.style.backgroundColor = fontColor;
        theButton.style.color = fontColor;
        theBody.style.color = 'pink';
        console.log(event);
    });
}());
