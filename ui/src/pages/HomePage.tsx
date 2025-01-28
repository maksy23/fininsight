import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          FinInsight
        </h1>
        <h2 className="text-xl md:text-2xl text-white/90 mb-8">
          Your AI Financial Asset Research Assistant
        </h2>
        <button
          onClick={() => navigate('/chat')}
          className="bg-white text-primary font-semibold py-3 px-8 rounded-lg 
                   hover:bg-primary hover:text-white transition-colors duration-300
                   border-2 border-white"
        >
          Start Chatting
        </button>
      </div>
    </div>
  );
};

export default HomePage;
