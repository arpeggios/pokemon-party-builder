import { createContext, useEffect, useReducer } from "react";
import { disableElements, randomPokemon } from '../modules/Util';
import { partyPokemonReducer, wildPokemonReducer, disabledReducer } from "./PokemonReducers";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const localStorageData = JSON.parse(localStorage.getItem("pokemonPartyBuilder")) || [];
  const [wildPokemon, dispatchWildPokemon] = useReducer(wildPokemonReducer, null)
  const [partyPokemon, dispatchPartyPokemon] = useReducer(partyPokemonReducer, localStorageData)
  const [disabled, dispatchDisabled] = useReducer(disabledReducer, null)

  function save(data) {
    localStorage.setItem("pokemonPartyBuilder", JSON.stringify(data));
  }

  useEffect(() => {
    save(partyPokemon);
  }, [partyPokemon])

  // const [inputs, setInputs] = useState()

  // const inputs = {
  // useEffect(() => {
  //   setInputs({
  //     searchInput: document.querySelector < HTMLFormElement > ("#entered-pokemon"),
  //     submitBtn: document.querySelector("#submit-search"),
  //     randomBtn: document.querySelector("#random"),
  //     catchBtn: document.querySelector("#catch")
  //   })
  // }, [])


  const inputs = {
    searchInput: "#entered-pokemon",
    submitBtn: "#submit-search",
    randomBtn: "#random",
    catchBtn: "#catch"
  }


  async function fetchPokemon(input) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
      const data = await response.json()

      dispatchWildPokemon({
        type: "SET_WILD_POKEMON",
        payload: data
      });

      // todo: check if party is < 6 in this function
      // disableElements(false);
      
      if (inputs) {
        dispatchDisabled({
          type: "ENABLE",
          payload: {
            inputs,
            partyPokemon
          }
        })
      }
    } catch (e) {
      alert("Error: " + e.message + ".\n\nPlease enter a Pokemon name or an ID between 1 and 1025.");
      disableElements(false);
    }
  }

  useEffect(() => {
    fetchPokemon(randomPokemon());
  }, [])

  return <PokemonContext.Provider value={{ wildPokemon, fetchPokemon, partyPokemon, dispatchPartyPokemon, dispatchDisabled, inputs }}>
    {children}
  </PokemonContext.Provider>
}

export { PokemonContext };