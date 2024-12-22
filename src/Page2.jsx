import React from "react";
import twoFingers from "./assets/page2-1.jpg";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-yellow-100 flex flex-col items-center justify-center text-center p-6">
      {/* Image */}
      <img
        src={twoFingers}
        alt=""
        className="mix-blend-multiply w-60 h-60 -mt-40 rounded-full shadow-2xl border-4 border-pink-200"
      />

      {/* Romantic Heading */}
      <h1 className="text-2xl mt-10 sm:text-6xl font-extrabold text-pink-800 bg-gradient-to-r from-pink-200 via-red-200 to-yellow-100 bg-clip-text animate-pulse shadow-lg rounded-xl px-8 py-4 border-4 border-pink-300 hover:bg-pink-100 hover:text-pink-800 hover:shadow-2xl transition duration-500 ease-in-out tracking-wide flex items-center justify-center gap-3">
        Lag to mera 
        <span className="animate-heartbeat text-red-500 text-4xl">❤️</span>
        Poluu hi rha h
      </h1>

      {/* Buttons */}
      <div  className="flex gap-x-10 mt-10">
        <button onClick={() => navigate("/thirdPage")} className="bg-rose-300 hover:bg-pink-300 text-white text-xl font-bold px-6 py-3 rounded-full shadow-xl border-2 border-pink-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex items-center gap-2">
          Hnji 💗😁
        </button>
        <button
          onClick={() => navigate("/secondPageNo")}
          className="bg-purple-400 hover:bg-purple-300 text-white text-xl font-bold px-6 py-3 rounded-full shadow-xl border-2 border-purple-200 hover:shadow-2xl transition-all duration-300 ease-in-out flex items-center gap-2"
        >
          No 😒✋
        </button>
      </div>

      {/* Romantic Footer */}
      <footer className="mt-16 text-sm sm:text-lg text-pink-600 font-medium">
        Lobbb 💕 Juuuu ✨
      </footer>
    </div>
  );
};

export default Page2;
