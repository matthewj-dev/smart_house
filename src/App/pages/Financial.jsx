import React, { Component } from "react";
import FinLineChart from '../components/Chart/FinLineChart';
import FinTable from '../components/Tables/FinTable';
import TotalMonth from '../components/Tile/TotMonthly';

class Financial extends Component {
    render() {
      return (
      <div>
        <TotalMonth />
        <FinLineChart/>
        <FinTable/>
        
      </div>
      );
    }
  }
  export default Financial;