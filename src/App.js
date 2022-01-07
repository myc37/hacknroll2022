import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResetPassword from "./Pages/ResetPassword";
import Transaction from "./Pages/Transaction";
import Footer from "./Pages/Landing/components/Footer";
import Navbar from "./Pages/Landing/components/Navbar";

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
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
