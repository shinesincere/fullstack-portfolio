const path = require("path");
const express = require('express');
const {config} = require("dotenv");

config();
console.log(process.env.SECRET);

const app = express();
const PORT = process.env.PORT || 4000;
const BUILD = path.resolve(__dirname, "../../build");

app.use(express.static(BUILD));
app.listen(PORT, console.log('http://localhost:' + PORT));

app.get("/", (req, res) => {
  res.sendFile(BUILD + "/index.html");
});