import React,{ useState, useEffect } from 'react';
import './FavoritePage.css';
import Axios from 'axios';
import { Popover } from 'antd';
import { IMAGE_URL } from '../../../Config';

function FavoritePage() {

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    fetchFavoredMovie();
  }, [])

  const fetchFavoredMovie = () => {
    Axios.post('/api/favorite/getFavoredMovie', { userFrom: localStorage.getItem('userId') })
      .then(response => {
        if(response.data.success) {
          setFavoriteMovies(response.data.favorites);
          console.log(response.data.favorites);
        } else {
          alert('영화 정보를 가져오는데 실패했습니다. ')
        }
      })
  }

  const onClickRemove = (movieId, userFrom) => {
    const variables = {
      movieId,
      userFrom,
    }

    Axios.post('/api/favorite/removeFromFavorite', variables)
      .then(response => {
        if(response.data.success){
          fetchFavoredMovie();
        } else {
          alert("삭제를 실패하였습니다.")
        }
      })
  }

  const renderCards = favoriteMovies.map((movie) => {
    const content = (
      <div>
        {movie.moviePost &&
          <img src={`${IMAGE_URL}w200${movie.moviePost}`} />
      }
      </div>
    )
    return <tr key={movie.movieId}>
      <Popover
        content={content}
        title={`${movie.movieTitle}`}
      >
        <td>{movie.movieTitle}</td>
      </Popover>
      <td>{movie.movieRuntime} mins</td>
      <td>
        <button onClick={() => onClickRemove(movie.movieId, movie.userFrom)}>Remove</button>
      </td>
    </tr>
  })

  return (
    <div style={{ width: '85%', margin: '3rem auto'}}>
      <h2> Favorite Movies </h2>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <th>Remove from favorites</th>
          </tr>
        </thead>
        <tbody>
          {renderCards}
        </tbody>
      </table>
    </div>
  )
}

export default FavoritePage;