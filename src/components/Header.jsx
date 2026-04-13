import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

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
                background: var(--header-bg);
                border-bottom: 1px solid var(--header-border);
                transition: all 0.3s ease;
                position: sticky;
                top: 0;
                z-index: 101;
            }

            .logo img {
                height: 65px;
                transition: transform 0.3s ease, filter 0.3s ease;
                cursor: pointer;
                filter: invert(0);
            }

            :root.light-theme .logo img {
                filter: invert(1);
            }

            .logo img:hover {
                transform: scale(1.03);
                filter: brightness(0.8) invert(var(--logo-invert, 0));
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

                background: var(--bg-secondary);
                border: 1px solid var(--border-color);
                border-radius: 10px;

                padding: 10px;
                display: flex;
                flex-direction: column;
                min-width: 220px;

                opacity: 0;
                transform: translateY(8px);
                pointer-events: none;
                transition: 0.2s ease;
                z-index: 200;

            }

            .item.open .dropdown {
                opacity: 1;
                transform: translateY(0);
                pointer-events: auto;
            }

            .dropdown a {
                padding: 9px 10px;
                border-radius: 6px;
                color: var(--text-secondary);
                font-size: 14px;
                z-index: 200;
                text-decoration: none;

            }

            .dropdown a:hover {
                background: var(--card-bg);
                color: var(--text-primary);
                z-index: 200;

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
                background: rgba(255, 255, 255, 0.9);
                transform: translateY(-1px);
            }

            .header-btn:active {
                transform: translateY(0);
            }

           .hamburger {
                display: none; 
                width: 30px;
                height: 22px;
                position: fixed;
                top: 36px;
                right: 40px;
                cursor: pointer;
                z-index: 1000;
                margin-left: auto;
            }

            .hamburger span {
                position: absolute;
                left: 0;
                width: 100%;
                height: 2px;
                background: var(--text-primary);
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
                        <Link to="/roadmap">Roadmap</Link>
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
                    </div>
                </div>

                <Link to="/download" className="header-btn">
                    Download
                </Link>

                <ThemeToggle />

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