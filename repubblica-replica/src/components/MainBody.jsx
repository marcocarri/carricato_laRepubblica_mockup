import React from 'react';

// --- helper per la formattazione dei titoli (arancione sulle prime parole) ---
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

// --- componente news card (adatta il layout in base alla variante) ---
const NewsCard = ({ variant, category, title, author, imgUrl }) => {

    if (variant === "1.1") {
        return (
            <article>
                <div className="text-rep-orange fw-bold text-uppercase font-sans mb-1" style={{ fontSize: '13px' }}>{category}</div>
                <h2 className="display-6 fw-black lh-sm m-0 hover-red cursor-pointer">{formatTitle(title, category)}</h2>
                {author && <div className="text-secondary small font-sans mt-2">di {author}</div>}
            </article>
        );
    }

    if (variant === "1.2") {
        return (
            <article className="row align-items-center">
                <div className="col-12 col-md-5 pe-md-3 order-2 order-md-1 mt-3 mt-md-0">
                    <div className="text-rep-orange fw-bold text-uppercase font-sans mb-2" style={{ fontSize: '12px' }}>{category}</div>
                    <h3 className="h3 fw-bold lh-sm mb-2 hover-red cursor-pointer">{formatTitle(title, category)}</h3>
                    {author && <div className="text-secondary small font-sans mt-2">di {author}</div>}
                </div>
                <div className="col-12 col-md-7 order-1 order-md-2">
                    <img src={imgUrl || "https://placehold.co/800x450"} className="img-fluid w-100" alt="News in evidenza" />
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
                    <div className="text-rep-orange fw-bold text-uppercase font-sans mb-1" style={{ fontSize: '12px' }}>{category}</div>
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
                <img src={imgUrl || "https://placehold.co/800x500"} className="img-fluid w-100 mb-2" alt="Approfondimento primario" />
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
                    <img src={imgUrl || "https://placehold.co/150x100"} className="img-fluid w-100 rounded-1" alt="Approfondimento secondario" />
                </div>
            </article>
        );
    }

    if (variant === "3.3" || variant === "3.4") {
        return (
            <article className={variant === "3.3" ? "h-100" : ""}>
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
                <img src={imgUrl || "https://placehold.co/400x250/222/FFF"} className="img-fluid w-100 mb-2 opacity-75" alt="Copertina video" />
                <i className="bi bi-play-circle-fill position-absolute top-50 start-50 translate-middle text-white" style={{ fontSize: '3rem' }} aria-hidden="true"></i>
                <h4 className="h6 fw-bold lh-sm text-white m-0 hover-red">{title}</h4>
                {author && <div className="text-white-50 small font-sans mt-1">di {author}</div>}
            </article>
        );
    }

    return null;
};

// --- sotto-componente titolo di sezione ---
const SectionTitle = ({ title }) => (
    <div className="text-center mb-3 mt-2">
        <h3 className="h4 fw-black text-uppercase border-bottom border-rep-orange border-3 d-inline-block pb-1 m-0 font-sans text-dark">
            {title}
        </h3>
    </div>
);

// --- sotto-componente video laterale ---
const VideoDelGiorno = () => (
    <div className="bg-white pb-3">
        <h3 className="h6 fw-black text-uppercase border-bottom border-rep-orange border-2 d-inline-block pb-1 mb-3 font-sans">Il video del giorno</h3>
        <div className="position-relative cursor-pointer">
            <img src="https://placehold.co/400x700/222/FFF" className="img-fluid w-100" alt="Video in riproduzione" />
            <i className="bi bi-play-circle-fill position-absolute top-50 start-50 translate-middle text-white" style={{ fontSize: '4rem', opacity: '0.9' }} aria-hidden="true"></i>
            <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75 text-white">
                <h4 className="h6 fw-bold m-0 lh-sm">Lorem ipsum dolor sit amet video verticale in riproduzione</h4>
            </div>
        </div>
    </div>
);

