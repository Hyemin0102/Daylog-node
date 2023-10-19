const { User } = require('../models/user');
const Joi = require('joi');
const bcrypt = require("bcrypt"); 

var router = require('express').Router();

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
  const { name, password } = req.body;
  try{
    const exists = await User.findByUsername(name);
    if (exists) {
      res.status(409).send('중복된 아이디가 있습니다.');
      return;
    }
    const user = new User({
      name,
      password
    });
    console.log('user',user);
    const hashPassword = await bcrypt.hash(user.password, 10);
    user.password = hashPassword;
    console.log('hash---user',user);

    // access_token 이름으로 쿠키에 accessToken 담고, httpOnly 활성화해 자바스크립트 쿠키 조회 방지
    const accessToken = user.generateToken();

    res.cookie('access_token', accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    });
    res.json(user);
    console.log('회원가입 성공', user);

  }catch(err){
res.json({success: false, err})
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
    console.log('password',password);
    console.log('user.password',user.password);
    if(!valid){
      res.status(400).send('incorrect password');
        return;
    }

    res.status(200).json({
      loginSuccess: true,
      user
    })

  }catch(err){
    res.json({success: false, err})
  }
});

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