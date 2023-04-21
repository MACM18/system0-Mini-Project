import connectToDatabase from "../db";
export async function GetUser(req, res) {
  try {
    const db = await connectToDatabase();
    const user = await db.collection("User").find().toArray();
    // const user = await User.find({});
    if (!user) return res.status(404).json({ Error: "No Data" });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ Error: "Error fetching data" });
  }
}
export async function SetUser(req, res) {
  const { client, db } = await connectToDatabase();

  const collection = db.collection("User");

  const data = req.body;

  const result = await collection.insertOne(data);

  client.close();

  res.status(200).json(result.ops[0]);
}
