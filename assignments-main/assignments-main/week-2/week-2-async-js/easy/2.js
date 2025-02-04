let ctr =1;
function callback(){
    console.clear();
    console.log(ctr);
    ctr++;
    setTimeout(callback,1000);
}
setTimeout(callback,1000);
