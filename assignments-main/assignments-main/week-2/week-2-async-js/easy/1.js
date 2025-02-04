setTimeout(callback,1000);
setInterval(callback,1000);
let ctr =1;
function callback(){
    console.clear();
    console.log(ctr);
    ctr++;
}