interface UserInterface {
  name: string;
  age?: number;
  admin: boolean;
  getMessage?(name: string): string;
}

const person1: UserInterface = {
  name: "john",
  age: 32,
  admin: true,
  getMessage: (name) => `hola ${name}`,
};

const person2: UserInterface = {
  name: "tom",
  admin: false,
};

interface PointInterface {
  readonly x: number;
  readonly y: number;
}

const coordinates = (p: PointInterface): string => {
  return `X: ${p.x} Y: ${p.y}`;
};

interface getData {
  job: string;
  age: number;
  admin: boolean;
}
