import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Moment = require("moment-timezone");

const orderSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Moment.tz(Date.now(), "Asia/Singapore"),
    },
    cart: {
      type: Array,
      required: true,
    },
    currency: {
      type: Object,
    },
    deliveryOption: {
      type: String,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    usedPromoCode: {
      type: String,
    },
    address: {
      type: Object,
      required: true,
    },
    totalCost: {
      type: Number,
    },
    orderStatus: {
      type: Object,
      default: {
        // : "-",
      },
    },
    modified: {
      type: Boolean,
      default: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "orders",
  }
);

// export interface IOrder extends mongoose.Document {
//   orderId: string;
//   date: Date;
//   cart: any[];
//   currency: any;
//   deliveryOption: string;
//   paymentMethod: string;
//   shopName: string;
//   usedPromoCode: string;
//   address: any;
//   totalCost: number;
//   orderStatus: any;
//   modified: boolean;
//   verified: boolean;
//   collection: string;
// }

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;
