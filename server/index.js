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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

//cors설정
app.use(cors());
//app.use(express.static(path.join(__dirname,'../client/build')));

mongoose.connect(DBURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {console.log('MongoDB 연결 성공')})
  .catch((err) => {console.log('MongoDB 연결 실패:', err.message)});

  app.get('/', (req, res) =>{
    res.send({hello: 'hello'})
  });

const port = PORT || 4000;
app.listen(port,()=>{
  console.log(`Server running on ${PORT}`);
});

app.use('/user', require('./routes/user.js'));


/* app.get('/', (req, res) => {
  res.send(path.join(__dirname, `../client/build/index.html`));
}); */