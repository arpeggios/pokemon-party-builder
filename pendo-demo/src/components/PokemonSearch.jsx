import { useState, useEffect } from 'react'
import { PokemonDisplay } from "./PokemonDisplay"

export function PokemonSearch() {
  // todo: move api call to a parent component and make pikachu (or random) the default
  // todo: make a chart for stats
  // todo: use context api to hold "captured" pokemon. Capture up to six. Click a captured one to display it. Have a button to release it.
  // todo: use reducers instead of useState
  // todo: use redux instead of context api
  const [pokemon, setPokemon] = useState();

  const displayPokemon = async (theInput) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${theInput}`)

    const data = await response.json()

    console.log("data")
    console.log(data)

    setPokemon(data)

    console.log(`pokemon: ${pokemon}`)
  }

  // useEffect(() => {
  //   displayPokemon();
  // }, [])

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    console.log(e.target.querySelector("#entered-pokemon").value);

    // setPokemon(e.target.querySelector("#entered-pokemon").value)

    displayPokemon(e.target.querySelector("#entered-pokemon").value.toLowerCase())

    console.log(pokemon)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="entered-pokemon" type="text" placeholder="Enter Pokemon name or ID" style={{ width: "200px" }} />
      </form>
      {{ pokemon } &&
        <PokemonDisplay pkmn={pokemon} />
      }
    </>
  )
}