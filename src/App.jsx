// todo: Click a party member to display it in the center of the page. Change Catch button to Release, and click to delete from party. 
// todo: Save to local storage.
// todo: use reducers instead of useState
// todo: use redux instead of context api
// todo: make a chart for stats
// todo: add history list of last 100 or so seen
// todo: add list to show which ones have been seen. Unseen ones can be "???"

import './App.css'
import { Search } from './components/Search'
import { PokemonProvider } from './context/PokemonContext'
import { Navbar } from './components/Navbar';
import { Party } from "./components/Party";

function App() {
  return (
    <>
      <PokemonProvider>
        <Navbar />
        <main>
          <Search />
          <Party />
        </main>
      </PokemonProvider>
    </>
  )
}

export default App
