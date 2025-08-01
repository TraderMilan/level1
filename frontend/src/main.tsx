import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);