const express = require("express");
const { connectToDb, getDb } = require("./db");

// init app & middleware
const app = express();

// db connection
let db;
connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("app listening to port 3000");
    });
    db = getDb();     // object to interact with db
  }
});

app.get("/blogs", (req, res) => {
  res.json({ message: "welcome" });
});
