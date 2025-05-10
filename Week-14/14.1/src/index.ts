function greeting(user:{
    name:string,
    age:number
}){
    console.log("hello "+ user.name)
}

let user ={
    name:"gaurav",
    age:21
}

greeting(user)

function islegal(age:number){
    if(age>18)
        return true
    else return false
}

console.log(islegal(12))

function delayed(fn:()=>void){
    setTimeout(fn,1000)
}

delayed(function(){
    console.log("hi there")
})


