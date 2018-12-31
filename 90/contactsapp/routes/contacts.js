var express = require('express');
var router = express.Router();
var contactsArray = require('../data/contacts.js');

router.get('/', function (req, res, next) {
    res.render('layout', { title: 'Express', contacts: contactsArray.contacts, yo: 'great', partials: { content: 'contacts' } });
});


module.exports = router;