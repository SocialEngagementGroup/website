import fs from "fs";
import path from "path";

export function getServicePages() {
  const ignoredFolders = ["creative", "industry", "digital"];
  const servicesDir = path.join(process.cwd(), "app/services");

  function walkDir(dir, prefix = "") {
    const pages = [];
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const fullPath = path.join(dir, file);
      const stats = fs.statSync(fullPath);

      if (stats.isDirectory()) {
        pages.push(...walkDir(fullPath, prefix + file + " > "));
      } else if (file === "page.js") {
        // Remove ignored folders and parentheses from path
        const cleanParts = prefix
          .split(" > ")
          .map((part) => part.replace(/[()]/g, "").trim())
          .filter((part) => part && !ignoredFolders.includes(part.toLowerCase()));

        pages.push(cleanParts.join(" > ")); // keep " > " for display
      }
    });

    return pages;
  }

  return walkDir(servicesDir);
}
