import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

const expenseOptions = ["Transport", "Food", "Luxury", "Business", "Others"];

const Transaction = () => {
	const [type, setType] = useState("");
	const [amount, setAmount] = useState(0.0);
	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const nav = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			await db.collection("transactions").add({
				type,
				amount,
				category,
				description,
			});
			nav("/");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
			<h1 className="w-full text-center font-semibold text-4xl my-4">
				Add Transaction
			</h1>
			<form
				onSubmit={handleSubmit}
				className="grid grid-rows-auto gap-4 place-content-center"
			>
				<div className="mt-4">
					<label
						htmlFor="type"
						className="block font-semibold text-blue-700 mb-2"
					>
						Type:
					</label>
					<select
						name="type"
						id="type"
						value={type}
						onChange={(e) => {
							setType(e.target.value);
						}}
						className="rounded-md border-2 w-full p-2 text-center"
						required
					>
						<option value="">--Choose--</option>
						<option value="income">Income</option>
						<option value="expense">Expense</option>
					</select>
				</div>

				<div>
					<label
						htmlFor="category"
						className="block font-semibold text-blue-700 mb-2"
					>
						Category:
					</label>
					<select
						name="category"
						id="category"
						onChange={(e) => setCategory(e.target.value)}
						disabled={type !== "expense"}
						className="rounded-md border-2 w-full p-2 text-center"
						required={type === "expense"}
					>
						{type === "expense" &&
							expenseOptions.map((option, index) => {
								return (
									<option key={index} value={option}>
										{option}
									</option>
								);
							})}
						{type !== "expense" && <option>--N.A.--</option>}
					</select>
				</div>

				<div className="w-full">
					<label
						htmlFor="amount"
						className="block font-semibold text-blue-700 mb-2"
					>
						Amount:
					</label>
					<input
						name="amount"
						id="amount"
						type="number"
						step="0.01"
						min="0"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						className="rounded-md border-2 p-2 text-center w-full"
						required
					/>
				</div>

				<div className="w-full">
					<label
						htmlFor="description"
						className="block font-semibold text-blue-700 mb-2"
					>
						Description:
					</label>
					<textarea
						name="description"
						id="description"
						rows="5"
						cols="50"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="border-2 rounded-md p-2"
					></textarea>
				</div>

				<input
					type="submit"
					value="Submit"
					className="rounded-lg bg-blue-500 px-4 py-2 w-fit m-auto text-white text-sm hover:cursor-pointer"
				/>
			</form>
		</>
	);
};

export default Transaction;
