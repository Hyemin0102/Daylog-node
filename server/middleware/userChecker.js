//req.user가 존재하는지 확인
const userChecker = (req, res, next) => {
  const { user } = req;
  if (!user) {
    res.status(401).send(); // Unauthorized
    return;
  }
  console.log(userChecker,'로그인 되어있음')
  return next();
};

export default userChecker;