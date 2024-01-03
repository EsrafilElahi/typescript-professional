const fullName = (name: string, lastName?: string) => {
  if (lastName) {
    return `hi ${name} ${lastName}`;
  } else {
    return `hi ${name}`; 
  }
};

fullName("esrafil", "elahi");
fullName("esrafil");

// ================================

function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(a: string) {
  console.log(a);
}

greeter(printToConsole);

// ================================
