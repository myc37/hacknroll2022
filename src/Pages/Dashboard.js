import React, { useEffect, useState } from "react";
import { DashboardCardBarchart } from "../Components/DashboardCardBarchart";
import { DashboardCardLinechart } from "../Components/DashboardCardLinechart";
import { DashboardCardPiechart } from "../Components/DashboardCardPiechart";
import { DashboardCardTransactionHistory } from "../Components/DashboardCardTransactionHistory";
import { useAuth } from "../Contexts/AuthContext";
import { db } from "../firebase";

const Dashboard = () => {
	const [data, setData] = useState([]);
	const { currentUser } = useAuth();

	useEffect(() => {
		async function fetchData() {
			try {
				db.collection("transactions")
					.where("user", "==", currentUser.uid)
					.onSnapshot((querySnapshot) => {
						const items = [];
						querySnapshot.forEach((doc) => {
							const docData = doc.data();
							docData.date = docData.date.toDate();
							items.push(docData);
						});

						setData(items);
					});
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
			<h1>Welcome {currentUser ? currentUser.email : "user"} </h1>
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
