import React from "react";
import { Modal } from "react-bootstrap";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./assets/CardImageModal.css";

const CardImageModal = (props) => {
  const { cardInfo, showImageModal, setShowImageModal } = props;

  const { src, title, description } = cardInfo;

  return (
    <Modal
      id="image-modal"
      size="xl"
      show={showImageModal}
      onHide={() => setShowImageModal(false)}
      dialogClassName="image-modal-width"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>{title}</Modal.Header>

      <LazyLoadImage
        className="modal-image-large"
        src={src}
        alt={description}
        effect="blur"
      />
    </Modal>
  );
};

export default CardImageModal;
