import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();


const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.status(201).json({
        message:"message"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is runnning on port ${PORT}`);
})