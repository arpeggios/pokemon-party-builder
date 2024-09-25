// todo:
// - use redux instead of context api
// - make charts for party member stats
//
// optional:
// - add history list of last several wild pokemon
// - add chart to show which pokemon have been seen

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App