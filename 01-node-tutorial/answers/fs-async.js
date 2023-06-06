const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "temporary", "fileB.txt");

fs.writeFile(filePath, "This is line 1\n", "utf8", (err) => {
  if (err) throw err;
  console.log("Line 1 written");

  fs.writeFile(
    filePath,
    "This is line 2\n",
    {
      encoding: "utf8",
      flag: "a",
    },
    (err) => {
      if (err) throw err;
      console.log("Line 2 written");

      fs.writeFile(
        filePath,
        "This is line 3\n",
        {
          encoding: "utf8",
          flag: "a",
        },
        (err) => {
          if (err) throw err;
          console.log("Line 3 written");
        }
      );
    }
  );
});
