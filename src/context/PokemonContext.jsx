import { createContext, useEffect, useReducer } from "react";
import { disableElements, randomPokemon } from '../modules/util.ts';
import { disabledReducer, partyPokemonReducer, wildPokemonReducer } from "./PokemonReducers";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const localStorageData = JSON.parse(localStorage.getItem("pokemonPartyBuilder")) || [];
  const [disabled, dispatchDisabled] = useReducer(disabledReducer, null)
  const [wildPokemon, dispatchWildPokemon] = useReducer(wildPokemonReducer, null)
  const [partyPokemon, dispatchPartyPokemon] = useReducer(partyPokemonReducer, localStorageData)

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
      disableElements(false);
    } catch (e) {
      alert("Error: " + e.message + ".\n\nPlease enter a Pokemon name or an ID between 1 and 1025.");
      disableElements(false);
    }
  }

  useEffect(() => {
    fetchPokemon(randomPokemon());
  }, [])

  return <PokemonContext.Provider value={{ wildPokemon, fetchPokemon, partyPokemon, dispatchPartyPokemon, disabled, dispatchDisabled }}>
    {children}
  </PokemonContext.Provider>
}

export { PokemonContext };