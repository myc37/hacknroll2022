import Piechart from "./Piechart";
import "./DashboardCard.css";
import { useState } from "react";
import useDate from "../Hooks/useDate";

export const DashboardCardPiechart = ({ transactions }) => {
  const { today, oneWeekAgo, oneMonthAgo, oneYearAgo } = useDate();
  const [clicked, setClicked] = useState(-1);

  const filterWeek = transactions.filter(
    (transaction) =>
      transaction.date <= today &&
      transaction.date >= oneWeekAgo &&
      transaction.type === "expenses"
  );
  const filterMonth = transactions.filter(
    (transaction) =>
      transaction.date <= today &&
      transaction.date >= oneMonthAgo &&
      transaction.type === "expenses"
  );
  const filterYear = transactions.filter(
    (transaction) =>
      transaction.date <= today &&
      transaction.date >= oneYearAgo &&
      transaction.type === "expenses"
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
        <h2 className="dashboardcard-header">Expenses by Category</h2>
        <div className="flex flex-row justify-center gap-4">
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked === 0 ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => {
              setClicked(0);
              setFilteredTransactions(filterWeek);
            }}
          >
            Past 7 Days
          </button>
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked === 1 ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => {
              setClicked(1);
              setFilteredTransactions(filterMonth);
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
              setFilteredTransactions(filterYear);
            }}
          >
            Past Year
          </button>
        </div>
      </div>
      <Piechart {...chartProps} />
    </div>
  );
};
