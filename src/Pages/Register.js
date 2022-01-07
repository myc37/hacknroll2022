import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const Register = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmRef = useRef();
	const [loading, setLoading] = useState(false);
	const { register } = useAuth();
	const nav = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		if (passwordRef.current.value !== confirmRef.current.value) return;

		try {
			setLoading(true);
			await register(emailRef.current.value, passwordRef.current.value);
			nav("/login");
		} catch (error) {
			console.log("error");
		}
		setLoading(false);
	}

	return (
		<div className="bg-yellow-500">
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					className="bg-blue-200"
					ref={emailRef}
				/>
				<input
					type="password"
					name="password"
					className="bg-red-200"
					ref={passwordRef}
				/>
				<input
					type="password"
					name="confirm"
					className="bg-green-200"
					ref={confirmRef}
				/>
				<input type="submit" value="submit" disabled={loading} />
			</form>
		</div>
	);
};

export default Register;
