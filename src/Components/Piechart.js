import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";



export default function Piechart({ transactions, today, oneWeekAgo }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042","FF0000"];
  const data01 = [
    {  name: 'Transport', value: transactions.filter(transaction => transaction.category ==="Transport" && transaction.type ==="expense").map(filtered => -filtered.amount).reduce((a,b)=> a+b,0)},
    { name: 'Food', value: transactions.filter(transaction => transaction.category ==="Food" && transaction.type ==="expense").map(filtered => -filtered.amount).reduce((a,b)=> a+b,0) },
    { name: 'Luxury', value: transactions.filter(transaction => transaction.category ==="Luxury" && transaction.type ==="expense").map(filtered => -filtered.amount).reduce((a,b)=> a+b,0)},
    { name: 'Business', value: transactions.filter(transaction => transaction.category ==="Business" && transaction.type ==="expense").map(filtered => -filtered.amount).reduce((a,b)=> a+b,0) },
    { name: 'Others', value: transactions.filter(transaction => transaction.category ==="Others" && transaction.type ==="expense").map(filtered => -filtered.amount).reduce((a,b)=> a+b,0) },
  ];
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
          {transactions.map((entry, index) => (
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
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
