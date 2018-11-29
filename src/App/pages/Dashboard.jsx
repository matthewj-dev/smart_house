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
    currentRoom: 'master bedroom',
    thermo: [],
    tv: {},
    tempGraph: [],
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

      //s tore temps
      this.setState({temperatures: [dashData.temperature.inside, dashData.temperature.outside]});

      // store thermostat state
      this.setState({thermo: [dashData.temperature.thermostat.setting, dashData.temperature.thermostat.heatOrCool]});

      // store object states
      this.setState({objects: dashData.objects});

      // store tv state
      this.setState({tv: dashData.objects['master bedroom'].tv});

      // store temp graph; last 12 hours
      this.setState({tempGraph: dashData.temperature.graph.slice(-12)});

    }
  }

  changeRoom = (currentRoom) => {
    this.setState({currentRoom});

  }

  // pass function to components to change db state
  // current: get the current state
  // object: pass the object id
  changeObjState = (current, object) => {
    console.log(object);
    if (current) {
      const otherParam = {
        headers: {
            'content-type':"application/json"
        },
        body:JSON.stringify({objId: object}),
        method:"POST",
        };
        fetch("/turnOff", otherParam)
        .then(res=>{console.log(res)})
        .catch(error=> {console.log(error)})

    } else {
      const otherParam = {
      headers: {
          'content-type':"application/json"
      },
      body:JSON.stringify({objId: object}),
      method:"POST",
      };
      fetch("/turnOn", otherParam)
      .then(res=>{console.log(res)})
      .catch(error=> {console.log(error)})
    }
  }

  render() {
    var { temperatures, thermo, tv, tempGraph, currentRoom, objects } = this.state;

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
                <div className='line_chart'>
                  <LineChart data={tempGraph} nameKey="time" dataKey={["inside", "outside"]}/>
                </div>
                
                
            </div>
    
            {/* try to use a table for this */}
            <div className='middle'>
              <div className='left_side'>
                <TVButton tv={tv} changeTVState={this.changeObjState} roomid={currentRoom} objects={objects}/>
              </div>
              <div className='right_side'>
                <LightButtons/>
              </div>
            </div>
            
            <div className='bottom'>
              <FloorPlan/>
              <div className='door_buttons'>
                <DoorButtons changeButtons={this.changeObjState}/>
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