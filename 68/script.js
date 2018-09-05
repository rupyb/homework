/* global $, localStorage */
(function () {
    'use strict';

    let zIndex = 100000;
    let dragging = false;
    let offset;
    const savePictures = { drawings: [] };
    const savedDrawing = localStorage.picture ? JSON.parse(localStorage.picture) : {};
    const info = localStorage.info ? JSON.parse(localStorage.info) : { players: [] };
    let currentPlayer;
    $('#errorMessage').hide();
    if (savedDrawing.drawings) {
        savedDrawing.drawings.forEach(element => {
            // console.log(element.div);
            // console.log(element);
            addOldImg(element.div, element.src, element.className, element.top, element.left);
            // $(document).off('mousedown', setMouseDown);
            // $(document).off('mouseup', setMouseUp);
            // $(document).off('mouseup', setMouseUp);
        });
    }
    makeNewImg('.div1', 'images/newRedEyes.png', 'newRedEyes', '142px', '24px');
    makeNewImg('.div2', 'images/newEyes.png', 'newEyes', '132px', '135px');
    makeNewImg('.div3', 'images/glassesWithNose.png', 'glassesWithNose', '132px', '229px');
    makeNewImg('.div4', 'images/newPurpleEyes.png', 'newPurpleEyes', '184px', '34px');
    makeNewImg('.div5', 'images/redNose.png', 'redNose', '193px', '118px');
    makeNewImg('.div6', 'images/newLeftEar.png', 'leftEar', '206px', '300px');
    makeNewImg('.div7', 'images/newRightEar.png', 'rightEar', '206px', '250px');
    makeNewImg('.div8', 'images/newNose.png', 'nose', '250px', '40px');
    makeNewImg('.div9', 'images/newBlueEyes.png', 'blueEyes', '250px', '130px');
    makeNewImg('.div10', 'images/smile.png', 'smile', '292px', '150px');
    makeNewImg('.div11', 'images/hand.png', 'hand', '315px', '23px');
    makeNewImg('.div12', 'images/mustache.png', 'mustache', '360px', '36px');
    makeNewImg('.div13', 'images/blackHat.png', 'blackHat', '360px', '135px');
    makeNewImg('.div14', 'images/piinkHat.png', 'pinkHat', '375px', '243px');
    makeNewImg('.div15', 'images/redLips.png', 'redLips', '289px', '243px');

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
        const newObj = $.extend({}, $(event.target).data());
        const top = event.clientY - offset.y;
        const left = event.clientX - offset.x;
        newObj.top = top;
        newObj.left = left;
        savePictures.drawings.push(newObj);
        localStorage.picture = JSON.stringify(savePictures);
        console.log(event);
        event.preventDefault();
        // event.stopPropagation();
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
        // $(obj.className).click((event) => {
        //     event.stopImmediatePropagation();
        // });
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

    function addOldImg(newDiv, source, className, top, left) {
        const newImg = {
            div: newDiv,
            src: source,
            className,
            top,
            left
        };
        addImg(newImg, false);
    }
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
            info.players.push(newSignIn);
            console.log('hello', info.players);
            localStorage.info = JSON.stringify(info);
        }
    }
    function loadOldPlayer(name, password) {
        let check = false;
        info.players.forEach((player) => {
            if (player.name === name && player.password === password) {
                currentPlayer = player;
                check = true;
            }
        });
        if (!check) {
            $('#theH3').html('Please check if your user name and password is correct!');
            popUp.show();
        }
        
        console.log('loadOldPlayer', $('#name').val());
        console.log($('#password').val());
    }
}());
