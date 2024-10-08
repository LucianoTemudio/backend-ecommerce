import { Router } from "express";
import { showProducts, showOneProduct, productsAdmin} from "../../controllers/products.controller.js";
import { create } from "express-handlebars";

const productsViewRouter = Router();

productsViewRouter.get("/", showProducts);
productsViewRouter.get("/admin", productsAdmin);
productsViewRouter.get("/:pid", showOneProduct);

export default productsViewRouter;