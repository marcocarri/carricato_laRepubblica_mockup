import React from 'react';

const Header = () => {
    const dataOggi = new Intl.DateTimeFormat('it-IT', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    }).format(new Date());

    return (
        <header className="py-4 bg-white border-bottom border-2 border-dark">
            <div className="container position-relative">
                {}
                <div className="position-absolute start-0 bottom-0 d-none d-md-block small text-muted font-sans text-uppercase pb-1" style={{fontSize: '12px'}}>
                    {dataOggi}
                </div>

                {}
                <div className="text-center">
                    <a href="#!" aria-label="Torna alla Home de La Repubblica" className="text-decoration-none">
                        <h1 className="display-1 fw-black m-0 p-0 text-dark" style={{ letterSpacing: '-5px', fontWeight: '900', lineHeight: '0.8' }}>
                            <span className="text-danger">la</span> Repubblica
                        </h1>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;