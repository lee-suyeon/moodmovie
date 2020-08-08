import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function GridCard({ movie, cast, movieId, title, originalTitle, image, vote, character }) {
  return (
    <Col lg={6} md={8} sm={12} xs={24}>
      <div style={{ position: "relative"}}>
      <Link to={`/movie/${movieId}`}>
        <Card
            hoverable
            cover={<img src={image} style={{ width: "100%", minHeight: "320px" }} alt={title} />}
          >
          {movie &&
            <Meta title={`${title} (${originalTitle})`} description={`평점 : ${vote}`} />
          }
          {cast &&
            <Meta title={`${title}`} description={`${character}`} />
          }
        </Card>
      </Link>
      </div>
    </Col>
  )
}

export default GridCard
