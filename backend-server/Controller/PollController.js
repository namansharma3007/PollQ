// Import statements (ESM syntax)
import express from "express";
import dotenv from "dotenv";
import PollModel from "../src/models/PollModel.js"
import UserModel from "../src/models/UserModel.js";

dotenv.config();

const router = express.Router();

const createPoll = async (req, res) => {
    const { title, description, options, startDate, endDate, allowMultipleVotes, userId } = req.body
    if(!title || !description || !options || !startDate || !endDate || !userId) {
        return res.status(400).json({ message: 'Incomplete information provided.' });
    }
 
    try {

        const createdBy = await UserModel.findById(userId)
        if(!createdBy) throw new Error('Creator not found')

        const newPoll = new PollModel({
            title,
            description,
            options,
            startDate,
            endDate,
            allowMultipleVotes,
            createdBy: createdBy._id
        })
        
        await newPoll.save()
        return res.status(201).json({ message: 'Poll created successfully', poll: newPoll });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message ? error.message : error });
    }

}

const getPolls = async (req, res) => {
    try {
        const allPolls = await PollModel.find({}).sort({createdAt: 'desc'}).skip(0)
        const pollsCount = await PollModel.countDocuments({})

        const data = {pollsCount, data: JSON.parse(JSON.stringify(allPolls))}

        res.send({data})
        
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getPollById = async (req, res) => {
    const {pollId} = req.query
    if(!pollId) {return res.status(400).json({ error: "No poll Id!!" });}
    try {
        await PollModel.findById(pollId).then(data => {
            res.send({ data: data });
        });
    } catch (error) {
        console.log(error);
    }

}

const getPollByUser = async (req, res) => {
    const {userId} = req.query
    if(!userId) {return res.status(400).json({error: "No user Id in request"})}
    try {
        await PollModel.find({
            createdBy: userId
        }).then(data => {
            res.send({data: data})
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
}

export default {createPoll, getPolls, getPollById, getPollByUser}