import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu({ open, onClose }) {
    return (
        <>
        <style>{`
            .overlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.6);
                opacity: 0;
                pointer-events: none;
                transition: 0.2s;
                z-index: 10;
            }

            .overlay.show {
                opacity: 1;
                pointer-events: auto;
            }

            .menu {
                position: fixed;
                top: 0;
                right: 0;
                height: 100dvh;
                width: min(55vw, 320px);

                background: var(--bg-secondary);
                border-left: 1px solid var(--border-color);

                padding: 20px;
                padding-top: 120px;

                transform: translateX(100%);
                transition: 0.25s ease;
                z-index: 101;

                display: flex;
                flex-direction: column;
                gap: 15px;
                overflow-y: auto;
            }

            .menu.open {
                transform: translateX(0);
            }

            .section {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            .title {
                font-size: 11px;
                color: var(--text-tertiary);
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            .link {
                font-size: 15px;
                color: var(--text-secondary);
                text-decoration: none;
                padding: 4px 0;
                transition: all 0.2s ease;
            }

            .link:hover {
                color: var(--text-primary);
            }

            .divider {
                height: 1px;
                background: var(--border-color);
                margin: 5px 0;
            }

            .header-btn {
                background: var(--accent-primary);
                color: white;
                padding: 10px;
                text-align: center;
                border-radius: 8px;
                font-weight: 600;
                font-size: 13px;
                text-decoration: none;
                transition: all 0.2s ease;
            }

            .header-btn:hover {
                background: var(--accent-hover);
            }

            .theme-toggle-wrapper {
                position: fixed;
                top: 100px;
                right: 30px;
                z-index: 1002;
                display: none;
                opacity: 0;
                pointer-events: none;
                transition: all 0.25s ease;
                transform: translateX(100%);
            }

            .theme-toggle-wrapper.show {
                opacity: 1;
                pointer-events: auto;
                transform: translateX(0);
            }

            @media (max-width: 990px) {
                .theme-toggle-wrapper {
                    display: block;
                }
            }

        `}</style>

        <div className={`overlay ${open ? "show" : ""}`} onClick={onClose} />

        <div className={`theme-toggle-wrapper ${open ? "show" : ""}`}>
            <ThemeToggle />
        </div>

        <div className={`menu ${open ? "open" : ""}`}>

            <div className="section">
                <div className="title">Project</div>
                <Link className="link" to="/about" onClick={onClose}>About</Link>
                <Link className="link" to="/features" onClick={onClose}>Features</Link>
                <Link className="link" to="/roadmap" onClick={onClose}>Roadmap</Link>
                <Link className="link" to="/wiki" onClick={onClose}>Wiki</Link>
            </div>

            <div className="divider" />

            <div className="section">
                <div className="title">Explore</div>
                <Link className="link" to="/faq" onClick={onClose}>FAQ</Link>
                <Link className="link" to="/contact" onClick={onClose}>Contact</Link>
            </div>

            <div className="divider" />

            <div className="section">
                <div className="title">Workshop</div>
                <a className="link" href="https://masteracnolo.github.io/Freedom-Loader-Workshop/" target="_blank" rel="noopener noreferrer">Browse Themes</a>
                <a className="link" href="https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html" target="_blank" rel="noopener noreferrer">Create</a>
            </div>

            <div className="divider" />

            <div className="section">
                <div className="title">Contribute</div>
                <a className="link" href="https://github.com/MasterAcnolo/Freedom-Loader">GitHub</a>
                <Link className="link" to="/contributing" onClick={onClose}>Guide</Link>
            </div>

            <Link to="/download" className="header-btn" onClick={onClose}>
                Download
            </Link>

        </div>
        </>
    );
}