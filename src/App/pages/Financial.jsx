import React, { Component } from "react";
import LineChart from '../components/Chart/LineChart';
import FinTable from '../components/Tables/FinTable';
import TotalMonth from '../components/Tile/TotMonthly';
import PieChart from '../components/Chart/FinPieChart';
import './Style/Dashboard.css'; // reuse dashboard css for time reasons

class Financial extends Component {

  // setup object with a state
  state = {
    data: [],
    cats: [],
    finLog: [],
  };

  // when the page mounts call for the data
  componentDidMount() {
    this.getData();
    this.getCats();
    this.getTable();

    setInterval(() => {
      this.getData();
      this.getCats();
    }, 3000);

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

  getTable = () => {
    fetch('/expensesLog')
    .then(res => res.json())
    .then(finLog => {this.setState({finLog})})
    .catch(() => console.log('table :b:roke'));
  }

  // render the page components
  render() {
    var { data, cats, finLog } = this.state;

    if(data.length && cats.length && finLog.length){
      return (
        <div>
          <div className='top'>
            <div className='slider_area'>
              <div className='heat_button'>
                <TotalMonth />
              </div>
              <div className='slider'>
                <PieChart cats={cats} />
              </div>
            </div>
            <div className='line_chart'>
               
            </div>  
          </div>
          <div className='middle'>
            {/* pass the data into our template line chart */}
            <LineChart data={ data } nameKey="name" dataKey={["bill"]}/>
          </div>
          <div className='bottom'>
            <FinTable tableData={finLog}/>
          </div>
          
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