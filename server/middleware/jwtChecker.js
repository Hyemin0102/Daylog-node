const jwt = require("jsonwebtoken");
const User = require("../models/user");

//jwt 검증하는데 만료기간 확인하고 refresh토큰 발급해서 다시 쿠키 저장
const jwtChecker = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next();
  try {
    // verify
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = {
      _id: decoded._id,
      name: decoded.name
    };
    const now = Math.floor(Date.now() / 1000);
    
    // 만료 10분 남았을 때 재발급
    if (decoded.exp - now < 600) {
      const user = await User.findById(decoded._id); // id로 user 정보를 찾아와서
      const freshToken = user.generateToken('7d'); // 해당 user한테 7일의 refresh토큰을 다시 만들어줌
      res.cookie('fresh_token', freshToken, { //새로 발급한 refresh토큰 2시간동안 쿠키 저장
        maxAge: 1000 * 60 * 60 * 2,
        httpOnly: true
      });
    return next();
    }

    console.log('올바른 토큰', decoded);
    return next();
  } catch (error) {
    console.log('error', error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = jwtChecker;