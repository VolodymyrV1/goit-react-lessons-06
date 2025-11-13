import axios from 'axios';
import { useState, useEffect } from 'react';

import Timer from './Timer';

import type { Character } from '../types/character';

function App() {
  const [character, setCharacter] = useState<Character | null>(null);
  const [counter, setCounter] = useState<number>(() => {
    const value = localStorage.getItem("counter");

    if (value != null) {
      return JSON.parse(value);
    }

    return 0;
  });

  // useEffect(() => {
  //   console.log('useEffect');

  //   const fetchCharacter = async () => {
  //     const { data } = await axios.get<Character>(
  //       'https://swapi.info/api/people/1'
  //     );

  //     setCharacter(data);
  //   };

  //   fetchCharacter();
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect", { counter });
    
  //   localStorage.setItem("counter", JSON.stringify(counter));
  // }, [counter]);

  // useEffect(() => {
  //   console.log("useEffect", {character});
  // }, [character]);

  // useEffect(() => {
  //   console.log('useEffect', { counter, character });
  // }, [counter, character]);

  const handleClick = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  return (
    <>
      <h1>Lesson 6</h1>

      <pre>{JSON.stringify(character, null, 2)}</pre>

      <button onClick={handleClick}>Clicks: {counter}</button>

      <Timer />
    </>
  );
}

export default App;
