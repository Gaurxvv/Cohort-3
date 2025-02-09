const express =require("express");
const app = express();

let errorCount =0;

app.post("/user",function(req,res){
    throw new Error ('some error');
    res.status(404).json({name:"john"});
});
app.get("/user",function(req,res){
    throw new Error ('some error');
    res.status(404).json({name:"john"});
});
app.get("/error",function(req,res){
    res.status(200).json({errorCount})
})
app.use((err,req,res,next)=>{
    res.status(404).send({});
    errorCount++;
});
app.listen(3000);