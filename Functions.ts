const fullName = (name: string, lastName: string) => {
  return `hi ${name} ${lastName}`;
};

fullName("esrafil", "elahi");

// ================================

function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

// ================================

