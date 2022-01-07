import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

//dummy data
const data01 = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Lodging", value: 300 },
  { name: "Investments", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
export default function Piechart() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <PieChart title="Test" width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <text
          x={650}
          y={20}
          fill="black"
          textAnchor="middle"
          dominantBaseline="central"
        ></text>
        <Legend />

<<<<<<< HEAD
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
=======
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render() {
    return (
    
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart title="Test" width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
          >
              {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}


          </Pie>
          
          <Legend />
     
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    
    );
  }
}
>>>>>>> af013ce4d4b7a8e063049c2a12ebbebb271e40f0
