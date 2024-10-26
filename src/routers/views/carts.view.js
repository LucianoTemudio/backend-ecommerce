import { Router } from "express";
import { cart } from "../../controllers/carts.controller.js";
import { create } from "express-handlebars";

const cartsViewRouter = Router();

cartsViewRouter.get("/", cart);

export default cartsViewRouter;

