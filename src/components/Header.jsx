import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
        <style>{`
            .header {
                display: flex;
                align-items: center;
                padding: 12px 40px;
                background: #121212;
            }

            .logo img {
                height: 70px;
                transition: transform 0.3s ease, filter 0.3s ease;
                cursor: pointer;
            }

            .logo img:hover {
                transform: scale(1.03);
                filter: brightness(0.8);
            }

            .logo img.active {
                transform: scale(0.85);
                filter: brightness(1.2);
            }

            .nav {
                display: flex;
                align-items: center;
                gap: 40px;
                margin-left: auto;
            }

            .nav a, .trigger {
                text-decoration: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 18px;
                font-weight: 500;
            }

            .item {
                position: relative;
                padding: 10px 0;
            }

            .item::before {
                content: "";
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 18px;
            }

            .arrow {
                font-size: 20px;
                transition: transform 0.2s;
            }

            .item.open .arrow {
                transform: rotate(180deg);
            }

            .dropdown {
                position: absolute;
                top: calc(100% + 12px);
                left: 0;

                background: #1a1a1a;
                border: 1px solid #2a2a2a;
                border-radius: 10px;

                padding: 10px;
                display: flex;
                flex-direction: column;
                min-width: 220px;

                opacity: 0;
                transform: translateY(8px);
                pointer-events: none;
                transition: 0.2s ease;
            }

            .item.open .dropdown {
                opacity: 1;
                transform: translateY(0);
                pointer-events: auto;
            }

            .dropdown a {
                padding: 9px 10px;
                border-radius: 6px;
                color: #ccc;
                font-size: 14px;
            }

            .dropdown a:hover {
                background: #2a2a2a;
                color: white;
            }

            .header-btn {
                background: white;
                color: black;
                padding: 10px 20px;
                border-radius: 6px;
                font-weight: 600;
                font-size: 14px;
                text-decoration: none;
                transition: all 0.2s ease;
            }

            .header-btn:hover {
                background: #c5c5c5;
                transform: translateY(-1px);
            }

            .header-btn:active {
                transform: translateY(0);
            }

           .hamburger {
                display: none; 
                width: 30px;
                height: 22px;
                position: relative;
                cursor: pointer;
                z-index: 200;
                margin-left: auto;
            }

            .hamburger span {
                position: absolute;
                left: 0;
                width: 100%;
                height: 2px;
                background: white;
                border-radius: 2px;
                transition: 0.25s ease;
            }

            /* position initiale */
            .hamburger span:nth-child(1) {
                top: 0;
            }

            .hamburger span:nth-child(2) {
                top: 10px;
            }

            .hamburger span:nth-child(3) {
                top: 20px;
            }

            /* état OPEN → morph X */
            .hamburger.open span:nth-child(1) {
                top: 10px;
                transform: rotate(45deg);
            }

            .hamburger.open span:nth-child(2) {
                opacity: 0;
                transform: translateX(-10px);
            }

            .hamburger.open span:nth-child(3) {
                top: 10px;
                transform: rotate(-45deg);
            }

            @media (max-width: 990px) {
                .nav {
                    display: none;
                }

                .hamburger {
                    display: block;
                }
            }
        `}</style>

        <header className="header">

            <Link to="/" className="logo">
                <img src="/assets/icon/Freedom_Loader.png" alt="logo" />
            </Link>

            <nav className="nav">

                {/* PROJECT */}
                <div
                    className={`item ${openMenu === "project" ? "open" : ""}`}
                    onMouseEnter={() => setOpenMenu("project")}
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    <div className="trigger">Project <span className="arrow">▾</span></div>
                    <div className="dropdown">
                        <Link to="/about">About</Link>
                        <Link to="/features">Features</Link>
                        <Link to="/wiki">Wiki</Link>
                    </div>
                </div>

                {/* EXPLORE */}
                <div
                    className={`item ${openMenu === "explore" ? "open" : ""}`}
                    onMouseEnter={() => setOpenMenu("explore")}
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    <div className="trigger">Explore <span className="arrow">▾</span></div>
                    <div className="dropdown">
                        <Link to="/faq">FAQ</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

                {/* WORKSHOP */}
                <div
                    className={`item ${openMenu === "workshop" ? "open" : ""}`}
                    onMouseEnter={() => setOpenMenu("workshop")}
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    <div className="trigger">Workshop <span className="arrow">▾</span></div>
                    <div className="dropdown">
                        <Link to="/workshop">Browse Themes</Link>
                        <Link to="/workshop/create">Create</Link>
                    </div>
                </div>

                {/* CONTRIBUTE */}
                <div
                    className={`item ${openMenu === "contribute" ? "open" : ""}`}
                    onMouseEnter={() => setOpenMenu("contribute")}
                    onMouseLeave={() => setOpenMenu(null)}
                >
                    <div className="trigger">Contribute <span className="arrow">▾</span></div>
                    <div className="dropdown">
                        <a href="https://github.com/MasterAcnolo/Freedom-Loader">GitHub</a>
                        <Link to="/contributing">Guide</Link>
                        <Link to="/issues">Issues</Link>
                    </div>
                </div>

                <Link to="/download" className="header-btn">
                    Download
                </Link>

            </nav>

            <div
                className={`hamburger ${mobileOpen ? "open" : ""}`}
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

        </header>

        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    );
}