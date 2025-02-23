const express = require("express");
const cors = require("cors");
const sentimentRoutes = require("./routes/sentimentRoutes");

const app = express();

// const corsOptions = {
//   origin: "https://sentiment-analysis-new1.vercel.app", // Replace with your frontend URL
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type"],
// };

app.use(cors());
// app.use(cors(corsOptions));
app.use(express.json());

// Route for sentiment analysis
app.use("/api/sentiment", sentimentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
