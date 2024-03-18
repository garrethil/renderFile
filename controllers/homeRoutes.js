const router = require('express').Router();
const { User, Post } = require('../models');

// GET all posts
router.get('/', async (req, res) => {

});

// GET one post
router.get('/gallery/:id', async (req, res) => {
 

});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
