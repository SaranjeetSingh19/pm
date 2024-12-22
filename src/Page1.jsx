import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import doubtImg from "./assets/page1.gif";
import error1 from "./assets/page1-error1.gif";
import error2 from "./assets/page1-error2.gif";
import error3 from "./assets/page1-error3.gif";

const Page1 = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctPassword = "kuchupuchu";  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      navigate("/secondPage");
    } else {
      setError("Oops! That's not the right password. Try again! 🍫");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 to-purple-400 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-2xl font-bold text-white mb-4 sm:text-3xl">
         STOP! PEHLE PASSWORD FIR ENTRY 😏 
      </h1>

      {error ? (
        <div className="flex gap-x-4">
          <img
            src={error1}
            alt="Funny Sticker"
            className="w-24 h-24 mb-6 sm:w-32 sm:h-32"
          />
          <img
            src={error2}
            alt="Funny Sticker"
            className="w-24 h-24 mb-6 sm:w-32 sm:h-32"
          />
          <img
            src={error3}
            alt="Funny Sticker"
            className="w-24 h-24 mb-6 sm:w-32 sm:h-32"
          />
        </div>
      ) : (
        <img
          src={doubtImg}
          alt="Funny Sticker"
          className="w-24 h-24 mb-6 sm:w-32 sm:h-32"
        />
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs flex flex-col items-center"
      >
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Hint: Apun ko bhut psnd h..."
          className="border border-gray-300 rounded-lg p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-pink-600 transition w-full"
        >
          🫣✨ Enter
        </button>
        {/* {error && (
          <p className="text-red-500 text-sm mt-4">
            {error}
          </p>
        )} */}
      </form>
    </div>
  );
};

export default Page1;
