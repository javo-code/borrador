import MongoDao from "../mongo.dao.js";
import { CartModel } from "./cart.model.js";

export default class CartMongoDao extends MongoDao{
  constructor() {
    super(CartModel)
  }
  
  async addProdToCart(cart, prodId) {
    try {
      // const cart = await CartModel.findById(cartId);
      // //   console.log(cart);
      // if (!cart) return false;
      cart.products.push({ product: prodId });
      cart.save();
      return cart;
    } catch (error) {
      console.log(error);
    }
  }

  async removeProdToCart(cart, prod) {
    try {
      cart.products = cart.products.filter(
        (p) => p.product._id.toString() !== prod.product._id.toString()
      );
      cart.save();
      return cart;
    } catch (error) {
      console.log(error);
    }
  }

  async updateProdQuantityToCart(cart, prod, quantity) {
    try {
      prod.quantity = quantity;
      cart.save();
      return prod;
    } catch (error) {
      console.log(error);
    }
  }

  async clearCart(cart) {
    try {
      cart.products = [];
      cart.save();
      return cart;
    } catch (error) {
      console.log(error);
    }
  }
}
