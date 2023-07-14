import { Router } from "express";
import Subscriber from "../model/subscriber.js";

const router = Router();

// Route to fetch all subscribers
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find();
        return res.json(subscribers);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
});

// Route to fetch subscribers with "name" and "subscribedChannel" fields
router.get('/names', async (req, res) => {
    try {
        const subscribers = await Subscriber.find().select("name subscribedChannel -_id");
        return res.json(subscribers);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
});

// Route to fetch a subscriber by ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const subscribers = await Subscriber.findById(id);
        return res.json(subscribers);
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
});

export default router;
