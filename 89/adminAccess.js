const url = require('url');

module.exports = (req, res, next) => {
    const parsedUrl = url.parse(req.url, true);

    const password = parsedUrl.query.magicWord ? parsedUrl.query.magicWord : '';
    console.log(password);
    if(password === 'please') {
        next();
    } else {
        next( new Error('Warning'));
    }
    // next();
};