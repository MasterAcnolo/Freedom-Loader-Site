import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";

import ScrollToTop from "./utils/ScrollToTop";

function App(){
    return  (
        <>
           <ScrollToTop/>

            <Header/>
        </>
    )
}

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);