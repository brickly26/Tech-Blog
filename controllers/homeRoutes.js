const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: { model: User }
    })

    const posts = postData.map((post) => post.get({ plain:true }));

    res.json(posts);
    // res.render('homepage', {
    //   posts,
    //   logged_in: req.session.logged_in
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll();
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;