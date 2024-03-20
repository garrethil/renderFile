const router = require('express').Router();
const { User, Post } = require('../models');

// GET all posts
router.get('/', async (req, res) => {

  try {
    res.render('home-page', {});


  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login', { isLogInPage: true });
});

// signup route 
router.get('/signup', async (req, res) => {
  try {
    res.render('signup', { isLogInPage: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
