import Order from "@/Database/models/Orders";
import connectDb from "../../../Database/Temp/db";

const handler = async (req, res) => {
  if (req.method === "POST" && req.query.Method === "Find") {
    try {
      await connectDb();
      let orders;
      if (req.body == "") {
        orders = await Order.find({});
      } else {
        orders = await Order.find(req.body);
      }
      res.status(200).json(orders);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "POST" && req.query.Method === "Insert") {
    try {
      await connectDb();
      const { UserName, Time, Date, Price, Status, Items, Meal } = req.body;
      const newOrder = new Order({
        UserName,
        Time,
        Date,
        Price,
        Status,
        Items,
        Meal,
      });
      const orders = await newOrder.save();
      res.status(200).json(orders);
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
        case "Time":
          filter = { Time: value };
          break;
        case "Date":
          filter = { Date: value };
          break;
        case "Price":
          filter = { Price: value };
          break;
        case "Status":
          filter = { Status: value };
          break;
        case "Items":
          filter = { Items: value };
          break;
        case "Meal":
          filter = { Meal: value };
          break;
        default:
          filter = { _id: value };
          break;
      }
      const updateDoc = {
        $set: Fields,
      };
      const result = await Order.updateMany(filter, updateDoc);
      console.log(`Updated ${result.modifiedCount} documents`);
      res.status(200).json("Updated");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "DELETE") {
    try {
      await connectDb();
      Order.deleteMany(req.body).then((result) => {
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
