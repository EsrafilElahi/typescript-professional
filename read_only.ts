interface Cat {
  name: string;
  breed: string;
}

function makeCat(name: string, breed: string): Readonly<Cat> {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabby");
// usul.name = "Piter";

function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

const c1 = makeCoordinate(10, 20, 30);
c1[0] = 50;

const reallyConst = [1, 2, 3] as const; // type assertion freez it
reallyConst[0] = 50; // doesn't change
