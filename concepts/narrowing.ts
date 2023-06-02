const getUserAge = (a: string | number) => {
  return a
}

let age = getUserAge(24)
age // string | number


if (typeof age === "string") {
  age // string
}