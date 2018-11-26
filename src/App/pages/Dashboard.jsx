import React, { Component } from "react";
import CurrentTemps from '../components/Sheets/TempSheet';
import TVButton from '../components/TVButton/TVButton';
import LineChart from '../components/Chart/LineChart';
import TempSlider from '../components/TempSlider/TempSlider';
import FloorPlan from '../components/Dialogs/FloorPlan';
import RoomPaper from '../components/Sheets/BasicSheet';
import DoorButtons from '../components/DoorButton/DoorButtons';

class Dashboard extends Component {

  // set the object state with our data
  state = {
    dashData: null,
    temperatures: [],
    objects: [],
    currentRoom: '',
    thermo: '',
  };

  // get the data on reload
  componentDidMount() {
    this.getData();
  }

  // just example till I can get the deal data
  // get our data for the dashboard
  getData = () => {
    fetch('/dashboardModel')
    .then(res => res.json())
    .then(dashData => {this.handleData(dashData)})
    .catch(() => console.log('Dashboard :b:roke'));
  }

  handleData(dashData) {

    //check null
    if(dashData) {
      // store dashboard info
      this.setState({dashData});

      //store temps
      this.setState({temperatures: [dashData.temperature.inside, dashData.temperature.outside]});

      //store thermostat state
      this.setState({thermo: [dashData.temperature.thermostat.setting, dashData.temperature.thermostat.heatOrCool]})

      //store object states
      this.setState({objects: dashData.objects});


      

    }
  }

  changeRoom = (currentRoom) => {
    this.setState({currentRoom});

  }

  chan

  render() {
    var { temperatures, thermo } = this.state;

    return (
    <div>
        <div>
            <CurrentTemps temps = { temperatures }/>
            {/* <LineChart data={ dashData } /> */}
            <TVButton/>
        </div>

        {/* try to use a table for this */}
        <div>
          <TempSlider thermo={thermo}/>
        </div>
        
        <div>
          <FloorPlan/>
          <DoorButtons/>
          <RoomPaper changeRoom = { this.changeRoom }/>
        </div>
      
    </div>
    );
  }
}

export default Dashboard;