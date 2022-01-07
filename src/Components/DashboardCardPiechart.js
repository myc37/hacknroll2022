import Piechart from "./Piechart";
import "./DashboardCard.css";

export const DashboardCardPiechart = () => {
  return (
    <div className="dashboardcard-box">
      <div className="dashboardcard-header-box">
        <h2 className="dashboardcard-header">Expenses</h2>
        <div className="dashboardcard-subheader">Categories</div>
      </div>
      <Piechart></Piechart>
    </div>
  );
};
