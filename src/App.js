import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to my first website built with React.</h1>
      <p>Just simple nje</p>
      <section>
        <h2> Learning react </h2>
        <p> Almost took my life cause of this</p>

      </section>

      <section>
        <h2>Why learn react?</h2>
        <ul>
          <li>High demands funny and complex</li>
          <li>Used by many large companies</li>


        </ul>
      </section>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>Soon I'll add content here</h1>
      <p>I will add pictures too lol</p>
      <p>Some basic styling here and there</p>
    </div>
  );
}
function Footer () {
  return(
    <footer style={{
      marginTop: '50px',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
    }}>
      <p>@2025</p>
      <p>Built with love and react</p>
    </footer>
  );
}

export default App;
