import React from "react";
import Gallery from "../Gallery/Gallery";

const Stairs = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="routes">
      <h1>Stairs</h1>
      <Gallery data={data} title="Stairs" />
    </div>
  );
};

export default Stairs;
