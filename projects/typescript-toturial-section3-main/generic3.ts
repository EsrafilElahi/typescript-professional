interface MyInterface<T> {
    field: T
}
type Mytype<T> = {
    field: string & T
}
class Myclass<T>{
    constructor(public field: T){}
}
type Foo = {
    name: string;
    age: number
}
 type User_<T extends object> = {
    [K in keyof T]?: T[K]
 }
 const user1: User_<Foo> = {
    name: "Ali",
    age: 25
 }
 console.log(user1);
 