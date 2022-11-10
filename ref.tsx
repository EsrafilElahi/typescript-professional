import { MutableRefObject, ReactNode, useRef } from 'react'


interface IHeader {
  btnRef: MutableRefObject<HTMLButtonElement>
  onOpen: () => void
}

export default function Header({ btnRef, onOpen }: IHeader) {

  return (
    <div>
      <span>header</span>
    </div>
  )
}


const Anothercompo = () => {
  const btnRef = useRef<HTMLButtonElement>(null)


  return (
    <div>
      <Header
        onOpen={onOpen}
        btnRef={btnRef as MutableRefObject<HTMLButtonElement>}
      />
      <span>another</span>
    </div>
  )
}