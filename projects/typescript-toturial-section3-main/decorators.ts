 type FooClassDecorator = {
    message: string
 }
 function Decorator(props: FooClassDecorator): any{
   return function(target: Function & typeof FooClass) {
    let targerObj = new target();
    if(targerObj.message){
        targerObj.message = props.message
    }
   }
 }

 @Decorator({message: "send message in decorator"})
 class FooClass { 
    public message: string = "";
 }
console.log(new FooClass().message);
