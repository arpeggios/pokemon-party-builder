import { useContext } from "react";
import { PartyPokemon } from "./PartyPokemon";
import { PokemonContext } from "../context/PokemonContext";

const css = `
  .party-box {
    margin-top: 22px;
    display: flex;
    justify-content: center;
  }

  .party-box__inner {
    border: 2px solid white;
    padding: 15px 25px 15px;
    border-radius: 15px;
  }
`

export function Party() {
  const { partyPokemon } = useContext(PokemonContext);

  return (
    <>
      <style>{css}</style>

      <div className="party-box">
        <div className="party-box__inner">
          <div>Your Party ({partyPokemon.length})</div>
          {console.log({ partyPokemon })}
          <div style={{ display: "flex" }}>
            {
              partyPokemon.length > 0 ?
                (partyPokemon.map((item) => {
                  return (<PartyPokemon key={Math.floor(Math.random() * 1000000000)} partyMember={item} />)
                })) : null
            }
          </div>
        </div>
      </div>
    </>
  )
}