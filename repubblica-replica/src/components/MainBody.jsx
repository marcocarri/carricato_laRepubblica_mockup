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
                <div className="col-12 col-md-5 pe-md-3 order-2 order-md-1 mt-3 mt-md-0">
                    <div className="text-rep-orange fw-bold text-uppercase font-sans mb-2" style={{fontSize: '12px'}}>{category}</div>
                    <h3 className="h3 fw-bold lh-sm mb-2 hover-red cursor-pointer">{formatTitle(title, category)}</h3>
                    {author && <div className="text-secondary small font-sans mt-2">di {author}</div>}
                </div>
                <div className="col-12 col-md-7 order-1 order-md-2">
                    <img src={imgUrl || "https://placehold.co/800x450"} className="img-fluid w-100" alt="News principale sezione" />
                </div>
            </article>
        );
    }
    if (variant === "1.3") {
        return (
            <article className="row g-2 align-items-start pe-md-2 h-100">
                <div className="col-8">
                    <h4 className="h6 fw-bold lh-sm m-0 hover-red cursor-pointer">{formatTitle(title, category)}</h4>
                    {author && <div className="text-secondary small font-sans mt-1">di {author}</div>}
                </div>
                <div className="col-4">
                    <img src={imgUrl || "https://placehold.co/150x100"} className="img-fluid w-100 rounded-1" alt="News correlata" />
                </div>
            </article>
        );
    }
    if (variant === "1.4") {
        return (
            <article className="row align-items-center">
                <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <img src={imgUrl || "https://placehold.co/400x250"} className="img-fluid w-100" alt="News orizzontale" />
                </div>
                <div className="col-12 col-md-8">
                    <div className="text-rep-orange fw-bold text-uppercase font-sans mb-1" style={{fontSize: '12px'}}>{category}</div>
                    <h3 className="h5 fw-bold lh-sm mb-1 hover-red cursor-pointer">{formatTitle(title, category)}</h3>
                    {author && <div className="text-secondary small font-sans mt-1">di {author}</div>}
                </div>
            </article>
        );
    }
    if (variant === "2.2") {
        return (
            <article className="row g-2 align-items-start mb-4">
                <div className="col-8">
                    <h4 className="h6 fw-bold lh-sm m-0 hover-red cursor-pointer">{formatTitle(title, category)}</h4>
                    {author && <div className="text-secondary small font-sans mt-1">di {author}</div>}
                </div>
                <div className="col-4">
                    <img src={imgUrl || "https://placehold.co/150x100"} className="img-fluid w-100 rounded-1" alt="Ultime notizie" />
                </div>
            </article>
        );
    }

    if (variant === "3.1") {
        return (
            <article>
                <img src={imgUrl || "https://placehold.co/800x500"} className="img-fluid w-100 mb-2" alt="Focus primario" />
                <h3 className="h2 fw-black lh-sm m-0 hover-red cursor-pointer">{title}</h3>
                {author && <div className="text-secondary small font-sans mt-2">di {author}</div>}
            </article>
        );
    }
    if (variant === "3.2") {
        return (
            <article className="row g-2 align-items-start">
                <div className="col-8">
                    <h4 className="h6 fw-bold lh-sm m-0 hover-red cursor-pointer">{title}</h4>
                    {author && <div className="text-secondary small font-sans mt-1">di {author}</div>}
                </div>
                <div className="col-4">
                    <img src={imgUrl || "https://placehold.co/150x100"} className="img-fluid w-100 rounded-1" alt="Focus secondario" />
                </div>
            </article>
        );
    }
    if (variant === "3.3") {
        return (
            <article className="h-100">
                <h4 className="h5 fw-bold lh-sm m-0 hover-red cursor-pointer">{title}</h4>
                {author && <div className="text-secondary small font-sans mt-2">di {author}</div>}
            </article>
        );
    }
    if (variant === "3.4") {
        return (
            <article>
                <h4 className="h5 fw-bold lh-sm m-0 hover-red cursor-pointer">{title}</h4>
                {author && <div className="text-secondary small font-sans mt-1">di {author}</div>}
            </article>
        );
    }
    if (variant === "3.5") {
        return (
            <article>
                <h4 className="h6 fw-bold lh-sm m-0 hover-red cursor-pointer">{title}</h4>
                {author && <div className="text-secondary small font-sans mt-1">di {author}</div>}
            </article>
        );
    }
    if (variant === "4.1") {
        return (
            <article className="position-relative cursor-pointer">
                <img src={imgUrl || "https://placehold.co/400x250/222/FFF"} className="img-fluid w-100 mb-2 opacity-75" alt="Copertina Video" />
                <i className="bi bi-play-circle-fill position-absolute top-50 start-50 translate-middle text-white" style={{fontSize: '3rem'}} aria-hidden="true"></i>
                <h4 className="h6 fw-bold lh-sm text-white m-0 hover-red">{title}</h4>
                {author && <div className="text-white-50 small font-sans mt-1">di {author}</div>}
            </article>
        );
    }

    return null;
};

