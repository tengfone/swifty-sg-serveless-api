import mongoose from "mongoose";
const Schema = mongoose.Schema;

const promoSchema = new Schema({
  promocode: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
    min: 0,
  },
  redeem: {
    type: Array,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

export interface IPromo extends mongoose.Document {
  promocode: string;
  count: number;
  redeem: Array<any>;
  slug: string;
}

const Promo =
  mongoose.models.Promo || mongoose.model<IPromo>("Promo", promoSchema);

export default Promo;
