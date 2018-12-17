var fs = require('fs');

const dirPath = process.argv[2];
const theFilter = process.argv[3];

fs.readdir(dirPath, 'utf8', (err, list) => {
    if(err) {
        return console.log(err);
    }
    const filteredArray = list.filter((file) => file.indexOf(`.${theFilter}`) > -1);
    filteredArray.forEach((item) => console.log(item));
});