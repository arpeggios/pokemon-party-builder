import { useEffect, useState } from 'react';
import './App.css'
import { PokemonSearch } from './components/PokemonSearch'

function App() {
  // todo: put this data fetching in a separate file?
  const [pokemon, setPokemon] = useState();

  const displayPokemon = async (theInput) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${theInput}`)
    const data = await response.json()

    setPokemon(data)
  }

  function randomPokemon(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    const randomNum = randomPokemon(1, 1025);
    displayPokemon(randomNum);
  }, [])

  return (
    <>
      <PokemonSearch pkmnData={pokemon} displayPokemon={displayPokemon}/>
    </>
  )
}

export default App
