const router = require('express').Router();
const { User } = require('../../models');

// Create a new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create({
            name: req.body.username,
            email: req.body.password,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

  module.exports = router;