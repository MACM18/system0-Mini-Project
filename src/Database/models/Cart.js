import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  UserName: { type: String },
  Status: { type: String },
  Items: {},
  Total: { type: Number },
});
const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export default Cart;
