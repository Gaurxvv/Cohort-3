"use strict";
const users = new Map();
users.set("gg", { name: "grv", age: 21, });
users.set("ff", { name: "srv", age: 31, });
const user = users.get("ff");
console.log(user);
