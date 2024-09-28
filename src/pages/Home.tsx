import { Mode } from "../components/Mode";
import { Party } from "../components/Party";
import { Search } from "../components/Search";
import { PokemonProvider } from "../context/PokemonContext";

export function Home() {
  return (
    <>
      <PokemonProvider>
        <Search />
        <Mode />
        <Party />
      </PokemonProvider>
    </>
  )
}