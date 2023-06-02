interface MyUser {
  name: string;
  id: number;
  email?: string;
}

type UserWithoutID = Omit<MyUser, "id">;

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: 1,
      name: "Mr. Foo",
    },
    {
      id: 2,
      name: "Mrs. Baz",
      email: "Mrs. Baz",
    },
  ])
);


const defaultMeta = {
  title: 'Wave Nation - Build a Web3 app with Solidity',
  siteName: 'Wave Nation - Build a Web3 app with Solidity',
  description: 'Buildspace "Build a Web3 app with Solidity" by Gaël Thomas',
  /** Without additional '/' on the end */
  url: 'https://tsnext-tw.thcl.dev',
  type: 'website',
  robots: 'follow, index',
  image: '',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;
