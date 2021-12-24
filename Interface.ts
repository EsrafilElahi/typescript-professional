interface UserInterface {
  name: string;
  age?: number;
  admin: boolean;
  getMessage?(name): string;
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
  x: number;
  y: number;
}

const coordinates = (p: PointInterface) => {
  return `X: ${p.x} Y: ${p.y}`;
};
