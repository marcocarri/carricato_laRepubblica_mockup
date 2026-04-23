import React from 'react';

const MainHeader = () => {
    return (
        <header className="py-4 border-bottom">
            <div className="container text-center">
                <h1 className="display-2 fw-black m-0" style={{letterSpacing: '-4px'}}>
                    la Repubblica<span className="text-danger italic" style={{fontFamily: 'serif', fontSize: '0.8em'}}>50</span>
                </h1>
                <div className="text-muted small text-uppercase mt-2 font-sans" style={{fontSize: '11px', letterSpacing: '1px'}}>
                    23 APRILE 2026 - AGGIORNATO ALLE <time>19.15</time>
                </div>
                <nav className="mt-4 border-top pt-3">
                    <ul className="list-inline fw-bold font-sans text-uppercase m-0" style={{fontSize: '14px'}}>
                        <li className="list-inline-item px-3 border-end">Sezioni <i className="bi bi-chevron-down"></i></li>
                        <li className="list-inline-item px-3 border-end">Edizioni Locali <i className="bi bi-chevron-down"></i></li>
                        <li className="list-inline-item px-3">Servizi <i className="bi bi-chevron-down"></i></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MainHeader;