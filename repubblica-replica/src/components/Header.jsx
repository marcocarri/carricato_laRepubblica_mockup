import React from 'react';

const Header = () => {

    //componente per realizzare il banner grigio con la news nell'header
    const GreyNewsBanner = () => (
        <div className="bg-slate text-white d-flex py-2 px-3 align-items-center">
            <div className="position-relative" style={{ minWidth: '120px' }}>
                <img src="https://placehold.co/120x68/222/FFF?text=Video" alt="News Video" className="img-fluid" />
                <i className="bi bi-play-circle-fill position-absolute top-50 start-50 translate-middle fs-4"></i>
            </div>
            <div className="ms-3">
                <h2 className="h6 fw-bold m-0 font-sans" style={{ lineHeight: '1.4' }}>
                    Il partigiano Gastone: "Prego che i giovani non debbano vivere ciò che abbiamo passato noi"
                </h2>
            </div>
        </div>
    );

    return (
        <header className="page-header sticky-top bg-white border-bottom">

            {/* modalità desktop */}
            <div className="d-none d-md-block">

                {/* sez: menù/ricerca/notifiche/abonati/accedi */}
                <div className="border-bottom py-2">
                    <div className="container-fluid px-4 d-flex align-items-center position-relative font-sans text-uppercase fw-bold" style={{fontSize: '12px'}}>

                        <div className="d-flex gap-4">
                            <span className="d-flex align-items-center gap-2 cursor-pointer text-dark"><i className="bi bi-list fs-5"></i> MENU</span>
                            <span className="d-flex align-items-center gap-2 cursor-pointer text-secondary"><i className="bi bi-search fs-6"></i> CERCA</span>
                            <span className="d-flex align-items-center gap-2 cursor-pointer text-secondary"><i className="bi bi-bell fs-6"></i> NOTIFICHE</span>
                        </div>

                        <div className="position-absolute start-50 translate-middle-x text-dark">
                            ABBONATI
                        </div>

                        <div className="ms-auto d-flex align-items-center gap-2 cursor-pointer text-dark">
                            <span>ACCEDI</span>
                            <i className="bi bi-person-circle fs-4"></i>
                        </div>
                    </div>
                </div>

                {/* sez: banner grigio news */}
                <GreyNewsBanner />

                {/* sez: logo e data */}
                <div className="container py-4 text-center border-bottom">
                    <h1 className="main-logo m-0 fw-black text-dark">
                        la Repubblica<span className="text-danger italic-50">50</span>
                    </h1>
                    <div className="text-secondary small text-uppercase mt-2 font-sans" style={{fontSize: '11px', letterSpacing: '0.5px'}}>
                        25 APRILE 2026 - AGGIORNATO ALLE <time>18.44</time>
                    </div>
                </div>

                {/* sez: sezioni/edizioni locali/servizi/news fisse */}
                <nav className="bg-white">
                    <div className="container-fluid px-3 d-flex align-items-center font-sans text-uppercase fw-bold" style={{fontSize: '13px', height: '45px'}}>

                        <div className="d-flex h-100">
                            <div className="dropdown h-100 border-end border-start px-3 d-flex align-items-center">
                                <span className="cursor-pointer dropdown-toggle" data-bs-toggle="dropdown">SEZIONI</span>
                                <ul className="dropdown-menu rounded-0 shadow-sm border-0 border-top border-3 border-danger">
                                    <li><a className="dropdown-item" href="#">Cronaca</a></li>
                                    <li><a className="dropdown-item" href="#">Politica</a></li>
                                </ul>
                            </div>

                            <div className="dropdown h-100 border-end px-3 d-flex align-items-center">
                                <span className="cursor-pointer dropdown-toggle text-secondary" data-bs-toggle="dropdown">EDIZIONI LOCALI</span>
                                <ul className="dropdown-menu rounded-0 shadow-sm border-0 border-top border-3 border-danger">
                                    <li><a className="dropdown-item" href="#">Roma</a></li>
                                    <li><a className="dropdown-item" href="#">Milano</a></li>
                                </ul>
                            </div>

                            <div className="dropdown h-100 border-end px-3 d-flex align-items-center">
                                <span className="cursor-pointer dropdown-toggle text-secondary" data-bs-toggle="dropdown">SERVIZI</span>
                                <ul className="dropdown-menu rounded-0 shadow-sm border-0 border-top border-3 border-danger">
                                    <li><a className="dropdown-item" href="#">Meteo</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="d-flex gap-4 ms-4 text-nowrap text-secondary">
                            <span className="text-dark">Repubblica50</span>
                            <span>Iran</span>
                            <span>Ucraina</span>
                            <span>Decreto Sicurezza</span>
                        </div>
                    </div>
                </nav>
            </div>

            {/* modalità mobile */}
            <div className="d-md-none">

                {/* sez: notifiche/abbonati */}
                <div className="border-bottom py-2 px-3 d-flex justify-content-between align-items-center font-sans">
                    <i className="bi bi-bell fs-5 text-secondary"></i>
                    <span className="fw-bold text-dark text-uppercase small" style={{fontSize: '11px'}}>ABBONATI</span>
                </div>

                {/* sez: menu/logo+data/accedi */}
                <div className="py-2 px-3 text-center border-bottom">
                    <div className="d-flex justify-content-between align-items-center">
                        <i className="bi bi-list fs-2 text-secondary"></i>
                        <h1 className="main-logo m-0 text-dark" style={{fontSize: '2.2rem'}}>
                            la Repubblica<span className="text-danger italic-50">50</span>
                        </h1>
                        <i className="bi bi-person-circle fs-4 text-secondary"></i>
                    </div>
                    <div className="text-secondary mt-1 font-sans text-uppercase" style={{fontSize: '10px'}}>
                        25 APRILE 2026 - AGGIORNATO ALLE 18.44
                    </div>
                </div>

                {/* sez: banner grigio news */}
                <GreyNewsBanner />

                {/* sez: news fisse */}
                <nav className="border-top py-2 bg-white shadow-sm">
                    <div className="container-fluid px-3 overflow-auto no-scrollbar font-sans fw-bold" style={{fontSize: '14px'}}>
                        <div className="d-flex gap-4 text-nowrap text-secondary">
                            <span className="text-dark">Repubblica50</span>
                            <span>25 aprile</span>
                            <span>Ucraina</span>
                            <span>Iran</span>
                            <span>Champions</span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;