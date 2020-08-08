import React from 'react';
import { Col, Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function GridCard({ movieId, title, originalTitle, image, vote }) {
  return (
    <Col lg={4} md={12} xs={24}>
      <div style={{ position: "relative"}}>
      <Link to={`/movie/${movieId}`}>
        <Card
            hoverable
            cover={<img src={image} style={{ width: "100%", minHeight: "320px" }} alt={title} />}
          >
          <Meta title={`${title} (${originalTitle})`} description={`평점 : ${vote}`} />
        </Card>
      </Link>
      </div>
    </Col>
  )
}

export default GridCard
