import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardCardPiechart } from "./Components/DashboardCardPiechart";
import { AuthProvider } from "./Contexts/AuthContext";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Transaction from "./Pages/Transaction";
import Footer from "./Pages/Landing/components/Footer";
import Navbar from "./Pages/Landing/components/Navbar";
import News from "./Pages/News";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
