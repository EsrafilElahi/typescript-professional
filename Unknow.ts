let un: unknown;
un = "motherFucker";

// console.log(un.length); // not work
console.log((un as string).length); // work
