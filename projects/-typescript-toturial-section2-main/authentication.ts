// // username - password => response
// // OTP -> mobile 
// type User = {
//     name: string;
//     username: string;
//     password: string;
// }
// type ResponseMethod = {
//     message: string
// }
// class Controllers {
    
//     public sendSMS(message: string): void{
//         console.log("send message :", message);
//     }
// }
// class Authentication extends Controllers{
//     private Users: User[] = []
//     register(name: string, username: string, password: string): ResponseMethod {
//         this.Users.push({
//             name,
//             password,
//             username
//         })
//         this.sendSMS("welcome to botostart website")
//         return {
//             message: "user registred successfuly!"
//         }
//     }
//     login(username: string, password: string): User | ResponseMethod{
//         const user: User | undefined = this.Users.find(user => user.username == username)
//         if(!user) return {message: "cannot find any user by username"}
//         if(user.password !== password) return {message : "username or password is incorrect"}
//         return user
//     }
//     getAllUsers(): User[] {
//         return this.Users
//     }
// }
// const auth = new Authentication();
// console.log(auth.register("Erfan", "erfanyousefi", "123456"));
// console.log(auth.register("Ali", "alimosavi", "45697"));

// console.log(auth.getAllUsers());
// console.log(auth.login("erfanyousefi", "123456"));
// console.log(auth.login("erfanyousefi", "123sdfsdf456"));
