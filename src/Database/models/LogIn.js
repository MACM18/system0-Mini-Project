import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
  UserName: { type: String, unique: true, required: true },
  Password: { type: String, required: true },
});
const LogIn = mongoose.models.LogIn || mongoose.model("LogIn", loginSchema);

export default LogIn;
