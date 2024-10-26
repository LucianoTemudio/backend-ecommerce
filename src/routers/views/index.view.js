import { Router } from 'express';
import productsViewRouter from './products.view.js';
import usersViewRouter from './users.view.js';
import cartsViewRouter from './carts.view.js';
import { showProductsIndex } from '../../controllers/products.controller.js';

const viewRouter = Router();

viewRouter.use("/products", productsViewRouter);
viewRouter.use("/users", usersViewRouter);
viewRouter.use("/carts", cartsViewRouter);
viewRouter.get("/", showProductsIndex);

export default viewRouter;