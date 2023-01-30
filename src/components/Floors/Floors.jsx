import React from "react";

import { Carousel } from "react-bootstrap";
import SpiralStairs from "../../assets/SpiralStairs.jpg";
import Genesee from "../../assets/Genesee.png";
import HerringBone from "../../assets/HerringBone.jpg";
import WalnutShelf from "../../assets/WalnutShelf.jpg";

import "./assets/Floors.css";
const Floors = () => {
  return (
    <div className="routes">
      <h1>Floors</h1>
      <Carousel fade controls id="carousel">
        <Carousel.Item className="carousel-item">
          <img
            className="carousel-img"
            src={SpiralStairs}
            alt="Spiral Stairs"
          />
          <Carousel.Caption>This is a caption</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="carousel-img" src={Genesee} alt="Genesee" />
          <Carousel.Caption>This is a caption</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="carousel-img" src={HerringBone} alt="Herring Bone" />
          <Carousel.Caption>This is a caption</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img className="carousel-img" src={WalnutShelf} alt="Walnut Shelf" />
          <Carousel.Caption>This is a caption</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Floors;
