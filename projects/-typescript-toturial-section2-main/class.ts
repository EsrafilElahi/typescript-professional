// Class -> User
// backend -> create data & read DB send to frontend
// front -> read & send data from/to backend 
// type profile = {
//     name: string;
//     mobile: string;
//     age: number;
// }
// type EditProfile = {
//     name?: string | undefined;
//     mobile?: string | undefined;
//     age?: number | undefined;
// }
// class User{
//     private name: string;
//     protected mobile: string;
//     private age: number;
//     constructor(name: string, mobile: string, age: number){
//         this.name = name;
//         this.mobile = mobile;
//         this.age = age
//     }
//     getUserProfile(): profile{
//         return {
//             name: this.name,
//             mobile: this.mobile,
//             age: this.age
//         }
//     }
//     editUserProfile(profileOBJ : EditProfile): EditProfile{
//         if(profileOBJ.age){
//             this.age = profileOBJ.age
//         }
//         if(profileOBJ.name){
//             this.name = profileOBJ.name
//         }
//         if(profileOBJ.mobile){
//             this.mobile = profileOBJ.mobile
//         }
//         return {
//             name: this.name,
//             mobile: this.mobile,
//             age: this.age
//         }
//     }
// }
// const user : User = new User("Erfan Usefi", "09332255768", 25)
// user.editUserProfile({age: 35})
// console.log(user.getUserProfile());

interface IUser {
    id: number;
    name: string;
    email: string;
    mobile: string;
    nationalCode: string | null;
}
class User implements IUser{
    public id: number = 1;
    public name: string = "Erfan"
    public email: string = "erfan@google.com";
    public mobile: string = "09332255768";
    private nationalID: string | null = null;

    get nationalCode(): string | null{
        return "Your Id: " + this.nationalID
    }
    set nationalCode(value: string | null) {
        if(isNationalIdValid(value)){
            this.nationalID = value
        }
    }
}
const erfan = new User()
erfan.nationalCode = "9263557411"
console.log(erfan.nationalCode);


function isNationalIdValid(nationalId: string | null): Boolean {
    // STEP 0: Validate national Id
  
    // Check length is 10
    if(!nationalId) return false
    if (nationalId.length < 8 || 10 < nationalId.length) {
      console.log(false);
      return false;
    }
  
    // Check if all of the numbers are the same
    const invalidNationalcodes = ["0000000000", "1111111111", "2222222222", "3333333333", "4444444444", "5555555555"]
    if (invalidNationalcodes.includes(nationalId)) {
      console.log(false);
      return false;
    }
  
    // STEP 00 : if nationalId.lenght==8 add two zero on the left
    if (nationalId.length < 10) {
      let zeroNeeded = 10 - nationalId.length;
  
      let zeroString = "";
      if (zeroNeeded == 2) {
        zeroString = "00";
      } else {
        zeroString = "0";
      }
  
      nationalId = zeroString.concat(nationalId);
    }
  
    // STEP 1: Sum all numbers
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += +nationalId.charAt(i) * (10 - i);
    }
  
    // STEP 2: MOD ON 11
    let mod = sum % 11;
  
    // STEP 3: Check with 2
    let finalValue;
    if (mod >= 2) {
      finalValue = 11 - mod;
    } else {
      finalValue = mod;
    }
  
    // STEP 4: Final Step check with control value
    if (finalValue == +nationalId.charAt(9)) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }