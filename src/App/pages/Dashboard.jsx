import React, { Component } from "react";
import CurrentTemps from '../components/Sheets/TempSheet';
import TVButton from '../components/TVButton/TVButton';
import FloorPlan from '../components/Dialogs/FloorPlan';
import RoomPaper from '../components/Sheets/BasicSheet';
import DoorButtons from '../components/DoorButton/DoorButtons';
import './Style/Dashboard.css'

class Financial extends Component {
    render() {
      return (
      <div>
          <div>
              <CurrentTemps/>
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
  export default Financial;