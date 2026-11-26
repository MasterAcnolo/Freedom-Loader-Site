import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const highlights = [
    {
        icon: "fa-sliders",
        title: "Choose what works for you",
        description: "Pick the format and quality you want before you download.",
    },
    {
        icon: "fa-folder-open",
        title: "Save files where you want",
        description: "Set your download location and keep your media organized.",
    },
    {
        icon: "fa-palette",
        title: "Make the app your own",
        description: "Adjust the look with themes from the app and the community workshop.",
    },
];

export default function Home() {
    useEffect(() => {
        document.title = "Freedom Loader";
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 650,
            easing: "ease-out-cubic",
            offset: 70,
            once: true,
            disable: () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        });
    }, []);

    return (
        <>
            <style>{`
                .home-page {
                    color: var(--text-primary);
                    background: var(--bg-primary);
                }

                .home-container {
                    width: min(1120px, calc(100% - 48px));
                    margin: 0 auto;
                }

                .home-hero {
                    padding: clamp(56px, 8vw, 100px) 0 84px;
                    background: var(--bg-primary);
                }

                .home-hero-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) minmax(260px, 0.8fr);
                    align-items: center;
                    gap: clamp(36px, 7vw, 84px);
                }

                @keyframes home-enter {
                    from {
                        opacity: 0;
                        transform: translateX(-28px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes home-preview-enter {
                    from {
                        opacity: 0;
                        transform: translateX(28px) scale(0.97);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }

                .home-hero-copy {
                    animation: home-enter 700ms ease-out both;
                }

                .home-hero-copy h1 {
                    max-width: 640px;
                    margin: 0;
                    font-size: clamp(2.6rem, 5.4vw, 4.5rem);
                    font-weight: 700;
                    letter-spacing: 0;
                    line-height: 1.12;
                }

                .home-hero-copy h1 span {
                    color: var(--accent-primary);
                }

                .home-lead {
                    max-width: 570px;
                    margin: 22px 0 0;
                    color: var(--text-secondary);
                    font-size: 1.1rem;
                    line-height: 1.75;
                }

                .home-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    margin-top: 30px;
                }

                .home-button {
                    display: inline-flex;
                    min-height: 46px;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    padding: 0 20px;
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.95rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
                }

                .home-button:hover {
                    transform: translateY(-2px);
                }

                .home-button-primary {
                    border-color: var(--accent-primary);
                    background: var(--accent-primary);
                    color: #fff;
                }

                .home-button-primary:hover {
                    border-color: var(--accent-hover);
                    background: var(--accent-hover);
                }

                .home-button-secondary {
                    background: var(--card-bg);
                }

                .home-button-secondary:hover {
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                }

                .home-platforms {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 18px;
                    margin-top: 24px;
                    color: var(--text-tertiary);
                    font-size: 0.86rem;
                }

                .home-platforms span {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                }

                .home-platforms i {
                    color: var(--text-secondary);
                }

                .home-preview {
                    width: fit-content;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 6px;
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    background: var(--bg-secondary);
                    box-shadow: var(--shadow);
                    animation: home-preview-enter 750ms 120ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
                }

                .home-preview img {
                    display: block;
                    width: auto;
                    max-width: 100%;
                    max-height: 490px;
                    border-radius: 6px;
                    object-fit: contain;
                }

                .home-highlights {
                    padding: 64px 0 78px;
                    border-top: 1px solid var(--border-color);
                    background: var(--bg-secondary);
                }

                .home-section-heading {
                    margin-bottom: 30px;
                }

                .home-section-heading h2,
                .home-about h2 {
                    margin: 0;
                    font-size: clamp(1.8rem, 3.5vw, 2.5rem);
                    font-weight: 600;
                    letter-spacing: 0;
                    line-height: 1.25;
                }

                .home-section-heading p,
                .home-about p {
                    max-width: 640px;
                    margin: 12px 0 0;
                    color: var(--text-secondary);
                    line-height: 1.75;
                }

                .home-highlight-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 16px;
                }

                .home-highlight {
                    padding: 22px;
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    background: var(--card-bg);
                }

                .home-highlight-icon {
                    color: var(--accent-primary);
                    font-size: 1.25rem;
                }

                .home-highlight h3 {
                    margin: 16px 0 8px;
                    font-size: 1.05rem;
                    font-weight: 600;
                }

                .home-highlight p {
                    margin: 0;
                    color: var(--text-secondary);
                    font-size: 0.92rem;
                    line-height: 1.7;
                }

                .home-about {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 32px;
                    padding: 64px 0 76px;
                }

                .home-about-copy {
                    max-width: 700px;
                }

                .home-about .home-button {
                    flex: 0 0 auto;
                }

                @media (max-width: 780px) {
                    .home-hero-grid {
                        grid-template-columns: 1fr;
                    }

                    .home-hero-copy {
                        text-align: center;
                    }

                    .home-lead {
                        margin-right: auto;
                        margin-left: auto;
                    }

                    .home-actions,
                    .home-platforms {
                        justify-content: center;
                    }

                    .home-preview img {
                        max-height: 420px;
                    }

                    .home-highlight-grid {
                        grid-template-columns: 1fr;
                    }

                    .home-about {
                        align-items: flex-start;
                        flex-direction: column;
                    }
                }

                @media (max-width: 520px) {
                    .home-container {
                        width: min(100% - 32px, 480px);
                    }

                    .home-hero {
                        padding: 52px 0 64px;
                    }

                    .home-hero-copy h1 {
                        font-size: clamp(2.35rem, 11vw, 3.4rem);
                    }

                    .home-lead {
                        font-size: 1rem;
                    }

                    .home-actions {
                        flex-direction: column;
                    }

                    .home-preview {
                        padding: 7px;
                    }

                    .home-preview img {
                        max-height: 360px;
                    }

                    .home-highlights {
                        padding: 52px 0 60px;
                    }

                    .home-about {
                        padding: 52px 0 60px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .home-page *,
                    .home-page *::before,
                    .home-page *::after {
                        animation-duration: 0.01ms !important;
                        animation-delay: 0ms !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>

            <main className="home-page">
                <section className="home-hero">
                    <div className="home-container home-hero-grid">
                        <div className="home-hero-copy">
                            <h1>Download video and audio. <span>Keep it simple.</span></h1>
                            <p className="home-lead">
                                Freedom Loader is a free desktop app for Windows and Linux.
                                Paste a link, choose your format, and download.
                            </p>
                            <div className="home-actions">
                                <Link to="/download" className="home-button home-button-primary">
                                    <i className="fas fa-download" aria-hidden="true"></i> Download Freedom Loader
                                </Link>
                                <Link to="/about" className="home-button home-button-secondary">
                                    About the project
                                </Link>
                            </div>
                            <div className="home-platforms" aria-label="Available platforms">
                                <span><i className="fab fa-windows" aria-hidden="true"></i> Windows</span>
                                <span><i className="fab fa-linux" aria-hidden="true"></i> Linux</span>
                                <span><i className="fas fa-code-branch" aria-hidden="true"></i> Open source</span>
                            </div>
                        </div>
                        <div className="home-preview">
                            <img
                                src="./assets/pictures/FreedomLoaderPreview.png"
                                alt="Freedom Loader showing a media download and its details"
                            />
                        </div>
                    </div>
                </section>

                <section className="home-highlights">
                    <div className="home-container">
                        <div className="home-section-heading" data-aos="fade-up">
                            <h2>The essentials, without the clutter.</h2>
                            <p>Set up a download the way you want, then let Freedom Loader handle the rest.</p>
                        </div>
                        <div className="home-highlight-grid">
                            {highlights.map((highlight, index) => (
                                <article
                                    className="home-highlight"
                                    key={highlight.title}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <i className={`fas ${highlight.icon} home-highlight-icon`} aria-hidden="true"></i>
                                    <h3>{highlight.title}</h3>
                                    <p>{highlight.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="home-container home-about" data-aos="fade-up">
                    <div className="home-about-copy">
                        <h2>Made to be useful — and open source.</h2>
                        <p>
                            Freedom Loader is built as an independent project. Find out why it started,
                            what it is made with, or take a look at the source code.
                        </p>
                    </div>
                    <Link to="/about" className="home-button home-button-secondary">
                        More about Freedom Loader <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </Link>
                </section>
            </main>
        </>
    );
}
