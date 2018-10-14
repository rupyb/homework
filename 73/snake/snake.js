(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');
    const main = document.getElementById('main');
    const playButton = document.getElementById('playButton');
    const scoreDisplay = document.getElementById('score');
    const gameOverNotice = document.getElementById('gameOverNotice');

    console.dir(scoreDisplay);
    console.dir(main);
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const crunchSound = document.getElementById('crunch');
    const wallCollision = document.getElementById('wallCollision');

    let direction = RIGHT;
    let score = 0;
    scoreDisplay.innerText = score;
    var theApple;
    var theSnake;
    var green;
    var snakeInterval;
    let gameOver = false;
    const tail = [];
    const tailLocation = [];

    playButton.addEventListener('click', start);
    function start() {
        // canvas.width = canvas.width;
        gameOverNotice.style.visibility = 'hidden';
        direction = RIGHT;
        score = 0;
        scoreDisplay.innerText = score;
        gameOver = false;
        clearInterval(snakeInterval);
        context.clearRect(0, 0, canvas.width, canvas.height);
        theApple = new Apple();
        
        // theApple.createApple();

        setTimeout(() => {
            theApple.placeApple();
        }, 5);
        theSnake = new Snake();
        theSnake.createSnake();
        setTimeout(() => {
            theSnake.placeSnake();
        }, 0);
        theSnake.render();

        green = new GreenApple(theSnake);
        tail.push(green);
        // green.makeApple();
    }

    function resizeCanvas() {
        canvas.width = (window.innerWidth * 0.8) - 2;
        canvas.height = window.innerHeight - 2;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    document.addEventListener('keydown', event => {
        // console.log(event);
        switch (event.keyCode) { // note keyCode is DEPRECATED
        case LEFT:
        case UP:
        case RIGHT:
        case DOWN:
            direction = event.keyCode;
            break;
        default:
            break;
        }
    });

    class Snake {
        constructor() {
            this.headX = 0;
            this.headY = 0;
            this.snakeSize = 64;
            this.lastPosition = {
                x: this.headX,
                y: this.headY
            };
        }

        createSnake() {
            this.snakeHead = document.createElement('img');
            this.snakeHead.src = 'images/snakeHead.png';
        }

        placeSnake() {
            context.drawImage(this.snakeHead, this.headX, this.headY, this.snakeSize, this.snakeSize);
        }

        render() {
            snakeInterval = setInterval(() => {
                context.clearRect(this.headX, this.headY, this.snakeSize, this.snakeSize);
                this.lastPosition.x = this.headX;
                this.lastPosition.y = this.headY;
                switch (direction) {
                case LEFT:
                    this.headX -= this.snakeSize;
                    break;
                case UP:
                    this.headY -= this.snakeSize;
                    break;
                case RIGHT:
                    this.headX += this.snakeSize;
                    break;
                case DOWN:
                    this.headY += this.snakeSize;
                    break;
                default:
                    break;
                }
                this.checkForCollision();
                if (gameOver) {
                    clearInterval(snakeInterval);
                    gameOverNotice.style.visibility = 'visible';
                    // context.clearRect(this.headX, this.headY, this.snakeSize, this.snakeSize);
                }
                if (this.headX === theApple.appleX && this.headY === theApple.appleY) {
                    crunchSound.currentTime = 0;
                    crunchSound.play();

                    tailLocation.push(this.lastPosition);
                    console.log(tailLocation);
                    console.log(tail);

                    // green.placeApple(theSnake);
                    tail.forEach((element) => {
                        tailLocation.forEach((location) => {
                            element.placeApple(location);
                        });
                    });
                    green = new GreenApple(theSnake);
                    tail.push(green);

                    score++;
                    scoreDisplay.innerText = score;
                    // console.log('score', score);
                    theApple.placeApple();
                }
                this.placeSnake();
                // context.drawImage(this.snakeHead, this.headX, this.headY, this.snakeSize, this.snakeSize);
            }, 600);
        }

        checkForCollision() {
            // console.log(this.headX);
            if (this.headX < 0 || this.headY < 0 || this.headX > canvas.width || this.headY > canvas.height) {
                wallCollision.play();
                console.log('ouch');
                gameOver = true;
            }
            return gameOver;
        }
    }

    class Apple {
        constructor() {
            this.appleX = -1;
            this.appleY = 0;
            this.appleSize = 64;
            this.apple = document.createElement('img');
            this.apple.src = 'images/apple.png';
        }

        // createApple() {
        //     this.apple = document.createElement('img');
        //     this.apple.src = 'images/apple.png';
        //     // this.apple.onload = this.placeApple;
        // }

        placeApple() {
            this.appleX = Apple.getRandomNumber(0, canvas.width - this.appleSize);
            this.appleY = Apple.getRandomNumber(0, canvas.height - this.appleSize);
            this.appleX -= this.appleX % this.appleSize;
            this.appleY -= this.appleY % this.appleSize;
            context.drawImage(this.apple, this.appleX, this.appleY, this.appleSize, this.appleSize);
        }

        static getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
    }

    class GreenApple {
        constructor() {
            this.appleX = 0;
            this.appleY = 0;
            this.appleSize = 64;
            this.greenApple = document.createElement('img');
            this.greenApple.src = 'images/greenApple.png';
        }

        // makeApple() {
        //     console.dir(this.greenApple);
        // }

        placeApple(lastPosition) {
            this.appleX = lastPosition.x;
            this.appleY = lastPosition.y;
            console.log('one', this.greenApple);
            console.log('appleX', this.appleX);
            console.log('appleY', this.appleY);
            console.log(this.greenApple);
            context.drawImage(this.greenApple, this.appleX, this.appleY, this.appleSize, this.appleSize);
            // setTimeout(() => {
            //     context.drawImage(this.greenApple, this.appleX, this.appleY, this.appleSize, this.appleSize);
            // }, 500);
        }
    }
    // console.dir(theApple.apple);
}());
