import React from "react";
import Gallery from "../Gallery/Gallery";
import SpiralStairs from "../../assets/SpiralStairs.jpg";

const Stairs = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="routes">
      <h1>Stairs</h1>
      <Gallery data={data} />
    </div>
  );
};

export default Stairs;
