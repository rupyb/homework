const theArray = process.argv;

theArray.splice(0, 2);

// let index = 0;
// theArray.forEach((item) =>{
//     index += (+item);
// });
const sum = theArray.reduce((accumulator, currentValue) => (+accumulator) + (+currentValue));
console.log(sum);