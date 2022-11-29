import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/libraries/bootstrap-rtl.css";
import "./assets/fonts/fonts.scss";
import PageRoutes from "./routes/pageroutes";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <PageRoutes/>
    </React.StrictMode>
);
