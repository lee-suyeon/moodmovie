import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function GridCard({ movie, cast, movieId, title, originalTitle, image, vote, character }) {
  return (
    <section className='grid-card' style={{ position: 'relative'}}>
      <Link to={`/movie/${movieId}`}>
        <Card
          hoverable
          cover={<img src={image} style={{ width: '100%' }} alt={title} />}
        >
          {movie &&
            <Meta title={`${title} (${originalTitle})`} description={`평점 : ${vote}`} />}
          {cast &&
            <Meta title={`${title}`} description={`${character}`} />}
        </Card>
      </Link>
    </section>
  )
}

export default GridCard;
