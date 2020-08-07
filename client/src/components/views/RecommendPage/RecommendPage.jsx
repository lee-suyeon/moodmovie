import React, { useState, useEffect } from 'react';
import MainImage from './Section/MainImage';
import { API_KEY, API_URL, IMAGE_URL } from '../../../Config';

function RecommendPage() {
  const [movies, setMovies] = useState([]);
  const [mainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=ko&sort_by=popularity.desc&with_genres=28&page=1`;
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        console.log(response.results.slice(0, 4)); // 4개만 가져오기
        setMovies([ ...response.results ]);
        setMainMovieImage(response.results[1]);
      })
  }, [])

  return (
    <div style={{ width: "100%", margin: "0"}}>
      {/* main Image */}
      {mainMovieImage && 
        <MainImage 
          title={mainMovieImage.title}
          originalTitle={mainMovieImage.original_title}
          overview={mainMovieImage.overview}
          image={`${IMAGE_URL}w1280${mainMovieImage.backdrop_path}`} />
        
        }

      <div style={{ width: "85%", margin: "1rem auto"}}>
        <h2>추천 영화</h2>
        <hr />
        {/* Movie Grid Cards */}
      </div>
    </div>
  )
}



export default RecommendPage
