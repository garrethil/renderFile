const router = require('express').Router();
const User = require('../../models/User');

// Create a new user
router.post('/', async (req, res) => {
    try {
      const existingUser = await User.findOne({ email: req.body.email });

      if (existingUser) {
          // If user with the email already exists, return an error response
          return res.status(400).json({ message: 'Email already signed up' });
      }

        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
        });
  res.status(201).json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

  module.exports = router;