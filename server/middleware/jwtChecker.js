const jwt = require("jsonwebtoken");
const User = require("../models/user");

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
    
    // 만료일 1일 남았을 때 재발급
    if (decoded.exp - now < 60 * 60 * 24) {
      const user = await User.findById(decoded._id); // id로 user 정보를 찾아와서
      const freshToken = user.generateToken(); // 토큰 발급
      res.cookie('fresh_token', freshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
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