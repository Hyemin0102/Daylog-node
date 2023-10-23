const Joi = require('joi');
const { Post } = require('../models/post');

var router = require('express').Router();

//포스트 작성
router.post('/write', async(req, res)=>{
  const Schema = Joi.object().keys({
    title: Joi.string().required(),
    body: Joi.string().required()
  });

  try{
    const {title, body} = await Schema.validateAsync(req.body);
    const post = await Post.create({title,body});
    console.log("포스트작성에 user추가",post )
    res.json(post);
  }catch(err){
    res.json({success: false, error: err.message})
  }
});

//포스트 조회
router.get('/list', async(req, res)=>{

  try{
    const posts = await Post.find()
    res.json({ success: true, posts: posts }); 
  }catch(err){
    res.json({success: false, error: err.message})
  }
});

//포스트 수정
router.patch('/:id', async(req, res)=>{
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
  });
  const { id } = req.params;
  try{
    const validateData = await schema.validateAsync(req.body);
    const updatedPost = await Post.findByIdAndUpdate(id, validateData, {
      new: true
    }).exec();
    if(!updatedPost){
      res.status(404).send();
      return;
    }
    res.json(updatedPost);
  } catch(err){
    res.json({success: false, error: err.message})
  }

});

//포스트 삭제
router.delete('/:id', async(req, res)=>{
  const { id } = req.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    res.status(204).send();
  } catch (err) {
    res.json({success: false, error: err.message})
  }
});

module.exports = router;