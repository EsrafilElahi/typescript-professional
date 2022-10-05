
function Merge<T1 extends object, T2 extends object>(arg1: T1, arg2: T2): T1 & T2 {
    return {...arg1, ...arg2}
}
console.log(Merge<object, object>({name: "ErfanYousefi", age: 26}, {id: 2, email:"eref@google.com"}));

type Employee = {
    id: number;
    name: string;
    email: string;
    age: number
}
function getObjectAndFilter<T extends Employee, K extends keyof T>(obj: T, keys: K[]) {
    let filteredObject: any = {}
    for (const key of keys) {
        filteredObject[key] = obj[key]
    }
    return filteredObject;
}
const employee: Employee = {
    id: 1, 
    name: "erfan",
    email: "erfan@google.com",
    age: 26
}
console.log(getObjectAndFilter(employee, ["id", "name"]));
