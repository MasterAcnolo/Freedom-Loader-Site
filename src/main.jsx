import { createRoot } from "react-dom/client";
import { HashRouter  } from "react-router-dom";
import { useEffect } from "react";
import Loader from "./components/Loader";
import App from "./App";

function Root() {
    useEffect(() => {
        const path = window.location.pathname.replace('/Freedom-Loader-Site', '');

        if (path && path !== '/') {
            window.location.replace(`/Freedom-Loader-Site/#${path}`);
        }
    }, []);

    return (
        <>
            <Loader />
            <HashRouter  basename="/Freedom-Loader-Site/">
                <App />
            </HashRouter>
        </>
    );
}

createRoot(document.getElementById("root")).render(<Root />);
