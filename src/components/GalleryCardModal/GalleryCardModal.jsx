import React from "react";
import { Modal, ListGroup, Row, Col } from "react-bootstrap";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./assets/GalleryCardModal.css";

const GalleryCardModal = (props) => {
  const { cardInfo, showModal, setShowModal } = props;

  const { title, src, listInfo } = cardInfo;

  return (
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
              <LazyLoadImage
                className="modal-image"
                src={src}
                alt={title}
                effect="blur"
              />
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
  );
};

export default GalleryCardModal;
