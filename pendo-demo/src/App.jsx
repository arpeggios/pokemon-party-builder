// todo: add "capture" feature. Capture up to six. Click a captured one to display it. Have a button to release it. Save to local storage.
// todo: use reducers instead of useState
// todo: use redux instead of context api
// todo: make a chart for stats
// todo: add history list of last 100 or so seen
// todo: add list to show which ones have been seen. Unseen ones can be "???"

import './App.css'
import { SearchForm } from './components/SearchForm'
import { PokemonProvider } from './context/PokemonContext'

function App() {
  return (
    <>
      <PokemonProvider>
        <SearchForm />
      </PokemonProvider>
    </>
  )
}

export default App
