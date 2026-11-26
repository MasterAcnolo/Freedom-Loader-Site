import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./routes/Home";
import Download from "./routes/Download";
import About from "./routes/About";
import FAQ from "./routes/FAQ";
import Terms from "./routes/Terms";
import Privacy from "./routes/Privacy";
import Contact from "./routes/Contact";

function LegacyDocsRedirect() {
    useEffect(() => {
        window.location.replace("https://docs.freedomloader.acnolo.fr/");
    }, []);

    return <p>Documentation moved to <a href="https://docs.freedomloader.acnolo.fr/">docs.freedomloader.acnolo.fr</a>.</p>;
}

function ContributingRedirect() {
    useEffect(() => {
        window.location.replace("https://docs.freedomloader.acnolo.fr/contributing/");
    }, []);
}

function App(){
    return  (
        <>
           <ScrollToTop/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/features" element={<Navigate to="/about" replace />} />
                <Route path="/wiki" element={<LegacyDocsRedirect />} />
                <Route path="/contributing" element={<ContributingRedirect />} />
                <Route path="/roadmap" element={<Navigate to="/about" replace />} />
                <Route path="/download" element={<Download />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </>
    )
}

export default App;