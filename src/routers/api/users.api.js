import { Router } from 'express';
import {
    read,
    readOne,
    create,
    update,
    destroy
} from "../../controllers/users.controller.js";
import isValidData from '../../middlewares/isValidDataUsers.mid.js';

const usersRouter = Router();

usersRouter.get("/", read);
usersRouter.get("/:uid", readOne);
usersRouter.post("/",isValidData , create);
usersRouter.put("/:uid", update);
usersRouter.delete("/:uid", destroy);

export default usersRouter;