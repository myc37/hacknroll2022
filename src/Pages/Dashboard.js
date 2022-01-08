import React, { useEffect, useState } from "react";
import { DashboardCardBarchart } from "../Components/DashboardCardBarchart";
import { DashboardCardLinechart } from "../Components/DashboardCardLinechart";
import { DashboardCardPiechart } from "../Components/DashboardCardPiechart";
import { DashboardCardTransactionHistory } from "../Components/DashboardCardTransactionHistory";
import WelcomeBanner from "../Components/WelcomeBanner";
import { useAuth } from "../Contexts/AuthContext";
import { db } from "../firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
	const [data, setData] = useState([]);
	const [name, setName] = useState("");

	const { currentUser } = useAuth();

	async function retrieveUserData() {
		const info = await db
			.collection("userInfo")
			.doc(currentUser.email)
			.get();
		// console.log(info.data().firstName);
		setName(`${info.data().firstName} ${info.data().lastName}`);
	}

	retrieveUserData();

	//   console.log(new Date().getHours());

	function checkHours() {
		var greeting = "";
		const hrs = new Date().getHours();
		if (hrs > 17) {
			greeting = "evening";
		} else if (hrs > 11) {
			greeting = "afternoon";
		} else {
			greeting = "morning";
		}
		return greeting;
	}

	useEffect(() => {
		async function fetchData() {
			try {
				db.collection("transactions")
					.where("user", "==", currentUser.uid)
					.orderBy("date", "desc")
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
			<WelcomeBanner name={name} greeting={checkHours()} />
			{/* <h1>Welcome {currentUser ? currentUser.email : "user"} </h1> */}
			<div className="grid grid-cols-8 gap-4">
				<DashboardCardTransactionHistory transactions={data} />
				<DashboardCardBarchart transactions={data} />
				<DashboardCardPiechart transactions={data} />
				<DashboardCardLinechart transactions={data} />
			</div>
			<ToastContainer />
		</div>
	);
};

export default Dashboard;
