import { Link } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <style>{`
                footer {
                    background: var(--bg-tertiary);
                    color: var(--text-primary);
                    padding: 50px 10% 20px;
                    font-family: Poppins;
                    margin-top: 60px;
                    border-top: 1px solid var(--border-color);
                    transition: all 0.3s ease;
                }

                .footer-container {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 40px;
                    margin-bottom: 30px;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    min-width: 200px;
                }

                .footer-brand img {
                    height: 60px;
                    width: auto;
                    transition: transform 0.3s ease, filter 0.3s ease;
                    filter: invert(0);
                }

                :root.light-theme .footer-brand img {
                    filter: invert(1);
                }

                .footer-brand p {
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    margin: 0;
                }

                .footer-column {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .footer-column h4 {
                    margin: 0 0 10px 0;
                    font-size: 1rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    color: var(--text-secondary);
                }

                .footer-column a {
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                    font-size: 0.9rem;
                }

                .footer-column a:hover {
                    color: var(--text-primary);
                }

                .footer-socials {
                    display: flex;
                    gap: 15px;
                    flex-wrap: wrap;
                }

                .footer-socials a {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    color: var(--text-secondary);
                    transition: all 0.3s ease;
                    font-size: 1.2rem;
                }

                .footer-socials svg {
                    width: 20px;
                    height: 20px;
                    stroke: currentColor;
                    fill: none;
                }

                .footer-socials img {
                    width: 20px;
                    height: 20px;
                    filter: invert(0);
                    transition: all 0.3s ease;
                }

                :root.dark-theme .footer-socials img {
                    filter: invert(1);
                }

                @media (prefers-color-scheme: dark) {
                    :root:not(.light-theme) .footer-socials img {
                        filter: invert(1);
                    }
                }

                .footer-socials svg {
                    width: 20px;
                    height: 20px;
                    stroke: currentColor;
                    fill: none;
                }

                .footer-socials a:hover {
                    opacity: 1;
                    background: var(--accent-primary);
                    color: white;
                    transform: translateY(-3px);
                }

                .footer-socials a:hover img {
                    filter: brightness(0) invert(1);
                }

                .footer-socials a:hover svg {
                    stroke: white;
                    fill: white;
                }

                .footer-bottom {
                    border-top: 1px solid var(--border-color);
                    padding-top: 20px;
                    text-align: center;
                    font-size: 0.85rem;
                    opacity: 0.7;
                    max-width: 1400px;
                    margin-left: auto;
                    margin-right: auto;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .footer-container {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                        gap: 30px;
                    }

                    .footer-brand {
                        align-items: center;
                    }

                    .footer-column {
                        align-items: center;
                    }

                    .footer-column a {
                        transition: all 0.2s ease;
                    }

                    .footer-column a:hover {
                        transform: none;
                        opacity: 1;
                    }

                    .footer-socials {
                        justify-content: center;
                    }
                }

                @media (max-width: 500px) {
                    footer {
                        padding: 30px 5% 15px;
                    }

                    .footer-container {
                        gap: 20px;
                    }

                    .footer-column h4 {
                        font-size: 0.9rem;
                    }

                    .footer-column a {
                        font-size: 0.85rem;
                    }

                    .footer-bottom {
                        font-size: 0.75rem;
                    }
                }
            `}</style>

            <footer>
                <div className="footer-container">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <Link to="/">
                            <img src="./assets/icon/Freedom_Loader.png" alt="Freedom Loader" />
                        </Link>
                        <p>Put Freedom in your Downloads.</p>
                    </div>

                    {/* Site Links */}
                    <div className="footer-column">
                        <h4>Site</h4>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/features">Features</Link>
                        <Link to="/roadmap">Roadmap</Link>
                        <Link to="/download">Download</Link>
                    </div>

                    {/* Workshop Links */}
                    <div className="footer-column">
                        <h4>Workshop</h4>
                        <a href="https://masteracnolo.github.io/Freedom-Loader-Workshop/" target="_blank" rel="noopener noreferrer">Browse Themes</a>
                        <a href="https://masteracnolo.github.io/Freedom-Loader-Workshop/create.html" target="_blank" rel="noopener noreferrer">Create Theme</a>
                    </div>

                    {/* Legal Links */}
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <Link to="/contact">Contact</Link>
                        <Link to="/privacy">Privacy</Link>
                        <Link to="/terms">Terms</Link>
                    </div>

                    {/* Community Links */}
                    <div className="footer-column">
                        <h4>Community</h4>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/wiki">Wiki</Link>
                        <Link to="/contributing">Contributing</Link>
                        <a href="https://github.com/MasterAcnolo/Freedom-Loader/discussions" target="_blank" rel="noopener noreferrer">Discussions</a>
                    </div>

                    {/* Social Links */}
                    <div className="footer-column">
                        <h4>Follow Us</h4>
                        <div className="footer-socials">
                            <a 
                                href="https://masteracnolo.github.io/No-Sense" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title="Website"
                            >
                                <img src="./assets/icon/globe-solid-full.svg" alt="Website" />
                            </a>
                            <a 
                                href="https://x.com/MasterAcnolo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title="Twitter/X"
                            >
                                <img src="./assets/icon/x-twitter-brands-solid-full.svg" alt="Twitter/X" />
                            </a>
                            <a 
                                href="https://github.com/MasterAcnolo" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title="GitHub"
                            >
                                <img src="./assets/icon/github-brands-solid-full.svg" alt="GitHub" />
                            </a>
                            <a 
                                href="https://www.youtube.com/channel/UCS55e2-ZslXqGzznB_7N4Sg" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                title="YouTube"
                            >
                                <img src="./assets/icon/youtube-brands-solid-full.svg" alt="YouTube" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>© {currentYear} Freedom Loader — All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}
