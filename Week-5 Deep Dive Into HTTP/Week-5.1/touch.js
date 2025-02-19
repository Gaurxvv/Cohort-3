const express =require("express");
const app = express();

app.get("/sum/:a/:b", function(req,res){
    const a =parseInt(req.params.a);
    const b =parseInt(req.params.b);

    res.json({
        ans:a+b
})
})
app.get("/multiply", function(req,res){
    const a =req.query.a;
    const b =req.query.b;

    res.json({
        ans:a*b
})

})
app.get("/divide", function(req,res){
    const a =req.query.a;
    const b =req.query.b;

    res.json({
        ans:a/b
})

})
app.get("/substract", function(req,res){
    const a =req.query.a;
    const b =req.query.b;

    res.json({
        ans:a-b
})

});
app.listen(3000);