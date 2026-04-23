import React from 'react'

function App() {
  return (
      <div className="min-vh-100 d-flex flex-column">
        {}
        <a href="#main-content" className="visually-hidden-focusable">Vai al contenuto principale</a>

        <header className="py-4 border-bottom text-center">
          <h1 className="fw-bold" style={{fontSize: '3rem', fontFamily: 'serif'}}>
            <span className="text-danger">la</span> Repubblica
          </h1>
        </header>

        <main id="main-content" className="container flex-grow-1 mt-4">
          <div className="alert alert-info text-center">
            Inizio della replica di La Repubblica. Struttura configurata correttamente.
          </div>
        </main>

        <footer className="py-3 bg-light border-top mt-auto text-center small text-muted">
          &copy; {new Date().getFullYear()} - Replica didattica - Lorem Ipsum.
        </footer>
      </div>
  )
}

export default App