import React, { useState, useEffect } from 'react'
import { Button } from 'antd';
import { HeartOutlined } from '@ant-design/icons'
import Axios from 'axios';

function Favorite({ movieInfo, movieId, userFrom }) {

  const [favoriteNumber, setFavoriteNumber] = useState(0);
  const [favorited, setFavorited] = useState(false);

  const movieTitle = movieInfo.title;
  const moviePost = movieInfo.poster_path;
  const movieRunTime = movieInfo.runtime;

  let variables = {
    userFrom,
    movieId,
    movieTitle,
    moviePost,
    movieRunTime
  }

  useEffect(() => {
    Axios.post('/api/favorite/favoriteNumber', variables)
      .then(response => {
        if(response.data.success){
          setFavoriteNumber(response.data.favoriteNumber);
        } else {
          alert('숫자 정보를 가져오는데 실패 했습니다. ')
        }
      })

    Axios.post('/api/favorite/favorited', variables)
    .then(response => {
      if(response.data.success){
        setFavorited(response.data.favorited);
      } else {
        alert('좋아요 정보를 가져오는데 실패 했습니다. ')
      }
    })
  }, [])

  const onClickFavorite = () => {
    if(favorited){ // 이미 좋아요를 누른 상태 -> 좋아요 취소
      Axios.post('/api/favorite/removeFromFavorite', variables)
      .then(response => {
        if(response.data.success){
          setFavorited(prev => !prev);
          setFavoriteNumber(prev => prev - 1);
        } else {
          alert('좋아요 취소를 실패하였습니다.')
        }
      })
    } else { // 좋아요를 누른 상태가 아닐때 -> 좋아요 
      Axios.post('/api/favorite/addToFavorite', variables)
      .then(response => {
        if(response.data.success){
          setFavorited(prev => !prev);
          setFavoriteNumber(prev => prev + 1);
        } else {
          alert('좋아요를 실패하였습니다.')
        }
      })
    }
  }

  return (
    <div>
      <Button
        onClick={onClickFavorite}
        icon={favorited ? "❤️" : <HeartOutlined />}>
        보고싶어요 {favoriteNumber}
        </Button>
    </div>
  )
}

export default Favorite
