import React from 'react';

const SlimHeader = () => {
    return (
        <div className="border-bottom font-sans py-2" style={{fontSize: '13px', backgroundColor: '#fff'}}>
            <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-4">
                    <button className="btn btn-sm p-0 d-flex align-items-center gap-1 fw-bold">
                        <i className="bi bi-list fs-4"></i> MENU
                    </button>
                    <button className="btn btn-sm p-0 d-none d-md-flex align-items-center gap-1">
                        <i className="bi bi-search"></i> CERCA
                    </button>
                    <button className="btn btn-sm p-0 d-none d-md-flex align-items-center gap-1">
                        <i className="bi bi-bell"></i> NOTIFICHE
                    </button>
                </div>
                <div className="d-flex align-items-center gap-4">
                    <a href="#!" className="text-dark fw-bold text-uppercase text-decoration-none">Abbonati</a>
                    <a href="#!" className="text-dark text-decoration-none d-flex align-items-center gap-1">
                        ACCEDI <i className="bi bi-person-circle fs-5"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SlimHeader;