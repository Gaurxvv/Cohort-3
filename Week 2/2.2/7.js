// function fn(resolve){
//     resolve();
//     console.log("after the resolve");
// }
// const p= new Promise(fn);
// function callback(){
//     console.log("after promise");
// }
// p.then(callback);


//call back hell
// function step3(){
//     console.log('hello there');
// }
// function step2(){
//     console.log("hello");
//     setTimeout(step3,5000);
// }
// function step1(){
//     console.log("hi");
//     setTimeout(step2,3000);
// }
// setTimeout(step1,1000);

/// Promise  chaining
setTimeoutPromisified(1000).then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000)
}).then(function() {
    console.log("hello");
    return setTimeoutPromisified(5000)
}).then(function(){
    console.log("hey there");
});;

console.log("Outside callback Hell");