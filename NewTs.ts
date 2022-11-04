// interface user
interface User {
  id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}

type ReadOnlyByKey<T, K extends keyof T> = Readonly<Pick<T, K>> & Omit<T, K>;
// desc : T is Type, and K extends keyof T
// keyof T one of these => "id" | "firstname" | "lastname" | "age"
// K extends one of "id" | "firstname" | "lastname" | "age"
type IdReadOnly = ReadOnlyByKey<User, "id">;

// =================================================================

type LoggedUser = Required<Pick<User, "id">> & Omit<User, "id">; // bad
type RequireFields<T, K extends keyof T> = Required<Pick<T, K>> & Omit<T, K>; // good

const u2: RequireFields<User, "id" | "age"> = {
  id: 2,
  age: 32,
  firstname: "Chris",
  lastname: "Bongers",
};

// =================================================================

const logAndReturn = <T>(input: T): T => {
  console.log(input);
  return input;
};

logAndReturn < number > 123;

interface User {
  firstname: string;
  lastname: string;
}

logAndReturn < User > { firstname: "Chris", lastname: "Bongers" };

// =================================================================

const user = { firstname: "Chris", lastname: "Bongers", age: 32 };

interface User {
  firstname: string;
  age: number;
}
const { firstname, age }: User = user;

// =================================================================

interface User {
  id?: number;
  firstname: string;
  lastname: string;
  age?: number;
}

type LoggedUser = Partial<User> & Required<Pick<User, "id">>; // just id required
type LoggedUser = Required<Pick<User, "age">> & Omit<User, "age">; // just age required

// =================================================================

interface User {
  firstname: string;
  lastname?: string;
  age: number;
}

const updateUserField = (id: number, fieldsToUpdate: Partial<User>) => {
  return db.update(id, fieldsToUpdate);
};

updateUserField(1, { firstname: "Chris" });
updateUserField(1, { age: 32 });

const updateUser = (user: Required<User>) => {
  db.update(user);
};

updateUser({ id: 12, firstname: "Chris", lastname: "Bongers" });

// =================================================================

interface User {
  id: number;
  firstname: string;
  lastname: string;
  age?: number;
}

const users: Record<number, User> = {
  0: { id: 1, firstname: "Chris", lastname: "Bongers" },
  1: { id: 2, firstname: "Yaatree", lastname: "Bongers", age: 2 },
};

type Admins = "chris" | "nicole";

const adminUsers: Record<Admins, User> = {
  chris: { id: 1, firstname: "Chris", lastname: "Bongers" },
  nicole: { id: 2, firstname: "Nicole", lastname: "Bongers" },
};

type Status = "not_started" | "progress" | "completed" | "failed";

const statusTypes: Record<Status, { icon: string; color: string }> = {
  not_started: { icon: "icon-not-started", color: "gray" },
  progress: { icon: "icon-progress", color: "orange" },
  completed: { icon: "icon-completed", color: "green" },
  failed: { icon: "icon-failed", color: "red" },
};

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// =================================================================

// ================================================================
