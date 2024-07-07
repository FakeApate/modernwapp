import { exec } from "child_process";

const runCommand = (command: string) => {
  return new Promise<void>((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Error output: ${stderr}`);
      }
      console.log(`Command output: ${stdout}`);
      resolve();
    });
  });
};

const main = async () => {
  try {
    const sassCommand =
      "sass --update --no-source-map --style=compressed src/styles/w3/index.scss w3.css";
    await runCommand(sassCommand);
    console.log("Sass compilation completed successfully");
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

main();
