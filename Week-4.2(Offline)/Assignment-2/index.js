//create the middlewware to calculate the numbers of request logging to the server
const express = require("express");
const app = express();
let requestCount =0;

function counter(req,res,next){
    requestCount += 1;
    next();
}
app.use(counter)
app.get("/user",function(req,res){
    res.status(403).json({name: "john."})
});
app.post("/user",function(req,res){
    res.status(200).json({msg: "created dummy user."})
});
app.get("/Counter",function(req,res){
    res.status(403).json({requestCount})
});
app.listen(3000);  