const axios = require("axios");
const fs = require("fs");
const path = require("path");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function generateDrinkImage(drinkName, parameters) {
  const prompt = `${drinkName} cocktail served in elegant glassware on a ${parameters.surface} with a ${parameters.style} vibe in an ${parameters.location} setting. Please do not include straws`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      { prompt, n: 1, size: "500x500" },
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" } }
    );

    const imageUrl = response.data.data[0].url;
    const imagePath = path.join(__dirname, "../public/images/drinks", `${drinkName}.png`);

    const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
    fs.writeFileSync(imagePath, imageResponse.data);

    return imagePath;
  } catch (e) {
    console.error(`Error generating image for ${drinkName}:`, e.response?.data || e.message);
    throw error;
  }
}

module.exports = { generateDrinkImage };
