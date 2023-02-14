const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: `${__dirname}/config.env` });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("MongoDb data base connected");
});

const port = 8000;
app.listen(port, () => {
  console.log("Server started");
});
