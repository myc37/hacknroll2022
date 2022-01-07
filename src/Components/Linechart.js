import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

export default function Linechart({
	filteredTransactions,
	today,
	oneWeekAgo,
	oneMonthAgo,
	oneYearAgo,
}) {
	const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const dailyTransactions = [[], [], [], [], [], [], []];
	filteredTransactions.forEach((transaction) => {
		const index = transaction.date.getDay();
		dailyTransactions[index].push(-transaction.amount);
	});
	console.log(dailyTransactions);

	const data = dailyTransactions.map((day, index) => ({
		name: labels[index],
		amount: day.reduce((a, b) => a + b, 0),
	}));
	console.log(data);

	return (
		<ResponsiveContainer width="100%" aspect={3}>
			<LineChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend verticalAlign="top" height={36} />
				<Line
					name="Amount Spent"
					type="monotone"
					dataKey="amount"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
