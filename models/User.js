import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true,
        dropDups: true
    },
    last_name: {
        type: String,
        dropDups: true
    },
    username: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    dob: {
        type: Number,

    }
}, { timestamps: true })

export const User = model('user', UserSchema)