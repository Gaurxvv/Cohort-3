const fs =require ('fs');
const filepath ='a.txt';

fs.readFile(filepath,"utf-8",(err,data) =>{
    if(err){
      console.log('Error in the file:',err );
      return
    }
    console.log('file content: ',data);
});
function expensive(){
    let sum =0;
    for(let i =0;i<1e8;i++){
        sum+=i;
    }
    console.log("expensive operation: ",sum);
}
expensive();