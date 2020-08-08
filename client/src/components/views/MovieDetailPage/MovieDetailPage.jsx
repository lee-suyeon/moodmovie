import React,{ useState, useEffect } from 'react';
import { API_KEY, API_URL, IMAGE_URL } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import MainImage from '../commons/MainImage'
import GridCard from '../commons/GridCard'

function MovieDetailPage(props) {
  const [movie, setMovie] = useState([])
  const [cast, setCast] = useState([])


  let movieId = props.match.params.movieId;


  
  useEffect(() => {

    let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko`
    let endpointCast = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=ko`

    fetch(endpointInfo)
      .then(response => response.json())
      .then(response => {
        console.log('info',response)
        setMovie(response);
      })

    fetch(endpointCast)
      .then(response => response.json())
      .then(response => {
        console.log('cast',response.cast.slice(0,6))
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
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>{movie.title} ({movie.original_title})</h2>
        <p>{movie.tagline}</p>
        <p>{movie.overview}</p>
        <span>러닝타임 : {movie.runtime} mins</span>
        
        <div className="cast" style={{ marginTop: '2rem'}}>
          <h3 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Cast</h3>
          <hr />
          <Row gutter={[12, 12]} >
            {cast &&
              cast.map((cast) => (
                <React.Fragment key={cast.id}>
                  <GridCard
                    cast
                    title={cast.name}
                    character={cast.character}
                    image={cast.profile_path ? `${IMAGE_URL}w400${cast.profile_path}` : null}
                  />
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
