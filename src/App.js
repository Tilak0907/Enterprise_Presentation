import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home';
import Components from './pages/Components';
import Importance from './pages/Importance';
import Conclusion from './pages/Conclusion';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Enterprise Computing</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/components">Components</Link>
            <Link to="/importance">Importance</Link>
            <Link to="/conclusion">Conclusion</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/importance" element={<Importance />} />
            <Route path="/conclusion" element={<Conclusion />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Enterprise Computing | Designed for Assignment</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
