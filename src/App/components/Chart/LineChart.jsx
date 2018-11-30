import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Label from 'recharts/lib/component/Label';

const legendStyle = {
  fontSize: 10,
};


class SimpleLineChart extends React.Component {

  state = {
    data: [],
  };

  render() {
    var { data, nameKey, dataKey} = this.props;
    
    var dataKeys = "";
    var dataKeysAlt = "";
    if (dataKey.length === 2) {
      dataKeys = dataKey[0];
      dataKeysAlt = dataKey[1];
    } else {
      dataKeys = dataKey[0];
      dataKeysAlt = false;
    }

    if ( dataKeysAlt ) {
      return (
        <div>
          <div style={legendStyle}>Green=Inside</div>
          <div style={legendStyle}>Purple=Outside</div>
          <ResponsiveContainer width="95%" height={320}>
          <LineChart height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis  dataKey={nameKey} tick={{fontSize: 0}} label={{ value: "Last 12 Hours", fontSize: 20}}/>
          <YAxis tick={{fontSize: 20}}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="inside" stroke="#82ca9d" />
          <Line type="monotone" dataKey="outside" stroke="#8884d8"/>
          </LineChart>
          </ResponsiveContainer>
          
        </div>
        

      );
    }


    return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="95%" height={320}>
      <LineChart data={data}>
        <XAxis  dataKey={nameKey} tick={{fontSize: 5}}/>
        <Label value='Last 12 hours of Temperatures' position='insideBottom'/>
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Line type="monotone" dataKey={dataKeys} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
  }
  
}

export default SimpleLineChart;