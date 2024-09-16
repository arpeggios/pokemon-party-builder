import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const css = `
  .pokemon-name {
    text-transform: capitalize;
  }
`
export function PartyPokemon({ partyMember, index }) {
  const { setPartyPokemon } = useContext(PokemonContext);

  function handleRemove(partyIndex) {
    const localStorageData = JSON.parse(localStorage.getItem("pokemonPartyBuilder"));
    
    localStorageData.splice(partyIndex, 1)
    
    setPartyPokemon(localStorageData);
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