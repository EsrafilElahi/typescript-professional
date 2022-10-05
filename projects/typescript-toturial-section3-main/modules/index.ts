import optionGenerator from "./payment.module";
import * as UtilityTypes from "./types.module";
import { codeGenerator, sendSMS } from "./util.module";
const myObject = {
    userDetail1: "", 
    user_1: "dvd", 
    user_2: "", 
    type_1: "", 
    type_2: ""
}
const {user_1} = myObject
console.log(user_1);

let myVar: UtilityTypes.EditUser = {
    id: 1,
    name: "wdvsdV",
    age: 25
}
console.log(sendSMS("09154562362", codeGenerator().toString()));
console.log(optionGenerator(5000, "http://..."));
class Test {
    public prop!: string;
}