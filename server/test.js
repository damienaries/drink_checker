const openaiService = require("./services/openai");

async function testImageGeneration() {
  try {
    const drinkName = "Margarita";
    const parameters = {
      style: "modern",
      surface: "marble",
      location: "bar",
    };

    const imagePath = await openaiService.generateDrinkImage(drinkName, parameters);
    console.log("Image saved to:", imagePath);
  } catch (e) {
    console.error("Failed to generate image:", e);
  }
}

testImageGeneration();
