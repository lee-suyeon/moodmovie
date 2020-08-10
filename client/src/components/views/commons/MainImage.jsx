import React from 'react';
import { withRouter } from 'react-router-dom';
import './MainImage.css';

function MainImage({ title, originalTitle, overview, image, match }) {

  return (
    <section className='main-movie'
      style={{ background: `url(${image}) no-repeat top center / cover`}}>
      {match.path === '/recommend/:genreId' &&
        <div className='info-box'>
          <h2>🤗 가장 추천하는 영화에요! 🤗</h2>
          <em>{title} ({originalTitle})</em>
          <p>{overview}</p>
        </div>}
    </section>
  )
}

export default withRouter(MainImage);
