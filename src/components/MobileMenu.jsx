import { Link } from "react-router-dom";

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
                width: min(85vw, 360px);

                background: #0f0f0f;
                border-left: 1px solid #222;

                padding: 35px;
                padding-top: 80px;

                transform: translateX(100%);
                transition: 0.25s ease;
                z-index: 20;

                display: flex;
                flex-direction: column;
                gap: 25px;
            }

            .menu.open {
                transform: translateX(0);
            }

            .section {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .title {
                font-size: 13px;
                color: #777;
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            .link {
                font-size: 17px; /* 🔥 plus gros */
                color: #ccc;
                text-decoration: none;
                padding: 6px 0;
            }

            .link:hover {
                color: white;
            }

            .divider {
                height: 1px;
                background: #222;
            }

            .header-btn {
                background: white;
                color: black;
                padding: 12px;
                text-align: center;
                border-radius: 8px;
                font-weight: 600;
                font-size: 15px;
                text-decoration: none;
            }

            .social {
                margin-top: auto;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .social a {
                color: #888;
                font-size: 14px;
                text-decoration: none;
            }

            .social a:hover {
                color: white;
            }
        `}</style>

        <div className={`overlay ${open ? "show" : ""}`} onClick={onClose} />

        <div className={`menu ${open ? "open" : ""}`}>

            <div className="section">
                <div className="title">Project</div>
                <Link className="link" to="/about" onClick={onClose}>About</Link>
                <Link className="link" to="/features" onClick={onClose}>Features</Link>
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
                <Link className="link" to="/workshop" onClick={onClose}>Browse Themes</Link>
                <Link className="link" to="/workshop/create" onClick={onClose}>Create</Link>
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

            <div className="social">
                <div className="title">Social</div>
                <a href="https://github.com/MasterAcnolo/Freedom-Loader">GitHub</a>
                <a href="https://twitter.com">Twitter</a>
            </div>

        </div>
        </>
    );
}