import React from 'react';

const Header = () => {
    return (
        <header className="page-header sticky-top bg-white border-bottom shadow-sm">

            {/*desktop*/}
            <div className="d-none d-md-block">
                {/*slim header*/}
                <div className="slim-header border-bottom py-2">
                    <div className="container-fluid px-4 d-flex align-items-center justify-content-between font-sans">

                        {/*sinistra*/}
                        <div className="d-flex align-items-center gap-4">
                            <button className="btn btn-sm p-0 fw-bold d-flex align-items-center gap-2">
                                <i className="bi bi-list fs-4"></i> MENU
                            </button>
                            <button className="btn btn-sm p-0 d-flex align-items-center gap-2 text-muted">
                                <i className="bi bi-search"></i> CERCA
                            </button>
                            <button className="btn btn-sm p-0 d-flex align-items-center gap-2 text-muted">
                                <i className="bi bi-bell"></i> NOTIFICHE
                            </button>
                        </div>

                        {/*centro*/}
                        <div className="fw-bold text-dark small">ABBONATI</div>

                        {/*destra*/}
                        <div className="d-flex align-items-center gap-2">
                            <span className="small fw-bold">ACCEDI</span>
                            <i className="bi bi-person-circle fs-4"></i>
                        </div>
                    </div>
                </div>

                {/*logo*/}
                <div className="container py-4 text-center">
                    <h1 className="main-logo m-0 fw-black display-1">
                        la Repubblica<span className="text-danger italic-50">50</span>
                    </h1>
                    <div className="text-muted small text-uppercase mt-2 font-sans" style={{fontSize: '10px'}}>
                        23 APRILE 2026 - AGGIORNATO ALLE <time className="fw-bold">19.15</time>
                    </div>
                </div>
            </div>

            {/*mobile*/}
            <div className="d-md-none">
                {/*prima barra*/}
                <div className="border-bottom py-2 px-3 d-flex justify-content-between align-items-center">
                    <i className="bi bi-bell fs-4" aria-label="Notifiche"></i>
                    <a href="#!" className="fw-bold text-dark text-decoration-none small">ABBONATI</a>
                </div>

                {/*seconda barra*/}
                <div className="py-2 px-3 d-flex justify-content-between align-items-center">
                    <i className="bi bi-list fs-3" aria-label="Menu"></i>

                    <h1 className="main-logo m-0 h3">
                        la Repubblica<span className="text-danger italic-50">50</span>
                    </h1>

                    <i className="bi bi-person-circle fs-4" aria-label="Accedi"></i>
                </div>
            </div>

            {/*navigazione topics*/}
            <nav className="border-top py-2 bg-white">
                <div className="container-fluid px-3 d-flex align-items-center overflow-auto no-scrollbar font-sans text-uppercase fw-bold" style={{fontSize: '13px'}}>
                    <div className="d-flex gap-4 text-nowrap text-secondary">
                        <span className="text-dark">Repubblica50</span>
                        <span>Iran</span>
                        <span>Ucraina</span>
                        <span>Decreto Sicurezza</span>
                        <span>Voli</span>
                        <span>Sinner</span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;