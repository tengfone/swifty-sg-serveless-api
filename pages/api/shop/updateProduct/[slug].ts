import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../../middleware/mongodb";
import Shop from "../../../../models/shop";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  // hardcode for now
  const shopName = "jmart";
  Shop.update(
    { shopName: "jmart", "products.slug": slug },
    { $set: { "products.$[i].isAvailable": false } },
    { arrayFilters: [{ "i.slug": slug }] }
  )
    .then(() => res.json("Product updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

export default connectDB(handler);
