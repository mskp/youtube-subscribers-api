import { Schema, model } from "mongoose";

const subscriberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Subscriber = model("Subscriber", subscriberSchema);

export default Subscriber;
