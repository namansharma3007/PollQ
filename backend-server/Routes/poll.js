// In this file, we will have the logic to create poll, get created polls and add vote to a poll.
import express from "express";
import pollController from "../Controller/PollController.js";
import dotenv from "dotenv";

dotenv.config();

// Initialize express router
const router = express.Router()

router.post("/create", pollController.createPoll);
router.get("/all", pollController.getPolls);
router.get("/id", pollController.getPollById);
router.get("/user", pollController.getPollByUser);


export default router;