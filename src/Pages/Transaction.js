import React, { useState } from "react";
import { db } from "../firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from "@mui/material";
import { useAuth } from "../Contexts/AuthContext";

const expenseOptions = ["Transport", "Food", "Luxury", "Business", "Others"];

const Transaction = ({ open, setOpen }) => {
	const { currentUser } = useAuth();
	const [date, setDate] = useState(new Date());
	const [title, setTitle] = useState("");
	const [type, setType] = useState("");
	const [amount, setAmount] = useState("");
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();
		const formData = {
			date,
			title,
			type,
			amount:
				type === "income"
					? parseFloat(amount)
					: parseFloat("-" + amount),
			category: category === "expense" ? category : "Income",
			description,
			user: currentUser ? currentUser.uid : "",
		};
		try {
			await db.collection("transactions").add(formData);
			toast.success("Added Transaction!", {
				position: "top-center",
				autoClose: 3000,
				hideProgressBar: true,
				pauseOnHover: false,
				draggable: false,
				theme: "colored",
			});
			setOpen(false);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Dialog open={open} onClose={() => setOpen(false)}>
			<DialogTitle>
				<p className="w-full text-center font-semibold text-4xl my-4">
					Add Transaction
				</p>
			</DialogTitle>
			<DialogContent>
				<form
					id="transactionForm"
					name="transactionForm"
					className="grid grid-rows-auto gap-4 place-content-center p-4"
					onSubmit={handleSubmit}
				>
					<div>
						<label
							htmlFor="title"
							className="block font-semibold text-blue-700 mb-2"
						>
							Title
							<p className="text-red-500 inline-block">*</p>
						</label>
						<input
							type="text"
							name="title"
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="rounded-md border-2 border-gray-400 p-2 text-center w-full"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="datepicker"
							className="block font-semibold text-blue-700 mb-2"
						>
							Date
							<p className="text-red-500 inline-block">*</p>
						</label>
						<DatePicker
							name="datepicker"
							id="datepicker"
							selected={date}
							maxDate={new Date()}
							onChange={(e) => setDate(e)}
							className="p-2 rounded-md border-2 border-gray-400 w-full text-center"
						/>
					</div>
					<div>
						<label
							htmlFor="type"
							className="block font-semibold text-blue-700 mb-2"
						>
							Type
							<p className="text-red-500 inline-block">*</p>
						</label>
						<select
							name="type"
							id="type"
							value={type}
							onChange={(e) => {
								setType(e.target.value);
							}}
							className="rounded-md border-2 border-gray-400 w-full p-2 text-center"
							required
						>
							<option value="">-- Choose --</option>
							<option value="income">Income</option>
							<option value="expense">Expense</option>
						</select>
					</div>

					<div>
						<label
							htmlFor="category"
							className="block font-semibold text-blue-700 mb-2"
						>
							Category
							{type === "expense" && (
								<p className="text-red-500 inline-block">*</p>
							)}
						</label>
						<select
							name="category"
							id="category"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							disabled={type !== "expense"}
							className="rounded-md border-2 border-gray-400 w-full p-2 text-center"
							required={type === "expense"}
						>
							<option value="">-- Choose --</option>
							{type === "expense" &&
								expenseOptions.map((option, index) => {
									return (
										<option key={index} value={option}>
											{option}
										</option>
									);
								})}
							{type !== "expense" && <option>-- N.A. --</option>}
						</select>
					</div>

					<div className="w-full">
						<label
							htmlFor="amount"
							className="block font-semibold text-blue-700 mb-2"
						>
							Amount
							<p className="text-red-500 inline-block">*</p>
						</label>
						<input
							name="amount"
							id="amount"
							type="number"
							step="0.01"
							min="0"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							className="rounded-md border-2 border-gray-400 p-2 text-center w-full"
							required
						/>
					</div>

					<div className="w-full">
						<label
							htmlFor="description"
							className="block font-semibold text-blue-700 mb-2"
						>
							Description
						</label>
						<textarea
							name="description"
							id="description"
							rows="5"
							cols="50"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="border-2 border-gray-400 rounded-md p-2"
						></textarea>
					</div>
				</form>
			</DialogContent>
			<DialogActions>
				<input
					type="submit"
					form="transactionForm"
					value="Submit"
					className="rounded-lg bg-blue-500 px-4 py-2 w-fit text-white text-lg hover:cursor-pointer hover:bg-blue-400"
				/>

				<button
					onClick={() => setOpen(false)}
					className="rounded-lg bg-red-500 px-4 py-2 w-fit text-white text-lg hover:cursor-pointer hover:bg-red-400 ml-2"
				>
					Close
				</button>
			</DialogActions>
		</Dialog>
	);
};

export default Transaction;
