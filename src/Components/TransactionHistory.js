import { useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CategoryIcon from "@mui/icons-material/Category";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import DiamondIcon from "@mui/icons-material/Diamond";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function TransactionHistory() {
  //dummy data
  const [transactions, setTransactions] = useState([
    { id: 1, description: "McDonalds", amount: -20, category: "food" },
    { id: 2, description: "Work", amount: 1000, category: "business" },
    { id: 3, description: "Qonto", amount: -32, category: "luxury" },
    { id: 4, description: "KFC", amount: -12, category: "food" },
    { id: 5, description: "McDonalds", amount: -20, category: "food" },
    { id: 6, description: "Work", amount: 1000, category: "business" },
    { id: 7, description: "Qonto", amount: -32, category: "other" },
    { id: 8, description: "KFC", amount: -12, category: "food" },
    { id: 9, description: "McDonalds", amount: -20, category: "food" },
    { id: 10, description: "Work", amount: 1000, category: "business" },
    { id: 11, description: "Qonto", amount: -32, category: "food" },
    { id: 12, description: "KFC", amount: -12, category: "food" },
    { id: 13, description: "McDonalds", amount: -20, category: "food" },
    { id: 14, description: "Work", amount: 1000, category: "business" },
    { id: 15, description: "Qonto", amount: -32, category: "other" },
    { id: 16, description: "KFC", amount: -12, category: "food" },
  ]);

  const categories = {
    food: <FastfoodIcon />,
    transport: <DirectionsBusFilledIcon />,
    luxury: <DiamondIcon />,
    business: <BusinessCenterIcon />,
    other: <CategoryIcon />,
  };

  return (
    <div>
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="flex justify-between pr-8 pl-8 bg-white border-2 border-gray-500 py-5 rounded-lg"
        >
          <div className="flex">
            {categories[transaction.category]}
            <h2 className="ml-2">{transaction.description}</h2>
            <text className="ml-4 text-gray-500">
              {transaction.description}
            </text>
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
