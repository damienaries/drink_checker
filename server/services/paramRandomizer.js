const surfaces = [
  "marble table",
  "wooden countertop",
  "glass surface",
  "brass countertop",
  "cast iron table",
  "low coffee table",
];
const styles = ["modern", "vintage", "tropical", "tiki", "artsy", "traditional"];
const locations = [
  "outdoor",
  "indoor",
  "poolside",
  "speakeasy",
  "near a window with a view",
  "dive bar",
  "michelin starred restaurant",
];

function getRandomParameters() {
  return {
    surface: surfaces[Math.floor(Math.random() * surfaces.length)],
    style: styles[Math.floor(Math.random() * styles.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
  };
}

module.exports = { getRandomParameters };
