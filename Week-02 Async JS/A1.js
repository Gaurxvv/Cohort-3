// function sum(n) {
//     return n*(n+1);
// 	// let ans =0;
//     // for(let i=0;i<n;i++){
//     //     ans = ans+i;
//     // }
//     // return ans;
// }

// let answer= sum(6)
// console.log(answer);

const fs = require("fs");
function read(err, data){
    console.log(data);
}
 fs.readFile("Week 2\\a.txt","utf-8",read);
 fs.readFile("Week 2\\b.txt","utf-8",read);
 console.log("done!")