import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';

const testData = [
  { name: 'Jan', bill: 13.3920000000002 },
  { name: 'Feb', bill: 72.3920000000002 },
  { name: 'Mar', bill: 25.3920000000002 },
  { name: 'Apr', bill: 13.3920000000002 },
  { name: 'May', bill: 28.3920000000002 },
  { name: 'Jun', bill: 10.3920000000002 },
  { name: 'Jul', bill: 13.3920000000002 },
  { name: 'Aug', bill: 45.3920000000002 },
  { name: 'Sept', bill: 18.3920000000002 },
  { name: 'Oct', bill: 19.3920000000002 },
  { name: 'Nov', bill: 0 },
  { name: 'Dec', bill: 40.3920000000002 },
];

class SimpleLineChart extends React.Component {

  state = {
    data: [],
  };

  render() {
    var data = this.props.data;

    // check for test data
    if (data.length) {

      data = testData;

    }

    return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip formatter={(value) => new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(value)}/>
        <Line type="monotone" dataKey="bill" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
  }
  
}

export default SimpleLineChart;