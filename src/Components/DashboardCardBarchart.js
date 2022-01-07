import Barchart from "./Barchart";
import "./DashboardCard.css";

export const DashboardCardBarchart = () => {
  return (
    <div className="dashboardcard-box">
      <div className="dashboardcard-header-box">
        <h2 className="dashboardcard-header">Income vs Expense</h2>
        <div className="dashboardcard-subheader">Monthly Analysis</div>
      </div>
      <Barchart></Barchart>
    </div>
  );
};
