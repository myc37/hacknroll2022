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

//dummy data
const data = [
  {
    name: "Jan",
    month: 312,
  },
  {
    name: "Feb",
    month: -3211,
  },
  {
    name: "Mar",
    month: 1432,
  },
  {
    name: "Apr",
    month: 5431,
  },
  {
    name: "May",
    month: -2190,
  },
  {
    name: "Jun",
    month: -3000,
  },
  {
    name: "Jul",
    month: -2000,
  },
  {
    name: "Aug",
    month: 2780,
  },
  {
    name: "Sep",
    month: -1890,
  },
  {
    name: "Oct",
    month: 2390,
  },
  {
    name: "Nov",
    month: 3490,
  },
  {
    name: "Dec",
    month: 3490,
  },
];

export default function Barchart({ transactions }) {
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
