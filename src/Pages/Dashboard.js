import React from "react";
import { DashboardCardBarchart } from "../Components/DashboardCardBarchart";

const Dashboard = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="grid grid-cols-8 gap-4">
        <DashboardCardBarchart />
        <DashboardCardBarchart />
        <DashboardCardBarchart />
        <DashboardCardBarchart />
      </div>
    </div>
  );
};

export default Dashboard;
