const { writeFile, readFile } = require("fs").promises;

// async function writer() {
//   writeFile("./ThenFile.txt", "First line of code!\n", {
//     encoding: "utf8",
//     flag: "w",
//   })
//     .then(() => {
//       return writeFile("./ThenFile.txt", "Second line of code!\n", {
//         encoding: "utf8",
//         flag: "a",
//       });
//     })
//     .then(() => {
//       return writeFile("./ThenFile.txt", "Third line of code!", {
//         encoding: "utf8",
//         flag: "a",
//       });
//     });
// }

// async function reader() {
//   try {
//     const data = await readFile("./ThenFile.txt", "utf8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

function writer() {
  return writeFile("./ThenFile.txt", "Hi there!\n", {
    encoding: "utf8",
    flag: "w",
  })
    .then(() => {
      console.log("Line 1 written");
      return writeFile("./ThenFile.txt", "Second line\n", {
        encoding: "utf8",
        flag: "a",
      });
    })
    .then(() => {
      console.log("Line 2 written");
      return writeFile("./ThenFile.txt", "Line Number 3", {
        encoding: "utf8",
        flag: "a",
      });
    })
    .then(() => {
      console.log("Line 3 written");
    })
    .catch((error) => {
      console.log("An error occurred: ", error);
    });
}

function reader() {
  return readFile("./ThenFile.txt", "utf8")
    .then((data) => {
      console.log("File read");
      console.log("Content of the file:");
      console.log(data);
    })
    .catch((error) => {
      console.log("An error occurred: ", error);
    });
}

writer().then(() => reader());
