import { Router } from "express";
import { AddUser } from "../controllers/user.js";

const route = Router();

// route.get('/', GetBooks)
route.post('/', AddUser)
// route.get('/:id', GetBook)
// route.put('/:id', UpdateBook)
// route.delete('/:id', DeleteBook)

export default route;