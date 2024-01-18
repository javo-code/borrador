import { Router } from "express";
const router = Router();
import ProductMongoDB from "../daos/mongodb/products/product.dao.js";
const prodDao = new ProductMongoDB();
import { login, register, errorLogin, errorRegister } from "../controllers/views.controller.js";

router.get("/", async (req, res) => {
  try {
    const response = await prodDao.getAll();
    const products = response.payload.products;
    // console.log(products);
    res.render('login')
  } catch (error) {
    console.error("Error getting products at views.router ::", error.message);
    res.status(500).send("Internal server error");
  }
});

//-------------------------📌CHAT

router.get('/chat', (req, res) => {
    res.render('chat')
});

//-------------------------📌LOGIN
router.get('/wlogin', login);
router.get('/wregister', register);
router.get('/werror-login', errorLogin);
router.get('/werror-register', errorRegister);
router.get('/wprofile', async (req, res) => {
  try {
    const response = await prodDao.getAll();
    const products = response.payload.products;
    // console.log(products);
    res.render("home", { products });
  } catch (error) {
    console.error(
      "Error getting products at profile views.router ::",
      error.message
    );
    res.status(500).send("Internal server error");
  }
});

//-------------------------📌JWT

router.get('/jwt', (req, res) => {
  res.render("jwt")
});


export default router;