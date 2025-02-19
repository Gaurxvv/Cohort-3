const express=require("express");
const app = express();

function ticketChecker(req,res,next){
    const ticket = req.query.ticket;
    if(ticket==="free"){
        next();
    }
    else{
        res.status(403).send("access denied");
    }
}

function isOldenough(req,res,next){
    const age = req.query.age;
    if(age>=12){
        next();
    }
    else{
        res.json({
            msg:'sorry you are not of age yet'
        })
    }
}
app.use(isOldenough);
app.use(ticketChecker);
app.get("/ride1",function(req,res){
    res.json({
        msg:"You rode the first ride"});
});
app.get("/ride2",function(req,res){
    res.json({
        msg:"You rode the second ride"});
});
app.get("/ride3",function(req,res){
    res.json({
        msg:"You rode the third ride"});
});
app.listen(3000);