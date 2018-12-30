const connect = require('connect');
const admin = require('./adminAccess');

const app = connect();

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    next();
});

app.use('/home', (req, res, next) => {
    res.end('The Home Page');
});

app.use('/about', (req, res, next) => {
    res.end('The About Page');
});

app.use(admin);

app.use('/admin', (req, res, next) => {
    res.end('The Admin Page');
});

app.use((err, req, res, next) => {
    res.end(`<h3> ${err.message}  Unauthorized access attemp the appropriate authorities have been notified</h3>`);
});

app.listen(80);