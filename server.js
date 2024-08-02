const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");
const createGraph = require("./utils/createGraph");

dotenv.config();

async function main() {
  try {
    const MONGOURI = process.env.MONGO_URI;
    await mongoose.connect(MONGOURI);
    console.log("Connected to DB.");
    await createGraph();
    app.listen(process.env.PORT, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();
