//creating the express HTTP Sever
const express = require("express")
const app=express();
var users =[{
    name: 'John',
    kidneys:[{
        healthy: false
    },{
        healthy:true
    },{
        healthy:true
    }]
}];

app.get("/",function(req,res){
    const johnkidneys =users[0].kidneys;
    const numberofKidneys =johnkidneys.length;
    let numofHealthyKidneys = 0;
    for(let i=0;i<johnkidneys.length;i++){
        if(johnkidneys[i].healthy){
            numofHealthyKidneys=numofHealthyKidneys+1;
        }
    }
    const numofUnhealthyKidneys = numberofKidneys-numofHealthyKidneys;
    res.json({
        numberofKidneys,
        numofHealthyKidneys,
        numofUnhealthyKidneys
    })
})
app.use(express.json());
app.post("/",function(req, res){
    const isHealthy =req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/", function(req,res){
    for(let i =0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy =false;
    }
    res.json({
        msg:"dOne!!"
    })
})
app.delete("/", function(req,res){
    if(isThereAtleastOneunhealthy()){
    const newKidneys =[];
    for(let i =0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })}
        }
    users[0].kidneys = newKidneys;
    res.json({
        msg:"Delted!!"})
    } else{
        res.statusf(411).json({
            msg:"You have no UnHealthy Kidney"
        });
    }
}
)

function isThereAtleastOneunhealthy(){
    let AtleastOneunhealthy =false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            AtleastOneunhealthy =true;
        }
    }
    return AtleastOneunhealthy;
} 


app.listen(3000);