import { createRoot } from "react-dom/client";
import { HashRouter  } from "react-router-dom";
import Loader from "./components/Loader";
import App from "./App";

function redirectToHash() {
    const { pathname, hash } = window.location;

    if (hash) return;

    const base = '/Freedom-Loader-Site';
    const path = pathname.replace(base, '');

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