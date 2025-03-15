const express = require("express");
const Router = express.Router;
const userRouter = Router();
const { z } = require("zod");
const bcrypt = require("bcrypt");
const { userModel, purchaseModel, courseModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_USER_SECRET } = require("../config");
const { userMiddleware } = require("../middleware/user");

userRouter.post("/signup", async function (req, res) {
  const requireBody = z.object({
    email: z.string().min(3).max(100).email(),
    firstName: z.string().min(3).max(100),
    lastName: z.string().min(3).max(100),
    password: z.string().min(4).max(25),
  });
  const parsedData = requireBody.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      message: "Incorrect Formant",
      error: parsedData.error,
    });
    return;
  }
  const { email, password, firstName, lastName } = req.body;
  try {
    const hashedpassword = await bcrypt.hash(password, 5);
    console.log(hashedpassword);
    await userModel.create({
      email: email,
      firstName: firstName,
      lastNameL: lastName,
      password: hashedpassword,
    });
    res.json({
      message: "Signup succeeded",
    });
  } catch (e) {
    res.json({
      message: "this email is already exist",
    });
  }
});
userRouter.post("/login", async function (req, res) {
  const { email, password } = req.body;
  const response = await userModel.findOne({
    email,
  });
  if (!response) {
    res.status(403).json({
      message: "User does not exist in DB",
    });
  }
  const passwordMatch = await bcrypt.compare(password, response.password);
  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response.id.toString(),
      },
      JWT_USER_SECRET
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Creds",
    });
  }
});
userRouter.get("/purchases", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const purchases = await purchaseModel.find({
    userId,
  });
  const coursesdata = await courseModel.find({
    _id: { $in: purchases.map((x) => x.courseId) },
  });

  res.json({
    purchases,
    coursesdata,
  });
});

module.exports = {
  userRouter: userRouter,
};
