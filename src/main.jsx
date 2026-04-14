import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import App from "./App";

createRoot(document.getElementById("root")).render(
    <>
        <Loader />
        <BrowserRouter basename="/Freedom-Loader-Site/">
            <App />
        </BrowserRouter>
    </>
);
