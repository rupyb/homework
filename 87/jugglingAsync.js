const http = require('http');
const bl = require('bl');

const urlArray = [process.argv[2], process.argv[3], process.argv[4]];
const dataArray = [];
let index = 0;

// for (let i = 0; i < 3; i++) {
//     http.get(urlArray[i], (res) => {
//         res.pipe(bl((err, data) => {
//             // console.log(data.toString());
//             dataArray[i] = data.toString();
//             index++;

//             if (index === 3) {
//                 dataArray.forEach(d => console.log(d));
//             }
//         }));
//     });
// }
let counter = 0;
urlArray.forEach(url => {
    http.get(url, (res) => {
        res.pipe(bl((err, data) => {
            // console.log(data.toString());
            dataArray[counter] = data.toString();
            
            index++;
            
            if (index === 3) {
                dataArray.forEach(d => console.log(d));
                console.log(dataArray);
            }
        }));
    });
    counter++;
    console.log(counter);
    
}); 


