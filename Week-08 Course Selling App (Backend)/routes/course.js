const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.courseId;
  const existingPurchase = await purchaseModel.findOne({ userId, courseId });

  if (existingPurchase) {
    return res.status(400).json({ message: "You already own this course" });
  }
  await purchaseModel.create({
    userId,
    courseId,
  });
  res.json({
    message: "you have successfully bought the course",
  });
});

courseRouter.get("/preview", async function (req, res) {
  const courses = await courseModel({});
  res.json({
    courses,
  });
});

module.exports = {
  courseRouter: courseRouter,
};
