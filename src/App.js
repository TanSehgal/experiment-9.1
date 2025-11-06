import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🐳 React Docker Multi-Stage Build</h1>
        <p>Successfully Dockerized React Application</p>
        <div className="info-card">
          <h2>Features:</h2>
          <ul>
            <li>✅ Multi-stage Docker build</li>
            <li>✅ Optimized production image</li>
            <li>✅ Nginx web server</li>
            <li>✅ Smaller image size</li>
          </ul>
        </div>
        <p className="footer">
          Built with React + Docker + Nginx
        </p>
      </header>
    </div>
  );
}

export default App;
