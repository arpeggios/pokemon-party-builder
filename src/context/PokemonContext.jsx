import { createContext, useState, useEffect } from "react";
import { disableElements, randomPokemon } from '../modules/util';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const localStorageData = JSON.parse(localStorage.getItem("pokemonPartyBuilder")) || [];
  const [wildPokemon, setWildPokemon] = useState();
  const [partyPokemon, setPartyPokemon] = useState(localStorageData);
  const [disabled, setDisabled] = useState();

  function save(data) {
    localStorage.setItem("pokemonPartyBuilder", JSON.stringify(data));
  }
  
  useEffect(() => {
    save(partyPokemon);
  }, [partyPokemon])

  async function getPokemon(input) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      const data = await response.json()

      setWildPokemon(data);
      disableElements(false);
    } catch(e) {
      alert("Error: " + e.message + ".\n\nPlease enter a Pokemon name or an ID between 1 and 1025.");
      disableElements(false);
    }
  }

  useEffect(() => {
    getPokemon(randomPokemon());
  }, [])

  return <PokemonContext.Provider value={{ wildPokemon, getPokemon, partyPokemon, setPartyPokemon, disabled, setDisabled }}>
    {children}
  </PokemonContext.Provider>
}

export {PokemonContext};