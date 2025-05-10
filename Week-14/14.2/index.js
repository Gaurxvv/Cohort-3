"use strict";
// interface People {
//     name:string;
//     age:number;
//     // greet(): string
// }
function checkLegal(user) {
    return user.filter((user) => user.age > 18);
}
const filteredUsers = checkLegal([{
        firstName: "gaurav",
        lastName: "Mehra",
        age: 21
    }, {
        firstName: "gaurav",
        lastName: "Mehra",
        age: 16
    }]);
console.log(filteredUsers);
