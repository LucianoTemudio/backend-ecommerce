import { Router } from "express";
import { usersAdmin, showUsers, showOneUser, usersLogIn } from "../../controllers/users.controller.js";


const usersViewRouter = Router();

usersViewRouter.get("/register", usersAdmin);
usersViewRouter.get("/login", usersLogIn);
usersViewRouter.get("/", showUsers);
usersViewRouter.get("/:uid", showOneUser);


export default usersViewRouter;