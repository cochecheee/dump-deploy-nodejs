const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;

// initialize express app
app = express();
// use static files
app.use(express.static("public"));
// use to parse request of client
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // just file on views folder
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  // just file on views folder
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  // just file on views folder
  res.render("contact.ejs");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
