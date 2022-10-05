type SomeType =  string | number | undefined;
type Person = {
    name: string;
    age: number;
    role: string;
}
type Teacher = Person & {
    TeacherID: number;
}
type Student = Person & {
    StudentID: number;
}
let value : SomeType;
function setValue(data: any){
    if(typeof data == "string"){
        value = "my String Data: " + data;
    }else if(typeof data == "number"){
        value = "my Number Data: " + data;
    }else if(typeof data == "undefined"){
        value = "my Undefined Data: " + data;
    }else{
        throw typeof data + " is invalid data type"
    }
    console.log(value);
}
let arr: [number, string] | [string, number] = [12, "str"]
let [var1, var2] = arr;
let person: Person = {name: "", age: 0, role: "teacher"};
function detectPerson(data: Student | Teacher){
    const props = Object.getOwnPropertyNames(data)
    let teacher: object = {TeacherID: 0, ...person}, student: object = {StudentID: 1, ...person}
    const isTeacher = props.every(prp => prp in teacher);
    const isStudent = props.every(prp => prp in student);
    if(isTeacher){
        console.log("this is a teacher data");
        
    }else if(isStudent){
        console.log("this is a student data");
    }else{
        console.log("Error data");
        
    }

}
detectPerson({...person, TeacherID: 1})
detectPerson({...person, StudentID: 2})
