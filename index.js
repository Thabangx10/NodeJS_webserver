const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readFile("home.html", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the file");
    } else {
      res.send(data);
    }
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the file");
    } else {
      res.send(data);
    }
  });
});

app.get("/contact", (req, res) => {
  fs.readFile("contact.html", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the file");
    } else {
      res.send(data);
    }
  });
});

app.get("/products", (req, res) => {
  fs.readFile("products.html", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the file");
    } else {
      res.send(data);
    }
  });
});

app.get("/product/:productId", (req, res) => {
  const productId = req.params.productId;
  fs.readFile("product.html", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading the file");
    } else {
      const modifiedData = data.replace("{{product_id}}", productId);
      res.send(modifiedData);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
