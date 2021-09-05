const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const newComment = await Comment.update({
      ...req.body
    },{ where: { id: req.params.id }});
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const delComment = await Comment.destroy({where: { id: req.params.id }});
    res.status(200).json(delComment);
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;