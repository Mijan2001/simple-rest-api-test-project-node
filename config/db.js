const mongoose = require("mongoose");
const config = require("./config");
mongoose
  .connect(config.db.url)
  .then(() => {
    console.log("MongoDB database is connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
