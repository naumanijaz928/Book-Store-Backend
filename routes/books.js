import { Router } from "express";
import { AddBook, DeleteBook, GetBook, GetBooks, UpdateBook } from "../controllers/book.js";

const route = Router();

route.get('/', GetBooks)
route.post('/', AddBook)
route.get('/:id', GetBook)
route.put('/:id', UpdateBook)
route.delete('/:id', DeleteBook)

export default route;