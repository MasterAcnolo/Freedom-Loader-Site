import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./routes/Home";
import Download from "./routes/Download";
import About from "./routes/About";
import Terms from "./routes/Terms";
import Privacy from "./routes/Privacy";
import Contact from "./routes/Contact";

function App(){
    return  (
        <>
           <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/download" element={<Download />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/contact" element={<Contact />} />
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