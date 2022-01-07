import { useState, useEffect } from "react";

export default function TransactionHistory({
	transactions,
	today,
	oneWeekAgo,
}) {
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		const temp = transactions.filter(
			(transaction) =>
				transaction.date >= oneWeekAgo && transaction.date <= today
		);
		setFiltered(temp);
	}, [transactions]);

	console.log(filtered);

	return (
		<div>
			{filtered.map((transaction, index) => (
				<div
					key={index}
					className="flex justify-between pr-8 pl-8 bg-slate-100 border-2"
				>
					<h2>{transaction.type}</h2>
					<p>
						{transaction.amount < 0 ? "-" : "+"}$
						{transaction.amount < 0
							? -1 * transaction.amount
							: transaction.amount}
					</p>
				</div>
			))}
		</div>
	);
}
