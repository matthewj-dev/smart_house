import React, { Component } from "react";
import RoomPaper from '../components/Sheets/BasicSheet';
import './Style/Dashboard.css'

class Financial extends Component {
    render() {
      return (
      <div>
          <div className='bottom'>
              <RoomPaper/>
          </div>
      </div>
      );
    }
  }
  export default Financial;