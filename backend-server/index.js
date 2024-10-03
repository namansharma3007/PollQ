import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DBConnection from './Database/db.js';
import authRoutes from './Routes/auth.js'

const app = express();


const PORT = process.env.PORT || 5001;

dotenv.config();

app.use(cors({
    origin: process.env.FRONTEND_URL, // Add Frontend URL
    credentials: true // Allow cookies to be sent with requests
}));

DBConnection();

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res)=>{
    res.status(201).json({
        message:"message"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is runnning on port ${PORT}`);
})