// Componente Titolo di Sezione (Margini ridotti)
const SectionTitle = ({ title }) => (
    <div className="text-center mb-3 mt-2">
        <h3 className="h4 fw-black text-uppercase border-bottom border-rep-orange border-3 d-inline-block pb-1 m-0 font-sans text-dark">
            {title}
        </h3>
    </div>
);

// Sotto-componente per il video laterale
const VideoDelGiorno = () => (
    <div className="bg-white pb-3">
        <h3 className="h6 fw-black text-uppercase border-bottom border-rep-orange border-2 d-inline-block pb-1 mb-3 font-sans">Il video del giorno</h3>
        <div className="position-relative cursor-pointer">
            <img src="https://placehold.co/400x700/222/FFF" className="img-fluid w-100" alt="Video verticale" />
            <i className="bi bi-play-circle-fill position-absolute top-50 start-50 translate-middle text-white" style={{fontSize: '4rem', opacity: '0.9'}} aria-hidden="true"></i>
            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75 text-white">
                <h4 className="h6 fw-bold m-0 lh-sm">Lorem ipsum dolor sit amet video verticale in riproduzione</h4>
            </div>
        </div>
    </div>
);

// Sotto-componente per la colonna Ultime Notizie (Con sottolineatura arancione)
const UltimeNotizie = () => (
    <div className="position-relative bg-white pt-4" style={{ zIndex: 20 }}>
        <h3 className="h6 fw-black text-uppercase border-bottom border-rep-orange border-2 d-inline-block pb-1 mb-3 font-sans">Ultime Notizie</h3>
        {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={`side-${index}`}>
                <NewsCard variant="2.2" title="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit" author="Redazione Web" />
                {index < 4 && <hr className="text-secondary opacity-25 my-3" />}
            </div>
        ))}
    </div>
);

