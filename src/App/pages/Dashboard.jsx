import React, { Component } from "react";
import RoomSwitcher from '../components/Menus/RoomSwitcher';
import './Style/Dashboard.css'

class Financial extends Component {
    render() {
      return (
      <div>
          <div className='bottom'>
              <RoomSwitcher/>
          </div>
      </div>
      );
    }
  }
  export default Financial;