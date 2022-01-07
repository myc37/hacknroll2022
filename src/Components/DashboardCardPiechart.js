import Piechart from "./Piechart";
import "./DashboardCard.css";
import Daterange from "./Daterange";
import { useState } from "react";
import useDate from "../Hooks/useDate";
import { Today } from "@mui/icons-material";

export const DashboardCardPiechart = ({ transactions }) => {
  const { today, oneWeekAgo, oneMonthAgo, oneYearAgo } = useDate();
  const [clicked, setClicked] = useState([false, false, false]);

  const [filteredTransactions, setFilteredTransactions] = useState([
    ...transactions,
  ]);

  const filterTransactions = () => {
    if (clicked[0]) {
      setFilteredTransactions(
        transactions.filter(
          (transaction) =>
            transaction.date <= today && transaction.date >= oneWeekAgo
        )
      );
    } else if (clicked[1]) {
      setFilteredTransactions(
        transactions.filter(
          (transaction) =>
            transaction.date <= today && transaction.date >= oneMonthAgo
        )
      );
    } else {
      setFilteredTransactions(
        transactions.filter(
          (transaction) =>
            transaction.date <= today && transaction.date >= oneYearAgo
        )
      );
    }
  };

  const chartProps = {
    today,
    oneWeekAgo,
    oneMonthAgo,
    oneYearAgo,
    filteredTransactions,
  };

  console.log(transactions);
  console.log(filteredTransactions);

  return (
    <div className="dashboardcard-box">
      <div className="dashboardcard-header-box">
        <h2 className="dashboardcard-header">Expenses by Category</h2>
        <div className="flex flex-row justify-center gap-4">
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked[0] ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => (
              setClicked([true, false, false]), filterTransactions()
            )}
          >
            Past 7 Days
          </button>
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked[1] ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => (
              setClicked([false, true, false]), filterTransactions()
            )}
          >
            Past Month
          </button>
          <button
            className={
              "rounded-full border-2 w-fit p-2 text-sm " +
              (clicked[2] ? "bg-blue-500 text-white" : "bg-white")
            }
            onClick={() => (
              setClicked([false, false, true]), filterTransactions()
            )}
          >
            Past Year
          </button>
        </div>
      </div>
      <Piechart {...chartProps} />
    </div>
  );
};
