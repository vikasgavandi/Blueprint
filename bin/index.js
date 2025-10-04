#!/usr/bin/env node
/**
 * 🧱 Blueprintr CLI
 * 
 * Usage:
 *   npx blueprintr <project-name> --file structure.json
 */

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const TARGET = args[0] || "new-project";
const STRUCTURE_FILE = args.find(arg => arg.startsWith("--file="))?.split("=")[1];

if (!STRUCTURE_FILE) {
  console.error("❌ Please provide a structure file using --file=<path-to-structure.json>");
  process.exit(1);
}

if (!fs.existsSync(STRUCTURE_FILE)) {
  console.error(`❌ Structure file not found: ${STRUCTURE_FILE}`);
  process.exit(1);
}

let structure;
try {
  structure = JSON.parse(fs.readFileSync(STRUCTURE_FILE, "utf8"));
} catch (err) {
  console.error("❌ Failed to parse JSON structure file. Please check the format.");
  process.exit(1);
}

/**
 * Recursively creates folders and files based on a structure object
 */
function createStructure(base, obj) {
  fs.mkdirSync(base, { recursive: true });
  for (const [name, value] of Object.entries(obj)) {
    const fullPath = path.join(base, name);
    if (typeof value === "string") {
      fs.writeFileSync(fullPath, value);
      console.log(`📄 Created file: ${fullPath}`);
    } else {
      console.log(`📁 Created folder: ${fullPath}`);
      createStructure(fullPath, value);
    }
  }
}

console.log(`\n🚀 Creating project structure in "${TARGET}" using blueprint: ${STRUCTURE_FILE}`);
createStructure(TARGET, structure);
console.log(`\n✅ Blueprint applied successfully! Project generated in "${TARGET}"`);
