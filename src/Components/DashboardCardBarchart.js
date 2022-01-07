import { useState } from "react";
import Barchart from "./Barchart";
import "./DashboardCard.css";
import useDate from "../Hooks/useDate";

export const DashboardCardBarchart = ({ transactions }) => {
  let sum = 0;
  for (let i = 0; i < transactions.length; i++) {
    sum += transactions[i].amount;
  }

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
            onClick={() => (setClicked(0), setFilteredTransactions(filterWeek))}
          >
            Past 7 Days
          </button>
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked === 1 ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => (
              setClicked(1), setFilteredTransactions(filterMonth)
            )}
          >
            Past Month
          </button>
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked === 2 ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => (setClicked(2), setFilteredTransactions(filterYear))}
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
          {sum > 0 ? "+" : "-"}${sum > 0 ? "" : -sum}
        </div>
      </div>
      <Barchart {...chartProps}></Barchart>
    </div>
  );
};
