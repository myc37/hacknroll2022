import { useState } from "react";
import Barchart from "./Barchart";
import "./DashboardCard.css";
import useDate from "../Hooks/useDate";

export const DashboardCardBarchart = ({ transactions }) => {
  const [sum, setSum] = useState(0);
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { today, oneWeekAgo, oneMonthAgo, oneYearAgo } = useDate();
  const [clicked, setClicked] = useState(-1);

  const filterWeek = transactions.filter(
    (transaction) => transaction.date <= today && transaction.date >= oneWeekAgo
  );
  const filterMonth = transactions.filter(
    (transaction) =>
      transaction.date <= today && transaction.date >= oneMonthAgo
  );
  const filterYear = transactions.filter(
    (transaction) => transaction.date <= today && transaction.date >= oneYearAgo
  );
  const [filteredTransactions, setFilteredTransactions] = useState(filterWeek);

  const chartProps = {
    today,
    oneWeekAgo,
    oneMonthAgo,
    oneYearAgo,
    filteredTransactions,
  };

  function doSum(transactions) {
    let tempSum = 0;
    transactions.forEach((transaction) => {
      tempSum += transaction.amount;
    });
    setSum(tempSum);
    console.log(tempSum);
  }

  return (
    <div className="dashboardcard-box">
      <div className="dashboardcard-header-box">
        <h2 className="dashboardcard-header">Income vs Expense</h2>
        <div className="flex flex-row justify-center gap-4">
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked === 0 ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => {
              setClicked(0);
              const dailyTransactions = [[], [], [], [], [], [], []];
              filterWeek.forEach((transaction) => {
                const index = transaction.date.getDay();
                dailyTransactions[index].push(transaction.amount);
              });
              const dailyData = dailyTransactions.map((day, index) => ({
                name: labels[index],
                amount: day.reduce((a, b) => a + b, 0),
              }));
              setFilteredTransactions(dailyData);
              doSum(filterWeek);
            }}
          >
            Past Week
          </button>
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked === 1 ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => {
              setClicked(1);
              const weeklyTransactions = [[], [], [], []];
              filterMonth.forEach((transaction) => {
                const index = Math.round(
                  (today - transaction.date) / 604800000
                );
                weeklyTransactions[index].push(transaction.amount);
              });

              const weeklyData = weeklyTransactions.map((week, index) => ({
                name: index === 0 ? "1 week ago" : `${index + 1} weeks ago`,
                amount: week.reduce((a, b) => a + b, 0),
              }));
              setFilteredTransactions(weeklyData);
              doSum(filterMonth);
            }}
          >
            Past Month
          </button>
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked === 2 ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => {
              setClicked(2);
              const monthlyTransactions = [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
              ];
              filterYear.forEach((transaction) => {
                const index = transaction.date.getMonth();
                monthlyTransactions[index].push(transaction.amount);
              });

              for (let i = 0; i < today.getMonth(); i++) {
                monthlyTransactions.push(monthlyTransactions.shift());
                monthLabels.push(monthLabels.shift());
              }

              const monthlyData = monthlyTransactions.map((month, index) => ({
                name: monthLabels[index],
                amount: month.reduce((a, b) => a + b, 0),
              }));
              setFilteredTransactions(monthlyData);
              doSum(filterYear);
            }}
          >
            Past Year
          </button>
        </div>
      </div>
      <div className="text-xs font-semibold text-gray-400 uppercase mb-1 ml-10">
        Total:
      </div>
      <div className="flex items-start">
        <div
          className={
            "text-2xl font-bold text-white ml-10 mb-5 px-3 py-1 rounded-full " +
            (sum > 0 ? "bg-green-500" : "bg-red-500")
          }
        >
          {sum > 0 ? "+" : "-"}$
          {sum > 0
            ? sum.toPrecision(sum.toString().length + 2)
            : -sum.toPrecision(sum.toString().length + 2)}
        </div>
      </div>
      <Barchart {...chartProps}></Barchart>
    </div>
  );
};
