import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';
const PORT = process.env.PORT || 5000;
import { fileURLToPath } from 'url';
import authRoute from './routes/auth.js'
import loginRoute from './routes/login.js'
import bookRoute from './routes/books.js'
import userRoute from './routes/users.js'
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);


const app = express();
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
}))

app.use(morgan('dev', {
    skip: function (req, res) { return res.statusCode < 400 },
}))
app.use(morgan('common', { stream: accessLogStream }))

app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})
app.use('/api', authRoute);
app.use('/api', loginRoute);
app.use('/api/book', bookRoute);
app.use('/api/user', userRoute);
app.listen(PORT, () => console.log(`Server is runing on Port ${PORT}`))

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('Database Connected :)');
    } catch (error) {
        console.log(error)
    }
}
ConnectDB();