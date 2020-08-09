const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");

// 좋아요 숫자
router.post('/favoriteNumber', (req, res) => {  
  // mongoDB에서 favorite 숫자를 가져오기
  // client에서 보내온 movieId와 같은 movieId를 DB에서 찾는다.  
  Favorite.find({ 'movieId': req.body.movieId })
    .exec(( err, info) => {
      if(err) return res.status(400).send(err)
      res.status(200).json({ success: true, favoriteNumber: info.length })
    })
  // client로 favorite 숫자 보내기 
});


// 좋아요 상태
router.post('/favorited', (req, res) => {  
  // 사용자가 이 영화를 favorite 리스트에 넣었는지 정보를 DB에서 가져오기
  Favorite.find({ 'movieId': req.body.movieId, "userFrom": req.body.userFrom })
    .exec(( err, info) => {
      if(err) return res.status(400).send(err)

      let result = false;
      if(info.length !== 0){
        result = true;
      }
      res.status(200).json({ success: true, favorited: result })
    })
})


// 좋아요 취소
router.post('/removeFromFavorite', (req, res) => {  
  Favorite.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
    .exec(( err, doc ) => {
      if(err) return res.status(400).send(err)
      res.status(200).json({ success: true, doc })
    })
})


// 좋아요 추가
router.post('/addToFavorite', (req, res) => {  
  const favorite = new Favorite(req.body);
  
  favorite.save(( err, doc ) => {
    if(err) return res.status(400).send(err)
    return res.status(200).json({ success: true });
  });
})

module.exports = router;