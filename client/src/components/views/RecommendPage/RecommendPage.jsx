import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import MainImage from '../commons/MainImage';
import { API_KEY, API_URL, IMAGE_URL } from '../../../Config';
import GridCard from '../commons/GridCard';
import { Row, Col, Button } from 'antd';



function RecommendPage(props) {
  const [movies, setMovies] = useState([]);
  const [mainMovieImage, setMainMovieImage] = useState(null);

  let genreId = props.match.params.genreId;

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then(response => response.json())
      .then(response => {
        const movieList = response.results
        const selected = [];
        for(var i = 0; i < 5; i++){
          selected.push(movieList.splice(Math.floor(Math.random() * movieList.length), 1)[0])
        }
        setMainMovieImage(selected[0]);
        setMovies([ ...selected.slice(1, 5) ]);
      })
  }

  const page = function() {
    const RandomPage = Math.floor(5 * Math.random()) + 1;
    return RandomPage
  }

  useEffect(() => {
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=ko&sort_by=popularity.desc&with_genres=${genreId}&page=${page}`;
    fetchMovies(endpoint);
  }, [])

  const recommendAgain = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=ko&sort_by=popularity.desc&with_genres=${genreId}&page=${page}`;
    fetchMovies(endpoint);
  }

  return (
    <div style={{ width: '100%', marginBottom: '5rem' }}>
      {/* main Image */}
      {mainMovieImage &&
        <Link to={`/movie/${mainMovieImage.id}`}>
          <MainImage 
            title={mainMovieImage.title}
            originalTitle={mainMovieImage.original_title}
            overview={mainMovieImage.overview}
            image={`${IMAGE_URL}w1280${mainMovieImage.backdrop_path}`} />
        </Link>
        }

      <div style={{ width: '85%', margin: '2rem auto',}}>
        <h2 style={{ fontSize: '2rem' }}>추천 영화</h2>
        <hr />
        {/* Movie Grid Cards */}
        <Row gutter={[12, 12]} >
          {movies &&
            movies.map((movie) => (
              <React.Fragment key={movie.id}>
                <Col lg={6} md={8} sm={12} xs={24}>
                  <GridCard
                    movie
                    movieId={movie.id}
                    title={movie.title}
                    originalTitle={movie.original_title}
                    image={movie.poster_path ? `${IMAGE_URL}w400${movie.poster_path}` : null}
                    vote={movie.vote_average}
                  />
                </Col>
              </React.Fragment>
            ))
          }
      </Row>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
        <Button type='primary' size='large' onClick={recommendAgain}>다시 추천 받기</Button>
      </div>
    </div>
  </div>
  )
}



export default withRouter(RecommendPage);
