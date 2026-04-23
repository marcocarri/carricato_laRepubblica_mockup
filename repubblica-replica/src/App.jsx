import React from 'react';
import SlimHeader from './components/SlimHeader';
import MainHeader from './components/MainHeader';
import BreakingNews from './components/BreakingNews';

function App() {
    return (
        <div className="min-vh-100 bg-white">
            <SlimHeader />
            <MainHeader />

            <main className="container py-2">
                <BreakingNews />

                <div className="gd-row">
                    <div className="col-lg-8 border-end">
                        <div className="pe-lg-4">
                            <span className="text-danger fw-bold small font-sans">SANITÀ</span>
                            <h2 className="display-6 fw-bold mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                            <p className="text-muted">di Nome Autore</p>
                            <img src="https://placehold.co/800x450" alt="Placeholder" className="img-fluid mt-2" />
                        </div>
                    </div>

                    <div className="col-lg-4 ps-lg-4">
                        <h3 className="h6 fw-bold text-uppercase border-bottom border-danger border-2 d-inline-block pb-1 mb-3 font-sans">
                            Il video del giorno
                        </h3>
                        <div className="bg-light p-3">
                            <img src="https://placehold.co/400x600" alt="Video Placeholder" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;