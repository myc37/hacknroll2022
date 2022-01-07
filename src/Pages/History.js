import React, { useEffect, useState } from "react";
import Daterange from "../Components/Daterange";
import TransactionHistory from "../Components/TransactionHistory";
import { useAuth } from "../Contexts/AuthContext";
import { db } from "../firebase";
import useDate from "../Hooks/useDate";
import Transaction from "./Transaction";

const History = () => {
  const [open, setOpen] = useState(false);
  const props = { open, setOpen };

  const [transactions, setTransactions] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchData() {
      db.collection("transactions")
        .where("user", "==", currentUser.uid)
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            const docData = doc.data();
            docData.date = docData.date.toDate();
            items.push(docData);
          });

          setTransactions(items);
        });
    }
    fetchData();
  }, []);

  const { today, oneWeekAgo } = useDate();
  const weeklyProps = { today, oneWeekAgo, transactions };

  return (
    <>
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-2xl border border-gray-200">
        <div className="dashboardcard-header-box">
          <div className="flex justify-between items-center">
            <h2 className="dashboardcard-header-transaction">
              Transaction History
            </h2>
            <Daterange />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
              onClick={() => setOpen(true)}
            >
              Add a transaction
            </button>
          </div>
          <div className="dashboardcard-amount mt-5">Amount</div>
        </div>
        <TransactionHistory {...weeklyProps} />
      </div>
      <Transaction {...props} />
    </>
  );
};

export default History;
