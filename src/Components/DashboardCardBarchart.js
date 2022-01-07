import { useState } from "react";
import Barchart from "./Barchart";
import "./DashboardCard.css";
import useDate from "../Hooks/useDate";

export const DashboardCardBarchart = ({ transactions }) => {
	var sum = 0;
	transactions.map((transaction) => {
		sum += transaction.amount;
	});

	const [clicked, setClicked] = useState([true, false, false]);

	return (
		<div className="dashboardcard-box">
			<div className="dashboardcard-header-box">
				<h2 className="dashboardcard-header">Income vs Expense</h2>
				<div className="flex flex-row justify-center gap-4">
					<button
						className={
							"rounded-full border-2 w-fit p-2 text-sm " +
							(clicked[0] ? "bg-blue-500 text-white" : "bg-white")
						}
						onClick={() => setClicked([true, false, false])}
					>
						Past 7 Days
					</button>
					<button
						className={
							"rounded-full border-2 w-fit p-2 text-sm " +
							(clicked[1] ? "bg-blue-500 text-white" : "bg-white")
						}
						onClick={() => setClicked([false, true, false])}
					>
						Past Month
					</button>
					<button
						className={
							"rounded-full border-2 w-fit p-2 text-sm " +
							(clicked[2] ? "bg-blue-500 text-white" : "bg-white")
						}
						onClick={() => setClicked([false, false, true])}
					>
						Past Year
					</button>
				</div>
			</div>
			<div className="text-xs font-semibold text-gray-400 uppercase mb-1 ml-10">
				Total:
			</div>
			<div className="flex items-start">
				<div
					className={
						"text-2xl font-bold text-white ml-10 mb-5 px-3 py-1 rounded-full " +
						(sum > 0 ? "bg-green-500" : "bg-red-500")
					}
				>
					{sum > 0 ? "+" : "-"}${sum}
				</div>
			</div>
			<Barchart></Barchart>
		</div>
	);
};
