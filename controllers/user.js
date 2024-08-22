import { User } from "../models/User.js"
import bcrypt from 'bcrypt';

export const AddUser = async (req, res) => {
    try {
        const { first_name, username, password } = req.body;
        if (!first_name || !username || !password) {
            return res.status(400).json({
                message: "send Required fields first_name || !username || password"
            })
        }
        const Rawuser = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Rawuser.password, salt);
        const Tempuser = { ...Rawuser, password: hashedPassword }
        const user = await User.create(Tempuser)
        if (user) {
            return res.status(201).json({ message: username.concat("created !") });
        }
        else {
            return res.status(400).send({
                message: "something wrong"
            });
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}