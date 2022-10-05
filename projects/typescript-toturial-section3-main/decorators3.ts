// method decorator
function MethodDecorator(state: boolean){
    return function (target: object, propertyKey: string, Descriptor: PropertyDescriptor) {
        Descriptor.enumerable = state
        const mainMethod = Descriptor.value;
        console.log(Descriptor);
        
        Descriptor.value = function(...args: any[]) {
            const [firstArg, secondArg] = args;
            if(firstArg && typeof firstArg == "string"){
                console.log("the decorator get firstArgument");
                args[0] = firstArg + " => changed";
                return mainMethod.apply(this, args)
            }else{
                console.log("the decorator cannot get firstArgument");
                args[0] = firstArg + " => notChanged";
                return mainMethod.apply(this, args)
            }
        }
        
    }
}
class MyClass {
    @MethodDecorator(true)
    someMethode(arg: string){
        return "you called someMethod"
    }
 }
 const myClass = new MyClass();
 myClass.someMethode("some arg")