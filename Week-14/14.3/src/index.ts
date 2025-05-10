interface User {
    id:string;
    readonly name:string;
    readonly age:number;
    email:string;
    password:string;
}

type UpdateProps =Pick<User,'name'|'age'|'email'>
type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updateUser:UpdatePropsOptional){
    //hit the db for update the server.
}
//
