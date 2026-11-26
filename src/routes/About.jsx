import { useEffect } from "react";

const technologies = [
    { name: "Electron", img: "./assets/languages/electron.png", desc: "Desktop app foundation" },
    { name: "Node.js", img: "./assets/languages/nodejs.png", desc: "Background services" },
    { name: "yt-dlp", img: "./assets/languages/ytDlp.png", desc: "Media extraction" },
    { name: "FFmpeg", img: "./assets/languages/ffmpeg.png", desc: "Media processing" },
    { name: "JavaScript", img: "./assets/languages/js.png", desc: "Application logic" },
    { name: "Express", img: "./assets/languages/express.svg", desc: "Internal API", invert: true },
];

const principles = [
    {
        number: "01",
        title: "Respect the person using it",
        description: "A downloader should help you get things done — not distract you with ads, upsells, or unnecessary friction.",
    },
    {
        number: "02",
        title: "Keep things transparent",
        description: "Freedom Loader is open source, so anyone can inspect how it works, suggest improvements, and contribute.",
    },
    {
        number: "03",
        title: "Put you in control",
        description: "Choose your formats and destination, and keep your media on your own device.",
    },
];

export default function About() {
    useEffect(() => {
        document.title = "About — Freedom Loader";
    }, []);

    return (
        <>
            <style>{`
                .about-page {
                    --about-accent: var(--accent-primary);
                    color: var(--text-primary);
                    background: var(--bg-primary);
                }

                .about-container {
                    width: min(1080px, calc(100% - 48px));
                    margin: 0 auto;
                }

                .about-hero {
                    padding: clamp(72px, 10vw, 118px) 0 78px;
                    background: var(--bg-primary);
                    text-align: center;
                }

                .about-eyebrow {
                    margin: 0 0 16px;
                    color: var(--about-accent);
                    font-size: 0.98rem;
                    font-weight: 700;
                    letter-spacing: 0;
                }

                .about-hero h1 {
                    max-width: 800px;
                    margin: 0 auto;
                    font-size: clamp(2.8rem, 7vw, 5.4rem);
                    letter-spacing: 0;
                    line-height: 1.12;
                }

                .about-hero h1 span {
                    color: var(--about-accent);
                }

                .about-hero > .about-container > p:last-child {
                    max-width: 650px;
                    margin: 24px auto 0;
                    color: var(--text-secondary);
                    font-size: clamp(1.05rem, 2vw, 1.2rem);
                    line-height: 1.8;
                }

                .about-story {
                    padding: 76px 0 92px;
                    border-top: 1px solid var(--border-color);
                }

                .about-story-grid {
                    display: grid;
                    grid-template-columns: 0.8fr 1.2fr;
                    gap: clamp(36px, 8vw, 100px);
                }

                .about-story h2,
                .about-values h2,
                .about-tech h2,
                .about-support h2 {
                    margin: 0;
                    font-size: clamp(2rem, 4vw, 3.2rem);
                    letter-spacing: 0;
                    line-height: 1.2;
                }

                .about-story-copy p {
                    margin: 0 0 18px;
                    color: var(--text-secondary);
                    line-height: 1.85;
                }

                .about-story-copy p:last-child {
                    margin-bottom: 0;
                }

                .about-inline-link {
                    color: var(--about-accent);
                    font-weight: 600;
                    text-decoration: none;
                }

                .about-inline-link:hover {
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }

                .about-values {
                    padding: 84px 0 96px;
                    border-top: 1px solid var(--border-color);
                    background: var(--bg-secondary);
                }

                .about-section-heading {
                    max-width: 650px;
                    margin-bottom: 40px;
                }

                .about-section-heading .about-eyebrow {
                    margin-bottom: 14px;
                }

                .about-section-heading > p:last-child {
                    margin: 15px 0 0;
                    color: var(--text-secondary);
                    line-height: 1.8;
                }

                .about-value-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 16px;
                }

                .about-value-card {
                    padding: 26px;
                    border: 1px solid var(--border-color);
                    border-radius: 18px;
                    background: var(--card-bg);
                }

                .about-value-number {
                    color: var(--about-accent);
                    font-size: 0.82rem;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                }

                .about-value-card h3 {
                    margin: 28px 0 10px;
                    font-size: 1.12rem;
                }

                .about-value-card p {
                    margin: 0;
                    color: var(--text-secondary);
                    font-size: 0.92rem;
                    line-height: 1.75;
                }

                .about-tech {
                    padding: 84px 0 96px;
                    border-top: 1px solid var(--border-color);
                }

                .about-tech-grid {
                    display: grid;
                    grid-template-columns: repeat(3, minmax(0, 1fr));
                    gap: 12px;
                }

                .about-tech-card {
                    display: flex;
                    min-height: 88px;
                    align-items: center;
                    gap: 16px;
                    padding: 16px 18px;
                    border: 1px solid var(--border-color);
                    border-radius: 15px;
                    background: var(--card-bg);
                }

                .about-tech-card img {
                    width: 42px;
                    height: 42px;
                    flex: 0 0 42px;
                    object-fit: contain;
                }

                .about-tech-card img.invert-dark {
                    filter: invert(1);
                }

                :root.light-theme .about-tech-card img.invert-dark {
                    filter: none;
                }

                .about-tech-card strong,
                .about-tech-card span {
                    display: block;
                }

                .about-tech-card strong {
                    font-size: 0.95rem;
                }

                .about-tech-card span {
                    margin-top: 4px;
                    color: var(--text-secondary);
                    font-size: 0.8rem;
                }

                .about-support {
                    padding: 76px 0;
                    border-top: 1px solid var(--border-color);
                    background: var(--bg-secondary);
                }

                .about-support-inner {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) auto;
                    align-items: center;
                    gap: 40px;
                    padding: clamp(28px, 5vw, 52px);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    background: var(--bg-primary);
                    box-shadow: var(--shadow);
                }

                .about-support-copy {
                    max-width: 650px;
                }

                .about-support-copy .about-eyebrow {
                    margin-bottom: 12px;
                }

                .about-support h2 {
                    font-size: clamp(2rem, 3.8vw, 2.8rem);
                }

                .about-support-copy > p:last-child {
                    margin: 12px 0 0;
                    color: var(--text-secondary);
                    line-height: 1.75;
                }

                .about-support-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    flex-shrink: 0;
                }

                .about-button {
                    display: inline-flex;
                    min-height: 48px;
                    align-items: center;
                    justify-content: center;
                    gap: 9px;
                    padding: 0 20px;
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    color: var(--text-primary);
                    font-size: 0.92rem;
                    font-weight: 600;
                    text-decoration: none;
                    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;
                }

                .about-button:hover {
                    transform: translateY(-2px);
                    border-color: var(--about-accent);
                }

                .about-button.primary {
                    border-color: var(--about-accent);
                    background: var(--about-accent);
                    color: #fff;
                }

                .about-button.primary:hover {
                    border-color: var(--accent-hover);
                    background: var(--accent-hover);
                }

                @media (max-width: 760px) {
                    .about-story-grid {
                        grid-template-columns: 1fr;
                        gap: 28px;
                    }

                    .about-value-grid,
                    .about-tech-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .about-support-inner {
                        align-items: flex-start;
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .about-support-actions {
                        width: 100%;
                        flex-direction: row;
                    }
                }

                @media (max-width: 520px) {
                    .about-container {
                        width: min(100% - 32px, 480px);
                    }

                    .about-hero {
                        padding: 64px 0;
                    }

                    .about-story,
                    .about-values,
                    .about-tech,
                    .about-support {
                        padding: 62px 0;
                    }

                    .about-value-grid,
                    .about-tech-grid {
                        grid-template-columns: 1fr;
                    }

                    .about-support-actions {
                        width: 100%;
                        flex-direction: column;
                    }

                    .about-button {
                        width: 100%;
                    }
                }
            `}</style>

            <main className="about-page">
                <section className="about-hero">
                    <div className="about-container">
                        <p className="about-eyebrow">The project behind the app</p>
                        <h1>Freedom should be part of <span>the experience.</span></h1>
                        <p>
                            Freedom Loader is a free, open-source desktop app that makes downloading online
                            video and audio straightforward, while keeping privacy and user choice at its core.
                        </p>
                    </div>
                </section>

                <section className="about-story">
                    <div className="about-container about-story-grid">
                        <div>
                            <p className="about-eyebrow">A small idea, built with purpose</p>
                            <h2>Why Freedom Loader exists</h2>
                        </div>
                        <div className="about-story-copy">
                            <p>
                                Freedom Loader started with a simple frustration: many downloaders felt cluttered,
                                restrictive, or difficult to trust. I wanted something that felt clear and useful —
                                a tool that helps you get the job done without getting between you and your media.
                            </p>
                            <p>
                                The project has grown over time, but the idea remains the same: keep it approachable,
                                keep it transparent, and give people more control over how they use their devices.
                                Read the <a className="about-inline-link" href="https://masteracnolo.github.io/Blog/pourquoi-freedom-loader/" target="_blank" rel="noopener noreferrer">full story</a>.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="about-values">
                    <div className="about-container">
                        <div className="about-section-heading">
                            <p className="about-eyebrow">What guides the project</p>
                            <h2>Built around your choices.</h2>
                            <p>These principles shape the product, from the interface to the way the project is shared.</p>
                        </div>
                        <div className="about-value-grid">
                            {principles.map((principle) => (
                                <article className="about-value-card" key={principle.number}>
                                    <span className="about-value-number">{principle.number}</span>
                                    <h3>{principle.title}</h3>
                                    <p>{principle.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="about-tech">
                    <div className="about-container">
                        <div className="about-section-heading">
                            <p className="about-eyebrow">The tools behind it</p>
                            <h2>Made with proven technology.</h2>
                            <p>Freedom Loader brings together a focused set of open-source tools for its desktop app and media workflow.</p>
                        </div>
                        <div className="about-tech-grid">
                            {technologies.map((technology) => (
                                <div className="about-tech-card" key={technology.name}>
                                    <img
                                        src={technology.img}
                                        alt=""
                                        aria-hidden="true"
                                        className={technology.invert ? "invert-dark" : ""}
                                    />
                                    <div>
                                        <strong>{technology.name}</strong>
                                        <span>{technology.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="about-support">
                    <div className="about-container about-support-inner">
                        <div className="about-support-copy">
                            <p className="about-eyebrow">Your feedback matters</p>
                            <h2>Found a bug or have an idea?</h2>
                            <p>
                                Open an issue or join the discussion on GitHub. Pull requests are welcome too.
                            </p>
                        </div>
                        <div className="about-support-actions">
                            <a
                                href="https://github.com/MasterAcnolo/Freedom-Loader/issues/new/choose"
                                className="about-button primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Open an issue <i className="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                            </a>
                            <a
                                href="https://github.com/MasterAcnolo/Freedom-Loader/discussions"
                                className="about-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join the discussion <i className="fab fa-github" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
