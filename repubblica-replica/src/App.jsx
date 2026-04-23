import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';

function App() {
  return (
      <div className="app-container">
        <TopBar />
        <Header />
        <main id="main-content" className="container mt-4">
          {}
          <p className="text-center text-muted italic"></p>
        </main>
      </div>
  );
}

export default App;