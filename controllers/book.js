import { Book } from "../models/Book.js"

export const GetBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const GetBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const AddBook = async (req, res) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.publishYear) {
            return res.status(400).send({
                message: "Send all required fields:title,author,publishYear"
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        const book = await Book.create(newBook);
        return res.status(201).send(book);

    } catch (error) {
        return res.status(500).send({ message: error.message })
    }

}

export const UpdateBook = async (req, res) => {
    try {
        if (!req.body.title ||
            !req.body.author ||
            !req.body.publishYear) {
            return res.status(400).send({
                message: "Send all required fields:title,author,publishYear"
            })
        }

        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}

export const DeleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }
        return res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}