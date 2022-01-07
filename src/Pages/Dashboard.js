import React, { useEffect, useState } from "react";
import { DashboardCardBarchart } from "../Components/DashboardCardBarchart";
import { DashboardCardLinechart } from "../Components/DashboardCardLinechart";
import { DashboardCardPiechart } from "../Components/DashboardCardPiechart";
import { DashboardCardTransactionHistory } from "../Components/DashboardCardTransactionHistory";
import firebase from "../firebase";
import { useAuth } from "../Contexts/AuthContext";
// import { db } from "../firebase";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  function getTransactionsByUid() {
    const tempData = [];
    data.filter((data) =>
      currentUser.uid === data.user ? tempData.push(data) : console.log("")
    );
    setData(tempData);
  }

  const ref = firebase.firestore().collection("transactions");

  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      getTransactionsByUid();
      setLoading(false);
    });
  }

  useEffect(() => {
    // async function fetchData() {
    // 	await db
    // 		.collection("transactions")
    // 		.get()
    // 		.then((res) => console.log(res.docs));
    // }
    // fetchData();
    getData();
  }, []);

  // [{date: 01/07/2022, category: transport, amount: 100, description: ""}]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="grid grid-cols-8 gap-4">
        <DashboardCardTransactionHistory data={data} />
        <DashboardCardBarchart />
        <DashboardCardPiechart />
        <DashboardCardLinechart />
      </div>
    </div>
  );
};

export default Dashboard;
