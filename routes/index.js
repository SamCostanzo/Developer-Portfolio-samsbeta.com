const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');


// Index/home route
router.get('/', (req, res) => {
    res.render('index', { projects });
});


// About route
router.get('/about', (req, res) => {
    res.render('about');
});


// Dynamic projects route to render each project
router.get('/project/:id', (req, res) => {
    res.render('project', {
        title: projects[req.params.id].project_name,
        description: projects[req.params.id].description,
        technologies: projects[req.params.id].technologies,
        livelink: projects[req.params.id].live_link,
        githublink: projects[req.params.id].github_link,
        imageURLS: projects[req.params.id].image_urls
    });


});


module.exports = router;