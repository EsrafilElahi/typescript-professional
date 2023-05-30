// key in ts
export type cardInfoProps = {
  userDetail: {
    [key: string]: any;
  };
};


interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  id: number;
  ok?: boolean;
  fn?: (title: string) => string;
  submit: React.FormEvent;
  person?: Person;
  handleChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
  setTodo: React.Dispatch<React.setStateAction<string | string[]>>;
}

const TextField: React.FC<Props> = ({handleChange}) => {
  
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  
  return (
    <div ref={divRef}>
      <p>text field</p>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}

// handles every thing
onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
onChange = (e: React.FormEvent<HTMLSelectElement>): void
onClick(event: React.MouseEvent<HTMLButtonElement>): void;

// React.ReactNode --> everything supported React.ReactChild / React.ReactFragment / React.ReactPortal ...
// ({children: React.ReactNode})
const App: React.FC = () => {
  return (
    <div>
      <TextField 
        text='test' 
        id={23} 
        ok={false} 
        fn={() => console.log("hello kitty")}
        person={{firstName: "folan", lastName: "folani"}}
        handleChange = {() => alert("handel this fucking test input")}
      />
    </div>
  )
}


// react component
// in doroste na React.FC
const ReactComponent = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return (
    <div>
      <span>hello world</span>
    </div>
  )
}

export default ReactComponent






// react form handling
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}

<form onSubmit={handleSubmit}>
  <input onChange={handleChange} />
</form>


import React, { ReactNode, ReactElement, useState } from "react";

// props
const Title = ({ name }: { name: string }) => {
  return <div>{name}</div>;
};

// children
const Heading = ({ children }: { children?: React.ReactNode }): React.ReactElement => {
  return <div>{children}</div>;
};

// list
const List<strType> = ({items, render}: {items: strType[], render: (item: strType) => ReactNode}) => {
  return(
    <ul>
      {
        items.map((item, index) => <li key={index}>{render(item)}</li>)
      }
    </ul>
  )
}

function App() {
  const [val, setVal] = useState<number | null>(null);
  const [state, setState]: [S: Dispatch<SetStateAction<S>>] = useState<S>(initialState); // best practice

  return (
    <div>
      <Title name="esrafil" />
      <Heading>
        <p>hi mother fucker</p>
      </Heading>
      <List 
        item={['a', 'b', 'c', 'd']}
        render={(item: string) => <span>{item.toLowerCase()}</span>}
      />
    </div>
  );
}

export default App;

// =============================================

interface ISettings {
  slidingDuration: number
  isSmartSliding: boolean
  shouldAutoplay: boolean
  width: WidthProperty<string | number>
  height: HeightProperty<string | number>
}

/**
 * Initial settings for the slider.
 */
const initialSettings: ISettings = {
  slidingDuration: 500,
  isSmartSliding: true,
  shouldAutoplay: true,
  autoplayDuration: 8000,
  width: '100%',
  height: '100%',
  ...props.settings
}

const [settings, setSettings] = React.useState<ISettings>(initialSettings)
{settings as ISettings} // type assertion

/**
 * Subscribes to any changes made to the settings, then re-sets them through `setSettings`.
 */
React.useEffect(() => {
  setSettings({
    ...settings,
    ...props.settings as ISettings
  })
}, [props.settings])
