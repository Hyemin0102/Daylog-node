const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

require('dotenv').config();
const { PORT, DBURI } = process.env;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));
app.use(cors({ origin: 'http://localhost:3000'}))

app.use('/user',userRouter);
app.use('/post',postRouter);

mongoose.connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB 연결 성공');
  })
  .catch((err) => {
    console.error('MongoDB 연결 실패:', err.message);
  });

app.get('/',(req,res)=>{
  res.send({hello:'hellooo'})
});

const port = PORT || 4000;
app.listen(port,()=>{
  console.log(`Server running on ${PORT}`);
})