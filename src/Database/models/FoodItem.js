import { Double } from "mongodb";
import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  Name: { type: String },
  Type: {},
  Meal: {},
  Price: { type: Number, default: 0 },
  Availability: { type: Boolean },
  Rating: { type: Number },
  Image: {},
  Description: { type: String },
  Tags: {},
});
const FoodItem =
  mongoose.models.FoodItem || mongoose.model("FoodItem", foodItemSchema);

export default FoodItem;
