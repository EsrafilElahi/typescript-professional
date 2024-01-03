import {useRef, ElementRef} from 'react';

const Component = () => {
  const audioRef = useRef<ElementRef<"audio">>(null);

  return <audio ref={audioRef}> Audio Tag </audio>
}
