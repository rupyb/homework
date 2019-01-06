/* eslint-disable no-console */
var express = require('express');
const request = require('request');
var router = express.Router();

/* GET home page. */
router.route('/')
    .get(function (req, res, next) {
        res.render('layout', { title: 'Express', partials: { content: 'index' } });
    })
    .post((req, res, next) => {
        console.log(req.body.stockname);
        request(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${req.body.stockname}&apikey=9V6BPPWXUILHW7BR`,
            (error, response, body) => {
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                console.log('body:', body); // Print the HTML for the Google homepage.
                const quote = JSON.parse(response.body);
                const newObject = quote['Global Quote'];
                const obj = {};
                Object.keys(newObject).forEach(key => {
                    //console.log(key);
                    const newKey = key.split(' ').slice(1).join('');
                    // const newKey = keyArray.join('');
                    obj[newKey] = newObject[key];
                    //console.log(obj[key.split(' ')[1]]);
                });
                console.log(obj);
                res.render('layout', {
                    quote: obj,
                    partials: { content: 'quote'}
                });
            });
    // res.send(req.body);
    });

module.exports = router;
// 9V6BPPWXUILHW7BR