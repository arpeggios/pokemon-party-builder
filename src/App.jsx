// todo: Delete from local storage.
// todo: Click a party member to display it in the center of the page. Change Catch button to Release, and click to delete from party. 
// todo: use reducers instead of useState
// todo: use redux instead of context api
// todo: make a chart for stats
// todo: add history list of last 100 or so seen
// todo: add list to show which ones have been seen. Unseen ones can be "???"

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Catch } from './pages/Catch';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Catch />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
