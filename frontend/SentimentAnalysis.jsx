// import React, { useState } from "react";
// import axios from "axios";

// const SentimentAnalysis = () => {
//   const [text, setText] = useState("");
//   const [sentiment, setSentiment] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleAnalyze = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.post("http://127.0.0.1:5001/analyze", {
//         text,
//       });
//       setSentiment(response.data);
//     } catch (error) {
//       console.error("Error analyzing sentiment:", error);
//       setSentiment({ error: "Failed to analyze sentiment" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col mx-auto p-8 bg-white rounded-lg shadow-xl">
//       <textarea
//         className="px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//         rows="6"
//         cols="50"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text for sentiment analysis"
//       />

//       <button
//         className={`w-full mt-4 mb-[5vw] py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-xl transform transition-transform transition-shadow transition-colors duration-300 ease-in-out hover:scale-105 hover:translate-y-1 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-lg`}
//         onClick={handleAnalyze}
//         disabled={loading || !text}
//       >
//         {loading ? "Analyzing..." : "Analyze Sentiment"}
//       </button>

//       {sentiment && (
//         <div className=" bg-white rounded-lg shadow-md mt-4">
//           {sentiment.error ? (
//             <p className="text-red-500 text-center">{sentiment.error}</p>
//           ) : (
//             <div className="text-center mt-4">
//               <h3 className="text-xl font-semibold text-blue-600">
//                 Sentiment: {sentiment.sentiment}
//               </h3>
//               <p className="text-gray-600">Polarity: {sentiment.polarity}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SentimentAnalysis;


import React, { useState } from "react";
import axios from "axios";

const SentimentAnalysis = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);

  // Use environment variable for API URL
  const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5001";

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/analyze`, {
        text,
      });
      setSentiment(response.data);
    } catch (error) {
      console.error("Error analyzing sentiment:", error);
      setSentiment({ error: "Failed to analyze sentiment" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mx-auto p-8 bg-white rounded-lg shadow-xl">
      <textarea
        className="px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        rows="6"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for sentiment analysis"
      />

      <button
        className={`w-full mt-4 mb-[5vw] py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-xl transform transition-transform transition-shadow transition-colors duration-300 ease-in-out hover:scale-105 hover:translate-y-1 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed font-semibold text-lg`}
        onClick={handleAnalyze}
        disabled={loading || !text}
      >
        {loading ? "Analyzing..." : "Analyze Sentiment"}
      </button>

      {sentiment && (
        <div className="bg-white rounded-lg shadow-md mt-4">
          {sentiment.error ? (
            <p className="text-red-500 text-center">{sentiment.error}</p>
          ) : (
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-blue-600">
                Sentiment: {sentiment.sentiment}
              </h3>
              <p className="text-gray-600">Polarity: {sentiment.polarity}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SentimentAnalysis;