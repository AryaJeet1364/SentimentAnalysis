const axios = require("axios");

// Function to call Python API for sentiment analysis

const analyzeSentiment = async (req, res) => {
  const { text } = req.body;
  console.log("Received text for sentiment analysis:", text);

  try {
    const response = await axios.post(
      "https://sentiment-analysis-eryv292h9-aryajeet-jhas-projects.vercel.app/analyze",
      {
        text,
      }
    );
    console.log("Response from Python API:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    res.status(500).json({ error: "Error analyzing sentiment" });
  }
};


module.exports = { analyzeSentiment };
