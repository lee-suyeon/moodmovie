const express = require('express');
const router = express.Router();
const { User } = require("../models/user");
const { auth } = require('../middleware/auth');


// 회원가입
router.post('/register', (req, res) => {
  // client에서 보내온 회원가입 정보를 저장한다. 
  const user = new User(req.body);

  // client로 받은 정보를 DB에 저장한다.
  user.save(( err, userInfo ) => {
    if(err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  })
})


// 로그인
router.post('/login', (req, res) => {
  // 1. DB에서 요청된 email을 찾는다
  User.findOne({ email: req.body.email }, (err, user) => {
    if(!user){
      console.log(user);
      return res.json({
        loginSuccess: false,
        message: '해당하는 email이 없습니다.'
      });
    }

    // 2. email이 데이터 베이스에 있다면 비밀번호 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch){ // 틀린 비밀번호
        return res.json({
          loginSuccess: false,
          message: '비밀번호가 틀렸습니다.'
        });
      }
      // 3. email과 비밀번호가 같다면 token을 생성
      user.generateToken((err, user) => {
        if(err) return res.status(400).send(err);
        // 4. token을 저장한다. 
        res.cookie('x_auth', user.token).status(200)
          .json({ loginSuccess: true, userId: user._id });
      })
    })
  })
})


// 인증
router.get('/auth', auth, (req, res) => {

})

module.exports = router;