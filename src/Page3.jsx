import React from "react";

import dance1 from "./assets/dance1.gif";
import dance2 from "./assets/dance2.jpg";
import dance3 from "./assets/dance3.gif";
import dance4 from "./assets/dance4.gif";
import dance5 from "./assets/dance5.gif";
import dance6 from "./assets/dance6.gif";
import dance7 from "./assets/dance7.gif";
import dance8 from "./assets/dance8.gif";
import dance9 from "./assets/dance9.gif";
import dance10 from "./assets/dance10.gif";
import dance11 from "./assets/dance11.gif";

import { useNavigate } from "react-router-dom";

const Page3 = () => {
  // Array of images
  const images = [
    dance1,
    dance2,
    dance3,
    dance4,
    dance5,
    dance6,
    dance7,
    dance8,
    dance9,
    dance10,
    dance11,
  ];

  const navigate = useNavigate();

  // Function to generate random positions
  const getRandomPosition = () => ({
    top: `${Math.random() * 80}vh`, // Random top position
    left: `${Math.random() * 80}vw`, // Random left position
  });

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden flex items-center justify-center">
      {/* Centered Welcome Text */}
      <h1 className="absolute text-3xl md:text-4xl font-bold shadow-xl shadow-white rounded-md px-6 py-3 text-white text-center z-10">
        Welcome Malik 
        🙇 💞
      </h1>

      <p className="text-sm  opacity-35 -mb-96 bg-black  text-white rounded-xl px-4">
        Click any circle
      </p>

      {/* Randomly Positioned Images */}
      {images.map((image, index) => (
        <img
          onClick={() => navigate("/fourthPage")}
          key={index}
          src={image}
          alt={`dance-${index}`}
          style={getRandomPosition()}
          className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg animate-bounce"
        />
      ))}
    </div>
  );
};

export default Page3;
