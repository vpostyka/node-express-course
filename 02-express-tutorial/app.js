const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const { products, people } = require("./data");
let PORT = 3000;

const peopleRouter = require("./routes/people");

const logger = (req, res, next) => {
  console.log(
    `${req.method} request made to ${
      req.url
    } at ${new Date().toLocaleTimeString()}`
  );
  next();
};
app.use(express.static("./public"));
app.use(logger);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// PEOPLE

app.use("/api/v1/people", peopleRouter);
// PRODUCTS

app.get("/api/v1/products", logger, (req, res) => {
  res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    res.status(404).json({ message: "That product was not found." });
    return;
  }

  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  const { search = "", limit = products.length, price = Infinity } = req.query;

  const filteredProducts = products
    .filter((p) => p.name.startsWith(search) && p.price <= price)
    .slice(0, parseInt(limit));

  res.json(filteredProducts);
});

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
