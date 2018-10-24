import React from "react";

const style = {
  position: "relative",
  display: "block",
  width: "15%",
  margin: "0 auto",
  backgroundColor: "green",
  font: "inherit",
  border: "1px solid black",
  padding: "5px",
  cursor: "pointer"
};

const LightButtonTwo = () => (
  <div>
    <button style={style}>Light 2</button>
  </div>
);

export default LightButtonTwo;
