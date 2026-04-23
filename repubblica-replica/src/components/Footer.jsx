import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-top mt-5 pt-5 pb-3 font-sans">
            <div className="container">
                <div className="row g-4">

                    <div className="col-12 col-md-3">
                        <h2 className="h4 fw-bold">la Repubblica</h2>
                        <div className="small text-muted mb-3">GEDI News Network S.p.A.</div>
                        <button className="btn btn-primary btn-sm px-4 mb-4">Abbonati</button>
                        <div className="d-flex gap-3 fs-5 mb-4">
                            <i className="bi bi-facebook"></i><i className="bi bi-twitter-x"></i><i className="bi bi-instagram"></i>
                        </div>
                    </div>

                    <div className="col-12 col-md-9">
                        <div className="row row-cols-2 row-cols-md-4 g-3">
                            <div className="footer-link-group">
                                <h6 className="fw-bold border-bottom pb-2">SUPPLEMENTI</h6>
                                <ul className="list-unstyled small">
                                    <li>Affari e Finanza</li><li>D</li><li>Il Venerdì</li><li>Robinson</li>
                                </ul>
                            </div>
                            <div className="footer-link-group">
                                <h6 className="fw-bold border-bottom pb-2">GEDI NETWORK</h6>
                                <ul className="list-unstyled small">
                                    <li>La Stampa</li><li>HuffPost Italia</li><li>Fem</li>
                                </ul>
                            </div>
                            <div className="footer-link-group">
                                <h6 className="fw-bold border-bottom pb-2">SERVIZI</h6>
                                <ul className="list-unstyled small">
                                    <li>Meteo</li><li>Annunci</li><li>Dizionario</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 pt-3 border-top text-center text-muted" style={{fontSize: '11px'}}>
                    <p>© 2001-2026 GEDI News Network S.p.A. Tutti i diritti riservati</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;