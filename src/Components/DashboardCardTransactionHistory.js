import TransactionHistory from "./TransactionHistory";
import "./DashboardCard.css";
import { useState } from "react";
import Transaction from "../Pages/Transaction";

export const DashboardCardTransactionHistory = () => {
  const [open, setOpen] = useState(false);
  const props = { open, setOpen };
  return (
    <>
      <div className="dashboardcard-transaction-box">
        <div className="dashboardcard-header-box">
          <div className="flex justify-between items-center">
            <h2 className="dashboardcard-header-transaction">Transactions</h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
              onClick={() => setOpen(true)}
            >
              Add a transaction
            </button>
          </div>
          <div className="dashboardcard-subheader">Past 7 days</div>
          <div className="dashboardcard-amount">Amount</div>
        </div>
        <TransactionHistory />
      </div>
      <Transaction {...props} />
    </>
  );
};
