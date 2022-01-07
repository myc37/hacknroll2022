import TransactionHistory from "./TransactionHistory";
import "./DashboardCard.css";

export const DashboardCardTransactionHistory = () => {
  return (
    <div className="dashboardcard-transaction-box">
      <div className="dashboardcard-header-box">
        <h2 className="dashboardcard-header">Transactions</h2>
        <div className="dashboardcard-subheader">Past 7 days</div>
        <div className="dashboardcard-amount">Amount</div>
      </div>
      <TransactionHistory />
    </div>
  );
};
