import { Router } from "express";
import { Login } from "../controllers/login.js";

const route = Router();

route.post('/login', Login)

export default route;