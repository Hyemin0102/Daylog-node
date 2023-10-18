const { genSalt}  = require("bcrypt");
const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  hashedPassword: String
});

//인스턴스 메서드로 비밀번호 설정
UserSchema.methods.setPassword = async function(password){
  const salt = await genSalt(10);

}