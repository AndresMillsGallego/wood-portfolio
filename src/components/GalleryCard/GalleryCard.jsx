import React from "react";
import { useState } from "react";
import { Card, Modal, ListGroup, Row, Col } from "react-bootstrap";
import SpiralStairs from "../../assets/SpiralStairs.jpg";

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
        <Card.Img className="card-images" variant="top" src={src} />
        <Card.Body>{description}</Card.Body>
      </Card>

      <Modal
        centered
        show={showModal}
        size="lg"
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <div id="modal-body">
            <Row xs={1} md={2} lg={2}>
              <Col className="columns">
                <img src={src} alt="Spiral Stairs" />
              </Col>
              <Col className="columns">
                <ListGroup variant="flush" className="modal-list">
                  <ListGroup.Item className="list-item">
                    {`Species: ${listInfo.species}`}
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item">
                    {`Finish: ${listInfo.finish}`}
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item">
                    {`Location: ${listInfo.location}`}
                  </ListGroup.Item>
                  <ListGroup.Item className="list-item">
                    {`Additional Info: ${listInfo.additional}`}
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
