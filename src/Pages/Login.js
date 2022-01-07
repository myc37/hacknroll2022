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
      nav("/dashboard");
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
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <form
          className="border-2 border-dark flex-col px-12 py-12"
          onSubmit={handleSubmit}
        >
          {/* <h1>{currentUser.email}</h1> */}
          <h2 className="text-lg font-bold mb-4 text-blue-700">Login</h2>
          <label className="font-semibold" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="p-2 w-full py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={emailRef}
          />
          <label className="font-semibold" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="p-2 w-full py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={passwordRef}
          />
          <span className="text-xs">Don't have an account?</span>
          <Link to="/register" className="text-xs text-blue-700 ">
            {" "}
            Sign up here!
          </Link>
          <input
            className="p-2 w-full mt-3 display: block bg-blue-500 rounded-md px-4 py-2 text-sm text-white hover:cursor-pointer"
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
