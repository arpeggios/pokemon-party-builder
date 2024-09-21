import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { IPartyPokemon } from "../interfaces/IPokemon";

const css = `
  .pokemon-name {
    text-transform: capitalize;
  }
`

export function PartyPokemon({ partyMember, index }: IPartyPokemon) {
  const { dispatchPartyPokemon } = useContext(PokemonContext);

  function handleRemove(partyIndex: number) {
    dispatchPartyPokemon({
      type: "REMOVE_POKEMON",
      payload: partyIndex
    });
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