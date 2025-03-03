require("dotenv").config();
const express = require("express");

const app = express();
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use(express.json());
const jwt = require("jsonwebtoken");
const JWT_SECRET = "HEHEEHEH";

app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
  console.log("Listening port 3000");
}
main();
