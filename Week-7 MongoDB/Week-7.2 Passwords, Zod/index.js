const { z } = require("zod");
const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:b5UwP21DHYdTS1fQ@cluster0.yn4ej.mongodb.net/todo-app-database"
);

const app = express();
app.use(express.json());
const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .refine((password) => {
    return (
      /[A-Z]/.test(password) && // At least one uppercase letter
      /[a-z]/.test(password) && // At least one lowercase letter
      /[0-9]/.test(password) && // At least one digit
      /[\W_]/.test(password) // At least one special character
    );
  });
app.post("/signup", async function (req, res) {
  const requireBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(3).max(100),
    password: passwordSchema,
  });
  const parsedData = requireBody.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect Format",
      error: parsedData.error,
    });
    return;
  }
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  try {
    const hashedpassword = await bcrypt.hash(password, 5);
    console.log(hashedpassword);
    await UserModel.create({
      email: email,
      password: hashedpassword,
      name: name,
    });

    res.json({
      message: "You are signed up",
    });
  } catch (e) {
    res.json({
      message: "This Email is already exist",
    });
  }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });
  if (!response) {
    res.status(403).json({
      message: "User does not exist in our DB",
    });
  }
  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
