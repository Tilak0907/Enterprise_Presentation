import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Components from './pages/Components';
import How_SPA_Works from './pages/How_SPA_Works';
import Advantages from './pages/Advantages';
import Disadvantages from './pages/Disadvantages';
import Difference from './pages/Difference';
import Conclusion from './pages/Conclusion';
import Usage from './pages/When_to_use_SPA';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Single Page Web Application</h1>
          <nav>
            <Link to="/">Introduction</Link>
            <Link to="/components">Components</Link>
            <Link to="/How_SPA_Works">How SPA Works ? </Link>
            <Link to="/Advantages">Advantages</Link>
            <Link to="/Disadvantages">Disadvantages</Link>
            <Link to="/Difference">Comparison</Link>
            <Link to="/Usage">When to use SPA ?</Link>
            <Link to="/conclusion">Conclusion</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/How_SPA_Works" element={<How_SPA_Works />} />
            <Route path="/Advantages" element={<Advantages />} />
            <Route path="/Disadvantages" element={<Disadvantages />} />
            <Route path="/Difference" element={<Difference />} />
            <Route path="/Usage" element={<Usage />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 SkillVerse Team</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
