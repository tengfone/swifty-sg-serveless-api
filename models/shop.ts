import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const shopSchema = new Schema({
  cart: {
    type: Array,
    required: true,
  },
  cartTotal: {
    type: Number,
    required: true,
  },
  orderSuccess: {
    type: Boolean,
    required: true,
  },
  promoCode: {
    type: Array,
    required: true,
  },
  usedPromoCode: {
    type: String,
    required: true,
  },
  deliveryOptions: {
    type: Array,
    required: true,
  },
  productMaxShowModal: {
    type: Boolean,
    required: true,
  },
  modalMessage: {
    type: String,
    required: true,
  },
  showSideNavigation: {
    type: Boolean,
    required: true,
  },
  usedCurrency: {
    type: Object,
    required: true,
  },
  priceFilter: {
    type: Object,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
});

export interface IShop extends mongoose.Document {
  cart: Array<any> | null;
  cartTotal: number;
  orderSuccess: boolean;
  promoCode: Array<any> | null;
  usedPromoCode: string;
  deliveryOptions: Array<any>;
  productMaxShowModal: boolean;
  modalMessage: string;
  showSideNavigation: boolean;
  usedCurrencies: any;
  priceFilter: any;
  products: Array<any>;
  shopName: string;
}

const Shop = mongoose.models.Shop || mongoose.model<IShop>("Shop", shopSchema);
export default Shop;
