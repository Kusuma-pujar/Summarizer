import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import summarizerRoutes from "./routes/summarizerRoutes.js";
import connectDB from "./config/dbConfig.js";
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB with error handling
connectDB().catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // Exit the process if connection fails
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));  // Allows all origins (consider stricter rules for production)
app.use(bodyParser.json());
app.use(express.json()); // Modern alternative to body-parser

// Routes
app.use("/api", summarizerRoutes);

// Root Route
app.get("/", (req, res) => {
    res.send("Summarizer API is running... 🚀");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
