import { createContext, useState, useEffect } from "react";
import { disableElements, randomPokemon } from '../modules/util';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
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

  return <PokemonContext.Provider value={{ pokemon, getPokemon }}>
    {children}
  </PokemonContext.Provider>
}

export {PokemonContext};