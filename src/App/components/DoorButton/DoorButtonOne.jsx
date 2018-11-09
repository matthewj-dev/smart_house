import React from "react";

const style = {
  position: "relative",
  display: "inline-block",
  width: "20%",
  float: "left",
  margin: "0 auto",
  marginTop: "200px",
  marginLeft: "250px",
  backgroundColor: "green",
  font: "inherit",
  border: "1px solid black",
  padding: "5px",
  cursor: "pointer"
};

const DoorButtonOne = () => (
  <div>
    <button style={style}>Door 1</button>
  </div>
);

export default DoorButtonOne;