// --- sotto-componente per la colonna delle ultime notizie ---
const UltimeNotizie = () => (
    <div className="position-relative bg-white pt-4" style={{ zIndex: 20 }}>
        <h3 className="h6 fw-black text-uppercase border-bottom border-rep-orange border-2 d-inline-block pb-1 mb-3 font-sans">Ultime notizie</h3>
        {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={`side-${index}`}>
                <NewsCard variant="2.2" title="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit" author="Redazione Web" />
                {index < 4 && <hr className="text-secondary opacity-25 my-3" />}
            </div>
        ))}
    </div>
);

// --- componente principale dell'area dei contenuti ---
const MainBody = () => {

    // LOGICA METEO DINAMICO
    // Calcola la fase attuale e le 3 successive in base all'ora
    const getMeteoDinamico = () => {
        const ore = new Date().getHours();

        let indiceFase
        if (ore >= 6 && ore < 12) indiceFase = 0;      // Mattino
        else if (ore >= 12 && ore < 18) indiceFase = 1; // Pomeriggio
        else if (ore >= 18 && ore < 24) indiceFase = 2; // Sera
        else indiceFase = 3;                            // Notte

        const fasiGiornata =[
            { nome: 'Mattino', icona: '?' },
            { nome: 'Pomeriggio', icona: '?' },
            { nome: 'Sera', icona: '?' },
            { nome: 'Notte', icona: '?' }
        ];

        return {
            oggi: new Date().toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' }),
            corrente: fasiGiornata[indiceFase],
            succ1: fasiGiornata[(indiceFase + 1) % 4],
            succ2: fasiGiornata[(indiceFase + 2) % 4],
            succ3: fasiGiornata[(indiceFase + 3) % 4]
        };
    };

    const meteo = getMeteoDinamico();

    return (

        <main className="container border-start border-end box-border-color border-1 px-3 px-md-4 pt-3 pb-5 bg-white">

            {/* --- layout primario in cima --- */}
            <div className="row align-items-stretch">

                {/* colonna sinistra (occupa tutto su mobile) */}
                <div className="col-12 col-lg-8 border-end box-border-color pe-lg-4">
                    <NewsCard variant="1.1" category="LOREM IPSUM" title="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore" author="Mario Rossi" />
                    <hr className="border-secondary opacity-25 my-3" />
                    <SectionTitle title="Primo piano" />

                    {[1, 2, 3, 4].map((item, index) => (
                        <React.Fragment key={`block-${index}`}>
                            <NewsCard variant="1.2" category={index === 0 ? "IL CASO" : "POLITICA"} title="Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" author="Giulia Bianchi" />
                            <hr className="border-secondary opacity-25 my-3" />

                            {/* gruppo di tre notizie affiancate */}
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

                            {/* separatore omesso sull'ultimo blocco per pulizia grafica */}
                            {index < 3 && <hr className="border-secondary opacity-25 my-4" />}

                            {/* blocco visibile unicamente su mobile: sposta il video in mezzo alle notizie */}
                            {index === 2 && (
                                <div className="d-block d-lg-none my-5">
                                    <VideoDelGiorno />
                                    <hr className="border-secondary opacity-25 my-4" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}

                    <hr className="border-secondary border-2 opacity-50 mt-2 mb-4" />

                    {/* notizie orizzontali in fondo al blocco */}
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={`horiz-${index}`}>
                            <NewsCard variant="1.4" category="CRONACA" title="Sunt in culpa qui officia deserunt mollit anim id est laborum et dolorum fuga" author="Paola Blu" />
                            {index < 3 && <hr className="border-secondary opacity-25 my-4" />}
                        </div>
                    ))}

                    {/* blocco visibile unicamente su mobile: sposta le ultime notizie alla fine del flusso */}
                    <div className="d-block d-lg-none mt-5">
                        <hr className="border-secondary border-2 opacity-50 mb-4" />
                        <UltimeNotizie />
                    </div>
                </div>

                {/* colonna destra (visibile solo su schermi grandi) */}
                <div className="col-12 col-lg-4 ps-lg-4 mt-5 mt-lg-0 d-none d-lg-block">
                    <div style={{ height: '2200px' }}>
                        <div className="position-sticky" style={{ top: '130px' }}>
                            <VideoDelGiorno />
                        </div>
                    </div>
                    <UltimeNotizie />
                </div>
            </div>

            {/* --- area tematica: politica --- */}
            <hr className="box-border-color border-1 opacity-100 mt-4 mb-2" />
            <SectionTitle title="Politica" />
            <div className="row mb-3">

                {/* notizia principale */}
                <div className="col-12 col-lg-6 position-relative pe-lg-4 mb-4 mb-lg-0">
                    <NewsCard variant="3.1" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." author="Direttore Responsabile" imgUrl="https://placehold.co/800x500" />
                    <hr className="d-lg-none border-secondary opacity-25 mt-4 mb-0" />
                    <div className="d-none d-lg-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                </div>

                {/* blocco notizie secondarie */}
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

            {/* --- area tematica: economia --- */}
            <hr className="box-border-color border-1 opacity-100 mt-4 mb-2" />
            <SectionTitle title="Economia" />
            <div className="row mb-3">

                {/* colonna con notizie brevi e compatte */}
                <div className="col-12 col-lg-3 position-relative pe-lg-4 mb-4 mb-lg-0 order-3 order-lg-1 mt-4 mt-lg-0">
                    {[1, 2, 3].map((i, index) => (
                        <div key={`eco-sx-${i}`}>
                            <NewsCard variant="3.5" title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque." author="Redazione Economia" />
                            {index < 2 && <hr className="text-secondary opacity-25 my-3" />}
                        </div>
                    ))}
                    <div className="d-none d-lg-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                </div>

                {/* colonna centrale con notizia in risalto */}
                <div className="col-12 col-lg-6 position-relative px-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                    <NewsCard variant="3.1" title="At vero eos et accusamus et iusto odio dignissimos ducimus qui." author="Inviato Francoforte" imgUrl="https://placehold.co/800x500" />
                    <hr className="d-lg-none border-secondary opacity-25 mt-4 mb-0" />
                    <div className="d-none d-lg-block position-absolute top-0 end-0 h-100 border-end border-secondary border-opacity-25"></div>
                </div>

                {/* colonna con notizie testuali */}
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

            {/* --- rassegna video --- */}
            <div className="bg-slate p-3 p-md-4 my-5 rounded-1">
                <div className="text-center mb-4">
                    <h3 className="h4 fw-black text-uppercase border-bottom border-white border-2 d-inline-block pb-1 m-0 font-sans text-white">
                        Video
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
            <div className="border p-4 bg-white rounded-1 m-0">
                <div className="row">

                    {/* METEO */}
                    <div className="col-12 col-md-6 border-end-md pe-md-4 mb-5 mb-md-0">
                        <div className="d-flex justify-content-between align-items-center border-top pt-2 mb-3">
                            <h3 className="h6 fw-black m-0 font-sans text-uppercase">Meteo</h3>
                            <a href="#!" className="badge bg-dark text-white text-decoration-none rounded-0 py-1 px-2 font-sans">TUTTE LE PREVISIONI</a>
                        </div>

                        {/* Rimosso flex-nowrap! Usiamo flex-column su mobile/tablet e flex-xl-row su schermi grandissimi */}
                        <div className="d-flex flex-column flex-xl-row align-items-center justify-content-between">

                            {/* Meteo Attuale */}
                            <div className="d-flex align-items-center mb-2 mb-xl-0 w-100 justify-content-center justify-content-md-start">
                                <img src={`https://placehold.co/100x100/FFD700/FFF?text=${meteo.corrente.icona}`} className="rounded-circle me-3 shadow-sm" alt={meteo.corrente.nome} style={{width: '90px'}} />
                                <div className="text-start">
                                    <h4 className="fw-black m-0" style={{fontSize: '1.4rem'}}>Luogo</h4>
                                    <div className="text-dark fw-bold m-0" style={{fontSize: '1.2rem'}}>{meteo.corrente.nome}</div>
                                    <div className="text-secondary my-1 font-sans fw-bold" style={{fontSize: '0.9rem'}}>{meteo.oggi}</div>
                                    <h2 className="display-7 fw-black text-dark m-0 lh-1">temperatura°C</h2>
                                </div>
                            </div>

                            {/* Separatore: Linea VERTICALE su Desktop (xl), Linea ORIZZONTALE su Mobile/Tablet */}
                            <div className="d-none d-xl-block border-end h-100 mx-2 mx-xl-3 border-secondary opacity-25" style={{minHeight: '120px'}}></div>
                            <hr className="d-xl-none w-100 my-3 text-secondary opacity-25" />

                            {/* Previsioni Future */}
                            <div className="d-flex flex-column w-100 justify-content-center align-items-center align-items-md-start" style={{maxWidth: '150px'}}>
                                <div className="d-flex align-items-center py-1 w-100">
                                    <img src={`https://placehold.co/30x30/FFD700/FFF?text=${meteo.succ1.icona}`} className="rounded-circle" alt={meteo.succ1.nome} />
                                    <span className="small font-sans ms-3 text-dark">{meteo.succ1.nome}</span>
                                </div>
                                <hr className="my-1 w-100 text-secondary opacity-25" />
                                <div className="d-flex align-items-center py-1 w-100">
                                    <img src={`https://placehold.co/30x30/FFD700/FFF?text=${meteo.succ2.icona}`} className="rounded-circle" alt={meteo.succ2.nome} />
                                    <span className="small font-sans ms-3 text-dark">{meteo.succ2.nome}</span>
                                </div>
                                <hr className="my-1 w-100 text-secondary opacity-25" />
                                <div className="d-flex align-items-center py-1 w-100">
                                    <img src={`https://placehold.co/30x30/FFD700/FFF?text=${meteo.succ3.icona}`} className="rounded-circle" alt={meteo.succ3.nome} />
                                    <span className="small font-sans ms-3 text-dark">{meteo.succ3.nome}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GIOCHI */}
                    <div className="col-12 col-md-6 ps-md-4">
                        <div className="border-top pt-2 mb-3">
                            <h3 className="h6 fw-black m-0 font-sans text-uppercase">Giochi</h3>
                        </div>

                        {/* flex-column su mobile, flex-row su desktop */}
                        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center h-75 gap-4 gap-md-0">

                            <div className="text-center cursor-pointer hover-red w-100 w-md-50">
                                <div className="text-secondary font-sans mb-2 small">Sudoku</div>
                                <img src="https://placehold.co/120x120/FFF/000?text=SUDOKU" className="border shadow-sm mx-auto d-block" alt="Sudoku" />
                            </div>

                            {/* Divisore tra i giochi: orizzontale su mobile, verticale su desktop */}
                            <hr className="d-md-none w-75 border-secondary opacity-25 my-0" />
                            <div className="d-none d-md-block border-end h-75 border-secondary opacity-25 mx-2"></div>

                            <div className="text-center cursor-pointer hover-red w-100 w-md-50">
                                <div className="text-secondary font-sans mb-2 small">Cruciverba</div>
                                <img src="https://placehold.co/120x120/FFF/000?text=CRUCIVERBA" className="border shadow-sm mx-auto d-block" alt="Cruciverba" />
                            </div>

                        </div>
                    </div>
                </div>

                {/* OROSCOPO */}
                <div className="col-12 mt-4 pt-3 border-top">
                    <h3 className="h6 fw-black m-0 font-sans text-uppercase mb-3">Oroscopo</h3>
                    <div className="d-flex flex-nowrap justify-content-lg-between overflow-auto no-scrollbar gap-4 gap-lg-2 pb-2">
                        {['Ariete', 'Toro', 'Gemelli', 'Cancro', 'Leone', 'Vergine', 'Bilancia', 'Scorpione', 'Sagittario', 'Capricorno', 'Acquario', 'Pesci'].map(segno => (
                            <div key={segno} className="text-center cursor-pointer hover-red flex-shrink-0" style={{width: '60px'}}>
                                <img src={`https://placehold.co/50x50/000/FFF?text=${segno.substring(0,2).toUpperCase()}`} className="rounded-circle mb-2 shadow-sm w-100" alt={segno} />
                                <div className="fw-bold font-sans" style={{fontSize: '11px'}}>{segno}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </main>
    );
};

export default MainBody;