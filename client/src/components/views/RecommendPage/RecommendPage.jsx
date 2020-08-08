import React, { useState, useEffect } from 'react';
import MainImage from '../commons/MainImage';
import { API_KEY, API_URL, IMAGE_URL } from '../../../Config';
import GridCard from '../commons/GridCard'
import { Row, Button } from 'antd';



function RecommendPage() {
  const [movies, setMovies] = useState([]);
  const [mainMovieImage, setMainMovieImage] = useState(null);

  // https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        console.log(response.results); // 4개만 가져오기
        setMovies([ ...response.results.slice(0, 6) ]);
        setMainMovieImage(response.results[0]);
      })
  }
  //with_genres

  useEffect(() => {
    const page = Math.floor(9 * Math.random()) + 1;
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=ko&sort_by=popularity.desc&with_genres=28&page=${page}`;
    fetchMovies(endpoint);
  }, [])

  const recommendAgain = () => {
    const page = Math.floor(9 * Math.random()) + 1;
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=ko&sort_by=popularity.desc&with_genres=28&page=${page}`;
    fetchMovies(endpoint);
  }

  return (
    <div style={{ width: "100%", margin: "0", paddingTop: "40px"}}>
        {/* main Image */}
        {mainMovieImage && 
          <MainImage 
            title={mainMovieImage.title}
            originalTitle={mainMovieImage.original_title}
            overview={mainMovieImage.overview}
            image={`${IMAGE_URL}w1280${mainMovieImage.backdrop_path}`} />
          }

      <div style={{ width: "85%", margin: "2rem auto",}}>
        <h2>추천 영화</h2>
        <hr />
        {/* Movie Grid Cards */}
        <Row gutter={[12, 12]} >
        {movies &&
          movies.map((movie) => (
            <React.Fragment key={movie.id}>
              <GridCard 
                movieId={movie.id}
                title={movie.title}
                originalTitle={movie.original_title}
                image={movie.poster_path ? `${IMAGE_URL}w400${movie.poster_path}` : null}
                vote={movie.vote_average}
              />
            </React.Fragment>
          ))
        }
    </Row>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem"}}>
        <Button type="primary" size="large" onClick={recommendAgain}>다시 추천 받기</Button>
      </div>
      </div>

    </div>
  )
}



export default RecommendPage
