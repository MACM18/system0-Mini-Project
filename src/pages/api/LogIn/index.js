import LogIn from "@/Database/models/LogIn";
import connectDb from "../../../Database/Temp/db";

const handler = async (req, res) => {
  if (req.method === "POST" && req.query.Method === "Find") {
    try {
      await connectDb();
      let logins;
      if (req.body == "") {
        logins = await LogIn.find({});
      } else {
        logins = await LogIn.find(req.body);
      }
      res.status(200).json(logins);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "POST" && req.query.Method === "Insert") {
    try {
      await connectDb();
      const { UserName, Password } = req.body;
      const newLogIn = new LogIn({
        UserName,
        Password,
      });
      const login = await newLogIn.save();
      res.status(200).json(login);
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
        case "UserName":
          filter = { UserName: value };
          break;
        case "Password":
          filter = { Password: value };
          break;
        default:
          filter = { _id: value };
          break;
      }
      const updateDoc = {
        $set: Fields,
      };
      const result = await LogIn.updateMany(filter, updateDoc);
      console.log(`Updated ${result.modifiedCount} documents`);
      res.status(200).json("Updated");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "DELETE") {
    try {
      await connectDb();
      LogIn.deleteMany(req.body).then((result) => {
        console.log(`Deleted ${result.deletedCount} documents`);
      });
      res.status(200).json("Deleted");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
};

export default handler;
