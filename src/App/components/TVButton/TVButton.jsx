import React from "react";

const style = {
  position: "absolute",
  display: "block",
  width: "50px",
  height: "50px",
  right: "150px",
  backgroundColor: "green",
  font: "inherit",
  border: "1px solid black",
  padding: "5px",
  cursor: "pointer"
};

const TvButton = () => (
  <div>
    <button style={style}>TV</button>
  </div>
);

export default TvButton;
