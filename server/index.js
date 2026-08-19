const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5050;
const DIST = path.resolve(__dirname, "../dist");
const PUBLIC = path.resolve(__dirname, "../public");

app.use(cors());
app.use(express.json());

const messages = [];

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "portfolio-api" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || String(name).trim().length < 2) {
    return res.status(400).json({ error: "Please enter your name (at least 2 characters)." });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (!message || String(message).trim().length < 10) {
    return res.status(400).json({ error: "Message should be at least 10 characters." });
  }

  const entry = {
    id: Date.now(),
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    createdAt: new Date().toISOString(),
  };

  messages.push(entry);
  console.log("[contact]", entry);

  return res.status(201).json({
    success: true,
    message: "Thanks! Your message was received.",
  });
});

app.get("/api/messages", (_req, res) => {
  res.json({ count: messages.length, messages });
});

app.use(express.static(DIST));
app.use(express.static(PUBLIC));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.join(DIST, "index.html"), (err) => {
    if (err) {
      res
        .status(404)
        .type("text")
        .send("Build not found. Run `npm run build` first, or use `npm run serve`.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
});
