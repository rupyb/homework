const fileReader = require('./fileReader');



const fileArray = fileReader(process.argv[2], process.argv[3], printIt);
function printIt(err, filteredArray) {
    filteredArray.forEach(file => console.log(file));
}
