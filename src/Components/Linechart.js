import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Linechart({
  filteredTransactions,
  today,
  oneWeekAgo,
  oneMonthAgo,
  oneYearAgo,
}) {
  function compare(a, b) {
    const aDateStr =
      a.date.getDate() + "/" + a.date.getMonth() + "/" + a.date.getFullYear();
    const bDateStr =
      b.date.getDate() + "/" + b.date.getMonth() + "/" + b.date.getFullYear();
    if (aDateStr === bDateStr) {
      return 0;
    } else if (a.date < b.date) {
      return -1;
    }
    return 1;
  }

  const tempArr = [];
  const calcPastWeek = () => {
    filteredTransactions.sort(compare);
    let j = 0;
    for (let i = 0; i < filteredTransactions.length - 1; i++) {
      if (compare(filteredTransactions[i], filteredTransactions[i + 1]) == 0) {
        tempArr[j] = {
          date: filteredTransactions[i].date,
          amount:
            tempArr[j].amount +
            filteredTransactions[i].amount +
            filteredTransactions[i + 1].amount,
        };
      } else {
        if (j == 0) {
          tempArr[j] = {
            date: filteredTransactions[i].date,
            amount: filteredTransactions[i].amount,
          };
          j += 1;
        } else {
          j += 1;
          tempArr[j] = {
            date: filteredTransactions[i + 1].date,
            amount: filteredTransactions[i + 1].amount,
          };
        }
      }
    }
    console.log(filteredTransactions);
    console.log(tempArr);
  };
  calcPastWeek();

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={tempArr}
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
        <Legend verticalAlign="top" height={36} />
        <Line
          name="Amount Spent"
          type="monotone"
          dataKey="amount"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
