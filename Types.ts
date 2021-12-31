const a: string = "hello";
const aa: "hello" | "halo" = "hello";

const b: number = 25;
const bb: 23 | 22 = 23;

const c: any = "halo";
const cc: false | "23" | null = null;

let r: unknown;
r = "fuck unknown";

interface FF {
  name: string;
  age: number;
}
const fff: FF | undefined = { name: "tom", age: 22 };

const ff: number | string = 99;
const d: boolean = false;
const j: object = { name: "john", lastName: "doe" };
const e: string[] = ["hello", "halo", "merhaba"];
const f: number[] = [2, 5, 3, 7];
const g: any[] = [true, 23, "hi", undefined];
const v: (number | string)[] = [1, "f", 3, "a", "b", 4];
const k: object[] = [{ name: "ali" }, { name: "folan" }];

let vAny: any = 10;
let vUnknown: unknown = 10;

let sAny: string = vAny;
// let sUnknown: string = vUnknown; -----> error because unknown doesn't assignable
