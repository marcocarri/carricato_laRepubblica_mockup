import React from 'react';

// ==========================================
// FUNZIONE HELPER: Colora di arancione le prime 2 parole
// ==========================================
const formatTitle = (title, hasCategory) => {
    if (hasCategory) return title;
    const words = title.split(' ');
    if (words.length <= 2) return <span className="text-rep-orange">{title}</span>;
    return (
        <>
            <span className="text-rep-orange">{words[0]} {words[1]}</span> {words.slice(2).join(' ')}
        </>
    );
};

// ==========================================
// COMPONENTE NEWS CARD "CAMALEONTE"
// ==========================================
const NewsCard = ({ variant, category, title, author, imgUrl }) => {

    // VARIANTI SUPERIORI (CON ARANCIONE)
    if (variant === "1.1") {
        return (
            <article>
                <div className="text-rep-orange fw-bold text-uppercase font-sans mb-1" style={{fontSize: '13px'}}>{category}</div>
                <h2 className="display-6 fw-black lh-sm m-0 hover-red cursor-pointer">{formatTitle(title, category)}</h2>
                {author && <div className="text-secondary small font-sans mt-2">di {author}</div>}
            </article>
        );
    }
    if (variant === "1.2") {
        return (
            <article className="row align-items-center">
                <div className="col-5 pe-3">
                    <div className="text-rep-orange fw-bold text-uppercase font-sans mb-2" style={{fontSize: '12px'}}>{category}</div>
                    <h3 className="h3 fw-bold lh-sm mb-2 hover-red cursor-pointer">{formatTitle(title, category)}</h3>
                    {author && <div className="text-secondary small font-sans mt-2">di {author}</div>}
                </div>
                <div className="col-7">
                    <img src={imgUrl || "https://placehold.co/800x450"} className="img-fluid w-100" alt="News placeholder" />
                </div>
            </article>
        );
    }
    if (variant === "1.3") {
        return (
            <article className="h-100 pe-2">
                <img src={imgUrl || "https://placehold.co/400x250"} className="img-fluid w-100 mb-2" alt="News placeholder" />
                <h4 className="h6 fw-bold lh-sm m-0 hover-red cursor-pointer">{formatTitle(title, category)}</h4>
                {author && <div className="text-secondary small font-sans mt-1" style={{fontSize: '11px'}}>di {author}</div>}
            </article>
        );
    }
    if (variant === "1.4") {
        return (
            <article className="row align-items-center">
                <div className="col-4">
                    <img src={imgUrl || "https://placehold.co/400x250"} className="img-fluid w-100" alt="News placeholder" />
                </div>
                <div className="col-8">
                    <div className="text-rep-orange fw-bold text-uppercase font-sans mb-1" style={{fontSize: '12px'}}>{category}</div>
                    <h3 className="h5 fw-bold lh-sm mb-1 hover-red cursor-pointer">{formatTitle(title, category)}</h3>
                    {author && <div className="text-secondary small font-sans mt-1">di {author}</div>}
                </div>
            </article>
        );
    }
    if (variant === "2.2") {
        return (
            <article className="mb-4">
                <img src={imgUrl || "https://placehold.co/300x170"} className="img-fluid w-75 mb-2" alt="News placeholder" />
                <h4 className="h6 fw-bold lh-sm m-0 hover-red cursor-pointer">{formatTitle(title, category)}</h4>
                {author && <div className="text-secondary small font-sans mt-1" style={{fontSize: '11px'}}>di {author}</div>}
            </article>
        );
    }

    // ==========================================
    // VARIANTI INFERIORI (SENZA ARANCIONE)
    // ==========================================

    // 3.1 News GRANDE (per Politica Sx e Economia Centro)
    if (variant === "3.1") {
        return (
            <article>
                <img src={imgUrl || "https://placehold.co/800x500"} className="img-fluid w-100 mb-2" alt="News placeholder" />
                <h3 className="h2 fw-black lh-sm m-0 hover-red cursor-pointer">{title}</h3>
                {author && <div className="text-secondary small font-sans mt-2">di {author}</div>}
            </article>
        );
    }
    // 3.2 Quadrato con Immagine (Politica Dx Sopra)
    if (variant === "3.2") {
        return (
            <article>
                <img src={imgUrl || "https://placehold.co/400x250"} className="img-fluid w-100 mb-2" alt="News placeholder" />
                <h4 className="h5 fw-bold lh-sm m-0 hover-red cursor-pointer">{title}</h4>
                {author && <div className="text-secondary font-sans mt-2" style={{fontSize: '12px'}}>di {author}</div>}
            </article>
        );
    }
    // 3.3 Quadrato Solo Testo (Politica Dx Sotto) - Rimosso il bordo/box come richiesto
    if (variant === "3.3") {
        return (
            <article className="h-100">
                <h4 className="fw-bold lh-sm m-0 hover-red cursor-pointer" style={{fontSize: '18px'}}>{title}</h4>
                {author && <div className="text-secondary font-sans mt-2" style={{fontSize: '12px'}}>di {author}</div>}
            </article>
        );
    }
    // 3.4 Solo Testo Medie (Economia Dx) - Ingrandite
    if (variant === "3.4") {
        return (
            <article>
                <h4 className="fw-bold lh-sm m-0 hover-red cursor-pointer" style={{fontSize: '18px'}}>{title}</h4>
                {author && <div className="text-secondary font-sans mt-1" style={{fontSize: '12px'}}>di {author}</div>}
            </article>
        );
    }
    // 3.5 Solo Testo Piccole (Economia Sx) - Ingrandite
    if (variant === "3.5") {
        return (
            <article>
                <h4 className="fw-bold lh-sm m-0 hover-red cursor-pointer" style={{fontSize: '15px'}}>{title}</h4>
                {author && <div className="text-secondary font-sans mt-1" style={{fontSize: '11px'}}>di {author}</div>}
            </article>
        );
    }
    // 4.1 Video Card orizzontale (Testo Lorem Ipsum)
    if (variant === "4.1") {
        return (
            <article className="position-relative cursor-pointer">
                <img src={imgUrl || "https://placehold.co/400x250/222/FFF"} className="img-fluid w-100 mb-2 opacity-75" alt="Video" />
                <i className="bi bi-play-circle-fill position-absolute top-50 start-50 translate-middle text-white" style={{fontSize: '3rem'}}></i>
                <h4 className="h6 fw-bold lh-sm text-white m-0 hover-red">{title}</h4>
                {author && <div className="text-white-50 font-sans mt-1" style={{fontSize: '11px'}}>di {author}</div>}
            </article>
        );
    }

    return null;
};

