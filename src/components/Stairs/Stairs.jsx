import React from "react";
import Gallery from "../Gallery/Gallery";

import stairs from "./__data__/stairs";

const Stairs = () => {
  return (
    <div className="routes">
      <h1 className="routes-h1">Stairs</h1>
      <Gallery data={stairs} />
    </div>
  );
};

export default Stairs;
