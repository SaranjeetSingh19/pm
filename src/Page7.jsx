import React, { useState } from 'react';
import confetti from 'canvas-confetti';

import finalPM from "./assets/imgs/finalPM.jpg"

const Page7 = () => {
  const messages = [
    "Love you Bacchu 😁",
    "Love you Polu 😏",
    "Love you Jaan 😚",
    "Love you Shone ❣️",
    "Love you Baby 🥹",
    "Love you Mithe 😎",
    "Love you Rasmalai 🫂",
    "Love you Palak 🫣",
    "Love you Isha 🫡",
    "Love you Cinderella 🥳",
    "Love you Bugge 🥸",
    "Love you meri maa 🐥",
    "Love you Badmash 🥰",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [finalMessageShown, setFinalMessageShown] = useState(false);

  const launchConfetti = () => {
    const duration = 5 * 1000; // 5 seconds
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 6,
        angle: Math.random() * 360,
        spread: 55,
        origin: { x: Math.random(), y: Math.random() },
      });
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleNext = () => {
    if (currentIndex < messages.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinalMessageShown(true);
      launchConfetti();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg p-6 text-center max-w-md animate-pop-in">
        {!finalMessageShown ? (
          <h1 className="text-xl font-bold text-gray-800 animate-fade-in mb-4">
            {messages.slice(0, currentIndex + 1).map((msg, index) => (
              <div key={index} className="my-2">
                {msg}
              </div>
            ))}
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-pink-600 animate-bounce">
            Happy Happyyy Bdayy Patni ji! Hamesha Happy aur Haste rho 🫂❣️
          </h1>
        )}

        {!finalMessageShown && (
          <button
            onClick={handleNext}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 focus:outline-none transition duration-300 animate-bounce"
          >
            {currentIndex === messages.length - 1 ? "Uff ye Pka Last" : "Aur.."}
          </button>
        )}
      </div>
    </div>
  );
};

export default Page7;
