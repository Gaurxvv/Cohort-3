interface UserType{
    firstname:string,
    lastname:string,
    age:number
}

let user1={
    firstname:"Gaurav",
    lastname: "Mehra",
    age:21

}
function greet(user1: UserType){
console.log(user1.firstname+ user1.lastname+ "is "+user1.age+" years old")
}

greet(user1)