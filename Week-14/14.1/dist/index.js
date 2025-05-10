"use strict";
function greeting(user) {
  console.log("hello " + user.name);
}
let user = {
  name: "gaurav",
  age: 21,
};
greeting(user);
function islegal(age) {
  if (age > 18) return true;
  else return false;
}
console.log(islegal(12));
function delayed(fn) {
  setTimeout(fn, 1000);
}
delayed(function () {
  console.log("hi there");
});
