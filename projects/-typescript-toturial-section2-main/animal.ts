class Animal {
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    sound(soundType: string){
        return `${this.name} sound is : ${soundType}`;   
    }
}

class Caw extends Animal{
    constructor(theName: string){
        super(theName)
        this.name = theName
    }
    AnimalName() {
        return this.name
    }
}
class Dog extends Animal{
    constructor(name: string){
        super(name)
    }
}
const caw = new Caw("Caw")
console.log(caw.sound("Mooooooo"));
console.log(caw.AnimalName());

const dog = new Dog("Dog");
console.log(dog.sound("haf - haf"));
