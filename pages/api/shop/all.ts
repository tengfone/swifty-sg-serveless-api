// import Shop from "../../../models/shop";
import connectDB from "../../../middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import Shop from "../../../models/shop";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  Shop.find({ shopName: "jmart" })
    .then((data: any) => res.json(data))
    .catch((err: string) => res.status(400).json("Error: " + err));
};

export default connectDB(handler);