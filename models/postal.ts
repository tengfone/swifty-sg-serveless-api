import mongoose from "mongoose";
const Schema = mongoose.Schema;
let kindleModels = {};

const postalSchema = new Schema(
  {
    Postal: {
      type: Array,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
  },
  {
    collection: "postals",
  }
);

// export interface IPostal extends mongoose.Document {
//   Postal: Array<any>;
//   shopName: string;
//   collection: string;
// }

const Postal =
  mongoose.models.Postal || mongoose.model("Postal", postalSchema);
export default Postal;
