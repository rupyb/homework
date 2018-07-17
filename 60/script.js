var clockApp = clockApp || {};

clockApp.getClock = (function () {
    'use strict';

    function newClock() {
        let hour;
        let minute;
        let second;
        let clockDiv;
        let clock;
        let time;
        makeClock();
        function makeClock() {
            clockDiv = document.createElement('div');
            clock = document.createElement('p');
            clockDiv.appendChild(clock);
            document.body.appendChild(clockDiv);
            styleClock(clockDiv);
            styleClockNumbers(clock);
            start();
        }
        function start() {
            time = '12:00:00';
            clock.innerHTML = time;
            hour = 12;
            minute = 0;
            second = 0;
            setInterval(() => {
                if (second === 59) {
                    second = 0;
                    if (minute === 59) {
                        minute = 0;
                        if (hour === 12) {
                            hour = 1;
                        } else {
                            hour++;
                        }
                    } else {
                        minute++;
                    }
                } else {
                    second++;
                }
                hour = formatTime(hour);
                minute = formatTime(minute);
                second = formatTime(second);
                time = `${hour}:${minute}:${second}`;
                clock.innerHTML = time;
            }, 1000);
        }

        function formatTime(num) {
            const string = num.toString();
            if (string.length < 2) {
                num = (num < 10 ? `0${num}` : num);
            }
            return num;
        }

        function styleClock(elem) {
            elem.style.height = '70px';
            elem.style.width = '105px';
            elem.style.display = 'inline-block';
            elem.style.textAlign = 'center';
            elem.style.backgroundColor = 'aliceblue';
        }

        function styleClockNumbers(elem) {
            elem.style.fontSize = '24px';
            elem.style.color = 'goldenrod';
        }
    }
    return {
        newClock,
    };
}());


/* <svg width="100" height="100">
<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg> */
