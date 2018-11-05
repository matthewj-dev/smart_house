import React from "react";

const style = {
  position: "relative",
  display: "inline-block",
  width: "33.3%",
  float: "left",
  margin: "0 auto",
  marginTop: "200px",
  backgroundColor: "green",
  font: "inherit",
  border: "1px solid black",
  padding: "5px",
  cursor: "pointer"
};

const DoorButtonTwo = () => (
  <div>
    <button style={style}>Door 2</button>
  </div>
);

export default DoorButtonTwo;
