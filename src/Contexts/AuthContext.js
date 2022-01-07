import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	function register(email, password) {
		return auth.createUserWithEmailAndPassword(email, password);
	}

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email);
	}

	useEffect(() => {
		return auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
	}, []);

	const values = {
		currentUser,
		register,
		login,
		logout,
		resetPassword,
	};

	return (
		<AuthContext.Provider value={values}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
