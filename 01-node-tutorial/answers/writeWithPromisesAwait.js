const { writeFile, readFile } = require("fs").promises;

async function writer() {
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
  //   //------------------------------------------------------------------------------
  //   try {
  //     const content = "Hi there!\nSecond line\nLine Number 3\n";

  //     await writeFile("./writtenFile.txt", content, "utf8");
  //     console.log("File created with all lines");
  //   } catch (error) {
  //     console.log("Error: " + error);
  //   }
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
