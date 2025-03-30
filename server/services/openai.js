const { OpenAI } = require("openai");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { getRandomParameters } = require("../services/paramRandomizer.js");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function downloadImage(url, drinkName) {
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    const uploadsDir = path.join(__dirname, "../public/uploads");
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // create a safe filename
    const safeFileName = drinkName.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const timestamp = Date.now();
    const fileName = `${safeFileName}-${timestamp}.webp`;
    const filePath = path.join(uploadsDir, fileName);

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", () => resolve(filePath));
      writer.on("error", reject);
    });
  } catch (error) {
    console.error("Error downloading image:", error);
    throw error;
  }
}

async function generateDrinkImage(drinkName) {
  try {
    // create a prompt for the OpenAI API
    const parameters = getRandomParameters();
    const prompt = `A beautiful ${parameters.style} image of a "${drinkName}" cocktail displayed on a ${parameters.surface} in a ${parameters.location}. The drink should be the central focus, showing its characteristic color, garnish, and glass type.`;

    const response = await openai.images.generate({
      model: "image-generator-v1",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    const imageUrl = response.data.images[0].url;

    // save the image locally for development purposes
    const localPath = await downloadImage(imageUrl, drinkName);
    return localPath;

    // functionality to download the image can be added here, maybe optimize the format or size or return the url
    // return imageUrl;
  } catch (error) {
    console.error("OpenAI image generation error:", error);
    throw new Error("Failed to generate image with OpenAI");
  }
}

module.exports = {
  generateDrinkImage,
};
