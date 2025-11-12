import axios from "axios";
import {useState, useEffect} from "react";


import type { Character } from "../types/character";

function App() {

  const [character, setCharacter] = useState<Character | null>(null);


  useEffect(() => {
      axios.get<Character>("https://swapi.info/api/people/1")
    .then(({ data }) => {
      setCharacter(data);
    });

  }, [])

 

  return (
    <>
      <h1>Lesson 6</h1>


      <pre>{JSON.stringify(character, null, 2)}</pre>
      

    </>
  );
}

export default App;
