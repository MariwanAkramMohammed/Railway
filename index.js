const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, ".", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "public", "index.html"));
  // res.status(200).json({ done: "done here" });
});

app.listen(process.env.POR, () => console.log("listening ....."));
