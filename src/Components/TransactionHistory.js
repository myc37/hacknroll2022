import { useEffect, useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CategoryIcon from "@mui/icons-material/Category";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import DiamondIcon from "@mui/icons-material/Diamond";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function TransactionHistory({
  transactions,
  today,
  oneWeekAgo,
}) {
  const [filtered, setFiltered] = useState([]);

  const categories = {
    Food: <FastfoodIcon />,
    Transport: <DirectionsBusFilledIcon />,
    Luxury: <DiamondIcon />,
    Business: <BusinessCenterIcon />,
    Other: <CategoryIcon />,
  };

  useEffect(() => {
    const temp = transactions.filter(
      (transaction) =>
        transaction.date >= oneWeekAgo && transaction.date <= today
    );
    setFiltered(temp);
  }, [transactions]);

  console.log(filtered);

  return (
    <div>
      {filtered.map((transaction, index) => (
        <div
          key={index}
          className="flex justify-between pr-8 pl-8 bg-white border-2 border-gray-500 py-5 rounded-lg"
        >
          <div className="flex">
            {categories[transaction.category]}
            <h2 className="ml-2">{transaction.type}</h2>
            <p className="ml-4 text-gray-500">{transaction.description}</p>
          </div>
          <p>
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
