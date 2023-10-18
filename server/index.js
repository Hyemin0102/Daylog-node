const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const cookieParser = require('cookie-parser');
const path = require("path")

require('dotenv').config();
const { PORT, DBURI } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'../client/build')));

app.use('/api',require('./routes/user.js'));

mongoose.connect(DBURI)
  .then(() => {console.log('MongoDB 연결 성공')})
  .catch((err) => {console.log('MongoDB 연결 실패:', err.message)});

  //'/user'로 시작하는 것은 user.js, '/post'는 post.js 사용
//app.use('/user', require('./routes/user.js'));
// app.use('/post',require('./routes/post.js'));


const port = PORT || 4000;
app.listen(port,()=>{
  console.log(`Server running on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send(path.join(__dirname, `../client/build/index.html`));
})