import { Router } from 'express';
import { create, destroy, update, read, readOne } from '../../controllers/carts.controller.js';

const cartsRouter = Router();

cartsRouter.post("/", create)
cartsRouter.get("/", read)
cartsRouter.get("/:cid", readOne)
cartsRouter.put("/:cid", update)
cartsRouter.delete("/:cid", destroy)


export default cartsRouter