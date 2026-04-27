import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-top border-2 mt-5 font-sans">

            <div className="container py-5">
                <div className="row">

                    {/* macrosez1: logo/info/tasto/app/social */}
                    <div className="col-12 col-md-3 pe-md-4 border-end-md text-center text-md-start">

                        {/* sez1: logo/info */}
                        <div className="mb-3">
                            <h2 className="main-logo m-0 fw-black text-dark text-nowrap" style={{fontSize: '1.8rem', letterSpacing: '-1px'}}>
                                la Repubblica
                            </h2>
                            <div className="small text-secondary mt-2" style={{fontSize: '12px', lineHeight: '1.8'}}>
                                GEDI News Network S.p.A.<br/>
                                P.Iva 01578251009<br/>
                                ISSN 2499-0817
                            </div>
                        </div>

                        <hr className="text-secondary opacity-25 my-4 d-none d-md-block" />

                        {/* sez2: tasto abbonati */}
                        <button className="btn btn-rep-blue text-white fw-bold py-2 px-4 rounded-0 d-block d-md-inline-block mx-auto mx-md-0 mb-4 mb-md-0">
                            Abbonati
                        </button>

                        <hr className="text-secondary opacity-25 my-4 d-none d-md-block" />

                        {/* sez3-4: link app e icone social */}
                        <div className="d-flex flex-row justify-content-center justify-content-md-start gap-5 gap-md-0 flex-md-column">

                            {/* link app */}
                            <div>
                                <h6 className="fw-black text-uppercase small m-0 mb-2" style={{fontSize: '13px'}}>APP</h6>
                                <a href="#!" className="text-secondary text-decoration-underline small me-2">Iphone</a>
                                <span className="text-secondary">|</span>
                                <a href="#!" className="text-secondary text-decoration-underline small ms-2">Android</a>
                            </div>

                            <hr className="text-secondary opacity-25 my-4 d-none d-md-block" />

                            {/* icone social */}
                            <div>
                                <h6 className="fw-black text-uppercase small m-0 mb-2" style={{fontSize: '13px'}}>SOCIAL</h6>
                                <div className="d-flex gap-2 justify-content-center justify-content-md-start">
                                    <a href="#!" className="social-icon" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#!" className="social-icon" aria-label="X (Twitter)"><i className="bi bi-twitter-x"></i></a>
                                    <a href="#!" className="social-icon" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#!" className="social-icon" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
                                    <a href="#!" className="social-icon" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* macrosez2: supplmenti/griglia/network */}
                    <div className="col-12 col-md-9 ps-md-4 mt-5 mt-md-0">

                        {/* sez1: supplementi */}
                        <div className="mb-4 text-center text-md-start">
                            <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>SUPPLEMENTI REPUBBLICA</h6>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 gap-md-4 mt-2 small text-secondary">
                                <a href="#!" className="hover-red">Affari e Finanza</a>
                                <a href="#!" className="hover-red">D</a>
                                <a href="#!" className="hover-red">Il Venerdì</a>
                                <a href="#!" className="hover-red">Robinson</a>
                            </div>
                        </div>

                        <hr className="text-secondary opacity-25 my-4" />

                        {/* sez2: griglia a colonne */}
                        <div className="row mt-4">

                            {/* column1 */}
                            <div className="col-6 col-md-4 mb-4 mb-md-0">
                                <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>GEDI NEWS NETWORK</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2 mb-4">
                                    <li><a href="#!" className="hover-red">La Stampa</a></li>
                                    <li><a href="#!" className="hover-red">HuffPost Italia</a></li>
                                    <li><a href="#!" className="hover-red">Fem</a></li>
                                    <li><a href="#!" className="hover-red">Formula Passion</a></li>
                                    <li><a href="#!" className="hover-red">VD News</a></li>
                                </ul>

                                <h6 className="fw-black text-uppercase small mt-4" style={{fontSize: '13px'}}>PERIODICI</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2">
                                    <li><a href="#!" className="hover-red">Le Scienze</a></li>
                                    <li><a href="#!" className="hover-red">Limes</a></li>
                                    <li><a href="#!" className="hover-red">National Geographic</a></li>
                                </ul>
                            </div>

                            {/* column2 */}
                            <div className="col-6 col-md-4 mb-4 mb-md-0">
                                <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>RADIO E PODCAST</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2 mb-4">
                                    <li><a href="#!" className="hover-red">DeeJay</a></li>
                                    <li><a href="#!" className="hover-red">Capital</a></li>
                                    <li><a href="#!" className="hover-red">m2o</a></li>
                                    <li><a href="#!" className="hover-red">Onepodcast</a></li>
                                </ul>

                                <h6 className="fw-black text-uppercase small mt-4" style={{fontSize: '13px'}}>INIZIATIVE EDITORIALI</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2 mb-4">
                                    <li><a href="#!" className="hover-red">In edicola</a></li>
                                </ul>

                                <h6 className="fw-black text-uppercase small mt-4" style={{fontSize: '13px'}}>PARTNERSHIP</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2">
                                    <li><a href="#!" className="hover-red">LAB</a></li>
                                    <li><a href="#!" className="hover-red">MyMovies</a></li>
                                    <li><a href="#!" className="hover-red">AutoXY</a></li>
                                    <li><a href="#!" className="hover-red">Formula Passion</a></li>
                                    <li><a href="#!" className="hover-red">Sport.it</a></li>
                                </ul>
                            </div>

                            {/* column3 */}
                            <div className="col-6 col-md-4">
                                <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>SERVIZI, TV E CONSUMI</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2">
                                    <li><a href="#!" className="hover-red">Annunci</a></li>
                                    <li><a href="#!" className="hover-red">Ilmiolibro</a></li>
                                    <li><a href="#!" className="hover-red">Enti e Tribunali</a></li>
                                    <li><a href="#!" className="hover-red">Meteo</a></li>
                                    <li><a href="#!" className="hover-red">Tvzap</a></li>
                                    <li><a href="#!" className="hover-red">Dizionario italiano</a></li>
                                    <li><a href="#!" className="hover-red">Dizionario inglese/italiano</a></li>
                                    <li><a href="#!" className="hover-red">Consigli.it</a></li>
                                    <li><a href="#!" className="hover-red">Codici Sconto</a></li>
                                </ul>
                            </div>

                        </div>

                        <hr className="text-secondary opacity-25 my-4" />

                        {/* sez3: network Lena */}
                        <div className="mb-2">
                            <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>NETWORK LENA</h6>
                            <div className="d-grid d-md-flex flex-md-wrap gap-2 gap-md-3 mt-2 small text-secondary" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                                <a href="#!" className="hover-red">Die Welt</a>
                                <a href="#!" className="hover-red">El Pais</a>
                                <a href="#!" className="hover-red">Gazeta Wyborcza</a>
                                <a href="#!" className="hover-red">Le Figaro</a>
                                <a href="#!" className="hover-red">Le Soir</a>
                                <a href="#!" className="hover-red">Tages Anzeiger</a>
                                <a href="#!" className="hover-red">Tribune de Geneve</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* macrosez: footer grigio in fondo */}
            <div className="py-4" style={{backgroundColor: '#ebebeb'}}>
                <div className="container text-center text-secondary font-sans" style={{fontSize: '11.5px'}}>
                    <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 mb-2 lh-lg">
                        <a href="#!" className="hover-red">Mappa del sito</a>
                        <a href="#!" className="hover-red">Redazione</a>
                        <a href="#!" className="hover-red">Scriveteci</a>
                        <a href="#!" className="hover-red">Per inviare foto e video</a>
                        <a href="#!" className="hover-red">Servizio Clienti</a>
                        <a href="#!" className="hover-red">Pubblicità</a>
                        <a href="#!" className="hover-red">Gestione Cookie</a>
                        <a href="#!" className="hover-red">Privacy</a>
                        <a href="#!" className="hover-red">Cookie Policy</a>
                        <a href="#!" className="hover-red">Codice Etico e Best Practices</a>
                        <a href="#!" className="hover-red">Dichiarazione di accessibilità</a>
                        <a href="#!" className="hover-red">Riserva TDM</a>
                    </div>
                    <div>
                        Copyright © 2001-2026 GEDI News Network S.p.A. Tutti i diritti sono riservati
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;