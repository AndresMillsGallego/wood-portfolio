import React from "react";

import { Carousel } from "react-bootstrap";
import SpiralStairs from "../../assets/SpiralStairs.jpg";
import Genesee from "../../assets/Genesee.png";
import HerringBone from "../../assets/HerringBone.jpg";
import WalnutShelf from "../../assets/WalnutShelf.jpg";

import Gallery from "../Gallery/Gallery";

import "./assets/Floors.css";
const Floors = () => {
  const data = [1, 2, 3, 4];

  return (
    <div className="routes">
      <h1>Hardwood Floors</h1>
      <Gallery data={data} title="Hardwood Floors" />
    </div>
  );
};

export default Floors;
