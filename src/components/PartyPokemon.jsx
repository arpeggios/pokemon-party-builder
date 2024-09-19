import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const css = `
  .pokemon-name {
    text-transform: capitalize;
  }
`
export function PartyPokemon({ partyMember, index }) {
  const { partyPokemon, dispatchPartyPokemon, dispatchDisabled } = useContext(PokemonContext);

  function handleRemove(partyIndex) {
    dispatchPartyPokemon({
      type: "REMOVE_POKEMON",
      payload: partyIndex
    });

    if (partyPokemon.length === 6) {
      dispatchDisabled(false);
    }
  }

  return (
    <>
      <style>{css}</style>
      <div className="this-pokemon">
        <img src={partyMember.sprites.front_default} alt={partyMember.name} />
        <div className="pokemon-name">{partyMember.name}</div>
        <div>{partyMember.id}</div>
        <button type="button" onClick={() => {handleRemove(index)}}>Remove</button>
      </div>
    </>
  )
}