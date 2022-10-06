type PersonInfo = {
  name: string;
  age: number;
};

function createPerson(): PersonInfo {
  return {
    name: "John Doe",
    age: 30,
  };
}

// T1 is the new type created by ReturnType<typeof createPerson>
type T1 = ReturnType<typeof createPerson>;

// Output:
// T1 = {
//  name: string,
//  age: number
// }

// =======================================================================

// custom hook
const useNumber = (initialValue: number) => useState<number>(initialValue);

type UseNumberValue = ReturnType<typeof useNumber>[0];
type UseNumberSetValue = ReturnType<typeof useNumber>[1];

const Incrementer: React.FC<{
  value: UseNumberValue;
  setValue: UseNumberSetValue;
}> = ({ value, setValue }) => (
  <Button onClick={() => setValue(value + 1)} title={`Add - ${value}`} />
);
