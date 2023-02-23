import React from "react";
import { useState } from "react";
import { Card, Modal, ListGroup, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./assets/GalleryCard.css";

const GalleryCard = (props) => {
  const { cardInfo } = props;

  const { title, src, description, listInfo } = cardInfo;

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <Card className="cards" onClick={() => handleClick()} border="info">
        <Card.Header>{title}</Card.Header>
        <Card.Img
          as={LazyLoadImage}
          className="card-images"
          variant="top"
          src={src}
          effect="blur"
          loading="lazy"
        />
        <Card.Body>{description}</Card.Body>
      </Card>

      <Modal
        centered
        show={showModal}
        size="lg"
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div id="modal-body">
            <Row xs={1} md={2} lg={2}>
              <Col className="columns">
                <img src={src} alt={title} />
              </Col>
              <Col className="columns">
                <ListGroup variant="flush" className="modal-list">
                  <ListGroup.Item className="list-item">
                    <h4>Species: </h4>
                    <p>{listInfo.species}</p>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item">
                    <h4>Finish: </h4>
                    <p>{listInfo.finish}</p>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item">
                    <h4>Location: </h4>
                    <p>{listInfo.location}</p>
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item">
                    <h4>Additional Info: </h4>
                    <p>{listInfo.additional}</p>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GalleryCard;
