const express = require("express");

const app = express();

app.use(express.json());
app.post("/sum",function (req, res) {
    console.log(req.body)
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b,
    })
});
app.post("/sum",function (req, res) {
    console.log(req.body)
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b,
    })
});
app.post("/multiply",function (req, res) {
    console.log(req.body)
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a * b,
    })
});
app.post("/divide",function (req, res) {
    console.log(req.body)
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a / b,
    })
});

app.listen(3000);