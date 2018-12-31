var express = require('express');
var router = express.Router();
var contactsArray = require('../data/contacts.js');
const jsoncontactsArray = JSON.stringify(contactsArray);

router.get('/', function(req, res, next) {
  res.send(jsoncontactsArray);
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    contactsArray.contacts.push(req.body);
    res.send(JSON.stringify(contactsArray));

});

module.exports = router;