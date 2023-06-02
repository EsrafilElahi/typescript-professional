type One = number;
type Two = string;
type Three = boolean;

type Tuple_Type = [One, Two, Three];

const tuple_type: Tuple_Type = [1, "2", true];


type Loc = {
  x: number,
  y: number
}

type TimeStamp = string

type TupleType = [location: Loc, timeStamp: TimeStamp]