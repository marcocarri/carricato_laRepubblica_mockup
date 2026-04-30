import React, { useState, useEffect } from 'react';

const Header = () => {

    const[isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 300) {
                setIsScrolled(true);
            } else if (currentScrollY < 10 ) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    const [pageLoadTime] = useState(() => {
        const now = new Date();
        const dateStr = new Intl.DateTimeFormat('it-IT', { day: 'numeric', month: 'long', year: 'numeric' }).format(now).toUpperCase();
        const timeStr = new Intl.DateTimeFormat('it-IT', { hour: '2-digit', minute: '2-digit' }).format(now).replace(':', '.');
        return { date: dateStr, time: timeStr };
    });

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    //componente per realizzare il banner grigio con la news nel header
    const GreyNewsBanner = () => (
        <div className="bg-slate text-white py-2">
            <div className="container d-flex align-items-center px-3 px-md-0">
                <div className="position-relative" style={{ minWidth: '120px' }}>
                    <img src="https://placehold.co/120x68/222/FFF?" alt="News Video" className="img-fluid" />
                    <i className="bi bi-play-circle-fill position-absolute top-50 start-50 translate-middle fs-4"></i>
                </div>
                <div className="ms-3">
                    <h2 className="h6 fw-bold m-0 font-sans" style={{ lineHeight: '1.4' }}>
                        Lorem ipsum dolor sit amet: "Consectetur adipiscing elit sed do eiusmod tempor incididunt"
                    </h2>
                </div>
            </div>
        </div>
    );

    return (
        <header className="page-header sticky-top bg-white border-bottom">

            {/* modalità desktop */}
            <div className="d-none d-md-block">

                {/* sez: menù/ricerca/notifiche/abonati/accedi */}
                <div className="bg-white position-relative" style={{ zIndex: 1050 }}>

                    {/* Barra superiore */}
                    <div className="border-bottom py-2">
                        <div className="container d-flex align-items-center position-relative font-sans text-uppercase fw-bold p-0" style={{fontSize: '12px', height: '35px'}}>

                            <div className="d-flex gap-4">
                                {/* MENU */}
                                <span
                                    className="d-flex align-items-center gap-2 cursor-pointer text-secondary"
                                    tabIndex="0"
                                >
                                    <i className="bi bi-list fs-5"></i> MENU
                                </span>

                                {/* CERCA */}
                                <span
                                    className={"d-flex align-items-center gap-2 cursor-pointer text-secondary"}
                                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                                    tabIndex="0"
                                >
                                    <i className="bi bi-search fs-6"></i> CERCA
                                </span>

                                {/* NOTIFICHE */}
                                <span
                                    className="d-flex align-items-center gap-2 cursor-pointer text-secondary"
                                    tabIndex="0"
                                >
                                    <i className="bi bi-bell fs-6"></i> NOTIFICHE
                                </span>
                            </div>

                            <div className="position-absolute start-50 translate-middle-x text-secondary">
                                {isScrolled ? (
                                    <h1 className="main-logo m-0 fw-black text-dark" style={{fontSize: '2.2rem', letterSpacing: '-2px'}}>
                                        la Repubblica<span className="text-danger italic-50">50</span>
                                    </h1>
                                ) : (
                                    "ABBONATI"
                                )}
                            </div>

                            <div className="ms-auto d-flex align-items-center gap-3 cursor-pointer text-secondary" tabIndex="0">
                                {isScrolled && <span>ABBONATI</span>}
                                <span className="d-flex align-items-center gap-2">
                                    <span>ACCEDI</span>
                                    <i className="bi bi-person-circle fs-4"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* BARRA DI RICERCA A COMPARSA */}
                    {isSearchOpen && (
                        <div
                            className={`bg-offwhite border-bottom py-3 px-4 d-flex align-items-center justify-content-center shadow-sm w-100 ${isScrolled ? 'position-absolute start-0' : ''}`}
                            style={isScrolled ? { top: '100%' } : {}}
                        >
                            <div className="input-group d-flex align-items-center mx-auto" style={{ maxWidth: '700px' }}>
                                <input type="text" className="form-control rounded-0 border-secondary py-2" placeholder="Cerca articoli o argomenti" />
                                <button className="btn btn-white border border-secondary border-start-0 rounded-0 bg-white py-2 px-3 text-dark hover-red">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                            <i className="bi bi-x-lg ms-4 cursor-pointer fs-5 text-secondary hover-red" onClick={() => setIsSearchOpen(false)}></i>
                        </div>
                    )}
                </div>

                {/* Refined transition for Desktop Header Content */}
                <div style={{
                    maxHeight: isScrolled ? '0' : '800px',
                    overflow: isScrolled ? 'hidden' : 'visible', /* IL SEGRETO È QUI: visible quando è aperto! */
                    opacity: isScrolled ? '0' : '1',
                    visibility: isScrolled ? 'hidden' : 'visible',
                    transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out'
                }}>
                    {/* sez: banner grigio news */}
                    <GreyNewsBanner />

                    {/* sez: logo e data */}
                    <div className="container py-4 text-center border-bottom">
                        <h1 className="main-logo m-0 fw-black text-dark">
                            la Repubblica<span className="text-danger italic-50">50</span>
                        </h1>
                        <div className="text-secondary small text-uppercase mt-2 font-sans" style={{fontSize: '11px', letterSpacing: '0.5px'}}>
                            {pageLoadTime.date} - AGGIORNATO ALLE <time>{pageLoadTime.time}</time>
                        </div>
                    </div>

                    {/* sez: sezioni/edizioni locali/servizi/news fisse */}
                    <nav className="border-bottom position-relative" style={{backgroundColor: 'var(--rep-gray-bg)', zIndex: 1040}}>
                        {/* 1. AGGIUNTI BORDI NERI LATERALI PER INIZIARE LA SCATOLA */}
                        <div className="container border-start border-end border-dark d-flex align-items-center font-sans text-uppercase fw-bold p-0" style={{fontSize: '13px', height: '45px'}}>

                            <div className="d-flex h-100 bg-white position-relative">

                                {/* 1. MEGA MENU: SEZIONI (5 Colonne) */}
                                <div className="dropdown h-100 border-end border-start px-3 d-flex align-items-center position-static">
                                    {/* 2. Aggiunto data-bs-display="static" per forzare apertura in basso */}
                                    <span className="cursor-pointer dropdown-toggle text-secondary" data-bs-toggle="dropdown" data-bs-display="static" data-bs-auto-close="outside">SEZIONI</span>
                                    {/* 3. Rimossa riga rossa (border-top border-3 border-danger) */}
                                    <div className="dropdown-menu rounded-0 shadow-sm border-0 p-4 mega-menu-sections mt-0">
                                        <div className="mega-grid-5">
                                            <a href="#!" className="text-dark hover-red">Politica</a>
                                            <a href="#!" className="text-dark hover-red">Economia</a>
                                            <a href="#!" className="text-dark hover-red">Esteri</a>
                                            <a href="#!" className="text-dark hover-red">Cronaca</a>
                                            <a href="#!" className="text-dark hover-red">Commenti</a>

                                            <a href="#!" className="text-dark hover-red">Scuola</a>
                                            <a href="#!" className="text-dark hover-red">Cultura</a>
                                            <a href="#!" className="text-dark hover-red">Lorem Ipsum</a>
                                            <a href="#!" className="text-dark hover-red">Dolor</a>
                                            <a href="#!" className="text-dark hover-red">Sit</a>

                                            <a href="#!" className="text-dark hover-red">Amet</a>
                                            <a href="#!" className="text-dark hover-red">Consectetur</a>
                                            <a href="#!" className="text-dark hover-red">Sport</a>
                                            <a href="#!" className="text-dark hover-red">Spettacoli</a>
                                            <a href="#!" className="text-dark hover-red">Serie Tv</a>

                                            <a href="#!" className="text-dark hover-red">Rubriche</a>
                                            <a href="#!" className="text-dark hover-red">Podcast</a>
                                            <a href="#!" className="text-dark hover-red">Video</a>
                                            <a href="#!" className="text-dark hover-red">Salute</a>
                                            <a href="#!" className="text-dark hover-red">Adipiscing</a>

                                            <a href="#!" className="text-dark hover-red">Italian Tech</a>
                                            <a href="#!" className="text-dark hover-red">Design</a>
                                            <a href="#!" className="text-dark hover-red">Il Gusto</a>
                                            <a href="#!" className="text-dark hover-red">La Zampa</a>
                                            <a href="#!" className="text-dark hover-red">Motori</a>

                                            <a href="#!" className="text-dark hover-red">Viaggi</a>
                                            <a href="#!" className="text-dark hover-red">Vaticano</a>
                                            <a href="#!" className="text-dark hover-red">Londra</a>
                                            <a href="#!" className="text-dark hover-red">Elezioni</a>
                                            <a href="#!" className="text-dark hover-red">Mondo Solidale</a>

                                            <a href="#!" className="text-dark hover-red">Lorem@Ipsum</a>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. MEGA MENU: EDIZIONI LOCALI (Riga Orizzontale) */}
                                <div className="dropdown h-100 border-end px-3 d-flex align-items-center">
                                    <span className="cursor-pointer dropdown-toggle text-secondary" data-bs-toggle="dropdown" data-bs-display="static">EDIZIONI LOCALI</span>
                                    <div className="dropdown-menu rounded-0 shadow-sm border-0 p-4 mega-menu-edizioni mt-0">
                                        <div className="d-flex flex-wrap gap-4 justify-content-center">
                                            <a href="#!" className="text-dark hover-red">Bari</a>
                                            <a href="#!" className="text-dark hover-red">Bologna</a>
                                            <a href="#!" className="text-dark hover-red">Firenze</a>
                                            <a href="#!" className="text-dark hover-red">Genova</a>
                                            <a href="#!" className="text-dark hover-red">Milano</a>
                                            <a href="#!" className="text-dark hover-red">Napoli</a>
                                            <a href="#!" className="text-dark hover-red">Palermo</a>
                                            <a href="#!" className="text-dark hover-red">Roma</a>
                                            <a href="#!" className="text-dark hover-red">Torino</a>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. MEGA MENU: SERVIZI (5 Colonne) */}
                                <div className="dropdown h-100 border-end px-3 d-flex align-items-center">
                                    <span className="cursor-pointer dropdown-toggle text-secondary" data-bs-toggle="dropdown" data-bs-display="static">SERVIZI</span>
                                    <div className="dropdown-menu rounded-0 shadow-sm border-0 p-4 mega-menu-services mt-0">
                                        <div className="mega-grid-5">
                                            <a href="#!" className="text-dark hover-red">Newsletter</a>
                                            <a href="#!" className="text-dark hover-red">Annunci</a>
                                            <a href="#!" className="text-dark hover-red">Codici Sconto</a>
                                            <a href="#!" className="text-dark hover-red">Giochi online</a>
                                            <a href="#!" className="text-dark hover-red">Giochi e Scommesse</a>

                                            <a href="#!" className="text-dark hover-red">Ilmiolibro</a>
                                            <a href="#!" className="text-dark hover-red">Meteo</a>
                                            <a href="#!" className="text-dark hover-red">Oroscopo</a>
                                            <a href="#!" className="text-dark hover-red">Ipsum.it</a>
                                            <a href="#!" className="text-dark hover-red">Dizionari</a>

                                            <a href="#!" className="text-dark hover-red">Aste</a>
                                            <a href="#!" className="text-dark hover-red">Mymovies</a>
                                            <a href="#!" className="text-dark hover-red">Preventivi auto</a>
                                            <a href="#!" className="text-dark hover-red">Programmi Tv</a>
                                            <a href="#!" className="text-dark hover-red">Consigli.it</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex gap-4 ms-4 text-nowrap text-secondary align-items-center h-100 flex-grow-1 overflow-auto no-scrollbar">
                                <span className="text-secondary">Repubblica50</span>
                                <span>Dolor Sit</span>
                                <span>Amet</span>
                                <span>Consectetur</span>
                                <span>Adipiscing</span>
                                <span>Elit</span>
                                <span>Eiusmod</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* modalità mobile */}
            <div className="d-md-none">

                {/* sez: notifiche/abbonati */}
                <div className="py-1 px-3 d-flex justify-content-between align-items-center font-sans" style={{ backgroundColor: '#f9f9f9' }}>
                    <i className="bi bi-bell fs-5 text-secondary"></i>
                    <span className="fw-bold text-dark text-uppercase small" style={{fontSize: '11px'}}>ABBONATI</span>
                </div>

                {/* sez: menu/logo+data/accedi */}
                <div className="text-center bg-white border-bottom">
                    <div className="d-flex justify-content-between align-items-center py-1 px-3">
                        <i className="bi bi-list fs-2 text-secondary"></i>
                        <h1 className="main-logo m-0 text-dark" style={{fontSize: '1.8rem'}}>
                            la Repubblica<span className="text-danger italic-50">50</span>
                        </h1>
                        <i className="bi bi-person-circle fs-4 text-secondary"></i>
                    </div>
                    {/* Refined transition for Mobile Data/Time */}
                    <div style={{
                        maxHeight: isScrolled ? '0' : '50px',
                        overflow: 'hidden',
                        opacity: isScrolled ? '0' : '1',
                        visibility: isScrolled ? 'hidden' : 'visible',
                        transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s'
                    }}>
                        <hr className="m-0 border-secondary opacity-100" style={{color: '#484848'}} />
                        <div className="text-secondary py-1 font-sans text-uppercase" style={{fontSize: '10px'}}>
                            {pageLoadTime.date} - AGGIORNATO ALLE {pageLoadTime.time}
                        </div>
                    </div>
                </div>

                {/* Refined transition for Mobile Banner/Nav */}
                <div style={{
                    maxHeight: isScrolled ? '0' : '200px',
                    overflow: 'hidden',
                    opacity: isScrolled ? '0' : '1',
                    visibility: isScrolled ? 'hidden' : 'visible',
                    transition: 'max-height 0.4s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s'
                }}>
                    {/* sez: banner grigio news */}
                    <GreyNewsBanner />

                    {/* sez: news fisse */}
                    <nav className="py-2 bg-white shadow-sm">
                        <div className="container-fluid px-3 overflow-auto no-scrollbar font-sans fw-bold" style={{fontSize: '14px'}}>
                            <div className="d-flex gap-4 text-nowrap text-secondary">
                                <span className="text-dark">Repubblica50</span>
                                <span>Dolor Sit</span>
                                <span>Amet</span>
                                <span>Consectetur</span>
                                <span>Adipiscing</span>
                                <span>Elit</span>
                                <span>Eiusmod</span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;