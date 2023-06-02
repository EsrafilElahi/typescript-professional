
type GenericSelectProps<TValue> = {
  formatLabel: (value: TValue) => string;
  values: Readonly<TValue[]>;
};

interface SingleSelectProps<TValue> extends GenericSelectProps<TValue> {
  isMulti: false; // false, not boolean. For single select component this is always false
  onChange: (value: TValue) => void;
}

interface MultiSelectProps<TValue> extends GenericSelectProps<TValue> {
  isMulti: true; // true, not boolean. For multi select component this is always true
  onChange: (value: TValue[]) => void;
}


function fullName<T>(name: T): T {
  return name
}

const fName = fullName<string>('esrafil elahi')