import { writeFileSync } from "fs";
import { colors_dark, colors_light } from "./colors.mjs";

const flattenObject = (obj, parent, res = {}) => {
  for (let key in obj) {
    let propName = parent ? `${parent}-${key}` : key;
    if (typeof obj[key] === "object") {
      flattenObject(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
};

const createTheme = (variables) => {
  const theme = {};

  for (const [key, value] of Object.entries(variables)) {
    // Convert key to Tailwind-compatible format
    const tailwindKey = key
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase()
      .replace("_", "-");
    theme[tailwindKey] = value;
  }

  return theme;
};

const generateTailwindConfig = (ligthVariables, darkVariables) => {
  const lightTheme = ligthVariables;
  const darkTheme = darkVariables;
  const theme = {};
  for (let cat in lightTheme) {
    theme[cat] = {};
    for (let key in lightTheme[cat]) {
      const lightVar = lightTheme[cat][key];
      const darkVar = darkTheme[cat][key];
      if (lightVar == darkVar) {
        theme[cat][key] = lightVar;
      } else {
        theme[cat][key] = {
          light: lightVar,
          DEFAULT: lightVar,
          dark: darkVar,
        };
      }
    }
  }

  return `
  module.exports = {
    theme: {
      extend: {
        colors: ${JSON.stringify(theme, null, 2)}
      }
    }
  }
  `;
};

const tailwindConfig = generateTailwindConfig(colors_light, colors_dark);

// Write the configuration to a file
writeFileSync("tailwind.config.js", tailwindConfig);

console.log("tailwind.config.js has been generated");