// ==========================================
// COMPONENTE PRINCIPALE MAIN BODY
// ==========================================
const MainBody = () => {
    return (
        <main className="container border-start border-end box-border-color border-1 px-3 px-md-4 pt-3 pb-5 bg-white">

            {/* ============================================================== */}
            {/* TOP LAYOUT                                                     */}
            {/* ============================================================== */}
            <div className="row align-items-stretch">

                {/* COLONNA SINISTRA PRINCIPALE */}
                <div className="col-12 col-lg-8 border-end box-border-color pe-lg-4">
                    <NewsCard variant="1.1" category="LOREM IPSUM" title="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore" author="Mario Rossi" />
                    <hr className="border-secondary opacity-25 my-3" />
                    <SectionTitle title="Primo piano" />

                    {[1, 2, 3, 4].map((item, index) => (
                        <React.Fragment key={`block-${index}`}>
                            <NewsCard variant="1.2" category={index === 0 ? "IL CASO" : "POLITICA"} title="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" author="Giulia Bianchi" />
                            <hr className="border-secondary opacity-25 my-3" />

                            {/* Le 3 news affiancate */}
                            <div className="row mt-3 position-relative">
                                <div className="col-12 col-md-4 position-relative pe-md-3 mb-3 mb-md-0">
                                    <NewsCard variant="1.3" title="Duis aute irure dolor in reprehenderit" author="Luca Verdi" />
                                    <hr className="d-md-none border-secondary opacity-25 mt-3 mb-0" />
                                    <div className="d-none d-md-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                                </div>
                                <div className="col-12 col-md-4 position-relative px-md-3 mb-3 mb-md-0">
                                    <NewsCard variant="1.3" title="Voluptate velit esse cillum dolore eu" author="Anna Neri" />
                                    <hr className="d-md-none border-secondary opacity-25 mt-3 mb-0" />
                                    <div className="d-none d-md-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                                </div>
                                <div className="col-12 col-md-4 ps-md-3">
                                    <NewsCard variant="1.3" title="Fugiat nulla pariatur excepteur sint" author="Marco Gialli" />
                                </div>
                            </div>
                            {/* Rimuovo l'hr finale per l'ultimo elemento per evitare conflitti con la barra grande sotto */}
                            {index < 3 && <hr className="border-secondary opacity-25 my-4" />}

                            {/* INIEZIONE MOBILE: Mostra il Video del giorno dopo il terzo blocco (indice 2) */}
                            {index === 2 && (
                                <div className="d-block d-lg-none my-5">
                                    <VideoDelGiorno />
                                    <hr className="border-secondary opacity-25 my-4" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}

                    <hr className="border-secondary border-2 opacity-50 mt-2 mb-4" />

                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={`horiz-${index}`}>
                            <NewsCard variant="1.4" category="CRONACA" title="Sunt in culpa qui officia deserunt mollit anim id est laborum et dolorum fuga" author="Paola Blu" />
                            {/* Anche qui rimuovo l'ultimo hr */}
                            {index < 3 && <hr className="border-secondary opacity-25 my-4" />}
                        </div>
                    ))}

                    {/* INIEZIONE MOBILE: Colonna di destra in fondo su mobile */}
                    <div className="d-block d-lg-none mt-5">
                        <hr className="border-secondary border-2 opacity-50 mb-4" />
                        <UltimeNotizie />
                    </div>
                </div>

                {/* COLONNA DESTRA (Nascosta su mobile) */}
                <div className="col-12 col-lg-4 ps-lg-4 mt-5 mt-lg-0 d-none d-lg-block">
                    <div style={{ height: '2200px' }}>
                        <div className="position-sticky" style={{ top: '130px' }}>
                            <VideoDelGiorno />
                        </div>
                    </div>
                    <UltimeNotizie />
                </div>
            </div>

            {/* ============================================================== */}
            {/* 1. SEZIONE POLITICA                                            */}
            {/* ============================================================== */}
            <hr className="box-border-color border-1 opacity-100 mt-4 mb-2" />
            <SectionTitle title="Politica" />
            <div className="row mb-3">

                <div className="col-12 col-lg-6 position-relative pe-lg-4 mb-4 mb-lg-0">
                    <NewsCard variant="3.1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." author="Direttore Responsabile" imgUrl="https://placehold.co/800x500" />
                    <hr className="d-lg-none border-secondary opacity-25 mt-4 mb-0" />
                    <div className="d-none d-lg-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                </div>

                <div className="col-12 col-lg-6 ps-lg-4">
                    <div className="row mb-4">
                        <div className="col-12 col-md-6 position-relative pe-md-3 mb-4 mb-md-0">
                            <NewsCard variant="3.2" title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." author="Inviato Roma" />
                            <hr className="d-md-none border-secondary opacity-25 mt-4 mb-0" />
                            <div className="d-none d-md-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                        </div>
                        <div className="col-12 col-md-6 ps-md-3">
                            <NewsCard variant="3.2" title="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim." author="Redazione Politica" />
                        </div>
                    </div>

                    <hr className="border-secondary opacity-25 mb-4 mt-2 d-none d-md-block" />

                    <div className="row">
                        <div className="col-12 col-md-6 position-relative pe-md-3 mb-4 mb-md-0">
                            <NewsCard variant="3.3" title="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur." author="Opinionista 1" />
                            <hr className="d-md-none border-secondary opacity-25 mt-4 mb-0" />
                            <div className="d-none d-md-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                        </div>
                        <div className="col-12 col-md-6 ps-md-3">
                            <NewsCard variant="3.3" title="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit." author="Opinionista 2" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================== */}
            {/* 2. SEZIONE ECONOMIA                                            */}
            {/* ============================================================== */}
            <hr className="box-border-color border-1 opacity-100 mt-4 mb-2" />
            <SectionTitle title="Economia" />
            <div className="row mb-3">

                {/* Sinistra: 3 Piccole */}
                <div className="col-12 col-lg-3 position-relative pe-lg-4 mb-4 mb-lg-0 order-3 order-lg-1 mt-4 mt-lg-0">
                    {[1, 2, 3].map((i, index) => (
                        <div key={`eco-sx-${i}`}>
                            <NewsCard variant="3.5" title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque." author="Redazione Economia" />
                            {index < 2 && <hr className="text-secondary opacity-25 my-3" />}
                        </div>
                    ))}
                    <div className="d-none d-lg-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                </div>

                {/* Centro: Grande */}
                <div className="col-12 col-lg-6 position-relative px-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                    <NewsCard variant="3.1" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui." author="Inviato Francoforte" imgUrl="https://placehold.co/800x500" />
                    <hr className="d-lg-none border-secondary opacity-25 mt-4 mb-0" />
                    <div className="d-none d-lg-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                </div>

                {/* Destra: 3 Medie */}
                <div className="col-12 col-lg-3 ps-lg-4 order-2 order-lg-3 mb-0 mb-lg-0">
                    {[1, 2, 3].map((i, index) => (
                        <div key={`eco-dx-${i}`}>
                            <NewsCard variant="3.4" title="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse." author="Esperto Fiscale" />
                            {index < 2 && <hr className="text-secondary opacity-25 my-3" />}
                        </div>
                    ))}
                    <hr className="d-lg-none border-secondary opacity-25 mt-4 mb-0" />
                </div>
            </div>

            {/* ============================================================== */}
            {/* 3. SEZIONE VIDEO                                               */}
            {/* ============================================================== */}
            <div className="bg-slate p-3 p-md-4 my-5 rounded-1">
                <div className="text-center mb-4">
                    <h3 className="h4 fw-black text-uppercase border-bottom border-white border-2 d-inline-block pb-1 m-0 font-sans text-white">
                        VIDEO
                    </h3>
                </div>
                <div className="row g-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={`video-${i}`} className="col-12 col-md-3">
                            <NewsCard variant="4.1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod." author="Redazione Video" />
                        </div>
                    ))}
                </div>
            </div>

            {/* ============================================================== */}
            {/* 4. METEO, GIOCHI E OROSCOPO                                    */}
            {/* ============================================================== */}
            <div className="row border p-3 p-md-4 bg-light rounded-1 m-0">

                {/* METEO */}
                <div className="col-12 col-md-6 border-end-md pe-md-4 mb-5 mb-md-0 d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start">
                    <img src="https://placehold.co/100x100/FFD700/FFF?text=Sole" className="rounded-circle me-md-4 mb-3 mb-md-0 shadow-sm" alt="Meteo Sole" />
                    <div>
                        <h4 className="fw-black m-0">Roma</h4>
                        <div className="text-secondary fw-bold my-1">Oggi pomeriggio</div>
                        <h2 className="display-4 fw-black text-primary m-0">24°</h2>
                    </div>
                </div>

                {/* GIOCHI */}
                <div className="col-12 col-md-6 ps-md-4 d-flex flex-column flex-md-row justify-content-around align-items-center gap-4 gap-md-0">
                    <div className="text-center cursor-pointer hover-red">
                        <img src="https://placehold.co/120x120/FFF/000?text=SUDOKU" className="border shadow-sm mb-2" alt="Sudoku" />
                        <div className="fw-bold font-sans">Sudoku</div>
                    </div>
                    <div className="text-center cursor-pointer hover-red">
                        <img src="https://placehold.co/120x120/FFF/000?text=CRUCIVERBA" className="border shadow-sm mb-2" alt="Cruciverba" />
                        <div className="fw-bold font-sans">Cruciverba</div>
                    </div>
                </div>

                {/* OROSCOPO */}
                <div className="col-12 mt-5 pt-4 border-top">
                    <div className="d-flex overflow-auto no-scrollbar gap-4 pb-2">
                        {['Ariete', 'Toro', 'Gemelli', 'Cancro', 'Leone', 'Vergine', 'Bilancia', 'Scorpione', 'Sagittario', 'Capricorno', 'Acquario', 'Pesci'].map(segno => (
                            <div key={segno} className="text-center cursor-pointer hover-red" style={{minWidth: '80px'}}>
                                <img src={`https://placehold.co/60x60/8A2BE2/FFF?text=${segno.substring(0,2).toUpperCase()}`} className="rounded-circle mb-2 shadow-sm" alt={`Oroscopo ${segno}`} />
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