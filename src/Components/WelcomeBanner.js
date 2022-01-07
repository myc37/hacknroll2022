import React from "react";

export default function WelcomeBanner(props) {
  return (
    <div className="relative bg-sky-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">
          Good {props.greeting}, {props.name} 👋
        </h1>
        <p>Here is an analysis of your expense and income.</p>
      </div>
    </div>
  );
}
