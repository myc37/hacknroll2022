import { useEffect, useState } from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CategoryIcon from "@mui/icons-material/Category";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import DiamondIcon from "@mui/icons-material/Diamond";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function TransactionHistory({
	transactions,
	today,
	oneWeekAgo,
}) {
	const [filtered, setFiltered] = useState([]);

	const categories = {
		Income: <AttachMoneyIcon />,
		Food: <FastfoodIcon />,
		Transport: <DirectionsBusFilledIcon />,
		Luxury: <DiamondIcon />,
		Business: <BusinessCenterIcon />,
		Other: <CategoryIcon />,
	};

	useEffect(() => {
		const temp = transactions.filter(
			(transaction) =>
				transaction.date >= oneWeekAgo && transaction.date <= today
		);
		setFiltered(temp);
	}, [transactions]);

	return (
		<div className="py-4 px-16">
			{filtered.map((transaction, index) => (
				<div
					key={index}
					className={
						transaction.type === "expense"
							? "flex justify-between pr-8 pl-8 bg-red-400 hover:bg-red-500 border-2 border-gray-500 py-5 rounded-lg"
							: "flex justify-between pr-8 pl-8 bg-green-500 hover:bg-green-600 border-2 border-gray-500 py-5 rounded-lg"
					}
				>
					<div className="flex flex-column items-end">
						{categories[transaction.category]}
						<p className="ml-2 text-xl font-semibold">
							{transaction.title}
						</p>
					</div>
					<p className="text-xl font-semibold">
						$
						{transaction.amount < 0
							? -1 * transaction.amount
							: transaction.amount}
					</p>
				</div>
			))}
		</div>
	);
}
