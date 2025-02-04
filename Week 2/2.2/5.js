class Promise2{
    constructor9(fn){
        this.fn = fn;
        this.fn(()=>{
            this.resolve();
        })
    }
    then(callback){
        this.resolve=callback;
    }

}
function readTheFile(resolve){
    setTimeout(function(){
        console.log("callback based settimeout completed");
        resolve();
    },3000);
}
function setTimeoutPromisified(){
    return new  Promise2(readTheFile)
}
let p =setTimeoutPromisified();
function callback(){
    console.log("callback has been called");
}
p.then(callback);