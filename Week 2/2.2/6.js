//the real op that we want to promisfy\

function doAsyncOp(resolve){
    setTimeout(resolve,3000);
}
const p =new Promise(doAsyncOp)

function callback(){
    console.log("3 seconds have passed");
}
p.then(callback)