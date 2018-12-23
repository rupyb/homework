const http = require('http');
const bl = require('bl');

const url = process.argv[2];
http.get(url, (res) => {
    res.setEncoding('utf-8');
    res.pipe(bl((err, data) => {
        console.log(data.toString().length);
        console.log(data.toString());
    }));
    //res.on('data', (data) => console.log(data));
});