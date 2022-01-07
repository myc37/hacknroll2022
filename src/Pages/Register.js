import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase";

const Register = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const [loading, setLoading] = useState(false);
  const { currentUser, register } = useAuth();
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmRef.current.value) return;

    try {
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      console.log(firstNameRef.current.value);
      await db
        .collection("userInfo")
        .doc(emailRef.current.value)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            db.collection("userInfo")
              .doc(emailRef.current.value)
              .set({
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
              })
              .then((docRef) => {
                //console.log(docRef);
              })
              .catch((error) => {
                //console.log(error);
              });
          }
        });
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
            Registration
          </h2>

          <label className="font-semibold" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="mt-3 p-2 w-full py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={firstNameRef}
          />

          <label className="font-semibold" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="mt-3 p-2 w-full py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={lastNameRef}
          />

          <label className="font-semibold" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="mt-3 p-2 w-full py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={emailRef}
          />
          <label className="font-semibold" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="mt-3 p-2 w-full py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={passwordRef}
          />
          <label className="font-semibold" htmlFor="confirm">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm"
            className="mt-3 p-2 w-full py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={confirmRef}
          />
          <span className="text-xs">Have an existing account?</span>
          <Link to="/login" className="text-xs text-blue-700 ">
            {" "}
            Log in here!
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

export default Register;
