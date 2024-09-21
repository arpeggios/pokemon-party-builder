import { Party } from "../components/Party";
import { Search } from "../components/Search";
import { PokemonProvider } from "../context/PokemonContext";

export function Home() {
  const css = `
    .wrapper {
      text-align: center;
    }
  `
  return (
    <>
      <style>{css}</style>
      <PokemonProvider>
        <div className="wrapper">
          <Search />
          <Party />
        </div>
      </PokemonProvider>
    </>
  )
}