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
            // Force reload with the correct path
            window.location.href = `/Freedom-Loader-Site${redirect}`;
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
