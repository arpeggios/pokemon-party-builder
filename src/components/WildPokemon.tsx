import { IPokemon } from "../interfaces/IPokemon"

type Props = {
  pokemon: IPokemon
}

export function WildPokemon({ pokemon }: Props) {
  if (pokemon) {
    return (
      <>
        <div className="capitalize" data-testid="wild-pokemon-name">Name: {pokemon.name}</div>
        <div data-testid="wild-pokemon-id">ID: {pokemon.id}</div>
        <div className="capitalize" data-testid="wild-pokemon-type">Type: {pokemon.types[0].type.name} </div>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} data-testid="wild-pokemon-img"/>
      </>
    )
  }
}