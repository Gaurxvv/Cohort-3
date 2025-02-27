const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
const { UserModel, TodoModel } = require("./db");
const JWT_SECRET = "hehehehe";

mongoose.connect(
  "mongodb+srv://admin:b5UwP21DHYdTS1fQ@cluster0.yn4ej.mongodb.net/todo-app-database"
);
app.use(express.json());

app.post("/signup", async function (req, res) {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      return res.status(400).json({ messaage: "all fields are required" });
    }
    await UserModel.create({ email, password, name });
    res.json({ message: "You are Signed Up" });
  } catch (e) {
    res.status(500).json({ message: "Internal server Error" });
  }
});

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

function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403);
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (e) {
    res.status(401).json({ message: "Invalid token" });
  }
}
app.post("/todo", auth, async (req, res) => {
  const userId = req.userId;
  const { title, done = false } = req.body;
  const todo = await TodoModel.create({ title, done, userId });
  res.json({ success: true, todo });
});
app.get("/todos", auth, async (req, res) => {
  const userId = req.userId;
  const todos = await TodoModel.find({ userId });

  res.json({ todos });
});

app.listen(3000);
