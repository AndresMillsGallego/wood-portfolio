import React from "react";
import { useState } from "react";
import { Card, Modal, ListGroup } from "react-bootstrap";
import SpiralStairs from "../../assets/SpiralStairs.jpg";

import "./assets/GalleryCard.css";

const GalleryCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <Card className="cards" onClick={() => handleClick()} border="info">
        <Card.Header>Header</Card.Header>
        <Card.Img variant="top" src={SpiralStairs} />
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          reprehenderit eius aliquid labore temporibus sint magnam, assumenda
          provident maiores, accusantium mollitia totam dolor recusandae dolorem
          perspiciatis architecto commodi animi nostrum.
        </Card.Body>
      </Card>

      <Modal
        centered
        show={showModal}
        size="lg"
        onHide={() => setShowModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Header</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <img src={SpiralStairs} alt="Spiral Stairs" />
          <ListGroup variant="flush" className="modal-list">
            <ListGroup.Item className="list-item">
              Lorem Ipsum: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi harum soluta doloremque, quos quidem voluptate natus.
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              Lorem Ipsum: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Alias numquam laborum sint cupiditate.
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              Lorem Ipsum: Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Rem reiciendis quam enim mollitia.
            </ListGroup.Item>
            <ListGroup.Item className="list-item">
              Lorem Ipsum: Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Assumenda saepe ullam, ad itaque eligendi tempora.
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GalleryCard;
