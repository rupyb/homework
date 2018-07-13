(function () {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }
    function setCss(elem, property, value) {
        elem.style[property] = value;
    }

    const theButton = get('theButton');
    const theBody = get('theBody');
    const theTable = get('theTable');

    function changeElemColor(elem, property) {
        const randomNum1 = Math.floor(Math.random() * 256);
        const randomNum2 = Math.floor(Math.random() * 256);
        const randomNum3 = Math.floor(Math.random() * 256);
        const theCurrentColor = `rgb(${randomNum1},${randomNum2},${randomNum3})`;

        setCss(elem, property, theCurrentColor);
        return theCurrentColor;
    }
    let currentBodyBackgroundColor;
    let currentBodyTextColorColor;
    function changeBodyBackground() {
        currentBodyBackgroundColor = changeElemColor(theBody, 'background');
    }
    function changeBodyTextColor() {
        currentBodyTextColorColor = changeElemColor(theBody, 'color');
    }
    let startBgColor;
    let startTextColor;
    let startStopSwitch;
    let counter = 0;
    theButton.addEventListener('click', () => {
        if (!startStopSwitch) {
            startBgColor = setInterval(changeBodyBackground, 1200);
            startTextColor = setInterval(changeBodyTextColor, 1700);
            theButton.innerHTML = 'Stop';
            startStopSwitch = true;
        } else {
            counter++;
            clearInterval(startBgColor);
            clearInterval(startTextColor);
            startStopSwitch = false;

            theButton.innerHTML = 'Restart';

            const date = new Date();
            const datePrintOut = date.toLocaleString();

            if (counter === 1) {
                theTable.deleteRow(1);
            }
            const newRow = theTable.insertRow();

            const numberCell = newRow.insertCell();
            const backgroundColorCell = newRow.insertCell();
            const textColorCell = newRow.insertCell();
            const timeCell = newRow.insertCell();

            numberCell.innerHTML = counter;
            backgroundColorCell.innerHTML = currentBodyBackgroundColor;
            textColorCell.innerHTML = currentBodyTextColorColor;
            timeCell.innerHTML = datePrintOut;

            if (theTable != null) {
                for (let i = 0; i < theTable.rows.length; i++) {
                    theTable.rows[i].onclick = function () {
                        getval(this);
                    };
                }
            }
        }
    });
    function getval(row) {
        setCss(theBody, 'background', row.cells[1].innerHTML);
        setCss(theBody, 'color', row.cells[2].innerHTML);
    }
}());
