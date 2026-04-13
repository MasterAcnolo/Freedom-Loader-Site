import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import ScrollToTop from "./utils/ScrollToTop";
import Download from "./routes/Download";

function App(){
    return  (
        <>
           <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/download" element={<Download />} />
            </Routes>
        </>
    )
}

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);