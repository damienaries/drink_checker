const express = require("express");
const openaiService = require("./services/openai");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();
const PORT = 3000;

// CORS config
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development" ? "http://localhost:5173" : "https://your-website.com",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.post("/api/generate-drink-image", async (req, res) => {
  const { drinkName, parameters } = req.body;

  try {
    const imagePath = await openaiService.generateDrinkImage(drinkName, parameters);
    res.status(200).json({ imagePath });
  } catch (e) {
    res.status(500).json({ error: "Failed to generate image" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
