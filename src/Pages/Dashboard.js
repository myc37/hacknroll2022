import React, { useEffect, useState } from "react";
import { DashboardCardBarchart } from "../Components/DashboardCardBarchart";
import { DashboardCardLinechart } from "../Components/DashboardCardLinechart";
import { DashboardCardPiechart } from "../Components/DashboardCardPiechart";
import { DashboardCardTransactionHistory } from "../Components/DashboardCardTransactionHistory";
import { useAuth } from "../Contexts/AuthContext";
import { db } from "../firebase";

const Dashboard = () => {
  const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  

  

  useEffect(() => {
    async function getData() {

      await db.collection("transactions").where("user", "==", currentUser.uid).onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setData(items);
        //setLoading(false);
      });
    }
    getData();
  }, [currentUser]);

  // [{date: 01/07/2022, category: transport, amount: 100, description: ""}]
  console.log(data)

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="grid grid-cols-8 gap-4">
        <DashboardCardTransactionHistory transactions={data} />
        <DashboardCardBarchart />
        <DashboardCardPiechart transactions={data} />
        <DashboardCardLinechart />
      </div>
    </div>
  );
};

export default Dashboard;
