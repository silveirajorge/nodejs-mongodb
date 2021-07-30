const mongoose = require("mongoose");

// Mongoose connect
mongoose.connect("mongodb://localhost:27017/library", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>
  console.log(`Everything is okay, mongoDB is connected...`)
);

return db;
