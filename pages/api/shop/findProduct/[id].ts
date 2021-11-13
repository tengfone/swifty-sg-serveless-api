import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../middleware/mongodb";
import Shop from "../../../../models/shop";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  // hardcode for now
  const shopName = "jmart";
  Shop.findOne(
    { shopName: shopName },
    { _id: 0, products: { $elemMatch: { slug: id } } }
  )
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export default connectDB(handler);
