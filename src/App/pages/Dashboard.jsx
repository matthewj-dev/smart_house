import React, { Component } from "react";
import CurrentTemps from '../components/Sheets/TempSheet';
import TVButton from '../components/TVButton/TVButton';
import LineChart from '../components/Chart/LineChart';
import Slider from '../components/TempSlider/TempSlider';
import FloorPlan from '../components/Dialogs/FloorPlan';
import RoomPaper from '../components/Sheets/BasicSheet';
import DoorButtons from '../components/DoorButton/DoorButtons';
import './Style/Dashboard.css'

class Dashboard extends Component {

  state = {
    tempData: [],
  };

  componentDidMount() {
    this.getData();
  }

  // just example till I can get the deal data
  getData = () => {
    fetch('/getMonthlyBilling')
    .then(res => res.json())
    .then(tempData => {this.setState({ tempData })})
    .catch(() => console.log('Dashboard Broke'));
  }

  render() {
    var { tempData } = this.state;
    // console.log(tempData);
    return (
    <div id='container'>
        <div>
            <CurrentTemps/>
            <LineChart data={ tempData } />
            <TVButton/>
        </div>
        
        <div className='bottom'>
          <FloorPlan/>
          <DoorButtons/>
          <RoomPaper/>
        </div>
        {/* try to use a table for this */}
        <div id='side'>
          <Slider/>
        </div>
    </div>
    );
  }
}

export default Dashboard;