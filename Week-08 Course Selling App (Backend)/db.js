const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
  //   role: { type: String, enum: [admin, user] },
});
const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
  //   role: { type: String, enum: [admin, user] },
});
const courseSchema = new Schema({
  title: { type: String, unique: true },
  description: String,
  price: Number,
  imageUrl: String,
  creatorId: ObjectId,
});
const purchaseSchema = new Schema({
  courseId: ObjectId,
  userId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
