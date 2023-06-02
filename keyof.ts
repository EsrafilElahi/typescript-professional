
type Laptop = {
  id: string;
  model: string;
  releaseDate: string;
}

type LaptopKeys = keyof Laptop

const n: LaptopKeys = 'id'


const list1 = ["book", "movie", "car"];
type TList1 = typeof list1; // string[]


const list2 = ["book", "movie", "car"] as const;
type TList2 = typeof list2; // ["book", "movie", "car"]


enum list3 {
  BOOK = "book",
  MOVIE = "movie",
  bookCAR = "car",
};

const [state, setState] = useState<list3>(list3.BOOK);
