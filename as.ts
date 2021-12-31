const fuck: any = "20";
const fucker1 = fuck as string; // be onvan string
const fucker2 = fuck as number; // be onvan string

let un: unknown;
un = "motherFucker";

// console.log(un.length); // not work
console.log((un as string).length); // work
