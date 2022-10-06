type UserType = {
  name: string;
  age: number;
  job?: any;
};

const person: UserType = {
  name: "tom",
  age: 43,
  job: false,
};

type ID = number | number[];

const info1: ID = 23;
const info2: ID = [1, 4, 2, 5];
