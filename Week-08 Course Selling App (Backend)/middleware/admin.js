const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");

adminMiddleware = (req, res, next) => {
  const token = req.body.token;
  const decoded = jwt.verify(token, JWT_ADMIN_SECRET);
  if (decoded) {
    res.adminId = decoded.indexOf;
    next();
  } else {
    res.status(403).json({
      message: "You are not Signed in",
    });
  }
};
module.exports = {
  adminMiddleware,
};
