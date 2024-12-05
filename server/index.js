const express = require("express");
const openaiService = require("./services/openai");

const app = express();
const PORT = 3000;

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
