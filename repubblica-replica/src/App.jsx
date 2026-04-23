import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-wrapper min-vh-100 d-flex flex-column">
            <Header />

            <main id="main-content" className="container flex-grow-1 py-4">
                <div className="alert alert-light border text-center font-sans py-5">
                    Main Content Placeholder
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;