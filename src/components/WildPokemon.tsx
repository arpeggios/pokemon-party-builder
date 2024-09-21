import { IPokemon } from "../interfaces/IPokemon"

export function WildPokemon({ pokemon }: IPokemon) {
  if (pokemon) {
    return (
      <>
        <div className="capitalize">Name: {pokemon.name}</div>
        <div>ID: {pokemon.id}</div>
        <div className="capitalize">Type: {pokemon.types[0].type.name} </div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </>
    )
  }
}