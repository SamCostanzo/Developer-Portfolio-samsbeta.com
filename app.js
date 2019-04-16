const express = require('express');
const app = express();
const path = require('path');


// Set the view engines, and the directory where static files are stored 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// Set static folder
app.use('/static', express.static('public'));
// app.use('/static', express.static('img'));


// Require the routes file
const routes = require('./routes');
app.use(routes);


// Errors
app.use((req, res, next) => {
    console.log('This page was not found');
    const err = new Error('Sorry! This page was not found');
    err.status = 404;
    next(err);
});




// HERE

// app.use((err, req, res, next) => {
//     res.locals.error = err;
//     res.status(err.status);
//     res.render('error');
// });


// Error testing
// routes.use((req, res, next) => {
//     console.log('This page was not found');
//     const err = new Error('Sorry! This page was not found');
//     err.status = 404;
//     next(err);
// });

// Listen on environment var or port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`This server is running on port ${PORT}!`);
});