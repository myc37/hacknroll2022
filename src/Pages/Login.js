import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	const nav = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			setLoading(false);
			nav("/");
		} catch (error) {
			toast.error(error.message.substring(10), {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: true,
				pauseOnHover: false,
				draggable: false,
				theme: "colored",
			});
			setLoading(false);
		}
	}

	return (
		<>
			<ToastContainer />
			<div className="h-screen flex items-center justify-center py-12 px-4">
				<form
					className="border-2 border-dark flex-col px-12 py-12"
					onSubmit={handleSubmit}
				>
					{/* <h1>{currentUser.email}</h1> */}
					<h2 className="mb-6 text-center jutify-center text-lg font-bold text-blue-700">
						Login
					</h2>
					<label className="font-semibold" htmlFor="email">
						Email address
					</label>
					<input
						type="email"
						name="email"
						className="mt-3 p-2 w-full py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						ref={emailRef}
					/>
					<label className="font-semibold" htmlFor="password">
						Password
					</label>
					<input
						type="password"
						name="password"
						className="mt-3 p-2 w-full py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
						ref={passwordRef}
					/>

					<Link
						to="/reset"
						className="text-xs flex justify-end text-blue-700 "
					>
						{" "}
						forgot your password?
					</Link>

					<input
						className="p-2 w-full mt-3 display: block bg-blue-500 rounded-md px-4 py-2 text-sm text-white hover:cursor-pointer hover:bg-blue-400"
						type="submit"
						value="Submit"
						disabled={loading}
					/>
				</form>
			</div>
		</>
	);
};

export default Login;
