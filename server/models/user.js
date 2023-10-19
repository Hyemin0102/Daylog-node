
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt"); // 비밀번호를 암호화 시키기 위해
const jwt = require("jsonwebtoken"); // 토큰을 생성하기 위해
const saltRounds = 10; // salt를 몇 글자로 할지

const userSchema = mongoose.Schema({
  name:{
    type: String,
    maxlenth: 50
  },
  password:{
    type: String,
    minlength: 5
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

//회원가입 시 비밀번호 hash화
userSchema.pre("save",function(next){
  const user = this;
  //비밀번호 변경 시 암호화
  if(user.isModified("password")){
    bcrypt.genSalt(saltRounds,function(err,salt){
      if(err)return next(err); //err있는 경우 err 발생
      
      //hash 생성, 생성된 salt값과 비밀번호 인자로 넘겨줌
      bcrypt.hash(user.password,salt, function(err,hash){
        if(err) return next(err); //err있는 경우 err 발생

        //생성한 hash 값 비밀번호로 넘겨줌
        user.password = hash;
        next(); //save() 처리됨
      })
    })
  }else{
    next();
  }
},{});

//인스턴스 메서드로 비밀번호 설정
userSchema.methods.setPassword = async function(password){
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  this.password = hash;
};

//인스턴스 메서드로 비밀번호 비교
userSchema.methods.comparePassword = async function(password){
  const result = await bcrypt.compare(password, this.password);
  console.log('comparePassword', password,this.password );
  return result; //true or false
};

//스태틱 메서드로 데이터베이스에서 사용자 검색(findOne)
userSchema.statics.findByUsername = function(name){
  return this.findOne({name});
};



//JWT 발급
userSchema.methods.generateToken = function(){
  const token = jwt.sign(
    {_id: this.id, name: this.name},//첫번째 페이로드에 넣을 데이터
    process.env.SECRET_KEY,//개인키
    {expiresIn:'7d'}//유효기간
  );
  console.log('createToken, JWT 발급!!!')
  return token;
}

//비밀번호 확인 메소드
/* userSchema.methods.comparePassword = function(plainPassword,cb){
  const user = this;
  //plainPassword암호화해서 db에 있는 비밀번호와 비교
  bcrypt.compare(plainPassword,user.password,function(err,isMatch){
    if(err) return cb(err);
    cb(null, isMatch);
  });
}; */

//토큰 생성 메서드
/* userSchema.methods.generateToken = function(){
  const user = this;
  //jsonwebtoken
  const token = jwt.sign(user._id.toHexString(),"secretToken");
  user.token = token;
  return user.save().then(user => user.token);
}; */



const User = mongoose.model('User',userSchema);
module.exports = {User};
