function greetUser(user) {
    let salutation;

    if (user.gender === "male") {
        salutation = "Mr.";
    } else if (user.gender === "female") {
        salutation = "Mrs.";
    } else {
        salutation = "Mx.";
    }

    console.log(`Hi ${salutation} ${user.name}, your age is ${user.age}`);
}

// Example usage:
greetUser({ name: "Harkirat", age: 21, gender: "male" });  
greetUser({ name: "Ananya", age: 25, gender: "female" }); 
greetUser({ name: "Alex", age: 30, gender: "other" }); 