import { Router } from 'express';
import {
    index,
    read,
    readOne,
    create,
    update,
    destroy
} from "../../controllers/products.controller.js";
import isValidData from '../../middlewares/isValidData.mid.js';

const productsRouter = Router();

//productsRouter.get("/", index);
productsRouter.get("/", read);
productsRouter.get("/:pid", readOne);
productsRouter.post("/",isValidData , create);
productsRouter.put("/:pid", update);
productsRouter.delete("/:pid", destroy);

export default productsRouter;