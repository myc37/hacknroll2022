import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Daterange = () => {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	return (
		<div className="flex flex-row">
			<DatePicker
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				selectsStart
				startDate={startDate}
				endDate={endDate}
				className="text-right mr-2"
			/>
			<p>-</p>
			<DatePicker
				selected={endDate}
				onChange={(date) => setEndDate(date)}
				selectsEnd
				startDate={startDate}
				endDate={endDate}
				minDate={startDate}
				maxDate={new Date()}
				className="text-left ml-2"
			/>
		</div>
	);
};

export default Daterange;
