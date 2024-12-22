import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti"; // Import confetti library

// Importing videos and images
import vid1 from "./assets/vids/pm1 (1).mp4";
import vid2 from "./assets/vids/pm1 (2).mp4";
import vid3 from "./assets/vids/pm1 (3).mp4";
import vid4 from "./assets/vids/pm1 (4).mp4";
import vid5 from "./assets/vids/pm1 (5).mp4";
import vid6 from "./assets/vids/pm1 (6).mp4";
import vid7 from "./assets/vids/pm1 (7).mp4";
import vid8 from "./assets/vids/pm1 (8).mp4";
import vid9 from "./assets/vids/pm1 (9).mp4";
import vid10 from "./assets/vids/pm1 (10).mp4";
import vid11 from "./assets/vids/pm1 (11).mp4";
import vid12 from "./assets/vids/pm1 (12).mp4";
import vid13 from "./assets/vids/pm1 (13).mp4";
import vid14 from "./assets/vids/pm1 (14).mp4";
import vid15 from "./assets/vids/pm1 (15).mp4";
import vid16 from "./assets/vids/pm1 (16).mp4";
import vid17 from "./assets/vids/pm1 (17).mp4";
import vid18 from "./assets/vids/pm1 (18).mp4";
import vid19 from "./assets/vids/pm1 (19).mp4";

import img1 from "./assets/imgs/pmImg (1).jpg";
import img2 from "./assets/imgs/pmImg (2).jpg";
import img3 from "./assets/imgs/pmImg (3).jpg";
import img4 from "./assets/imgs/pmImg (4).jpg";
import img5 from "./assets/imgs/pmImg (5).jpg";
import img6 from "./assets/imgs/pmImg (6).jpg";
import img7 from "./assets/imgs/pmImg (7).jpg";
import img8 from "./assets/imgs/pmImg (8).jpg";
import img9 from "./assets/imgs/pmImg (9).jpg";
import img10 from "./assets/imgs/pmImg (10).jpg";
import img11 from "./assets/imgs/pmImg (11).jpg";
import img12 from "./assets/imgs/pmImg (12).jpg";
import img13 from "./assets/imgs/pmImg (13).jpg";
import img14 from "./assets/imgs/pmImg (14).jpg";
import img15 from "./assets/imgs/pmImg (15).jpg";
import img16 from "./assets/imgs/pmImg (16).jpg";
import img17 from "./assets/imgs/pmImg (17).jpg";
import img18 from "./assets/imgs/pmImg (18).jpg";
import img19 from "./assets/imgs/pmImg (19).jpg";
import img20 from "./assets/imgs/pmImg (20).jpg";




import { useNavigate } from "react-router-dom";



const Page5 = () => {
  const [randomVideos, setRandomVideos] = useState([]);
  const [randomImages, setRandomImages] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    // Trigger confetti every 2 seconds
    const confettiInterval = setInterval(() => {
      triggerConfetti();
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(confettiInterval);
  }, []);

  useEffect(() => {
    // Trigger the confetti effect when the component mounts
    triggerConfetti();

   // Combine all videos and images into arrays
const videos = [
  vid1, vid2, vid3, vid4, vid5, vid6, vid7, vid8, vid9, vid10, vid11, vid12,
  vid13, vid14, vid15, vid16, vid17, vid18, vid19
];

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18, img19, img20,
];


    // Randomly select 6 videos and 6 images
    const selectedVideos = shuffleArray(videos).slice(0, 6);
    const selectedImages = shuffleArray(images).slice(0, 6);

    // Set the state with random videos and images
    setRandomVideos(selectedVideos);
    setRandomImages(selectedImages);
  }, []);

  // Helper function to shuffle an array (randomize its order)
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Confetti trigger function
  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      angle: 90,
      spread: 180,
      origin: { x: 0.5, y: 0.5 },
      colors: ["#ff0", "#ff5733", "#ffc0cb", "#6a5acd"], // Party colors
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-300 to-purple-400 p-4 flex flex-col items-center justify-center text-center">
      {/* First set   of 3 videos and images */}
     


      <div className="flex flex-wrap justify-center -mt-32 gap-4 mb-6 w-full">
        {randomVideos.slice(0, 3).map((video, index) => (
          <div
            key={index}
            className="w-24 h-24 transform rotate-3 transition-all duration-300"
          >
            <video
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              className="rounded-lg shadow-lg w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
        {randomImages.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="w-24 h-24 transform rotate-3 transition-all duration-300"
          >
            <img
              src={image}
              alt={`random img ${index}`}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Romantic Birthday Message */}
      <h1 className="text-4xl text-white font-extrabold mb-6 animate__animated animate__fadeIn animate__delay-1s">
        Happiest Birthday, mere{" "}
        <span className="text-yellow-300 animate__animated animate__heartBeat">
          POLU
        </span>{" "}
        🫂💞❣️
      </h1>

      {/* Second set of 3 videos and images */}
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {randomVideos.slice(3, 6).map((video, index) => (
          <div
            key={index}
            className="w-24 h-24 transform rotate-3 transition-all duration-300"
          >
            <video
              width="100%"
              height="auto"
              autoPlay
              loop
              muted
              className="rounded-lg shadow-lg w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
        {randomImages.slice(3, 6).map((image, index) => (
          <div
            key={index}
            className="w-24 h-24 transform rotate-3 transition-all duration-300"
          >
            <img
              src={image}
              alt={`random img ${index}`}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>


      {/* Floating Heart Animation */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate__animated animate__pulse animate__infinite">
        <span className="text-4xl text-red-500">❤️</span>
      </div>

      <div className="absolute bottom-20  flex gap-x-8">
       <button
  className=" text-base bg-rose-500 rounded-full px-5 py-1 font-semibold shadow-lg shadow-rose-600 text-white cursor-pointer"
  onClick={() => navigate("/sixthPage")}
>
  Next
</button>
      </div>

    


    </div>
  );
};

export default Page5;
