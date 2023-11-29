import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

const main = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`Server is Runing in port ${config.port}`);
    });
    if (!config.connect_string) {
      throw new Error("Database Not Connected!!!");
    }
    await mongoose.connect(config.connect_string);
    console.log("MongoDb Connected Successfully.");
  } catch (err) {
    console.log(err);
  }
};

main();
