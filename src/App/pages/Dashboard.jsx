import React, { Component } from "react";
import CurrentTemps from '../components/Sheets/TempSheet';
import TVButton from '../components/TVButton/TVButton';
import LineChart from '../components/Chart/LineChart';
import TempSlider from '../components/TempSlider/TempSlider';
import FloorPlan from '../components/Dialogs/FloorPlan';
import RoomPaper from '../components/Sheets/BasicSheet';
import DoorButtons from '../components/DoorButton/DoorButtons';
import LightButtons from '../components/LightButton/LightButtons';
import HeatButton from '../components/TempSlider/HVAC';
import './Style/Dashboard.css';

class Dashboard extends Component {

  // set the object state with our data
  state = {
    dashData: null,
    temperatures: [],
    objects: [],
    currentRoom: '',
    thermo: [],
    tv: {},
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

      // store tv state
      this.setState({tv: dashData.objects['master bedroom'].tv});

    }
  }

  changeRoom = (currentRoom) => {
    this.setState({currentRoom});

  }

  changeTVState = () => {
    const otherParam = {
      headers:{
        "":""
      },
      body:1,
      method:"POST"
    };
    fetch("/turnOn", otherParam)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
    .catch(error=> {console.log(error)})

  }

  render() {
    var { temperatures, thermo, tv } = this.state;

    if(thermo.length) {

      return (
        <div>
            <div className='top'>
                <CurrentTemps temps = { temperatures }/>
                <div className='slider_area'>
                  <div className = 'heat_button'>
                    <HeatButton thermo={thermo[1]}/>
                  </div>
                  <div className='slider'>
                    <TempSlider thermo={thermo[0]}/>
                  </div>
                </div>
                <LineChart />
                
            </div>
    
            {/* try to use a table for this */}
            <div className='middle'>
              <div className='left_side'>
                <TVButton tv={tv} changeTVState={this.changeTVState}/>
              </div>
              <div className='right_side'>
                <LightButtons/>
              </div>
            </div>
            
            <div className='bottom'>
              <FloorPlan/>
              <div className='door_buttons'>
                <DoorButtons/>
              </div>
              <RoomPaper changeRoom = { this.changeRoom }/>
            </div>
          
        </div>
        );
    } else {
    return (
      <div></div>
      );
    }

    
  }
}

export default (Dashboard);