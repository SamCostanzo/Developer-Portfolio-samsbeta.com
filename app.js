const express = require('express');
const app = express();
const path = require('path');
const { projects } = require('./data.json');



// Set the view engines, and the directory where static files are stored ++
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// Set static folder
app.use(express.static(path.join(__dirname, "public")));





// Index/home route
app.get('/', (req, res) => {
    res.render('index', { projects });
});




// About route
app.get('/about', (req, res) => {
    res.render('about');
});










// Listen on environment var or port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`This server is running on port ${PORT}!`);
});