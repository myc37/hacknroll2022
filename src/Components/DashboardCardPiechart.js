import Piechart from "./Piechart";
import "./DashboardCard.css";
import Daterange from "./Daterange";
import useDate from "../Hooks/useDate";


export const DashboardCardPiechart = ({ transactions }) => {
  const { today, oneWeekAgo,oneMonthAgo,oneYearAgo} = useDate();
  const chartProps = { today, oneWeekAgo ,oneMonthAgo,oneYearAgo, transactions }
  return (
    <div className="dashboardcard-box">
      <div className="dashboardcard-header-box">
        <h2 className="dashboardcard-header">Expenses</h2>
        <div className="dashboardcard-subheader">Categories</div>
      </div>
      <Piechart {...chartProps} />
    </div>
  );
};
