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

export default function Barchart({
  filteredTransactions,
  today,
  oneWeekAgo,
  oneMonthAgo,
  oneYearAgo,
}) {
  /*const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const dailyTransactions = [[], [], [], [], [], [], []];
  filteredTransactions.forEach((transaction) => {
    const index = transaction.date.getDay();
    dailyTransactions[index].push(-transaction.amount);
  });
  console.log(dailyTransactions);

  const data = dailyTransactions.map((day, index) => ({
    name: labels[index],
    amount: day.reduce((a, b) => a + b, 0),
  }));
  console.log(data);*/
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={filteredTransactions}
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
        <Bar dataKey="amount">
          {" "}
          {filteredTransactions.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                filteredTransactions[index].amount > 0 ? "#6366F1" : "#ffcccb"
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
