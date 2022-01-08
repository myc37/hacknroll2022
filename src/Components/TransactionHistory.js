import { useEffect, useState } from "react";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import DiamondIcon from "@mui/icons-material/Diamond";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function TransactionHistory({
  transactions,
  today,
  oneWeekAgo,
}) {
  const [filtered, setFiltered] = useState([]);

  const categories = {
    Income: <AttachMoneyIcon />,
    Food: <LunchDiningOutlinedIcon />,
    Transport: <DirectionsBusFilledIcon />,
    Luxury: <DiamondIcon />,
    Business: <BusinessCenterIcon />,
    Others: <CategoryIcon />,
  };

  useEffect(() => {
    const temp = transactions.filter(
      (transaction) =>
        transaction.date >= oneWeekAgo && transaction.date <= today
    );
    setFiltered(temp);
  }, [transactions]);

  return (
    <div className="py-4 px-16">
      {filtered.map((transaction, index) => (
        <div
          key={index}
          className="flex justify-between pr-8 pl-8 border-gray-500 border-t-2 py-5"
        >
          <div className="flex flex-column items-center">
            <div
              className={
                transaction.type === "expense"
                  ? "flex justify-between px-3  bg-red-500 border-2 py-3 rounded-full mr-4"
                  : "flex justify-between px-3  bg-green-600 border-2 py-3 rounded-full mr-4"
              }
            >
              {categories[transaction.category]}
            </div>
            <p className="ml-2 text-xl font-semibold">{transaction.title}</p>
            <p className="ml-4 text-sm self-center mt-1">
              {transaction.date.getDate() < 10
                ? "0" + transaction.date.getDate()
                : transaction.date.getDate()}
              {"/" +
                transaction.date.getMonth() +
                1 +
                "/" +
                transaction.date.getFullYear()}
            </p>
          </div>
          <p
            className={
              transaction.type === "expense"
                ? "text-xl font-semibold self-center text-red-500"
                : "text-xl font-semibold self-center text-green-600"
            }
          >
            {transaction.amount < 0 ? "-" : "+"}$
            {transaction.amount < 0
              ? -1 * transaction.amount
              : transaction.amount}
          </p>
        </div>
      ))}
    </div>
  );
}
