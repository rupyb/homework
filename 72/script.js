(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    const button = $('#theButton');
    let theColor = 'black';

    const appleLocation = [];

    button.click(() => {
        theColor = $('#myColor').val();
        // console.log(colorPicked);
        theAnts.push(new Ant());
    });
    function resizeCanvas() {
        canvas.width = window.innerWidth - 2.5 - 200;
        canvas.height = window.innerHeight - 2.5;
        console.log(canvas.width);
        console.log(canvas.height);
    }
    // console.log(canvas.width);
    // console.log(canvas.height);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Ant {
        constructor() {
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight / 2;
            this.color = theColor;
        }

        move(randomMove = true, newX, newY) {
            if (randomMove) {
                this.x += Ant.getRandomNumber(-5, 5);
                this.y += Ant.getRandomNumber(-5, 5);
            } else {
                this.x = newX;
                this.y = newY;
            }
        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    const theAnts = [];
    for (let i = 0; i < 5; i++) {
        theAnts.push(new Ant());
    }

    context.strokeStyle = 'black';

    setInterval(() => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        setAnts();
        setApples();
    }, 33);

    function setAnts() {
        theAnts.forEach(drawAnts);
    }

    function drawAnts(ant) {
        ant.move();
        context.fillStyle = ant.color;
        if (ant.x < 0) {
            ant.x = 1;
        }
        if (ant.y < 0) {
            ant.y = 1;
        }
        if (ant.x >= canvas.width) {
            ant.x = canvas.width - 2;
        }
        if (ant.y >= canvas.height - 1) {
            ant.y = canvas.height - 3;
        }
        context.fillRect(ant.x, ant.y, 4, 4);
    }

    class Apple {
        constructor(x, y) {
            this.color = 'red';
            this.size = 10;
            this.randomX = x;
            this.randomY = y;
        }

        makeFood() {
            context.fillStyle = this.color;
            context.beginPath();
            context.arc(this.randomX, this.randomY, 2, 0, Math.PI * 2);
            context.stroke();
            context.fill();
        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }
    const bigApple = [];
    makeNewApple();
   
    function makeNewApple() {
        const randomX = Apple.getRandomNumber(20, 300);
        const randomY = Apple.getRandomNumber(20, 300);

        for (let i = 0; i < 20; i++) {
            const randomMoveX = Apple.getRandomNumber(-4, 4) + randomX;
            const randomMoveY = Apple.getRandomNumber(-4, 4) + randomY;

            const obj = {
                x: randomMoveX,
                y: randomMoveY
            };
            appleLocation.push(obj);
            bigApple.push(new Apple((randomMoveX), (randomMoveY)));
        }
    }

    function setApples() {
        for (const apple in bigApple) {
            // console.log(bigApple[apple]);
            bigApple[apple].makeFood();
        }
    }

    function headToFood() {
        console.log('theAnts[1].x', theAnts[1].x);
        console.log('theAnts[1].y', theAnts[1].y);
        console.log('appleLocation[0].x', appleLocation[0].x);
        console.log('appleLocation[0].y', appleLocation[0].y);
        if(appleLocation[0].x > theAnts[1].x) {

        }
    }
    headToFood();
    // theAnts[1].move(false, appleLocation[0].x, appleLocation[0].y);
}());
