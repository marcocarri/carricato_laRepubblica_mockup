import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// --- librerie e stili di base ---
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

// --- componente principale ---
import App from './App.jsx';

// --- inizializzazione dell'applicazione ---
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);