// Componente helper per i titoli di sezione
const SectionTitle = ({ title }) => (
    <div className="text-center mb-4 mt-5 pt-3">
        <h3 className="h4 fw-black text-uppercase border-bottom border-rep-orange border-3 d-inline-block pb-1 m-0 font-sans text-dark">
            {title}
        </h3>
    </div>
);

// ==========================================
// COMPONENTE PRINCIPALE MAIN BODY
// ==========================================
const MainBody = () => {
    return (
        /* LA SCATOLA NERA: border-start border-end border-bottom border-dark.
           Inoltre pt-4 (padding top) senza mt-4 per incollarsi all'header! */
        <main className="container border-start border-end border-bottom border-dark border-1 px-4 pt-4 pb-5 mb-5 bg-white">

            {/* ============================================================== */}
            {/* TOP LAYOUT (Le 2 colonne originali)                            */}
            {/* ============================================================== */}
            <div className="row">
                <div className="col-12 col-lg-8 border-end-md pe-lg-4">
                    <NewsCard variant="1.1" category="LOREM IPSUM" title="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore" author="Mario Rossi" />
                    <hr className="border-secondary opacity-25 my-4" />
                    <SectionTitle title="Primo piano" />

                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={`block-${index}`}>
                            <NewsCard variant="1.2" category={index === 0 ? "IL CASO" : "POLITICA"} title="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" author="Giulia Bianchi" />
                            <hr className="border-secondary opacity-25 my-3" />
                            <div className="row mt-3 g-3">
                                <div className="col-4 border-end border-secondary border-opacity-25"><NewsCard variant="1.3" title="Duis aute irure dolor in reprehenderit" author="Luca Verdi" /></div>
                                <div className="col-4 border-end border-secondary border-opacity-25"><NewsCard variant="1.3" title="Voluptate velit esse cillum dolore eu" author="Anna Neri" /></div>
                                <div className="col-4"><NewsCard variant="1.3" title="Fugiat nulla pariatur excepteur sint" author="Marco Gialli" /></div>
                            </div>
                            <hr className="border-secondary opacity-25 my-4" />
                        </div>
                    ))}

                    <hr className="border-secondary border-2 opacity-50 mb-4" />

                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={`horiz-${index}`}>
                            <NewsCard variant="1.4" category="CRONACA" title="Sunt in culpa qui officia deserunt mollit anim id est laborum et dolorum fuga" author="Paola Blu" />
                            <hr className="border-secondary opacity-25 my-4" />
                        </div>
                    ))}
                </div>

                <div className="col-12 col-lg-4 ps-lg-4 mt-5 mt-lg-0">
                    <div style={{ height: '2200px' }}>
                        <div className="position-sticky" style={{ top: '130px' }}>
                            <div className="bg-white pb-3">
                                <h3 className="h6 fw-black text-uppercase border-bottom border-rep-orange border-2 d-inline-block pb-1 mb-3 font-sans">Il video del giorno</h3>
                                <div className="position-relative cursor-pointer">
                                    <img src="https://placehold.co/400x700/222/FFF" className="img-fluid w-100" alt="Video vertical" />
                                    <i className="bi bi-play-circle-fill position-absolute top-50 start-50 translate-middle text-white" style={{fontSize: '4rem', opacity: '0.9'}}></i>
                                    <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75 text-white">
                                        <h4 className="h6 fw-bold m-0 lh-sm">Lorem ipsum dolor sit amet video verticale in riproduzione</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="position-relative bg-white pt-4" style={{ zIndex: 20 }}>
                        <h3 className="h6 fw-black text-uppercase border-bottom border-dark border-1 pb-1 mb-3 font-sans">Ultime Notizie</h3>
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <div key={`side-${index}`}>
                                <NewsCard variant="2.2" title="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit" author="Redazione Web" />
                                {index < 4 && <hr className="text-secondary opacity-25 my-3" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ============================================================== */}
            {/* 1. SEZIONE POLITICA (Testi allungati e box rimossi)            */}
            {/* ============================================================== */}
            <hr className="border-dark border-2 opacity-100 my-5" />
            <SectionTitle title="Politica" />
            <div className="row">
                <div className="col-12 col-lg-6 border-end-md pe-lg-4 mb-4 mb-lg-0">
                    <NewsCard variant="3.1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." author="Direttore Responsabile" imgUrl="https://placehold.co/800x500" />
                </div>
                <div className="col-12 col-lg-6 ps-lg-4">
                    <div className="row g-4 mb-4">
                        <div className="col-6"><NewsCard variant="3.2" title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." author="Inviato Roma" /></div>
                        <div className="col-6"><NewsCard variant="3.2" title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." author="Redazione Politica" /></div>
                    </div>
                    {/* Aggiunto divisore orizzontale per separare le due righe del quadrato */}
                    <hr className="border-secondary opacity-25 my-4" />
                    <div className="row g-4">
                        <div className="col-6"><NewsCard variant="3.3" title="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores." author="Opinionista 1" /></div>
                        <div className="col-6"><NewsCard variant="3.3" title="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam." author="Opinionista 2" /></div>
                    </div>
                </div>
            </div>

            {/* ============================================================== */}
            {/* 2. SEZIONE ECONOMIA (Tutto Lorem Ipsum, separatori e font++)   */}
            {/* ============================================================== */}
            <hr className="border-secondary opacity-25 my-5" />
            <SectionTitle title="Economia" />
            <div className="row">
                {/* Sinistra: 3 Piccole */}
                <div className="col-12 col-lg-3 border-end-md pe-lg-3 mb-4 mb-lg-0 order-2 order-lg-1 mt-4 mt-lg-0">
                    {[1, 2, 3].map((i, index) => (
                        <div key={`eco-sx-${i}`}>
                            <NewsCard variant="3.5" title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa." author="Redazione Economia" />
                            {index < 2 && <hr className="text-secondary opacity-25 my-3" />}
                        </div>
                    ))}
                </div>

                {/* Centro: Grande */}
                <div className="col-12 col-lg-6 border-end-md px-lg-3 order-1 order-lg-2">
                    <NewsCard variant="3.1" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos." author="Inviato Francoforte" imgUrl="https://placehold.co/800x500" />
                </div>

                {/* Destra: 3 Medie */}
                <div className="col-12 col-lg-3 ps-lg-3 order-3">
                    {[1, 2, 3].map((i, index) => (
                        <div key={`eco-dx-${i}`}>
                            <NewsCard variant="3.4" title="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur." author="Esperto Fiscale" />
                            {index < 2 && <hr className="text-secondary opacity-25 my-3" />}
                        </div>
                    ))}
                </div>
            </div>

            {/* ============================================================== */}
            {/* 3. SEZIONE VIDEO (Testo Lorem, Titolo centrato)                */}
            {/* ============================================================== */}
            <div className="bg-slate p-4 my-5 rounded-1">
                <div className="text-center mb-4">
                    <h3 className="h4 fw-black text-uppercase border-bottom border-white border-2 d-inline-block pb-1 m-0 font-sans text-white">
                        VIDEO
                    </h3>
                </div>
                <div className="row g-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={`video-${i}`} className="col-6 col-md-3">
                            <NewsCard variant="4.1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." author="Redazione Video" />
                        </div>
                    ))}
                </div>
            </div>

            {/* ============================================================== */}
            {/* 4. METEO, GIOCHI E OROSCOPO                                    */}
            {/* ============================================================== */}
            <div className="row border p-4 bg-light rounded-1 m-0">

                {/* METEO */}
                <div className="col-12 col-md-6 border-end-md pe-md-4 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                    <img src="https://placehold.co/100x100/FFD700/FFF?text=Sole" className="rounded-circle me-4 shadow-sm" alt="Sole" />
                    <div>
                        <h4 className="fw-black m-0">Roma</h4>
                        <div className="text-secondary fw-bold my-1">Oggi pomeriggio</div>
                        <h2 className="display-4 fw-black text-primary m-0">24°</h2>
                    </div>
                </div>

                {/* GIOCHI */}
                <div className="col-12 col-md-6 ps-md-4 d-flex justify-content-around align-items-center">
                    <div className="text-center cursor-pointer hover-red">
                        <img src="https://placehold.co/120x120/FFF/000?text=SUDOKU" className="border shadow-sm mb-2" alt="Sudoku" />
                        <div className="fw-bold font-sans">Sudoku</div>
                    </div>
                    <div className="text-center cursor-pointer hover-red">
                        <img src="https://placehold.co/120x120/FFF/000?text=CRUCIVERBA" className="border shadow-sm mb-2" alt="Cruciverba" />
                        <div className="fw-bold font-sans">Cruciverba</div>
                    </div>
                </div>

                <div className="col-12 mt-4 pt-4 border-top">
                    {/* OROSCOPO (Scrollabile orizzontalmente) */}
                    <div className="d-flex overflow-auto no-scrollbar gap-4 pb-2">
                        {['Ariete', 'Toro', 'Gemelli', 'Cancro', 'Leone', 'Vergine', 'Bilancia', 'Scorpione', 'Sagittario', 'Capricorno', 'Acquario', 'Pesci'].map(segno => (
                            <div key={segno} className="text-center cursor-pointer hover-red" style={{minWidth: '80px'}}>
                                <img src={`https://placehold.co/60x60/8A2BE2/FFF?text=${segno.substring(0,2).toUpperCase()}`} className="rounded-circle mb-2 shadow-sm" alt={segno} />
                                <div className="small fw-bold font-sans">{segno}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    );
};

export default MainBody;