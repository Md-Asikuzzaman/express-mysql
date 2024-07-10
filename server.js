import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import students from "./routes/students.js";
import db from "./database/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Database configuration
db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
  console.log("Connected to database...");

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});

// Routes
app.use("/api/students", students);
