const express = require("express");
const app = expresss();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "HEHEHEgAURAV";

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        req.status(401).send({
          message: "unauthorized",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).send({
      message: "unauthorized",
    });
  }
};
app.get("/me", auth, (req, res) => {
  const user = req.user;
  req.send({
    username: user.username,
  });
});
