const router = require('express').Router();
const Post = require('../models/Post');
const Event = require('../models/Event');



//home route 
router.get('/', async (req, res) => {
  try {
    const dbEventData = await Event.findAll();
    const eventData = dbEventData.map((event) => event.get({ plain: true }));

    res.render('home-page', { eventData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// GET all content
router.get('/content', async (req, res) => {

  try {

    const dbPostData = await Post.findAll();
    const postData = dbPostData.map((post) => post.get({ plain: true }));
    // console.log(postData);
    res.render('content', { postData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//content detail page by id
router.get('/content/:id', async (req, res) => {

  try {
    const dbContentData = await Post.findByPk(req.params.id);
    const postData = dbContentData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    console.log(postData);
    res.render('content-details', { postData });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
