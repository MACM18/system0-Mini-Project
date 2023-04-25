import connectDb from "../../../Database/Temp/db";
import Cart from "../../../Database/models/Cart";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      await connectDb();
      const { id, newItems } = req.body;
      console.log(id);
      // const it = JSON.stringify(newItems);
      const filter = { _id: id };
      const update = { $push: { Items: newItems } };
      const carts = await Cart.findOneAndUpdate(filter, update);
      const AllData = await Cart.findById(id);
      // const carts = await newCart.save();
      res.status(200).json(AllData);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
};

export default handler;
