import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./Contexts/AuthContext";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Footer from "./Pages/Landing/components/Footer";
import Navbar from "./Pages/Landing/components/Navbar";
import News from "./Pages/News";
import History from "./Pages/History";

function App() {
	const { currentUser } = useAuth();
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					exact
					path="/"
					element={currentUser ? <Dashboard /> : <Home />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/reset" element={<ResetPassword />} />
				<Route
					path="/news"
					element={currentUser ? <News /> : <Navigate to="/login" />}
				/>
				<Route
					path="/history"
					element={
						currentUser ? <History /> : <Navigate to="/login" />
					}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
