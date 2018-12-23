const path = require('path');
const fs = require('fs');

module.exports = function searchDirectory(dirName, ext, callback) {
    return fs.readdir(dirName, 'utf-8', (err, data) => {
        if(err) return callback(err); 
        return callback(null, data.filter(file => path.extname(file) === `.${ext}`));
    });
};
