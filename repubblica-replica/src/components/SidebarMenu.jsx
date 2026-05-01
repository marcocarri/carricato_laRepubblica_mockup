import React from 'react';

const SidebarMenu = ({ isOpen, onClose }) => {
    return (
        <div
            className={`offcanvas offcanvas-start ${isOpen ? 'show' : ''}`}
            tabIndex="-1"
            id="sidebarMenu"
            style={{
                visibility: isOpen ? 'visible' : 'hidden',
                maxWidth: '520px',
                width: '100%',
                borderRight: '1px solid #ccc',
                transition: 'transform 0.3s ease-in-out',
                zIndex: 1060, /* PIÙ ALTO DEL VELO BIANCO (1055) E DELL'HEADER (1050) */
                overflowY: 'auto' /* FORZA LO SCROLL INTERNO AL MENU */
            }}
        >
            {/* SEZ 1: Intestazione fissa con R, Ricerca e Chiusura */}
            <div className="offcanvas-header border-bottom border-dark border-2 p-3 d-flex align-items-center justify-content-between bg-white position-sticky top-0" style={{zIndex: 10}}>
                <div className="fw-bold" style={{fontFamily: 'Georgia', fontSize: '2rem'}}>R</div>

                <div className="input-group mx-3">
                    <input type="text" className="form-control rounded-0" placeholder="Ricerca su Repubblica" />
                    <button className="btn btn-outline-secondary rounded-0 text-dark hover-red">
                        <i className="bi bi-search"></i>
                    </button>
                </div>

                <button type="button" className="btn-close text-reset m-0" onClick={onClose} aria-label="Close"></button>
            </div>

            <div className="offcanvas-body p-0 font-sans">

                {/* SEZ 2, 3, 4: Link principali */}
                <div className="border-bottom border-dark border-2 p-3">
                    <a href="#!" className="fw-black text-dark text-decoration-none d-block hover-red">ABBONATI</a>
                </div>
                <div className="border-bottom border-dark border-2 p-3">
                    <a href="#!" className="fw-black text-dark text-decoration-none d-block hover-red">SCARICA L'APP</a>
                </div>
                <div className="border-bottom border-dark border-2 p-3">
                    <a href="#!" className="fw-black text-dark text-decoration-none d-block hover-red">SFOGLIA IL QUOTIDIANO</a>
                </div>

                {/* SEZ 5: In Evidenza */}
                <div className="border-bottom border-dark border-2 p-3">
                    <h6 className="fw-black mb-3">IN EVIDENZA</h6>
                    <div className="row g-2">
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Newsletter</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Giochi</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Repubblica 50</a></div>
                    </div>
                </div>

                {/* SEZ 6: Sezioni */}
                <div className="border-bottom border-dark border-2 p-3">
                    <h6 className="fw-black mb-3">SEZIONI</h6>
                    <div className="row g-2">
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Politica</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Economia</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Esteri</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Cronaca</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Commenti</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Scuola</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Cultura</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Sport</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Spettacoli</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Serie TV</a></div>
                    </div>
                </div>

                {/* SEZ 7: Edizioni Locali */}
                <div className="border-bottom border-dark border-2 p-3">
                    <h6 className="fw-black mb-3">EDIZIONI LOCALI</h6>
                    <div className="row g-2">
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Roma</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Milano</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Bari</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Bologna</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Firenze</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Genova</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Napoli</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Palermo</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Torino</a></div>
                    </div>
                </div>

                {/* SEZ 8: Dirette Sportive */}
                <div className="border-bottom border-dark border-2 p-3">
                    <h6 className="fw-black mb-3">DIRETTE SPORTIVE</h6>
                    <div className="row g-2">
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Diretta Serie A</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Diretta Serie B</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Diretta Coppa Italia</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Diretta Champions</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Diretta Europa League</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Diretta Formula 1</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Diretta Moto GP</a></div>
                    </div>
                </div>

                {/* SEZ 9: Inserti */}
                <div className="border-bottom border-dark border-2 p-3">
                    <h6 className="fw-black mb-3">INSERTI</h6>
                    <div className="row g-2">
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Lorem&Ipsum</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Dolor</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Sit Amet</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Consectetur</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Adipiscing</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Elit</a></div>
                    </div>
                </div>

                {/* SEZ 10: Speciali */}
                <div className="border-bottom border-dark border-2 p-3">
                    <h6 className="fw-black mb-3">SPECIALI</h6>
                    <div className="row g-2">
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Eiusmod</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Tempor</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Incididunt</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Ut Labore</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Et Dolore</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Magna Aliqua</a></div>
                    </div>
                </div>

                {/* SEZ 11: Servizi e Partner */}
                <div className="border-bottom border-dark border-2 p-3">
                    <h6 className="fw-black mb-3">SERVIZI E PARTNER</h6>
                    <div className="row g-2">
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Annunci</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Aste</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Bookshop</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Codici Sconto</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Consigli.it</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Edicola</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Giochi e scommesse</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Giochi online</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Ilmiolibro</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Meteo</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">NewsLetter</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Oroscopo</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Preventivi Auto</a></div>
                    </div>
                </div>

                {/* SEZ 12: Dizionari */}
                <div className="border-dark border-2 p-3">
                    <h6 className="fw-black mb-3">DIZIONARI</h6>
                    <div className="row g-2">
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Dizionario di Italiano</a></div>
                        <div className="col-6 border-bottom pb-2 mb-2"><a href="#!" className="text-secondary text-decoration-none small hover-red">Dizionario di Inglese</a></div>
                        <div className="col-6"><a href="#!" className="text-secondary text-decoration-none small hover-red">Dizionario dei sinonimi</a></div>
                    </div>
                </div>

            </div>

            {/* SEZ 13: Redazione / Scriveteci (Fisso in fondo) */}
            <div className="border-top border-dark border-2 d-flex mt-auto position-sticky bottom-0 bg-white">
                <a href="#!" className="w-50 p-3 text-center text-dark text-decoration-none fw-bold border-2 border-end border-dark hover-red">Redazione</a>
                <a href="#!" className="w-50 p-3 text-center text-dark text-decoration-none fw-bold hover-red">Scriveteci</a>
            </div>

        </div>
    );
};

export default SidebarMenu;