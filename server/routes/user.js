const { User } = require('../models/user');
const Joi = require('joi');
const bcrypt = require("bcrypt"); 
const { default: mongoose } = require('mongoose');

var router = require('express').Router();
const saltRounds = 10; // 해시화할 때 사용할 salt의 길이

//회원가입 응답처리
router.post('/register',async(req,res)=>{
    const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required()
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).json(result.error);
    return;
  }
  //유효성 검사 성공 시
  try{
    const existUser = await User.findOne({name: req.body.name});
    if(existUser){
      console.log('이미 존재하는 아이디입니다.');
      res.send({success: false, message:'이미 존재하는 아이디입니다.'})
      return;
    }

    //비밀번호 해시화
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = new User({
      name: req.body.name,
      password: hashedPassword
    });

    await user.save();
    
    //jwt 발급
    const accessToken = user.generateToken();

    res.cookie('access_token',accessToken,{
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    });
    console.log('회원가입할때 jwt',accessToken)
    return res.status(201).send({
      success:true,
      user
    });
  }catch(err){
    console.error('회원가입 에러:', err);
    return res.status(500).send({ success: false, message: '서버 오류입니다. 다시 시도해주세요.' });
  }
});

//로그인 응답처리
router.post('/login',async(req,res)=>{
  const { name, password } = req.body;
  if (!name || !password) {
    res.status(401).send('이름과 비밀번호는 필수값입니다.');
    return;
  }
  try{
    const user = await User.findByUsername(name);
    if (!user) {
      res.status(401).send('유효한 아이디가 아닙니다.');
      console.log('findByUsername 같은 아이디 없음', user);
      return;
    }

    //동일한 이름 있는 경우 비밀번호 비교
    const valid = await bcrypt.compare(password, user.password);
    if(!valid){
      res.status(400).send('잘못된 비밀번호입니다.');
        return;
    }

    //jwt 발급
    const accessToken = user.generateToken();

    res.cookie('access_token',accessToken,{
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    });
    console.log('로그인할때 jwt',accessToken)
    res.status(200).json({
      loginSuccess: true,
      user
    })

  }catch(err){
    res.json({success: false, err})
  }
});

//로그아웃
router.post('/logout', (req,res)=>{
  res.clearCookie('access_token');
  res.status(204).send();
  console.log('로그아웃 되었습니다.')
});

//로그인 상태 확인
router.get('/check',(req,res)=>{
  const {access_token} = req.cookies;
  console.log('check-user',access_token)
  if(!access_token){
    res.status(401).send('로그인 상태가 아닙니다.');
    return;
  }
  res.json({loginstatus: true})
})

module.exports = router;


/* User.findOne({name: req.body.name})
    .then(user=>{
      if(!user){
        return res.json({
          loginSuccess: false,
          message: "이름에 속하는 유저가 없습니다."
        });
      }
      //이름이 있는 경우 비밀번호 확인
      user.comparePassword(req.body.password)
        .then(isMatch => {
          if(!isMatch){
            return res.json({
              loginSuccess: false,
              message: "비밀번호가 잘못되었습니다."
            });
          }
          //비밀번호 맞으면 토큰 생성
          return user.generateToken();
        })
        .then(user =>{
          //토큰을 쿠키에 저장
          res.cookie("origin_token",user.token).status(200).json({
            loginSuccess: true,
            userid: user._id
          });
        })
        //비밀번호 확인할때 오류
        .catch(err=>{
          return res.status(400).send(err);
        });
    })
    //findOne에서 err 처리
    .catch(err=>{
      return res.status(400).send(err);
    })
 */