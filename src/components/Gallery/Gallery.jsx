import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import GalleryCard from "../GalleryCard/GalleryCard";

import "./assets/Gallery.css";

const Gallery = (props) => {
  const { data } = props;

  return (
    <Container id="gallery">
      {data.map((item) => (
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="mb-4 gy-4">
          {data.map((card) => (
            <Col>
              <GalleryCard />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default Gallery;
