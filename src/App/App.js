import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import Drawer from './components/Drawer/Drawer';

class App extends Component {
  render() {
    return (
      <div>
        <Drawer/>
      </div>
    );
  }
}

export default App;