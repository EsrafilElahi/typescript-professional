function sum(num1: number, num2: number): number{
    return num1 + num2
}
const result = sum(4, 10.45)

function getName(firstName: string, lastName: string) : string {
    return `Hello ${firstName} - ${lastName} welcome`
}
logger(getName("Erfan", "Usefi"));
function getDate(): Date {
    return new Date()
}
logger(getDate());
function getTimestamps(date: Date): number{
    return new Date(date).getTime()
}
logger(getTimestamps(getDate()));

function logger(value: any): void{
    console.log(value);
}
logger("ali")
function runFunction(fn: Function): Function {
    return fn
}
runFunction(() => {
    console.log("Hello EveryOne");
})();