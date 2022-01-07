import Barchart from "./Barchart";
import "./DashboardCard.css";

export const DashboardCardBarchart = () => {
  return (
    <div className="dashboardcard-box">
      <div className="dashboardcard-header-box">
        <h2 className="dashboardcard-header">Income vs Expense</h2>
        <div className="dashboardcard-subheader">Monthly Analysis</div>
      </div>
      <div className="text-xs font-semibold text-gray-400 uppercase mb-1 ml-2">
        Total:
      </div>
      <div className="flex items-start">
        <div className="text-3xl font-bold text-gray-800 ml-2">$24,780</div>
        <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full ml-2">
          +49%
        </div>
      </div>
      <Barchart></Barchart>
    </div>
  );
};
