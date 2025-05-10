// interface People {
//     name:string;
//     age:number;
//     // greet(): string
// }

// const person: People={
//     name:"gaurav",
//     age:21,
//     greet(){
//         return "hi"
//     }
// }

// class Manager implements People{
//     constructor(public name:string, public age:number){
//     }

// }
// let user =new Manager("joe",21);
// console.log(user.age)
// console.log(user.name)


interface User1{
    firstName: string;
    lastName:string;
    age:number;
}

function checkLegal(user:User1[]){
     return user.filter((user)=>user.age>18);
}

const filteredUsers = checkLegal([{
    firstName:"gaurav",
    lastName:"Mehra",
    age:21
},{
    firstName:"gaurav",
    lastName:"Mehra",
    age:16
}])
console.log(filteredUsers)

