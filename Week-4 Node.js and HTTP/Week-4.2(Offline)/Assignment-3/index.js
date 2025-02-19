const express = require("express");
const app = express();

let numberofReqforuser = {};

setInterval(() => {
    numberofReqforuser = {};
}, 9000);

function requestLimiter(req, res, next) {
    const userId = req.headers['user-id'];

    // If userid is not provided, return an error
    if (!userId) {
        return res.status(400).json({ msg: "User ID is required" });
    }

    // request count for new users
    if (!numberofReqforuser[userId]) {
        numberofReqforuser[userId] = 0;
    }

    // Increment  count
    numberofReqforuser[userId]++;

    console.log(`User - Request Count: ${numberofReqforuser[userId]}`);

    // Block request if limit is exceeded
    if (numberofReqforuser[userId] > 2) {
        return res.status(429).json({ msg: "Too many requests, please try again later" });
    }

    next();
}

app.use(requestLimiter);

app.get("/user", function(req, res) {
    res.status(200).json({ name: "roshan" });
});

app.post("/user", function(req, res) {
    res.status(200).json({ msg: "hello dummy user" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
