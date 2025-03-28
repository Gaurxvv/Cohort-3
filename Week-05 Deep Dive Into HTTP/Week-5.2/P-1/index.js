const express = require("express");

const app = express();
function logger(req,res,next){
    console.log(`Method is ${req.method}`);
    console.log(new Date());
    console.log(`Route is ${req.url}`);
    console.log(`Host is ${req.hostname}`);
    next();
}
app.get("/sum",function (req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a + b
    })
});

app.use(logger);

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});

app.listen(3000);