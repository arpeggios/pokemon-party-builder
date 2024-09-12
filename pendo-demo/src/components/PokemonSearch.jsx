// todo: make a button to show a random pokemon
// todo: use context api to hold "captured" pokemon. Capture up to six. Click a captured one to display it. Have a button to release it.
// todo: use reducers instead of useState
// todo: use redux instead of context api
// todo: make a chart for stats

import { PokemonDisplay } from "./PokemonDisplay"

export function PokemonSearch({ pkmnData, displayPokemon }) {
  function handleSubmit(e) {
    e.preventDefault();
    displayPokemon(e.target.querySelector("#entered-pokemon").value.toLowerCase())
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="entered-pokemon"
          type="text"
          placeholder="Enter Pokemon name or ID"
          style={{ width: "200px" }}
        />
      </form>
      {{ pkmnData } &&
        <PokemonDisplay pkmn={pkmnData} />
      }
    </>
  )
}