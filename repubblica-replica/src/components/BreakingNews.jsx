import React from 'react';

const BreakingNews = () => {
    return (
        <article className="container-fluid bg-white border border-danger my-3 p-0 d-flex align-items-center overflow-hidden">
            <div className="bg-danger text-white px-3 py-2 fw-bold font-sans text-uppercase small h-100">
                Ultim'ora <span className="ms-2 fw-normal opacity-75">19:09</span>
            </div>
            <div className="px-3 flex-grow-1">
                <h2 className="m-0 h6 fw-bold">
                    <a href="#!" className="text-dark text-decoration-none">
                        Ranieri verso l'addio alla Roma, atteso il comunicato del club
                    </a>
                </h2>
            </div>
        </article>
    );
};

export default BreakingNews;