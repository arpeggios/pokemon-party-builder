import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { randomPokemon } from "../modules/Util";
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
  const { wildPokemon, fetchPokemon, partyPokemon, dispatchPartyPokemon, dispatchDisabled, inputs } = useContext(PokemonContext);

  function handleRandom() {
    // disableElements(true);

    dispatchDisabled({
      type: "DISABLE",
      payload: inputs
    })

    fetchPokemon(randomPokemon());
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    // disableElements(true);

    const val: string = (document.querySelector("#entered-pokemon") as HTMLInputElement).value.trim().toLowerCase();

    if (val && (typeof val === "string" || typeof val === "number")) {
      fetchPokemon(val);
    }
  }

  function handleCatch() {
    if (partyPokemon.length < 6) {
      // disableElements(true);

      dispatchDisabled({
        type: "DISABLE",
        payload: inputs
      })

      dispatchPartyPokemon({
        type: "ADD_POKEMON",
        payload: wildPokemon
      })
      fetchPokemon(randomPokemon());
    }
  }

  // disable catch button if party is 6
  // useEffect(() => {
  //   (partyPokemon.length >= 6 ? document.querySelector("#catch")?.setAttribute("disabled", "disabled") : document.querySelector("#catch")?.removeAttribute("disabled") )
  // }, [fetchPokemon])

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