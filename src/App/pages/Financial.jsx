import React, { Component } from "react";
import LineChart from '../components/Chart/LineChart';
import FinTable from '../components/Tables/FinTable';
import TotalMonth from '../components/Tile/TotMonthly';

class Financial extends Component {

  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('/getMonthlyBilling')
    .then(res => res.json())
    .then(data => {this.setState({ data })})
    .catch(() => console.log('Financial Broke'));
  }

  render() {
    var { data } = this.state;
    return (
    <div>
      <TotalMonth />
      <LineChart data={ data } />
      <FinTable/>
      
    </div>
    );
  }
}
  export default Financial;