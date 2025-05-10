//Map
type User1={
name:string;
age:number
}
const users = new Map<string,User1>()
users.set("gg",{name:"grv",age:21,})
users.set("ff",{name:"srv",age:31,})
const user =users.get("ff")
console.log(user)