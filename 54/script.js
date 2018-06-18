function ourForEach(theArray, callback) {
    for (let i = 0; i < theArray.length; i++) {
        callback(theArray[i]);
    }
}
//this take's an array and a value
function ourSome(theArray, name) {
    let a = false;
    ourForEach(theArray,function (element) {
        if(name === element){
            a= true;
        }
    });
    return a;
}

let people = ['jack', 'jill', 'bob', 'john'];
let jack = 'jill'; 
let check = ourSome(people,jack);
console.log(check); 

//takes array and a function 
function newSome(theArray,callback) {
    let a = false;
    ourForEach(theArray,function (element) {
        if(callback(element)){
            a = true;
        }
    });
    return a;
}

let letters = ['a','B','c'];
function upper(letter){
    if(letter === letter.toUpperCase()){ 
        return true;
    }
}

function lower(letter){
    if(letter !== letter.toUpperCase){ 
        return true;
    }
}
let checkUpper = newSome(letters,upper);
let checkLower = newSome(letters,lower);
console.log('check upper ',checkUpper);
console.log('check lower ',checkLower);

let newUpper = letters.some(upper);
console.log('check upper using array.some ',newUpper);

//check and perform action
function onlyIf(theArray,action,callback){
    ourForEach(theArray,function (element) {
        if(callback(element)){
             action(element);
        }
    });
}

function doIt(letter){
    console.log(letter,' is uppercase');
}

onlyIf(letters,doIt,upper);

//no sure if this is what he wanted for problem 3 
letters.filter(upper).forEach(doIt);
