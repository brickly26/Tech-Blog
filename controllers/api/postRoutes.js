const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log("1")
    const newPost = await Post.update({
      ...req.body
    },{ where: { id: req.params.id }});
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;