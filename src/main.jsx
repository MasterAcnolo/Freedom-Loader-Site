import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import Loader from "./components/Loader";
import App from "./App";

function Root() {
    useEffect(() => {
        // Check if there's a redirect stored in sessionStorage
        const redirect = sessionStorage.getItem('redirect');
        if (redirect) {
            sessionStorage.removeItem('redirect');
            sessionStorage.removeItem('redirected');
            // Navigate to the stored path without causing a new 404 lookup
            window.history.replaceState(null, '', `/Freedom-Loader-Site${redirect}`);
        }
    }, []);

    return (
        <>
            <Loader />
            <BrowserRouter basename="/Freedom-Loader-Site/">
                <App />
            </BrowserRouter>
        </>
    );
}

createRoot(document.getElementById("root")).render(<Root />);
