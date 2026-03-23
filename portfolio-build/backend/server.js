const express = require("express");
const cors = require("cors");
const resumeRoutes = require("./routes/resume");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET"],
  })
);
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Resume API routes
app.use("/api/resume", resumeRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend running on http://localhost:${PORT}`);
  console.log(`   Resume API: http://localhost:${PORT}/api/resume`);
});
