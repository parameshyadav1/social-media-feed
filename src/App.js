// src/App.js
import React from 'react';
import Feed from './components/Feed';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Social Media Feed</h1>
      </header>
      <main>
        <Feed />
      </main>
    </div>
  );
};

export default App;
