import React from "react";

const Whisky = ({ whisky }) => (
  <div>
    <img
      style={{ width: "300px", height: "300px" }}
      alt="whisky"
      src={whisky.imageUrl}
    />
    <h3>{whisky.title}</h3>
  </div>
);

export default Whisky;
