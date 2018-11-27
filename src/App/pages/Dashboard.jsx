import React, { Component } from "react";
import CurrentTemps from "../components/Sheets/TempSheet";
import TVButton from "../components/TVButton/TVButton";
import LineChart from "../components/Chart/LineChart";
import TempSlider from "../components/TempSlider/TempSlider";
import FloorPlan from "../components/Dialogs/FloorPlan";
import RoomPaper from "../components/Sheets/BasicSheet";
import DoorButtons from "../components/DoorButton/DoorButtons";

class Dashboard extends Component {
  // set the object state with our data
  state = {
    tempData: []
  };

  // get the data on reload
  componentDidMount() {
    this.getData();
  }

  // just example till I can get the deal data
  // get our data for the dashboard
  getData = () => {
    fetch("/getMonthlyBilling")
      .then(res => res.json())
      .then(tempData => {
        this.setState({ tempData });
      })
      .catch(() => console.log("Dashboard :b:roke"));
  };

  render() {
    var { tempData } = this.state;
    // console.log(tempData);
    return (
      <div>
        <div>
          <CurrentTemps />
          <LineChart data={tempData} />
          <TVButton />
        </div>

        {/* try to use a table for this */}
        <div>
          <TempSlider />
        </div>

        <div>
          <FloorPlan />
          <DoorButtons />
          <RoomPaper />
        </div>
      </div>
    );
  }
}

export default Dashboard;
