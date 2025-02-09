const fs = require("fs")
const filepath = 'a.txt';

const data = "input from 4.js"
fs.readFile(filepath,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Data present inside the file: ",data);
});
function expensive (){
    let sum =0;
    for(let i=0;i<1e8;i++){
        sum+=i;
    }
    console.log("expesive operation completd and its result : ",sum);
}