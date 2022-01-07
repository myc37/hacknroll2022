import { useState } from "react";

export default function TransactionHistory() {
  //dummy data
  const [transactions, setTransactions] = useState([
    { id: 1, description: "McDonalds", amount: -20 },
    { id: 2, description: "Work", amount: 1000 },
    { id: 3, description: "Qonto", amount: -32 },
    { id: 4, description: "KFC", amount: -12 },
    { id: 5, description: "McDonalds", amount: -20 },
    { id: 6, description: "Work", amount: 1000 },
    { id: 7, description: "Qonto", amount: -32 },
    { id: 8, description: "KFC", amount: -12 },
    { id: 9, description: "McDonalds", amount: -20 },
    { id: 10, description: "Work", amount: 1000 },
    { id: 11, description: "Qonto", amount: -32 },
    { id: 12, description: "KFC", amount: -12 },
    { id: 13, description: "McDonalds", amount: -20 },
    { id: 14, description: "Work", amount: 1000 },
    { id: 15, description: "Qonto", amount: -32 },
    { id: 16, description: "KFC", amount: -12 },
  ]);

  return (
    <div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex justify-between pr-8 pl-8 bg-slate-100 border-2"
        >
          <h2>{transaction.description}</h2>
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
