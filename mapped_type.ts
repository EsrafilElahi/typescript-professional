type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

// answer :
// type FeatureOptions = {
//   darkMode: boolean;
//   newUserProfile: boolean;
// };

// =======================================================================

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;

// answer :
// type UnlockedAccount = {
//   id: string;
//   name: string;
// };

// =======================================================================

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

// answer :
// type LazyPerson = {
//   getName: () => string;
//   getAge: () => number;
//   getLocation: () => string;
// };

// =======================================================================

type User = {
  name: string;
  family: string;
  age: number;
  phone: number;
};

type MyPartial<User> = {
  [Property in keyof User]?: User[Property];
};

// keyof User ---> "name" | "fmaily" | "age" | "phone"
// Property ---> every keyof User like : "name"
// User[Property] ---> User["name"] => string

// export
type UserPartial = {
  nmae?: string;
  family?: string;
  age?: number;
  phone?: number;
};


// =======================================================================

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (
    newValue: Type[Property]
  ) => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs to be implemented";
}

const lg: DogInfo = {
  name: "LG",
  age: 13,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onAgeDelete: () => {},
});
