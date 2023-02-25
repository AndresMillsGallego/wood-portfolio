import React from "react";

import Gallery from "../Gallery/Gallery";

import furniture from "./__data__/furniture";

const Furniture = () => {
  return (
    <div className="routes">
      <h1 className="routes-h1">Furniture</h1>

      <Gallery data={furniture} />
    </div>
  );
};

export default Furniture;
