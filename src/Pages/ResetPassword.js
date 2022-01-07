import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const emailRef = useRef();
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await resetPassword(emailRef.current.value);
      toast.success(
        "Email to reset your password has been sent to your inbox!",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
        }
      );
      setLoading(false);
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
      // console.log(error.message.substring(10));
      // console.log(typeof error.message);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <form
          className="border-2 border-dark flex-col px-16 py-12"
          onSubmit={handleSubmit}
        >
          <h2 className="mb-6 text-center jutify-center text-lg font-bold text-blue-700">
            Reset Password
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
          <input
            className="mt-4 p-2 w-full display : block:display bg-blue-500 rounded-lg px-4 py-2 text-sm text-white hover:cursor-pointer hover:bg-blue-400"
            type="submit"
            value="Submit"
            disabled={loading}
          />
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
