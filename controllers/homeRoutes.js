const router = require('express').Router();
const Post = require('../models/Post');



//home route 
router.get('/', async (req, res) => {
  try {
    res.render('home-page', {} )
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// GET all content
router.get('/content', async (req, res) => {

  try {

    const dbPostData = await Post.findAll();
    const postData = dbPostData.map((post) => post.get({ plain: true }))
    // console.log(postData);
    res.render('content', { postData });
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
    res.render('signup', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
