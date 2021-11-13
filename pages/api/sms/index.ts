// import Shop from "../../../models/shop";
import connectDB from "../../../middleware/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  res.json({ message: "hello" });
};

export default handler;
