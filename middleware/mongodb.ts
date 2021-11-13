import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const mongoURL = process.env.MONGO_URL;

const connectDB =
  (handler: (arg0: any, arg1: any) => any) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect(mongoURL);
    return handler(req, res);
  };

export default connectDB;
