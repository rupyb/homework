var fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, thefile) => {
    // console.log(thefile);
    const newArray = thefile.split('\n');
    console.log(newArray.length - 1);
});
// const fileString = buf.toString();
// const newArray = fileString.split('\n');
// console.log(newArray);
