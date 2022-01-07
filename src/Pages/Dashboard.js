import React, { useEffect } from "react";
import { DashboardCardBarchart } from "../Components/DashboardCardBarchart";
import { DashboardCardLinechart } from "../Components/DashboardCardLinechart";
import { DashboardCardPiechart } from "../Components/DashboardCardPiechart";
import { DashboardCardTransactionHistory } from "../Components/DashboardCardTransactionHistory";

const Dashboard = () => {
  useEffect(() => {}, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="grid grid-cols-8 gap-4">
        <DashboardCardTransactionHistory />
        <DashboardCardBarchart />
        <DashboardCardPiechart />
        <DashboardCardLinechart />
      </div>
    </div>
  );
};

export default Dashboard;
