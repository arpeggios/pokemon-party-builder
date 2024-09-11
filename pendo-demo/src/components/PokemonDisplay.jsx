export function PokemonDisplay({pkmn}) {
  if (pkmn) {
    console.log(pkmn)
    return (
      <>
          <div>Name: {pkmn.name}</div>
          <div>ID: {pkmn.id}</div>
          <img src={pkmn.sprites.front_default} alt="" />
          <div>Type: {pkmn.types[0].type.name} </div>
      </>
    )
  }
}