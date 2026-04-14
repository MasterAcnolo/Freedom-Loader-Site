import { createRoot } from "react-dom/client";
import { HashRouter  } from "react-router-dom";
import Loader from "./components/Loader";
import App from "./App";

function redirectToHash() {
    const { pathname, hash } = window.location;

    if (hash) {
        // Hash exists, clear any stored redirect
        sessionStorage.removeItem('redirect');
        return;
    }

    const base = '/Freedom-Loader-Site';
    
    // Check if there's a stored redirect from 404
    const storedRedirect = sessionStorage.getItem('redirect');
    const path = storedRedirect || pathname.replace(base, '');
    
    if (storedRedirect) {
        sessionStorage.removeItem('redirect');
        sessionStorage.removeItem('redirected');
    }

    if (path && path !== '/') {
        window.location.replace(`${base}/#${path}`);
    }
}

redirectToHash();

createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Loader />
        <App />
    </HashRouter>
);