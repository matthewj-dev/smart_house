import React, { Component } from "react";
import CurrentTemps from '../components/Sheets/TempSheet';
import TVButton from '../components/TVButton/TVButton';
import LineChart from '../components/Chart/LineChart';
import FloorPlan from '../components/Dialogs/FloorPlan';
import RoomPaper from '../components/Sheets/BasicSheet';
import DoorButtons from '../components/DoorButton/DoorButtons';
import './Style/Dashboard.css'

class Dashboard extends Component {

  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  // just example till I can get the deal data
  getData = () => {
    fetch('/getMonthlyBilling')
    .then(res => res.json())
    .then(data => {this.setState({ data })})
    .catch(() => console.log('Dashboard Broke'));
  }

  render() {
    var { data } = this.state;
    // console.log(data);
    return (
    <div>
        <div>
            <CurrentTemps/>
            <LineChart data={ data } />
            <TVButton/>
        </div>
        <div className='bottom'>
          <FloorPlan/>
          <DoorButtons/>
          <RoomPaper/>
        </div>
    </div>
    );
  }
}

export default Dashboard;