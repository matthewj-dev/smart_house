import React, { Component } from "react";
import LineChart from '../components/Chart/LineChart';
import FinTable from '../components/Tables/FinTable';
import TotalMonth from '../components/Tile/TotMonthly';
import PieChart from '../components/Chart/FinPieChart';

class Financial extends Component {

  // setup object with a state
  state = {
    data: [],
    cats: [],
  };

  // when the page mounts call for the data
  componentDidMount() {
    this.getData();
    this.getCats();

  }

  // get the data from the server in json format
  getData = () => {
    fetch('/getMonthlyBilling')
    .then(res => res.json())
    .then(data => {this.setState({ data })})
    .catch(() => console.log('Financial :b:roke'));
  }

  getCats = () => {
    fetch('/powerConsumptionByCategory')
    .then(res => res.json())
    .then(cats => {this.setState({ cats })})
    .catch(() => console.log('Pie :b:roke!'));
  }

  // render the page components
  render() {
    var { data, cats } = this.state;
    console.log(cats);

    if(data.length && cats.length){
      return (
        <div>
          <TotalMonth />
          <PieChart cats={cats} />
          
          {/* pass the data into our template line chart */}
          <LineChart data={ data } /> 
          <FinTable/>
          
        </div>
        );
    } else {
      return (
        <div></div>
      )
    }
    
  }
}
  export default Financial;