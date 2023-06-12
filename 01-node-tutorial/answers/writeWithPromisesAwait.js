const { writeFile, readFile } = require("fs").promises;

async function writer() {
  try {
    await writeFile(
      "./writtenFile.txt",
      "Hi there!\n",
      {
        encoding: "utf8",
        flag: "w",
      },
      () => {
        try {
          console.log("Creating ------>  File created");
        } catch (error) {
          console.log("Error: " + error);
        }
      }
    );
    await writeFile(
      "./writtenFile.txt",
      "Second line\n",
      {
        encoding: "utf8",
        flag: "a",
      },
      () => {
        try {
          console.log("Adding sec line ----> Second line added");
        } catch (error) {
          console.log("Error: " + error);
        }
      }
    );
    await writeFile(
      "./writtenFile.txt",
      "Line Number 3",
      {
        encoding: "utf8",
        flag: "a",
      },
      () => {
        try {
          console.log("Adding 3rd line ------> Third line added");
        } catch (error) {
          console.log("Error: " + error);
        }
      }
    );
  } catch (err) {
    console.log("Error :" + err);
  }
}

async function reader() {
  try {
    const data = await readFile("./writtenFile.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log("Error: " + error);
  }
}

writer().then(() => reader());
