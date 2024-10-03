// Import statements (ESM syntax)
import express from "express";
import dotenv from "dotenv";
import User from "../Models/User.js";
import bcrypt from "bcrypt"

dotenv.config();

const router = express.Router();


const signup = async (req, res) => {
    try {
        const { firstName, lastName, userBio, userEmail, userName, userPassword } = req.body;

        if (!userPassword) {
            return res.status(400).json({ error: "Password is required" });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ userEmail });
        
        if (existingUser) {
            return res.status(401).send("User Already Exists with this email");
        }

        const password = userPassword;
        const saltRounds = 10;

        const salt = await bcrypt.genSalt(saltRounds);
        const encryptedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            userBio,
            userEmail,
            userName,
            userPassword: encryptedPassword,
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

export default {signup}