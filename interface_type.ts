
// type user
type TUser = {
  firstname: string;
  lastname?: string;
};

const TUser: User = { firstname: "ali", lastname: "aliei" };

type LoggedUser = User & {
  id: number;
};

// =======================================================================

interface IUser {
  firstname: string;
  lastname?: string;
}

const IUser: User = { firstname: "ali", lastname: "aliei" };

interface LoggedUser extends IUser {
  id: number;
}

const user: LoggedUser = {
  firstname: "",
  lastname: "",
  id: 34,
};

// =======================================================================
// how to extend {type*type} & {interface*interface} & {type*interface} & {interface*type}

// {type*type}
type HumanWithName = {
  name: string;
};
type Human = HumanWithName & {
  legs: number;
  eyes: number;
};

// {type*interface}
interface HumanWithName {
  name: string;
}
type Human = HumanWithName & {
  legs: number;
  eyes: number;
};

// {interface*interface}
interface HumanWithName {
  name: string;
}
interface Human extends HumanWithName {
  legs: number;
  eyes: number;
}

// {interface*type}
type HumanWithName = {
  name: string;
};
interface Human extends HumanWithName {
  legs: number;
  eyes: number;
}
