import connectDb from "../../../Database/Temp/db";
import Cart from "../../../Database/models/Cart";

const handler = async (req, res) => {
  if (req.method === "POST" && req.query.Method === "Find") {
    try {
      await connectDb();
      let carts;
      if (req.body == "") {
        carts = await Cart.find({});
      } else {
        carts = await Cart.find(req.body);
      }
      res.status(200).json(carts);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "POST" && req.query.Method === "Insert") {
    try {
      await connectDb();
      const { UserName, Status, Items, Total } = req.body;
      const newCart = new Cart({
        UserName,
        Status,
        Items,
        Total,
      });
      const carts = await newCart.save();
      res.status(200).json(carts);
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
        case "Status":
          filter = { Status: value };
          break;
        default:
          filter = { _id: value };
          break;
      }
      const updateDoc = {
        $set: Fields,
      };
      const result = await Cart.updateMany(filter, updateDoc);
      console.log(`Updated ${result.modifiedCount} documents`);
      res.status(200).json("Updated");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "DELETE") {
    try {
      await connectDb();
      Cart.deleteMany(req.body).then((result) => {
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
