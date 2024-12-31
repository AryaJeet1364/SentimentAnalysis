const express = require("express");
const router = express.Router();
const sentimentController = require("../controllers/sentimentController");

// Route for analyzing sentiment
router.post("/", sentimentController.analyzeSentiment);

module.exports = router;
