import connectDB from "../../../Database/db";
import { model, models, Schema } from "mongoose";

connectDB; // Call the function to establish the database connection

// Create a Mongoose schema and model
const exampleSchema = new Schema({
  Name: { type: String },
  Email: { type: String },
  Type: { type: String, default: "Customer" },
  "Phone No": { type: String },
  "User Name": { type: String },
});

const User = models.User || model("User", exampleSchema);

// POST request to add new data to the collection
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { Name, Email, Type, UserName, PhoneNo } = req.body;

      const newUser = new User({ Name, Email, Type, UserName, PhoneNo });

      await newUser.save();

      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  }

  // GET request to retrieve all data from the collection
  if (req.method === "GET") {
    try {
      const users = await User.find();

      res.status(200).json({ success: true, data: users });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  }
  if(req.method=="PUT"){
    try {
      const user=await User.updateOne({})
    } catch (error) {
      
    }
  }
}
