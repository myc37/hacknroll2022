import Linechart from "./Linechart";
import "./DashboardCard.css";
import { useState } from "react";
import useDate from "../Hooks/useDate";

export const DashboardCardLinechart = ({ transactions }) => {
	const { today, oneWeekAgo, oneMonthAgo, oneYearAgo } = useDate();
	const [clicked, setClicked] = useState(-1);
	const [filteredTransactions, setFilteredTransactions] = useState([]);

	const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const monthLabels = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const filterWeek = transactions.filter(
		(transaction) =>
			transaction.date <= today &&
			transaction.date >= oneWeekAgo &&
			transaction.type === "expense"
	);
	const filterMonth = transactions.filter(
		(transaction) =>
			transaction.date <= today &&
			transaction.date >= oneMonthAgo &&
			transaction.type === "expense"
	);
	const filterYear = transactions.filter(
		(transaction) =>
			transaction.date <= today &&
			transaction.date >= oneYearAgo &&
			transaction.type === "expense"
	);

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
				<div className="flex flex-row justify-center gap-4">
					<button
						className={
							"rounded-full border-2 w-fit p-2 text-sm " +
							(clicked === 0
								? "bg-blue-500 text-white"
								: "bg-white")
						}
						onClick={() => {
							setClicked(0);
							const dailyTransactions = [
								[],
								[],
								[],
								[],
								[],
								[],
								[],
							];
							filterWeek.forEach((transaction) => {
								const index = transaction.date.getDay();
								dailyTransactions[index].push(
									-transaction.amount
								);
							});
							const dailyData = dailyTransactions.map(
								(day, index) => ({
									name: labels[index],
									amount: day.reduce((a, b) => a + b, 0),
								})
							);
							setFilteredTransactions(dailyData);
						}}
					>
						Past 7 Days
					</button>
					<button
						className={
							"rounded-full border-2 w-fit p-2 text-sm " +
							(clicked === 1
								? "bg-blue-500 text-white"
								: "bg-white")
						}
						onClick={() => {
							setClicked(1);
							const weeklyTransactions = [[], [], [], []];
							filterMonth.forEach((transaction) => {
								const index = Math.abs(
									Math.floor(
										(today.getDate() -
											transaction.date.getDate()) /
											7
									)
								);
								weeklyTransactions[index].push(
									-transaction.amount
								);
							});

							const weeklyData = weeklyTransactions.map(
								(week, index) => ({
									name:
										index === 0
											? "1 week ago"
											: `${index + 1} weeks ago`,
									amount: week.reduce((a, b) => a + b, 0),
								})
							);
							setFilteredTransactions(weeklyData);
						}}
					>
						Past Month
					</button>
					<button
						className={
							"rounded-full border-2 w-fit p-2 text-sm " +
							(clicked === 2
								? "bg-blue-500 text-white"
								: "bg-white")
						}
						onClick={() => {
							setClicked(2);
							const monthlyTransactions = [
								[],
								[],
								[],
								[],
								[],
								[],
								[],
								[],
								[],
								[],
								[],
								[],
							];
							filterYear.forEach((transaction) => {
								const index = transaction.date.getMonth();
								monthlyTransactions[index].push(
									-transaction.amount
								);
							});

							for (let i = 0; i < today.getMonth(); i++) {
								monthlyTransactions.push(
									monthlyTransactions.shift()
								);
								monthLabels.push(monthLabels.shift());
							}

							const monthlyData = monthlyTransactions.map(
								(month, index) => ({
									name: monthLabels[index],
									amount: month.reduce((a, b) => a + b, 0),
								})
							);
							setFilteredTransactions(monthlyData);
						}}
					>
						Past Year
					</button>
				</div>
			</div>
			<Linechart {...chartProps} />
		</div>
	);
};
