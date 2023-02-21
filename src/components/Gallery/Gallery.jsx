import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import GalleryCard from "../GalleryCard/GalleryCard";

import "./assets/Gallery.css";

const Gallery = (props) => {
  const { data } = props;

  return (
    <Container id="gallery">
      <Row xs={1} md={2} lg={3} xl={4} className="mb-5 gy-5 gx-5">
        {data.map((card, index) => (
          <Col key={index} className="columns">
            <GalleryCard cardInfo={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
