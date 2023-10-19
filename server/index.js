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

//cors설정
app.use(cors());

//서버에서 가져온 데이터를 파싱해서 가져와줌
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname,'../client/build')));

mongoose.connect(DBURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {console.log('MongoDB 연결 성공')})
  .catch((err) => {console.log('MongoDB 연결 실패:', err.message)});


const port = PORT || 4000;
app.listen(port,()=>{
  console.log(`Server running on ${PORT}`);
});

/* app.get('/', (req, res) =>{
  res.send({hello: 'hello'})
}); */

app.use('/user', require('./routes/user.js'));

//mongoose 6버전 이상은 콜백 사용 불가. async/await 사용
app.post('/register',async(req,res)=>{
  const user = new User(req.body);
  const result = await user.save()
  .then(()=>{
    res.status(200).json({
      success: true
    })
  })
  .catch((err)=>{
    res.json({success: false, err})
  })
});

app.get('/', (req, res) => {
  res.send(path.join(__dirname, `../client/build/index.html`));
});