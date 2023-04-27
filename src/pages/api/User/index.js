import connectDb from "../../../Database/Temp/db";
import User from "../../../Database/models/user";

const handler = async (req, res) => {
  if (req.method === "POST" && req.query.Method === "Find") {
    try {
      await connectDb();
      let users;
      if (req.body == "") {
        users = await User.find({});
      } else {
        users = await User.find(req.body);
      }
      res.status(200).json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "POST" && req.query.Method === "Insert") {
    try {
      await connectDb();
      const { Name, Email, Type, PhoneNo, UserName } = req.body;
      const newUser = new User({
        Name,
        Email,
        Type,
        PhoneNo,
        UserName,
      });
      const user = await newUser.save();
      res.status(200).json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "PUT") {
    try {
      await connectDb();
      const { Selection, value, Fields } = req.body;
      let filter;
      switch (Selection) {
        case "Name":
          filter = { Name: value };
          break;
        case "Email":
          filter = { Email: value };
          break;
        case "Type":
          filter = { Type: value };
          break;
        case "PhoneNo":
          filter = { PhoneNo: value };
          break;
        case "UserName":
          filter = { UserName: value };
          break;
        default:
          filter = { UserName: value };
          break;
      }
      const updateDoc = {
        $set: Fields,
      };
      const result = await User.updateMany(filter, updateDoc);
      console.log(`Updated ${result.modifiedCount} documents`);
      res.status(200).json("Updated");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "DELETE") {
    try {
      await connectDb();
      User.deleteMany(req.body).then((result) => {
        console.log(`Deleted ${result.deletedCount} documents`);
      });
      res.status(200).json("Deleted");
    } catch (err) {
      console.error(err.message);
      res.status(500).send(req.body);
    }
  }
};

export default handler;