import fs from "fs";

const inputFile = "gallery_data.json"; // or 'cloudinary_export.json' if you want direct conversion
const outputFile = "works.js";

try {
  const rawData = fs.readFileSync(inputFile, "utf8");
  const images = JSON.parse(rawData);

  // Build the JavaScript export string
  const jsContent = `export const WORKS = ${JSON.stringify(images, null, 2)};\n`;

  fs.writeFileSync(outputFile, jsContent);
  console.log(`✅ Converted ${images.length} items to ${outputFile}`);
} catch (err) {
  console.error("Error:", err.message);
}
