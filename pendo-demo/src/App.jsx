// todo: use context api to hold "captured" pokemon. Capture up to six. Click a captured one to display it. Have a button to release it. Save to local storage.
// todo: use reducers instead of useState
// todo: use redux instead of context api
// todo: make a chart for stats
// todo: add history list of last 100 or so seen
// todo: add list to show which ones have been seen. Unseen ones can be "???"

import { useEffect, useState } from 'react';
import './App.css'
import { disableElements, randomPokemon } from './modules/util';
import { SearchForm } from './components/SearchForm'

function App() {
  // todo: put this data fetching in a separate file?
  const [pokemon, setPokemon] = useState();

  async function getPokemon(input) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      const data = await response.json()

      setPokemon(data);
      disableElements(false);
    } catch(e) {
      alert("Error: " + e.message + ".\n\nPlease enter a Pokemon name or an ID between 1 and 1025.");
      disableElements(false);
    }
  }

  useEffect(() => {
    getPokemon(randomPokemon());
  }, [])

  return (
    <>
      <SearchForm data={pokemon} getPokemon={getPokemon}/>
    </>
  )
}

export default App
