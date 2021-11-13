import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Moment = require("moment-timezone");

const statsSchema = new Schema(
  {
    dateStr: {
      type: Date,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
  },
  {
    collection: "stats",
  }
);

// export interface IStats extends mongoose.Document {
//   dateStr: Date;
//   postalCode: string;
//   collection: string;
// }

const Stats = mongoose.models.Stats || mongoose.model("Stats", statsSchema);

export default Stats;
