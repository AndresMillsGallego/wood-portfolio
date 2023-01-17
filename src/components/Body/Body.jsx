import React from "react";

import SpiralStairs from "../../assets/SpiralStairs.jpg";
import WalnutShelf from "../../assets/WalnutShelf.jpg";
import HerringBone from "../../assets/HerringBone.jpg";

import TextBody from "../TextBody/TextBody";
import Divider from "../Divider/Divider";
import "./assets/Body.css";

const Body = () => {
  return (
    <div id="main-body">
      <div className="splash-images">
        <div className="image-description">
          <TextBody className="image-description" />
        </div>
        <img
          className="main-page-images"
          src={SpiralStairs}
          alt="Spiral Stairs Main Image"
        />
      </div>
      <Divider />
      <div className="splash-images">
        <img
          className="main-page-images"
          src={WalnutShelf}
          alt="Walnut Shelf Main Image"
        />
        <div className="image-description">
          <TextBody className="image-description" />
        </div>
      </div>
      <Divider />
      <div className="splash-images">
        <div className="image-description">
          <TextBody className="image-description" />
        </div>
        <img
          className="main-page-images"
          src={HerringBone}
          alt="HerringBone Main Image"
        />
      </div>
    </div>
  );
};

export default Body;
