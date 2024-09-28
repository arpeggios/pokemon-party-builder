import { createContext, useEffect, useReducer, useState } from "react";
import { randomPokemon } from '../modules/util.ts';
import { partyPokemonReducer, wildPokemonReducer } from "./PokemonReducers";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const localStorageData = JSON.parse(localStorage.getItem("pokemonPartyBuilder")) || [];
  const [wildPokemon, dispatchWildPokemon] = useReducer(wildPokemonReducer, null);
  const [partyPokemon, dispatchPartyPokemon] = useReducer(partyPokemonReducer, localStorageData);
  const [disabled, setDisabled] = useState(true);
  const [alignment, setAlignment] = useState("discover");
  

  function save(data) {
    localStorage.setItem("pokemonPartyBuilder", JSON.stringify(data));
  }

  useEffect(() => {
    save(partyPokemon);
  }, [partyPokemon])

  async function fetchPokemon(input) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      const data = await response.json()

      dispatchWildPokemon({
        type: "SET_WILD_POKEMON",
        payload: data
      });

      setDisabled(false);
    } catch (e) {
      alert("Error: " + e.message + ".\n\nPlease enter a Pokemon name or an ID between 1 and 1025.");
      
      setDisabled(false);
    }
  }

  useEffect(() => {
    fetchPokemon(randomPokemon());
  }, [])

  useEffect(() => {
    if (partyPokemon.length === 6) setDisabled(true);
  }, [])

  return <PokemonContext.Provider value={{ wildPokemon, fetchPokemon, partyPokemon, dispatchPartyPokemon, disabled, setDisabled, alignment, setAlignment }}>
    {children}
  </PokemonContext.Provider>
}

export { PokemonContext };