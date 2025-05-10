// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee & Manager;

// const teamLead: TeamLead = {
//   name: "harkirat",
//   startDate: new Date(),
//   department: "Software developer"
// };
// console.log(teamLead)

type User ={
name:string;
age:number;
}
type Admin={
name:string;
permissions:string;
}

type Role = User| Admin;

function greet(user:Role){
     console.log(user.name);
}