import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs/promises";

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const OUTPUT_FILE = "cloudinary_export.json";
const FOLDER = process.env.CLOUDINARY_FOLDER || ""; // e.g., "artworks/" or ""
const MAX_RESULTS_PER_PAGE = 100; // Cloudinary max is 500
const RESOURCE_TYPE = "image"; // 'image', 'video', 'raw'

async function fetchAllResources() {
  let allResources = [];
  let nextCursor = null;
  let page = 1;

  console.log(`Fetching ${RESOURCE_TYPE} resources from Cloudinary...`);
  if (FOLDER) console.log(`Filtering by folder: ${FOLDER}`);

  try {
    do {
      console.log(`Fetching page ${page}...`);

      const params = {
        type: "upload",
        // prefix: FOLDER,
        max_results: MAX_RESULTS_PER_PAGE,
        next_cursor: nextCursor,
        resource_type: RESOURCE_TYPE,
      };

      const result = await cloudinary.api.resources(params);

      if (result.resources && result.resources.length) {
        allResources = allResources.concat(result.resources);
        console.log(
          `  Retrieved ${result.resources.length} assets. Total so far: ${allResources.length}`,
        );
        nextCursor = result.next_cursor;
        page++;
      } else {
        break;
      }
    } while (nextCursor);

    console.log(`\n✅ Export complete. Total assets: ${allResources.length}`);
    return allResources;
  } catch (error) {
    console.error("Error fetching from Cloudinary:", error.message);
    throw error;
  }
}

// Optional: reduce the data to only needed fields
function simplifyResources(resources) {
  return resources.map((res) => ({
    public_id: res.public_id,
    asset_id: res.asset_id,
    format: res.format,
    version: res.version,
    resource_type: res.resource_type,
    type: res.type,
    created_at: res.created_at,
    uploaded_at: res.uploaded_at,
    bytes: res.bytes,
    width: res.width,
    height: res.height,
    url: res.url,
    secure_url: res.secure_url,
    folder: res.folder,
    original_filename: res.original_filename,
    tags: res.tags || [],
    context: res.context || {},
  }));
}

async function main() {
  try {
    const rawResources = await fetchAllResources();
    const simplified = simplifyResources(rawResources);

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(simplified, null, 2));
    console.log(`\n📁 JSON saved to ${OUTPUT_FILE}`);
  } catch (err) {
    console.error("Script failed:", err);
    process.exit(1);
  }
}

main();
