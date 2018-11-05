import React, { Component } from "react";
import LightButtonOne from "../../components/LightButton/LightButtonOne";
import LightButtonTwo from "../../components/LightButton/LightButtonTwo";
import LightButtonThree from "../../components/LightButton/LightButtonThree";
import DoorButtonOne from "../../components/DoorButton/DoorButtonOne";
import DoorButtonTwo from "../../components/DoorButton/DoorButtonTwo";
import DoorButtonThree from "../../components/DoorButton/DoorButtonThree";
import TVButton from "../../components/TVButton/TVButton";
import TempSlider from "../../components/TempSlider/TempSlider";

class WelcomeTest extends Component {
  render() {
    return (
      <div>
        <TVButton />

        <TempSlider />

        <LightButtonOne />
        <LightButtonTwo />
        <LightButtonThree />

        <DoorButtonOne />
        <DoorButtonTwo />
        <DoorButtonThree />
      </div>
    );
  }
}

export default WelcomeTest;
