let firstName: any;
firstName = 'tom'
firstName = 25
firstName = false

let lastName: unknown;
lastName = 'hardy'
lastName = 35
lastName = true

let fName: string = firstName // no error ---> in any doesn't type-checking (assignable in any type any variable)
let lName: string = lastName // error ---> in unknown does type-checking (doesn't assignable in any type any variable - just once)
// first it's unknown -> until it's unknown it's assignable then find-out what's it's type - then can't assignable again