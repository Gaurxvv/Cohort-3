const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");

const JWT_SECRET = "hehehehe";

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:b5UwP21DHYdTS1fQ@cluster0.yn4ej.mongodb.net/todo-app-database"
);

const app = express();
app.use(express.json());

// Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await UserModel.create({ email, password, name });

    res.json({ message: "You are Signed Up" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Signin Route
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(403).json({ message: "error" });
  }
});

// Authentication Middleware
function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403);
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
}

// Create Todo
app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const { title, done = false } = req.body;
  const todo = await TodoModel.create({ title, done, userId });

  res.json({ success: true, todo });
});

// Get Todos
app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await TodoModel.find({ userId });

  res.json({ todos });
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
