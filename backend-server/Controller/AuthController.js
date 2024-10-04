// Import statements (ESM syntax)
import express from "express";
import dotenv from "dotenv";
// import User from "../Models/User.js";
import UserModel from "../src/models/UserModel.js";
import bcrypt from "bcrypt"

dotenv.config();

const router = express.Router();


const signup = async (req, res) => {
    try {
        const { firstName, lastName, userBio, userEmail, userPassword } = req.body;

        if (!userPassword) {
            return res.status(400).json({ error: "Password is required" });
        }
        // Check if user already exists
        const existingUser = await UserModel.findOne({ userEmail });
        
        if (existingUser) {
            return res.status(401).send("User Already Exists with this email");
        }

        const password = userPassword;
        const saltRounds = 10;

        const salt = await bcrypt.genSalt(saltRounds);
        const encryptedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            firstName,
            lastName,
            userBio,
            email: userEmail,
            password: encryptedPassword,
        });

        await newUser.save();

        return res.status(200).json({
            status: "Ok",
            user: newUser
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
};

const login = async(req, res) =>{
    try {
        const { userEmail, userPassword } = req.body;

        const user = await UserModel.findOne({ email: userEmail });

        if (user) {
            const passwordMatch = await bcrypt.compare(userPassword, user.password);
            if (passwordMatch) {
                return res.json(user);
            } else {
                console.log("Password didn't match!!");
                return res.json({ status: "Error", getUser: false });
            }
        } else {
            console.log("Unable to find user");
            return res.json({ status: "Error", getUser: false });
        }

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

export default {signup, login}