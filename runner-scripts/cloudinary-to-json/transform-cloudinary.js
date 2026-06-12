import fs from "fs";

// Read the exported Cloudinary JSON file
const inputFile = "cloudinary_export.json";
const outputFile = "gallery_data.json";

try {
  const rawData = fs.readFileSync(inputFile, "utf8");
  const images = JSON.parse(rawData);

  const transformed = images.map((item) => ({
    _id: item.asset_id,
    title: "",
    year: "",
    medium: "",
    series: "",
    category: "",
    src: item.secure_url,
  }));

  fs.writeFileSync(outputFile, JSON.stringify(transformed, null, 2));
  console.log(`✅ Successfully transformed ${transformed.length} images.`);
  console.log(`📁 Output saved to ${outputFile}`);
} catch (err) {
  console.error("Error:", err.message);
}
