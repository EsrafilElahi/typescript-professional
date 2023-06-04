const person = {
  age: 26,
  name: 'Tim'
};

type data1 = typeof person;
// type data1 = {
//  age: number,
// name: string
// }

type data2 = keyof typeof person;
// or
type data3 = keyof data1;

// "name" | "age"


enum Animal {
  cat,
  dog,
  cow
}

type Data = keyof typeof Animal;

// type animal1 = 'cat' | 'dog' | 'cow';