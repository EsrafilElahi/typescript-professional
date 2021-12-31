import React, { ReactNode, ReactElement, useState } from "react";

// props
const Title = ({ name }: { name: string }) => {
  return <div>{name}</div>;
};

// children
const Heading = ({ children }: { children?: ReactNode }): ReactElement => {
  return <div>{children}</div>;
};

// list
const List<strType> = (
  {items, render}: 
  {
    items: strType[], 
    render: (item: strType) => ReactNode;
  }
) => {
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
