// todo: click a party member to show its stats
// todo: use reducers instead of useState
// todo: use redux instead of context api
// todo: make a chart for stats
// todo: style with mui
// todo: add history list of last several seen
// todo: add chart to show which ones have been seen. Unseen ones can be "???"

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
