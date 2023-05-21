
type Laptop = {
id: string;
model: string;
releaseDate: string;
}

type LaptopKeys = keyof Laptop


const list1 = ["book", "movie", "car"];
const TList1 = typeof list; // string[]


const list2 = ["book", "movie", "car"] as const;
const TList2 = typeof list; // ["book", "movie", "car"]


enum list3  = {
  BOOK: "book",
  MOVIE: "movie",
  bookCAR: "car",
};

const [state, setState] = useState<list3>(list3.BOOK);
