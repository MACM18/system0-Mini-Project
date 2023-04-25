import { Double } from "mongodb";
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  UserName: { type: String },
  Time: { type: Date },
  Date: { type: Date },
  Price: { type: Number },
  Status: { type: String },
  Items: {},
  Meal: { type: String },
});
const Order = mongoose.models.Orders || mongoose.model("Orders", orderSchema);

export default Order;
