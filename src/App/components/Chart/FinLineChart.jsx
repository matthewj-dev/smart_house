import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
const data = [
  { name: 'Jan', Bill: 200 },
  { name: 'Feb', Bill: 280 },
  { name: 'Mar', Bill: 140 },
  { name: 'Apr', Bill: 165 },
  { name: 'May', Bill: 110 },
  { name: 'Jun', Bill: 90 },
  { name: 'Jul', Bill: 130 },
  { name: 'Aug', Bill: 128 },
  { name: 'Sept', Bill: 120 },
  { name: 'Oct', Bill: 200 },
  { name: 'Nov', Bill: 280 },
  { name: 'Dec', Bill: 180 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip formatter={(value) => new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(value)}/>
        <Line type="monotone" dataKey="Bill" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;