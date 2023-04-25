// import { model, models, Schema } from "mongoose";

// connectDB(); // Call the function to establish the database connection

// // Create a Mongoose schema and model
// const exampleSchema = new Schema({
//   Name: { type: String },
//   Email: { type: String },
//   Type: { type: String, default: "Customer" },
//   "Phone No": { type: String },
//   "User Name": { type: String },
// });

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: { type: String },
  Email: { type: String },
  Type: { type: String, populate: "Customer" },
  PhoneNo: { type: String },
  UserName: { type: String, unique: true },
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
