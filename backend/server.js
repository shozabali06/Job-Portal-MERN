import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import "./configs/instrument.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";

// Initialize Express
const app = express();

// Connect to Database
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.post("/webhooks", clerkWebhooks)

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

// Port
const port = process.env.PORT || 3000;

Sentry.setupExpressErrorHandler(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
