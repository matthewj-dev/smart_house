import React, { Component } from "react";
import FinLineChart from '../components/Chart/FinLineChart';
import FinTable from '../components/Tables/FinTable';

class Financial extends Component {
    render() {
      return (
      <div>
        <FinLineChart/>
        <FinTable/>
        
      </div>
      );
    }
  }
  export default Financial;