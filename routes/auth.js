import { Router } from "express";
import { AuthenticateUser } from "../controllers/auth.js";

const route = Router();

route.get('/auth', AuthenticateUser)

export default route;