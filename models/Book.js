import { Schema, model } from "mongoose";

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

export const Book = model('Book', BookSchema)