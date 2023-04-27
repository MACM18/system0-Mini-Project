import { Double } from "mongodb";
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  UserName: { type: String },
  Time: { type: Date },
  Date: {
    type: Date,
    default: Date.now,
    get: (val) => val.toLocaleString("en-US", { timeZone: "Asia/Colombo" }),
    set: (val) => new Date(val),
  },
  Price: { type: Number },
  Status: { type: String },
  Items: {},
  Meal: { type: String },
});
const Order = mongoose.models.Orders || mongoose.model("Orders", orderSchema);

export default Order;
