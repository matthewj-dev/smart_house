import { PieChart, Pie, Sector, Cell } from 'recharts';
import React from 'react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180; 

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
    return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
    </text>
    );
};

class SimplePieChart extends React.Component {
    state = {
        cats: [],
    };

    componentDidMount() {
        this.setState({cats: this.props.cats});
    }

	render () {
        var { cats } = this.state;
        // console.log(cats);
        
        return (
            <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
            <Pie
            data={cats}
            dataKey="bill"
            nameKey="category"
            cx={300} 
            cy={200} 
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80} 
            fill="#8884d8"
            >
                {
                cats.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
            }
            </Pie>
        </PieChart>
        );
  }
}

export default SimplePieChart;