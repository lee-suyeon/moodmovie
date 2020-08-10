const { User } = require('../models/user');

let auth = (req, res, next) => {
  // 1. client 쿠키에서 token을 가져온다.
  let token = req.cookies.x_auth;

  // 2. token을 복호화 한 후 user를 찾는다. 
  User.findByToken(token, (err, user) => {
    if(err) throw err;
    if(!user) return res.json({ isAuth: false, error: true })
    
    req.token = token;
    req.user = user;
    next();
  })
}

module.exports = { auth };