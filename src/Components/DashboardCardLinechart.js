import Linechart from "./Linechart";
import "./DashboardCard.css";
import { useState } from "react";
import useDate from "../Hooks/useDate";

export const DashboardCardLinechart = ({ transactions }) => {
	const { today, oneWeekAgo, oneMonthAgo, oneYearAgo } = useDate();
	const [clicked, setClicked] = useState([false, false, false]);
	const [filteredTransactions, setFilteredTransactions] = useState([
		...transactions,
	]);

	const filterTransactions = () => {
		if (clicked[0]) {
			setFilteredTransactions(
				transactions.filter(
					(transaction) =>
						transaction.type === "expense" &&
						transaction.date <= today &&
						transaction.date >= oneWeekAgo
				)
			);
		} else if (clicked[1]) {
			setFilteredTransactions(
				transactions.filter(
					(transaction) =>
						transaction.type === "expense" &&
						transaction.date <= today &&
						transaction.date >= oneMonthAgo
				)
			);
		} else {
			setFilteredTransactions(
				transactions.filter(
					(transaction) =>
						transaction.type === "expense" &&
						transaction.date <= today &&
						transaction.date >= oneYearAgo
				)
			);
		}
	};
	const chartProps = {
		today,
		oneWeekAgo,
		oneMonthAgo,
		oneYearAgo,
		filteredTransactions,
	};

	return (
		<div className="dashboardcard-box">
			<div className="dashboardcard-header-box">
				<h2 className="dashboardcard-header">Expenses</h2>
				<div className="dashboardcard-subheader">Weekly expenses</div>
			</div>
			<div className="flex flex-row justify-center gap-4">
				<button
					className={
						"rounded-full border-2 w-fit p-2 text-sm " +
						(clicked[0] ? "bg-blue-500 text-white" : "bg-white")
					}
					onClick={() => {
						setClicked([true, false, false]);
						filterTransactions();
					}}
				>
					Past 7 Days
				</button>
				<button
					className={
						"rounded-full border-2 w-fit p-2 text-sm " +
						(clicked[1] ? "bg-blue-500 text-white" : "bg-white")
					}
					onClick={() => {
						setClicked([false, true, false]);
						filterTransactions();
					}}
				>
					Past Month
				</button>
				<button
					className={
						"rounded-full border-2 w-fit p-2 text-sm " +
						(clicked[2] ? "bg-blue-500 text-white" : "bg-white")
					}
					onClick={() => {
						setClicked([false, false, true]);
						filterTransactions();
					}}
				>
					Past Year
				</button>
			</div>
			<Linechart {...chartProps} />
		</div>
	);
};
