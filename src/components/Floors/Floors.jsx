import React from "react";

import floors from "./__data__/floors";
import Gallery from "../Gallery/Gallery";

import "./assets/Floors.css";

const Floors = () => {
  console.log(floors);
  return (
    <div className="routes">
      <h1>Hardwood Floors</h1>
      <Gallery data={floors} />
    </div>
  );
};

export default Floors;
