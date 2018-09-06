/* global $, localStorage */
(function () {
    'use strict';

    let zIndex = 100000;
    let dragging = false;
    let offset;

    const info = localStorage.info ? JSON.parse(localStorage.info) : { players: [] };
    const select = $('#play');
    let currentPlayer;
    startingSetup();
    $('#errorMessage').hide();

    function startingSetup() {
        makeNewImg('.div1', 'images/newRedEyes.png', 'newRedEyes pieces', '142px', '24px');
        makeNewImg('.div2', 'images/newEyes.png', 'newEyes pieces', '132px', '135px');
        makeNewImg('.div3', 'images/glassesWithNose.png', 'glassesWithNose pieces', '132px', '229px');
        makeNewImg('.div4', 'images/newPurpleEyes.png', 'newPurpleEyes pieces', '184px', '34px');
        makeNewImg('.div5', 'images/redNose.png', 'redNose pieces', '193px ', '118px');
        makeNewImg('.div6', 'images/newLeftEar.png', 'leftEar pieces', '206px', '300px');
        makeNewImg('.div7', 'images/newRightEar.png', 'rightEar pieces', '206px', '250px');
        makeNewImg('.div8', 'images/newNose.png', 'nose pieces', '250px', '40px');
        makeNewImg('.div9', 'images/newBlueEyes.png', 'blueEyes pieces', '250px', '130px');
        makeNewImg('.div10', 'images/smile.png', 'smile pieces', '292px', '150px');
        makeNewImg('.div11', 'images/hand.png', 'hand pieces', '315px', '23px');
        makeNewImg('.div12', 'images/mustache.png', 'mustache pieces', '360px', '36px');
        makeNewImg('.div13', 'images/blackHat.png', 'blackHat pieces', '360px', '135px');
        makeNewImg('.div14', 'images/piinkHat.png', 'pinkHat pieces', '375px', '243px');
        makeNewImg('.div15', 'images/redLips.png', 'redLips pieces', '289px', '243px');
    }
    function setMouseDown(event) {
        console.log('setMouseDown');
        offset = {
            x: event.offsetX,
            y: event.offsetY
        };
        dragging = $(this);
    }
    function setMouseUp(event) {
        console.log('setMouseUp');
        dragging = null;
        const newObj = $(event.target).data();
        newObj.top = event.clientY - offset.y;
        newObj.left = event.clientX - offset.x;
        console.log(event);
        event.preventDefault();
    }
    function setMouseMove(event) {
        console.log('setMouseMove');
        if (dragging) {
            const top = event.clientY - offset.y;
            const left = event.clientX - offset.x;
            dragging.css({
                top,
                left
            });
            event.preventDefault();
        }
    }
    $(document).on('mousedown', 'aside img', setMouseDown)
        .on('mouseup', 'aside img', setMouseUp)
        .mousemove(setMouseMove);

    function addImg(obj, bool) {
        const newImg = $(`<img class="${obj.className}" src="${obj.src}"/>`);

        newImg.data(obj);
        newImg.appendTo($(obj.div));
        newImg.css({
            position: 'absolute',
            top: obj.top,
            left: obj.left,
            zIndex
        });
        zIndex--;
        $(`.${obj.className}`).click(() => {
            if (bool) {
                addImg(newImg.data());
            }
        });
    }

    function makeNewImg(newDiv, source, className, top, left) {
        const newImg = {
            div: newDiv,
            src: source,
            className,
            top,
            left
        };
        addImg(newImg, true);
        // setEvent(`.${newImg.className}`);
    }

    // function addOldImg(newDiv, source, className, top, left) {
    //     const newImg = {
    //         div: newDiv,
    //         src: source,
    //         className,
    //         top,
    //         left
    //     };
    //     addImg(newImg, false);
    // }
    const popUp = $('#popUp');
    popUp.hide();
    var checkIfSignedUp;
    $('#signInButtonFromNav').click((event) => {
        console.log(event);
        checkIfSignedUp = true;
        setForm(checkIfSignedUp);
    });

    $('#signUpButton').click((event) => {
        console.log(event);
        checkIfSignedUp = false;
        setForm(checkIfSignedUp);
    });

    function setForm() {
        popUp.show();
    }
    $('#signInButton').click((event) => {
        event.preventDefault();
        popUp.hide();
        start();
        console.log($('#name').val());
        console.log($('#password').val());
    });
    function start() {
        const name = $('#name').val();
        const password = $('#password').val();
        if (!checkIfSignedUp) {
            setNewPlayer(name, password);
        } else {
            loadOldPlayer(name, password);
        }
    }

    $('#errorMessage span').click(() => {
        $('#errorMessage').hide();
    });
    function setNewPlayer(name, password) {
        console.log('setNewPlayer', $('#name').val());
        console.log($('#password').val());
        const newSignIn = { name, password };
        let check = true;
        info.players.forEach((player) => {
            if (player.name === newSignIn.name && player.password === newSignIn.password) {
                $('#errorMessage').show();
                check = false;
            }
        });
        if (check) {
            currentPlayer = newSignIn;
            info.players.push(newSignIn);
            console.log('hello', info.players);
            localStorage.info = JSON.stringify(info);
            $('#selecter').show();
        }
    }
    function loadOldPlayer(name, password) {
        let check = false;
        info.players.forEach((player) => {
            if (player.name === name && player.password === password) {
                currentPlayer = player;
                check = true;
                $('#selecter').show();
            }
        });
        if (!check) {
            $('#theH3').html('Please check if your user name and password is correct!');
            popUp.show();
        }

        console.log('loadOldPlayer', $('#name').val());
        console.log($('#password').val());
    }

    $('#cancelButton').click(() => {
        popUp.hide();
    });

    $('#selecter').click(() => {
        switch (select.val()) {
        case 'newGame':
            setNewGame();
            $('option[value="reset"]').attr('selected', 'true');
            $('option[value="reset"]').removeAttr('selected');
            break;
        case 'saveImage':
            saveImage();
            $('option[value="reset"]').attr('selected', 'true');
            $('option[value="reset"]').removeAttr('selected');
            break;
        case 'loadGame':
            loadGame();
            $('option[value="reset"]').attr('selected', 'true');
            $('option[value="reset"]').removeAttr('selected');
            break;
        case 'music':
            // setMusic();
            $('option[value="reset"]').attr('selected', 'true');
            $('option[value="reset"]').removeAttr('selected');
            break;
        default:
            break;
        }
        console.log('hello');
        console.log(select.val());
    });
    function setNewGame() {
        $('.images').empty();
        startingSetup();
    }
    function saveImage() {
        // console.log('one', $('.pieces'));
        const getAllImages = document.querySelectorAll('.pieces');
        const arrayOfImages = [];
        getAllImages.forEach((element) => {
            arrayOfImages.push($(element).data());
            // console.dir(element);
            // console.log('berkowitzky', $(element).data());
        });
        console.log('array', arrayOfImages);
        currentPlayer.savedImage = arrayOfImages;
        localStorage.info = JSON.stringify(info);
        // localStorage.test = JSON.stringify(arrayOfImages);
    }
    function loadGame() {
        const loadedGame = JSON.parse(localStorage.info);
        console.log(loadedGame);
        loadedGame.players.forEach((element) => {
            if (element.name === currentPlayer.name && element.password === currentPlayer.password) {
                element.savedImage.forEach((image) => {
                    addImg(image);
                });
                console.log(element.name);
            }
            // addImg(element);
        });
    }
}());
