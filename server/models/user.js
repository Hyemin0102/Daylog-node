
const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt"); // 비밀번호를 암호화 시키기 위해
const jwt = require("jsonwebtoken"); // 토큰을 생성하기 위해
const saltRounds = 10; // salt를 몇 글자로 할지

const userSchema = mongoose.Schema({
  name:{
    type: String,
    maxlength: 50
  },
  password:{
    type: String,
    minlength: 5
  },
  access_token: {
    type: String,
  },
  fresh_token: {
    type: String,
  },
});

//로그인 시 비밀번호 암호화 -> db에 저장된 비밀번호와 비교
userSchema.methods.comparePassword = async function(plainPassword){
  try{
    const isMatch = await bcrypt.compare(plainPassword, this.password);
    return isMatch;
  }catch(err){
    throw err;
  }
}; 


//스태틱 메서드로 데이터베이스에서 사용자 검색(findOne)
userSchema.statics.findByUsername = async function(name){
  const user = await this.findOne({name});
  console.log('findByUsername',user);
  return user
}; 


//JWT 발급
/* userSchema.methods.generateToken = function(){
  const token = jwt.sign(
    {_id: this.id, name: this.name},//첫번째 페이로드에 넣을 데이터
    process.env.SECRET_KEY,//개인키
    {expiresIn:'7d'}//유효기간
  );
  return token;
} */


const User = mongoose.model('User',userSchema);
module.exports = {User};
