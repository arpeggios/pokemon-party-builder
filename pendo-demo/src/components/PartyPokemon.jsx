export function PartyPokemon({ partyMember }) {
  const css = `
    .this-pokemon:hover {
      background-color: white;
      color: black;
      cursor: pointer;
      border-radius: 10px;
    }
    
    .pokemon-name {
      text-transform: capitalize;
    }
  `

  return (
    <>
      <style>{css}</style>
      <div className="this-pokemon">
        <img src={partyMember.sprites.front_default} alt={partyMember.name}/>
        <div className="pokemon-name">{partyMember.name}</div>
        <div>{partyMember.id}</div>
      </div>
    </>
  )
}