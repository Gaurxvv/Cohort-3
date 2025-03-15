const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "randomgauravv";
app.use(express.json());
const users = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });
  res.json({
    messgae: "You are signed up ",
  });
  console.log(users);
});
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find(
    (user) => (user.username = username && user.password == password)
  );
  // let foundUser = null;
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].username == username && users[i].password == password) {
  //     foundUser = users[i];
  //   }
  // }
  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, JWT_SECRET);
  const username = decodedInformation.username;
  const foundUser = users.find((foundUser) => foundUser.username == username);

  // let foundUser = null;
  // for (let i = 0; i < users.length; i++) {
  //   if (users[i].username == username) {
  //     foundUser = users[i];
  //   }
  // }
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "sorry token invalid",
    });
  }
});
app.listen(3000);
