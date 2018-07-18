const obj = {};
obj.clockFace = (function (param) {
    'use strict';

    let posSecond = 0;
    let posMinute = 0;
    let posHour = 0;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const midCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    const hour = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const minute = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const second = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

    svg.appendChild(circle);
    document.body.appendChild(svg);
    svg.appendChild(midCircle);

    svg.setAttribute('width', '150');
    svg.setAttribute('height', '150');
    svg.style.textAlign = 'center';
    const realTime = param;

    text.setAttribute('x', '55');
    text.setAttribute('y', '85');
    text.setAttribute('fill', 'red');
    text.style.fontSize = '20px';
    text.innerHTML = 'Pcs';

    circle.setAttribute('cx', '65');
    circle.setAttribute('cy', '65');
    circle.setAttribute('r', '56');
    circle.setAttribute('stroke', 'green');
    circle.setAttribute('stroke-width', '4');
    circle.setAttribute('fill', 'white');

    midCircle.setAttribute('cx', '65');
    midCircle.setAttribute('cy', '65');
    midCircle.setAttribute('r', '4');
    midCircle.setAttribute('stroke-width', '4');
    midCircle.setAttribute('fill', 'black');

    const y1 = 65;
    const radius = 56;
    let y2 = y1 - radius;

    second.setAttribute('x1', '65');
    second.setAttribute('y1', '65');
    second.setAttribute('x2', '65');
    second.setAttribute('y2', y2);
    second.style.stroke = 'black';
    second.style.strokeWidth = '2px';
    second.style.transformOrigin = '65px 65px';
    second.style.transition = 'transform .5s ease-in-out';

    y2 += 7;
    minute.setAttribute('x1', '65');
    minute.setAttribute('y1', '65');
    minute.setAttribute('x2', '65');
    minute.setAttribute('y2', y2);
    minute.style.stroke = 'black';
    minute.style.strokeWidth = '3px';
    minute.style.transformOrigin = '65px 65px';
    // minute.style.transition = 'transform .5s ease-in-out';

    y2 += 10;

    hour.setAttribute('x1', '65');
    hour.setAttribute('y1', '65');
    hour.setAttribute('x2', '65');
    hour.setAttribute('y2', y2);
    hour.style.stroke = 'black';
    hour.style.strokeWidth = '4px';
    hour.style.transformOrigin = '65px 65px';
    hour.style.transition = 'transform .5s ease-in-out';

    svg.appendChild(hour);
    svg.appendChild(minute);
    svg.appendChild(second);
    svg.appendChild(text);
    let configSeconds = 0;
    start();

    setInterval(start, 1000);
    function start() {
        const date = new Date();
        let realSeconds = date.getSeconds();
        if (realSeconds === 0) {
            configSeconds += 60;
        }
        realSeconds += configSeconds;
        console.log(realSeconds);
        const realMinutes = date.getMinutes();
        const realHours = date.getHours();

        if (realTime) {
            posSecond = realSeconds * 6;
        } else {
            posSecond += 6;
        }

        let degreeString = `rotate(${posSecond}deg)`;
        second.style.transform = degreeString;

        if (realTime) {
            posMinute = realMinutes * 6;
        } else if (posSecond === 360) {
            //  posSecond = 0;
            posMinute += 6;
        }

        degreeString = `rotate(${posMinute}deg)`;

        minute.style.transform = degreeString;

        if (realTime) {
            posHour = realHours * 30;
        } else {
            if (posMinute === 360) {
                // posMinute = 0;
            }
            if (posMinute > 90) {
                posHour += posMinute / 45;
            }
            if (posHour === 360) {
                // posHour = 0;
            }
        }

        degreeString = `rotate(${posHour}deg)`;

        hour.style.transform = degreeString;
    }
});
