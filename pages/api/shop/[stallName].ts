import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../middleware/mongodb";
import Shop from "../../../models/shop";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { stallName } = req.query;
  Shop.find({ shopName: stallName })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json("Error: " + err));
};

export default connectDB(handler);
