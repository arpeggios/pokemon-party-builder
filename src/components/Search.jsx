import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { disableElements, randomPokemon } from "../modules/util";
import { WildPokemon } from "./WildPokemon"

const css = `
  #entered-pokemon {
    width: 180px;
  }  

  #submit-search {
    margin-left: 8px;
  }

  .action-btns {
    button {
      margin: 10px 5px 0;
    }
  }
`

export function Search() {
  const { wildPokemon, getPokemon, partyPokemon, setPartyPokemon } = useContext(PokemonContext)

  function handleRandom() {
    disableElements(true);
    getPokemon(randomPokemon());
  }

  function handleSubmit(e) {
    e.preventDefault();
    disableElements(true);

    const val = document.querySelector("#entered-pokemon").value.trim().toLowerCase();

    if (val && (typeof val === "string" || typeof val === "number")) {
      getPokemon(val);
    }
  }

  function handleCatch() {
    if (partyPokemon.length < 6) {
      disableElements(true);
      setPartyPokemon([...partyPokemon, wildPokemon]);
      getPokemon(randomPokemon());
    }
  }

  return (
    <>
      <style>{css}</style>
      {{ wildPokemon } &&
        <WildPokemon pokemon={wildPokemon} />
      }
      <form onSubmit={handleSubmit}>
        <input
          id="entered-pokemon"
          type="text"
          placeholder="Enter Pokemon name or ID"
          required
        />
        <button id="submit-search" type="submit">Submit</button>
      </form>
      <div className="action-btns">
        <button id="random" type="button" onClick={handleRandom}>Random</button>
        <button id="catch" type="button" onClick={handleCatch}>Catch</button>
      </div>
    </>
  )
}