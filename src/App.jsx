import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Download from "./routes/Download";
import About from "./routes/About";

function App(){
    return  (
        <>
           <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/download" element={<Download />} />
            </Routes>
            <Footer/>
        </>
    )
}

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);