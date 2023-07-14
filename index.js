import express from "express";
import "./src/connector.js"; // Database connection file
import subscribersRouter from "./routes/subscribers.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Welcome to YouTube API" }));
app.use("/subscribers", subscribersRouter);

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}/subscribers`);
});
