import { ReactElement, ReactNode } from 'react';
import { SetStateAction } from 'react';

\
interface f1 {
  item: string,
  setItem: (item: string) => void // no return
}


interface f2 {
  item: string,
  setItem: (item: string) => JSX.ReactElement // has return like component
}


interface f1 {
  item: string,
  chldren: ReactNode // for children
}


interface f1 {
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>> // for setState
}


const [state, setState]: [S: React.Dispatch<React.SetStateAction<S>>] = useState<S>(initialState); // best practice