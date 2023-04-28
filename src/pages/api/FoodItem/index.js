import FoodItem from "@/Database/models/FoodItem";
import connectDb from "../../../Database/Temp/db";

const handler = async (req, res) => {
  if (req.method === "POST" && req.query.Method === "Find") {
    try {
      await connectDb();
      let fooditems;
      if (req.body == "") {
        fooditems = await FoodItem.find({});
      } else {
        fooditems = await FoodItem.find(req.body);
      }
      res.status(200).json(fooditems);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "POST" && req.query.Method === "Insert") {
    try {
      await connectDb();
      const {
        Name,
        Type,
        Meal,
        Price,
        Availability,
        Rating,
        Image,
        Description,
        Tags,
      } = req.body;
      const newFoodItem = new FoodItem({
        Name,
        Type,
        Meal,
        Price,
        Availability,
        Rating,
        Image,
        Description,
        Tags,
      });
      const fooditems = await newFoodItem.save();
      res.status(200).json(fooditems);
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
        case "Meal":
          filter = { Meal: value };
          break;
        case "Type":
          filter = { Type: value };
          break;
        case "Price":
          filter = { Price: value };
          break;
        case "Availability":
          filter = { Availability: value };
          break;
        case "Rating":
          filter = { Rating: value };
          break;
        case "_id":
          filter = { _id: value };
          break;
        default:
          filter = { _id: value };
          break;
      }
      const updateDoc = {
        $set: Fields,
      };
      const result = await FoodItem.updateMany(filter, updateDoc);
      console.log(`Updated ${result.modifiedCount} documents`);
      res.status(200).json("Updated");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  } else if (req.method === "DELETE") {
    try {
      await connectDb();
      FoodItem.deleteMany(req.body).then((result) => {
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
