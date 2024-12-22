import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page4 = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to handle button click
  const handleSend = () => {
    if (inputValue.trim().toLowerCase() === 'haina') {
      navigate('/fifthPage'); // Redirect to the desired page
    } else {
      setError('haina likh oye!'); // Show cute error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 to-purple-400 p-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl text-center font-bold text-white mb-4">
        Sunn ne mai aaya h aaj aapka{' '}
        <span className="text-yellow-200">Happy too youuu</span> h
        👉👈😚
      </h1>

      {/* Subheading */}
      <h3 className="text-xl text-white mb-6">Haina?</h3>

      {/* Input */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="haina likh..."
        className="w-[50%] max-w-md px-3 py-1 text-lg rounded-md shadow-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Error Message */}
      {error && (
        <div className="mt-3 text-center text-red-500 text-lg font-semibold">
          <span className="animate-pulse"> {error}</span>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleSend}
        className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white text-lg font-semibold rounded-md shadow-md transition-all"
      >
        Next
      </button>
    </div>
  );
};

export default Page4;
