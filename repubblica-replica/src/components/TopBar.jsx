import React from 'react';

const TopBar = () => {
    const citta = ["Bari", "Bologna", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Parma", "Roma", "Torino"];

    return (
        <div className="bg-light border-bottom d-none d-md-block py-1 font-sans" style={{fontSize: '11px'}}>
            <div className="container d-flex justify-content-between align-items-center text-uppercase">
                <div className="d-flex gap-3 align-items-center">
                    <span className="fw-bold text-secondary">Edizioni:</span>
                    {citta.map(c => (
                        <a key={c} href="#!" className="text-dark text-decoration-none hover-red">{c}</a>
                    ))}
                </div>
                <div className="d-flex gap-3 align-items-center fw-bold">
                    <a href="#!" className="text-danger text-decoration-none">Abbonati</a>
                    <span className="text-muted">|</span>
                    <a href="#!" className="text-dark text-decoration-none">Accedi</a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;