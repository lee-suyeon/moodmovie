const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; 
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 8,
  },
  role: {
    type: Number,
    defalut: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

// user model에 user 정보를 save 하기 전에 비밀번호 암호화
userSchema.pre('save', function( next ){
  var user = this;

  if(user.isModified('password')){ // 비밀번호를 바꿀 때
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if(err) return next(err); 

      bcrypt.hash(user.password, salt, function(err, hash) {
        if(err) return next(err);
        user.password = hash; // user의 password를 암호화된 비밀번호로 바꿔준다.
        next();
      });
    });
  } else {
    next(); 
  }
})


// comparePassword : 비밀번호 비교
userSchema.methods.comparePassword = function(plainPassword, cd){
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
}

// token 생성
userSchema.methods.generateToken = function (cb) {
  var user = this;
  let token = jwt.sign(user._id.toHexString(), 'secretToken')
  user.toke = token;
  user.save(function(err, user){
    if(err) return cb(err)
    cb(null, user)
  });
}

// 복호화된 토큰으로 유저 찾기
userSchema.methods.findByToken = function (token, cb) {
  var user = this;
  
  // 1. 토큰을 복호화 한다. 
  jwt.verify(token, 'secretToken', function(err, decoded){
    // 유저를 찾은 후 client의 token과 DB에 보관된 token을 비교
    user.findOne({ '_id' : decoded, 'token' : token}, function(err, user){
      if(err) return cb(err)
      cb(null, user)
    });
  });
}

const User = mongoose.model('User', userSchema);
module.exports = { User };