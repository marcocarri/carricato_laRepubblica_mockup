import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBody from './components/MainBody';

function App() {
    return (
        <div className="app-wrapper min-vh-100 d-flex flex-column bg-white">

            {/* --- intestazione --- */}
            <Header />

            {/* --- area dei contenuti --- */}
            <div className="flex-grow-1">
                <MainBody />
            </div>

            {/* --- pié di pagina --- */}
            <Footer />

        </div>
    );
}

export default App;