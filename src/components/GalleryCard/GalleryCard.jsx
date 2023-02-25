import React from "react";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import GalleryCardModal from "../Modals/GalleryCardModal/GalleryCardModal";
import CardImageModal from "../Modals/CardImageModal/CardImageModal";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./assets/GalleryCard.css";

const GalleryCard = (props) => {
  const { cardInfo } = props;

  const { src, description } = cardInfo;

  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleImageClick = () => {
    setShowImageModal(!showImageModal);
  };

  return (
    <>
      <Card className="cards" border="dark">
        <Card.Img
          as={LazyLoadImage}
          className="card-images"
          title="Click to see larger image"
          variant="top"
          src={src}
          effect="blur"
          onClick={handleImageClick}
        />
        <Card.Body>{description}</Card.Body>
        <Button
          className="mb-2"
          variant="link"
          onClick={handleClick}
          title="More About This Project"
        >
          <p className="card-link">See More</p>
        </Button>
      </Card>

      <GalleryCardModal
        cardInfo={cardInfo}
        showModal={showModal}
        setShowModal={setShowModal}
      />

      <CardImageModal
        cardInfo={cardInfo}
        description={description}
        showImageModal={showImageModal}
        setShowImageModal={setShowImageModal}
      />
    </>
  );
};

export default GalleryCard;
