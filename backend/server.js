import express from "express";
import cors from "cors";
import { metrics, usage, activity } from "./data.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/metrics", (req, res) => {
  res.json(metrics);
});

app.get("/api/usage", (req, res) => {
  res.json(usage);
});

app.get("/api/activity", (req, res) => {
  res.json(activity);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
