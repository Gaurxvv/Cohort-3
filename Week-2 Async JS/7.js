function fn(resolve){
    resolve();
    console.log("after resolve");
}


const p = new Promise(fn)
function callback(){
    console.log("after promise");
}
p.then(callback);



///nnew
function setTimeoutPromisified(ms){
    let p=new Promise(resolve=>setTimeout(resolve,ms));
    return p;
}
function callback(){
    console.log("after the call back function");
}
setTimeoutPromisified(3000).then(callback);