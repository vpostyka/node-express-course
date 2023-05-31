const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// Declare variables to store the user's favorite movie and actor/actress.
let favoriteMovie = "Enter your favorite movie below.";
let favoriteActor = "Enter your favorite actor/actress below.";

const form = () => {
  return `
  <body>
  <p>Your favorite movie: ${favoriteMovie}</p>
  <p>Your favorite actor/actress: ${favoriteActor}</p>
  <form method="POST">
  <input name="favoriteMovie" placeholder="Favorite Movie"></input>
  <input name="favoriteActor" placeholder="Favorite Actor/Actress"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // Update the favoriteMovie and favoriteActor variables with the user's input.
      if (body["favoriteMovie"]) {
        favoriteMovie = body["favoriteMovie"];
      } else {
        favoriteMovie = "No movie entered.";
      }
      if (body["favoriteActor"]) {
        favoriteActor = body["favoriteActor"];
      } else {
        favoriteActor = "No actor/actress entered.";
      }
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
