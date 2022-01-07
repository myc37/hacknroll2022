import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "./DashboardCard.css";

//dummy data
const data = [
  {
    name: "May",
    month: 4000,
  },
  {
    name: "June",
    month: -3000,
  },
  {
    name: "July",
    month: -2000,
  },
  {
    name: "August",
    month: 2780,
  },
  {
    name: "September",
    month: -1890,
  },
  {
    name: "October",
    month: 2390,
  },
  {
    name: "November",
    month: 3490,
  },
];

export default function Barchart() {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="month">
          {" "}
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={data[index].month > 0 ? "#6366F1" : "#ffcccb"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
