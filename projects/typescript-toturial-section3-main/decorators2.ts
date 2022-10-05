// property decorator
type PropoertyOptions = {
    min?: number;
    max?: number;
    default?: string | number;
    ErrorMessage?: string;
}

function Property(options: PropoertyOptions = {}){
    return function<T>(target: T, propertyName: keyof T){
        let value: string | number;
        function getter(){
            console.log("CalledGetter");
            return value
        }
        function setter(newValue: string | number){
            if(typeof newValue == "number"){
                if(options.min && options.min > newValue){
                    throw new Error(options.ErrorMessage ?? "min value can not grate than value")
                } 
                if(options.max && options.max < newValue){
                    throw new Error(options.ErrorMessage ?? "max value can not less than value")
                } 
            }
            if(typeof newValue == "undefined"){
                if(options.default){
                    value = options.default
                }
            }else{
                value = newValue
            }
        }
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter
        })
        
    }
}

class UserClass {
    @Property()
    public fullName: string= '';
    @Property({min: 12, max: 60, default: 25})
    public age: number | undefined = undefined;
}
try {
    const userObj = new UserClass();
    userObj.fullName = "Erfan Yousefi";
    console.log(userObj.fullName);
    console.log(userObj.age);
    console.log(userObj);
    
} catch (error: any) {
    console.log(error?.message);
    
}
