import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DATABASE_URI = process.env.DB_URI || "mongodb://127.0.0.1:27017/youtubeSubscribers";

(async () => {
    try {
        await mongoose.connect(DATABASE_URI);
        console.log("DB connected");
    } catch (error) {
        console.log ("DB not connected: ", error.message)
    }
})();