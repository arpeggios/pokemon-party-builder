import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Mode } from "../components/Mode";
import { Party } from "../components/Party";
import { Search } from "../components/Search";
import { Stats } from "../components/Stats";

export function Home() {
  const { alignment, partyPokemon } = useContext(PokemonContext);
  return (
    <>
      {alignment === "discover" && <Search />}
      {alignment === "stats" && <Stats />}
      {partyPokemon.length > 0 ? <Mode /> : null}
      <Party />
    </>
  )
}