import Linechart from "./Linechart";
import "./DashboardCard.css";

export const DashboardCardLinechart = () => {
  return (
    <div className="dashboardcard-box">
      <div className="dashboardcard-header-box">
        <h2 className="dashboardcard-header">Expenses</h2>
        <div className="dashboardcard-subheader">Weekly expenses</div>
      </div>
      <Linechart></Linechart>
    </div>
  );
};
