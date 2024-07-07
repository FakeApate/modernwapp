import { promises as fs } from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const normalizeCssPath = path.resolve(
  __dirname,
  "../../node_modules/normalize.css/normalize.css",
);

const destinationPath = path.resolve(
  __dirname,
  "../../src/styles/w3/core/_normalize.scss",
);

const prepareNormalize = async () => {
  try {
    await fs.access(destinationPath);
    console.log("_normalize.scss already exists, skipping copy.");
  } catch {
    await fs.copyFile(normalizeCssPath, destinationPath);
    console.log("normalize.css has been copied and renamed to _normalize.scss");
  }
};

prepareNormalize();
