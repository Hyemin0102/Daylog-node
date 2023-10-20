const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const cookieParser = require('cookie-parser');
const path = require("path");
const { User } = require('./models/user');


require('dotenv').config();
const { PORT, DBURI } = process.env;

//서버에서 가져온 데이터를 파싱해서 가져와줌
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());
app.use(express.static(path.join(__dirname,'../client/build')));

//db 연결
let db = mongoose.connection;
db.on('error',console.error);
db.once('open',()=>{
  console.log('Mongodb 연결 성공');
})

//mongoose 연결
mongoose.connect(DBURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  app.get('/api', (req, res) =>{
    res.send('전송 성공!!!')
  });

const port = PORT || 4000;
app.listen(port,()=>{
  console.log(`Server running on ${PORT}`);
});

//router 사용
app.use('/api/user', require('./routes/user.js'));
//app.use('/api/post',require('./routes/post.js'));

//res.send로 보내면 경로만 찍히므로, sendFile로 보내주어야 local3000과 동일한 화면 보임
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});