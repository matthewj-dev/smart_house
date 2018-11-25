import React, { Component } from "react";
import LineChart from '../components/Chart/LineChart';
import FinTable from '../components/Tables/FinTable';
import TotalMonth from '../components/Tile/TotMonthly';

class Financial extends Component {

  // setup object with a state
  state = {
    data: [],
  };

  // when the page mounts call for the data
  componentDidMount() {
    this.getData();
  }

  // get the data from the server in json format
  getData = () => {
    fetch('/getMonthlyBilling')
    .then(res => res.json())
    .then(data => {this.setState({ data })})
    .catch(() => console.log('Financial :b:roke'));
  }

  // render the page components
  render() {
    var { data } = this.state;
    return (
    <div>
      <TotalMonth />

      {/* pass the data into our template line chart */}
      <LineChart data={ data } /> 
      <FinTable/>
      
    </div>
    );
  }
}
  export default Financial;