import fs from "fs";
import path from "path";

const svgPath = path.resolve(process.cwd(), "../src/imports/Logo_PFE_PIE.svg");
let content = fs.readFileSync(svgPath, "utf-8");

// Replace all rgb(0,30,45) with rgb(255,255,255)
content = content.replace(/fill: rgb\(0,30,45\)/g, "fill: rgb(255,255,255)");
// Also make sure fill-opacity: 0 is removed just in case there are others
content = content.replace(/fill-opacity:\s*0;/g, "fill-opacity: 1;");

fs.writeFileSync(svgPath, content);
console.log("Updated SVG successfully");
