import Barchart from "./Barchart";
import "./DashboardCard.css";

export const DashboardCardBarchart = () => {
  return (
    <div className="dashboardcard-box">
      <div className="dashboardcard-header-box">
        <h2 className="dashboardcard-header">Income vs Expense</h2>
        <div className="dashboardcard-subheader">Monthly Analysis</div>
      </div>
      <div className="text-xs font-semibold text-gray-400 uppercase mb-1 ml-10">
        Total:
      </div>
      <div className="flex items-start">
        <div className="text-2xl font-bold text-white ml-10 mb-5 px-3 py-1 bg-green-500 rounded-full">
          +$24,780
        </div>
      </div>
      <Barchart></Barchart>
    </div>
  );
};
