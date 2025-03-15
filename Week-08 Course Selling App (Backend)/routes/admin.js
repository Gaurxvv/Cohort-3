const { Router, response } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

adminRouter.post("/signup", async function (req, res) {
  const { email, firstName, lastName, password } = req.body;
  await adminModel.create({
    email,
    firstName,
    lastName,
    password,
  });
  res.json({
    message: "signup succeeded",
  });
});
adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  const response = await adminModel.findOne({
    email,
  });
  if (!response) {
    res.status(403).json({
      message: "Admin not exist in DB",
    });
  }
  // const passwordMatch =  (passwordresponse.password);
  try {
    if (password == response.password);
    {
      const token = jwt.sign(
        {
          id: response.id.toString(),
        },
        JWT_ADMIN_SECRET
      );
      res.json({
        token,
      });
    }
  } catch (e) {
    res.status(403).json({
      message: "Incorrect Password",
    });
  }
});
adminRouter.post("/course", adminMiddleware, async function (req, res) {
  const adminId = req.userId;
  const { title, description, imageUrl, price } = req.body;
  const course = await courseModel.create({
    title,
    description,
    imageUrl,
    price,
    creatorId: adminId,
  });
  res.json({
    message: "course created",
    courseId: course._id.toString(),
  });
});
adminRouter.put("/course", adminMiddleware, async function (req, res) {
  const adminid = req.userId;
  const { title, description, imageUrl, price, courseId } = req.body;

  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminid,
    },
    {
      title,
      description,
      imageUrl,
      price,
    }
  );
  res.json({
    message: "course updated",
    courseId: course._id,
  });
});
adminRouter.get("/course/bulk", adminMiddleware, async function (req, res) {
  const adminId = req.userId;
  const course = await courseModel.find({
    creatorId: adminId,
  });
  res.json({
    message: "course get",
    course,
  });
});
module.exports = {
  adminRouter: adminRouter,
};
