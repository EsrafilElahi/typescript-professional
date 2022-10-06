class User {
  private firstName: string;
  private lastName: string;
  readonly age: number;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 28;
  }

  changeAge(): void {
    // this.age = 30; ---> error because it's read-only
  }

  getFullName(): string {
    return `hi ${this.firstName} ${this.lastName} ${this.age} years old`;
  }
}

const user1 = new User("timmoti", "shalami");

console.log(user1.getFullName()); // ---> it's work and shown beacuse we called the function which gived name and family
// console.log(user1.firstName); ---> it's private doesn't shown
// console.log(user1.lastName); ---> it's private doesn't shown

class Admin extends User {
  private sysAdmin: boolean;

  setSysAdmin(sysAdmin: boolean): void {
    this.sysAdmin = sysAdmin;
  }

  getSysAdmin(): boolean {
    return this.sysAdmin;
  }
  getAllInfo(): any {
    return `${this.getFullName} isAdmin: ${this.getSysAdmin}`;
  }
}
