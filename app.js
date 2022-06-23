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
    db = getDb(); // object to interact with db
  }
});

app.get("/books", (req, res) => {
  // to interact with a collection
  let books = [];
  db.collection("books")
    .find()
    .sort({ author: 1 })
    .forEach((book) => books.push(book))   // cursor methods (forEach or Array);
    .then(() => {
      res.status(200).json(books);
    })
    .catch(() => {
      res.status(500).json({ error: "My Server error" });
    });
});
