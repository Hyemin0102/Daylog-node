const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register',async(req,res)=>{
  const user = new User(req.body);

  user.save((err,userInfo)=>{
    if(err) return res.json({success:false, err});
    return res.status(200).json({
      success:true,
      userInfo
    })
  })
});