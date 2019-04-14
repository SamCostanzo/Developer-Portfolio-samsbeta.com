const express = require('express');
const app = express();
const path = require('path');
const { projects } = require('./data.json');



// Set the view engines, and the directory where static files are stored 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// Set static folder
app.use('/static', express.static('public'));
// app.use('/static', express.static('img'));



// Index/home route
app.get('/', (req, res) => {
    res.render('index', { projects });
});


// Test Route
app.get('/test', (req, res) => {
    res.send('Hello');
});



// About route
app.get('/about', (req, res) => {
    res.render('about');
});


// Dynamic projects route to render each project
app.get('/project/:id', (req, res) => {
    res.render('project', {
        title: projects[req.params.id].project_name,
        description: projects[req.params.id].description,
        technologies: projects[req.params.id].technologies,
        livelink: projects[req.params.id].live_link,
        githublink: projects[req.params.id].github_link,
        imageURLS: projects[req.params.id].image_urls
    });
});


// Listen on environment var or port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`This server is running on port ${PORT}!`);
});