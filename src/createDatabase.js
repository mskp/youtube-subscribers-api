import mongoose from "mongoose";
import Subscriber from "../model/subscribers.js";
import data from "./data.js";
import "./connector.js";

(async () => {
  await Subscriber.deleteMany({});
  await Subscriber.insertMany(data);
  await mongoose.disconnect();
})();
