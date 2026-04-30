import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './components/MainBody'; // Aggiungi questo import

function App() {
    return (
        <div className="app-wrapper min-vh-100 d-flex flex-column bg-white">
            <Header />

            {/* Corpo Principale della pagina */}
            <div className="flex-grow-1">
                <MainBody />
            </div>

            <Footer />
        </div>
    );
}

export default App;