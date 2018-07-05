// var myApp = myApp || {};
// myApp.utils = (function (theArray, callback) {
//     let newArray = [];
//     theArray.forEach().;
// }());
var myApp = myApp || {};
myApp.utils = (function () {
    return {
        maps(theArray, action) {
            const newArray = [];
            for (let index = 0; index < theArray.length; index++) {
                newArray[index] = action(theArray[index]);
            }
            return newArray;
        },

        double(num) {
            return num * 2;
        },

    };
}());
const nums = [2, 4, 6];
const newArray = myApp.utils.maps(nums, myApp.utils.double);
console.log(newArray);
