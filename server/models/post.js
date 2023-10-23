const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const PostSchema = mongoose.Schema({
  title: String,
  body: String,
  publishedDate:{
    type: Date,
    default: Date.now,//현재 날짜를 기본값으로 지정
  },
  user:{
    _id: mongoose.Types.ObjectId,
    username: String
  }
});

//스키마로 모델 생성
const Post = model('Post',PostSchema);
module.exports = {Post};