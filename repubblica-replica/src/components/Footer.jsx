import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-top border-secondary border-2 font-sans" style={{ borderTopOpacity: '0.8' }}>

            <div className="container pt-4 pb-5">
                <div className="row">

                    {/* macrosez1: logo/info/tasto/app/social */}
                    <div className="col-12 col-md-3 pe-md-4 border-end-md text-center text-md-start">

                        {/* sez1: logo/info */}
                        <div className="mb-2">
                            <h2 className="main-logo m-0 fw-black text-dark text-nowrap" style={{fontSize: '1.8rem', letterSpacing: '-1px'}}>
                                la Repubblica
                            </h2>
                            <div className="small text-secondary mt-2" style={{fontSize: '12px', lineHeight: '1.8'}}>
                                Lorem Ipsum Network S.p.A.<br/>
                                P.Iva 00000000000<br/>
                                ISSN 0000-0000
                            </div>
                        </div>

                        <hr className="text-secondary opacity-25 my-3" />

                        {/* sez2: tasto abbonati */}
                        <button className="btn btn-rep-blue text-white fw-bold py-2 px-4 rounded-0 d-block d-md-inline-block mx-auto mx-md-0 mb-4 mb-md-0">
                            Abbonati
                        </button>

                        <hr className="text-secondary opacity-25 my-3" />

                        {/* sez3-4: link app e icone social */}
                        <div className="d-flex flex-row justify-content-start gap-5 gap-md-0 flex-md-column">

                            {/* link app */}
                            <div className="text-start">
                                <h6 className="fw-black text-uppercase small m-0 mb-2" style={{fontSize: '13px'}}>APP</h6>
                                <a href="#!" className="text-secondary text-decoration-underline small me-2">Iphone</a>
                                <span className="text-secondary">|</span>
                                <a href="#!" className="text-secondary text-decoration-underline small ms-2">Android</a>
                            </div>

                            <hr className="text-secondary opacity-25 my-4 d-none d-md-block" />

                            {/* icone social */}
                            <div className="text-start">
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

                        <hr className="text-secondary opacity-25 my-4 d-md-none" />

                    </div>

                    {/* macrosez2: supplementi/griglia/network */}
                    <div className="col-12 col-md-9 ps-md-4 mt-2 mt-md-0">

                        {/* sez1: supplementi */}
                        <div className="mb-4 text-center text-md-start">
                            <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>SUPPLEMENTI LOREM</h6>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 gap-md-4 mt-2 small text-secondary">
                                <a href="#!" className="hover-red">Lorem e Ipsum</a>
                                <a href="#!" className="hover-red">D</a>
                                <a href="#!" className="hover-red">Il Dolor</a>
                                <a href="#!" className="hover-red">Sit Amet</a>
                            </div>
                        </div>

                        <hr className="text-secondary opacity-25 my-4" />

                        {/* sez2: griglia a colonne */}
                        <div className="row mt-4">

                            {/* column1 */}
                            <div className="col-6 col-md-4 mb-4 mb-md-0">
                                <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>LOREM NEWS NETWORK</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2 mb-4">
                                    <li><a href="#!" className="hover-red">La Ipsum</a></li>
                                    <li><a href="#!" className="hover-red">Dolor Italia</a></li>
                                    <li><a href="#!" className="hover-red">Sit</a></li>
                                    <li><a href="#!" className="hover-red">Amet Consectetur</a></li>
                                    <li><a href="#!" className="hover-red">Adipiscing News</a></li>
                                </ul>

                                <h6 className="fw-black text-uppercase small mt-4" style={{fontSize: '13px'}}>PERIODICI</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2">
                                    <li><a href="#!" className="hover-red">Le Elit</a></li>
                                    <li><a href="#!" className="hover-red">Sed Do</a></li>
                                    <li><a href="#!" className="hover-red">Eiusmod Tempor</a></li>
                                </ul>
                            </div>

                            {/* column2 */}
                            <div className="col-6 col-md-4 mb-4 mb-md-0">
                                <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>RADIO E PODCAST</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2 mb-4">
                                    <li><a href="#!" className="hover-red">Incididunt</a></li>
                                    <li><a href="#!" className="hover-red">Ut Labore</a></li>
                                    <li><a href="#!" className="hover-red">Et Dolore</a></li>
                                    <li><a href="#!" className="hover-red">Magna Aliqua</a></li>
                                </ul>

                                <h6 className="fw-black text-uppercase small mt-4" style={{fontSize: '13px'}}>INIZIATIVE EDITORIALI</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2 mb-4">
                                    <li><a href="#!" className="hover-red">In edicola</a></li>
                                </ul>

                                <h6 className="fw-black text-uppercase small mt-4" style={{fontSize: '13px'}}>PARTNERSHIP</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2">
                                    <li><a href="#!" className="hover-red">Ut Enim</a></li>
                                    <li><a href="#!" className="hover-red">Ad Minim</a></li>
                                    <li><a href="#!" className="hover-red">Veniam</a></li>
                                    <li><a href="#!" className="hover-red">Quis Nostrud</a></li>
                                    <li><a href="#!" className="hover-red">Exercitation</a></li>
                                </ul>
                            </div>

                            {/* column3 */}
                            <div className="col-6 col-md-4">
                                <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>SERVIZI E LOREM</h6>
                                <ul className="list-unstyled small text-secondary lh-lg mt-2">
                                    <li><a href="#!" className="hover-red">Ullamco</a></li>
                                    <li><a href="#!" className="hover-red">Laboris Nisi</a></li>
                                    <li><a href="#!" className="hover-red">Ut Aliquip</a></li>
                                    <li><a href="#!" className="hover-red">Ex Ea</a></li>
                                    <li><a href="#!" className="hover-red">Commodo</a></li>
                                    <li><a href="#!" className="hover-red">Consequat italiano</a></li>
                                    <li><a href="#!" className="hover-red">Duis Aute</a></li>
                                    <li><a href="#!" className="hover-red">Irure Dolor</a></li>
                                    <li><a href="#!" className="hover-red">In Reprehenderit</a></li>
                                </ul>
                            </div>

                        </div>

                        <hr className="text-secondary opacity-25 my-4" />

                        {/* sez3: network Lena */}
                        <div className="mb-2">
                            <h6 className="fw-black text-uppercase small" style={{fontSize: '13px'}}>NETWORK IPSUM</h6>
                            <div className="d-grid d-md-flex flex-md-wrap gap-2 gap-md-3 mt-2 small text-secondary" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                                <a href="#!" className="hover-red">Voluptate</a>
                                <a href="#!" className="hover-red">Velit Esse</a>
                                <a href="#!" className="hover-red">Cillum Dolore</a>
                                <a href="#!" className="hover-red">Eu Fugiat</a>
                                <a href="#!" className="hover-red">Nulla Pariatur</a>
                                <a href="#!" className="hover-red">Excepteur Sint</a>
                                <a href="#!" className="hover-red">Occaecat</a>
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
                        Copyright © 2001-2026 Lorem Ipsum Network S.p.A. Tutti i diritti sono riservati
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;