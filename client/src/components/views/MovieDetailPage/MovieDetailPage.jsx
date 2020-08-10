import React,{ useState, useEffect } from 'react';
import { API_KEY, API_URL, IMAGE_URL } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import MainImage from '../commons/MainImage'
import GridCard from '../commons/GridCard'
import Favorite from './Sections/Favorite';

function MovieDetailPage(props) {
  const [movie, setMovie] = useState([])
  const [cast, setCast] = useState([])

  let movieId = props.match.params.movieId;

  useEffect(() => {
    window.scrollTo({top: 0 });

    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko`
    let endpointCast = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`

    fetch(endpointInfo)
      .then(response => response.json())
      .then(response => {
        setMovie(response);
      })

    fetch(endpointCast)
      .then(response => response.json())
      .then(response => {
        setCast(response.cast.slice(0,6));
      })
  }, [])

  return (
    <div >
      {/* header */}
      <MainImage
        title={movie.title}
        originalTitle={movie.original_title}
        overview={movie.overview}
        image={`${IMAGE_URL}w1280${movie.backdrop_path}`}
      />

      {/* body */}
      <div style={{ width: '85%', margin: '1rem auto' }}>
        
        {/* favorite button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Favorite 
            movieInfo={movie} 
            movieId={movieId}
            userFrom={localStorage.getItem('userId')}
          />
        </div>


        <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>{movie.title} ({movie.original_title})</h2>
        <hr />
        <div className='movie-info' style={{ fontSize: '1.1rem', marginTop: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{movie.tagline}</h3>
          <p>{movie.overview}</p>
          <p><strong>러닝타임 : </strong>{movie.runtime} mins</p>
          <p><strong>평점 : </strong>{movie.vote_average}</p>
        </div>
        
        <div className='cast' style={{ marginTop: '3rem'}}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Cast</h3>
          <hr />
          <Row gutter={[12, 12]} >
            {cast &&
              cast.map((cast) => (
                <React.Fragment key={cast.id}>
                  <Col lg={4} md={8} sm={12} xs={24}>
                    <GridCard
                      cast
                      title={cast.name}
                      character={cast.character}
                      image={cast.profile_path ? `${IMAGE_URL}w400${cast.profile_path}` : null}
                    />
                  </Col>
                </React.Fragment>
              ))
            }
          </Row>
        </div>
      </div>
    </div>
  )
}

export default withRouter(MovieDetailPage);
