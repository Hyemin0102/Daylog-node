const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
  name:{
    type: String,
    maxlenth: 50
  },
  password:{
    type: String,
    minlength: 5
  }
});

const User = mongoose.model('User',userSchema);
module.exports = {User};
