import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { disableElements, randomPokemon } from "../modules/util";
import { WildPokemon } from "./WildPokemon"

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
      {{ wildPokemon } &&
        <WildPokemon pokemon={wildPokemon} />
      }
      <form onSubmit={handleSubmit}>
        <input
          id="entered-pokemon"
          type="text"
          placeholder="Enter Pokemon name or ID"
          style={{ width: "200px" }}
          required
        />
        <button id="submit-search" type="submit">Submit</button>
      </form>
      <div>
        <button id="random" type="button" onClick={handleRandom}>Random</button>
        <button id="catch" type="button" onClick={handleCatch}>Catch</button>
      </div>
    </>
  )
}