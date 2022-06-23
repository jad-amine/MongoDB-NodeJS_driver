const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    // async
    MongoClient.connect("mongodb://localhost:27017/bookstore")
      .then((client) => {
        dbConnection = client.db(); // connection interface to db
        return cb();
      })
      .catch((err) => {
        console.log("Couldnt connect to db", err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
