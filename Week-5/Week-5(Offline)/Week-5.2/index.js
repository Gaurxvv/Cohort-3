/// map filter and arrow fns

//   function sum(a,b){
//    return a+b;
//   }

// const sum = (a, b) => {
//   //-->arrow function
//   return a + b;
// };
// const ans = sum(1, 2);
// console.log(ans);

//////////////////////////////////
const input = [1, 2, 3, 4, 5];
//////////////////////////////////
// const newArray = [];
// for (let i = 0; i < input.length; i++) {
//   // newArray[i]=input[i]*2;
//   newArray.push(input[i] * 2); //-->Push function.
// }
// console.log(newArray);

///////////////////////////////////
const transform = (i) => {
  return i * 2;
};
const ans = input.map(transform); //---> map function
console.log(ans);

////////////////////////////////// --->filter function
const newArray = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] % 2 == 0) {
    newArray.push(input[i]);
  }
}
console.log(newArray);

////////////////////////////////// -->filter Function

// function filterlogic(n) {
//   if (n % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
//-------------------------------------------
const output = input.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(output);
