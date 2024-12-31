import React from "react";
import "./index.css";
import SentimentAnalysis from "../SentimentAnalysis";

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <h1 className="text-center text-4xl font-semibold text-gray-800 mb-8">
            Sentiment Analysis Web App
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Analyze the sentiment of your text with ease and precision.
          </p>
          <SentimentAnalysis />
        </div>
      </div>
    </div>
  );
}

export default App;
