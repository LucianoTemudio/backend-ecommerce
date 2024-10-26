import { Router } from 'express';
import {
    read,
    paginate,
    readOne,
    create,
    update,
    destroy
} from "../../controllers/products.controller.js";
import isValidData from '../../middlewares/isValidData.mid.js';

const productsRouter = Router();

productsRouter.get("/", read);
productsRouter.get("/paginate", paginate);
productsRouter.get("/:pid", readOne);
productsRouter.post("/",isValidData , create);
productsRouter.put("/:pid", update);
productsRouter.delete("/:pid", destroy);

export default productsRouter;