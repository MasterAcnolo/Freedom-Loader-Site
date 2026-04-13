export default function About() {
    const technologies = [
        { name: "Electron", img: "/assets/languages/electron.png", desc: "Desktop app framework using Chromium and Node.js." },
        { name: "Node.js", img: "/assets/languages/nodejs.png", desc: "Powering all background processes and filesystem tasks." },
        { name: "Express", img: "/assets/languages/express.svg", desc: "Powering the internal API", invert: true },
        { name: "yt-dlp", img: "/assets/languages/ytDlp.png", desc: "Handles all video and audio extraction operations." },
        { name: "Deno", img: "/assets/languages/deno.png", desc: "Powering yt-dlp verification.", invert: true },
        { name: "Winston", img: "/assets/languages/winston.png", desc: "Powering the Logger System" },
        { name: "JavaScript", img: "/assets/languages/js.png", desc: "Core logic and user interaction within the app." },
    ];

    const features = [
        { title: "Download Media", desc: "Video & audio with metadata support" },
        { title: "Audio-Only Mode", desc: "Extract audio tracks separately" },
        { title: "Playlist Support", desc: "Download entire playlists easily" },
        { title: "Comprehensive Logs", desc: "Detailed logging system for diagnostics" },
        { title: "Multiple Themes", desc: "Choose from various UI themes or create yours" },
        { title: "Custom Output", desc: "Flexible download folder settings" },
        { title: "Discord Integration", desc: "Rich Presence for Discord" },
        { title: "Auto Updates", desc: "Automatic app version management" },
        { title: "Safe Boot", desc: "Reliable startup system" },
        { title: "Cookie Detection", desc: "Auto-detect yt-dlp cookies" },
        { title: "Configuration", desc: "Extensive settings panel" },
        { title: "Clean Startup", desc: "Optimized initial launch" },
        { title: "Custom Themes", desc: "Create & personalize your themes" },
        { title: "User Workshop", desc: "Community theme & extension hub" },
        { title: "More Coming...", desc: "Continuous development & improvements" },
    ];

    return (
        <>
            <style>{`
                main {
                    width: 100%;
                }

                .about {
                    padding: 80px 20%;
                    color: var(--text-color);
                    margin-top: 30px;
                }

                .about-container, .history-container, .support-container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .about h1 {
                    font-size: 3rem;
                    margin-bottom: 30px;
                    font-family: "Marko One", sans-serif;
                    text-align: center;
                }

                .about p {
                    font-size: 1.15rem;
                    line-height: 1.8;
                    opacity: 0.9;
                    margin-bottom: 20px;
                    text-align: justify;
                }

                .about strong {
                    color: #ffffff;
                    font-weight: 600;
                }

                .history {
                    padding: 60px 20%;
                }

                .history h2 {
                    font-size: 2.5rem;
                    margin-bottom: 30px;
                    text-align: center;
                    font-family: "Marko One", sans-serif;
                }

                .history p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    opacity: 0.9;
                    margin-bottom: 20px;
                    text-align: justify;
                }

                .features {
                    padding: 60px 20%;
                }

                .features h2 {
                    font-size: 2.5rem;
                    margin-bottom: 40px;
                    text-align: center;
                    font-family: "Marko One", sans-serif;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 20px;
                    margin-bottom: 60px;
                }

                .feature-card {
                    padding: 25px;
                    background: #1a1a1a;
                    border: 1px solid #2c2c2c;
                    border-radius: 10px;
                    text-align: left;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .feature-card:hover {
                    background: #202020;
                    border-color: #919191;
                    transform: translateY(-4px);
                }

                .feature-card h3 {
                    font-size: 1.1rem;
                    margin: 0;
                    color: #919191;
                    font-weight: 600;
                }

                .feature-card p {
                    font-size: 0.95rem;
                    margin: 0;
                    opacity: 0.8;
                }

                .technos {
                    padding: 60px 20%;
                }

                .technos h2 {
                    font-size: 2.5rem;
                    margin-bottom: 40px;
                    text-align: center;
                    font-family: "Marko One", sans-serif;
                }

                .tech-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 30px;
                }

                .tech-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;
                    padding: 25px;
                    background: #1a1a1a;
                    border: 1px solid #2c2c2c;
                    border-radius: 12px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .tech-card:hover {
                    background: #202020;
                    border-color: #3a3a3a;
                    transform: translateY(-5px);
                }

                .tech-card img {
                    height: 60px;
                    max-width: 100%;
                    object-fit: contain;
                }

                .tech-card h3 {
                    font-size: 1.3rem;
                    margin: 0;
                }

                .tech-card p {
                    font-size: 0.95rem;
                    opacity: 0.8;
                    margin: 0;
                }

                .support {
                    padding: 60px 20%;
                }

                .support h2 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    text-align: center;
                    font-family: "Marko One", sans-serif;
                }

                .support > p {
                    font-size: 1.1rem;
                    text-align: center;
                    margin-bottom: 40px;
                    opacity: 0.9;
                }

                .support-actions {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 30px;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    border: 2px solid transparent;
                    cursor: pointer;
                }

                .btn.primary {
                    background-color: #919191;
                    color: var(--text-color);
                }

                .btn.primary:hover {
                    background-color: #7a7a7a;
                    transform: scale(1.05);
                }

                .btn.secondary {
                    border: 2px solid #919191;
                    color: var(--text-color);
                    background-color: transparent;
                }

                .btn.secondary:hover {
                    background-color: #91919133;
                    transform: scale(1.05);
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .about, .history, .features, .technos, .support {
                        padding: 50px 5%;
                    }

                    .about h1 {
                        font-size: 2.3rem;
                    }

                    .history h2, .features h2, .technos h2, .support h2 {
                        font-size: 2rem;
                    }

                    .features-grid {
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    }

                    .tech-grid {
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        gap: 20px;
                    }

                    .support-actions {
                        flex-direction: column;
                    }

                    .btn {
                        justify-content: center;
                    }
                }

                @media (max-width: 500px) {
                    .about, .history, .features, .technos, .support {
                        padding: 30px 3%;
                    }

                    .about h1 {
                        font-size: 1.8rem;
                    }

                    .history h2, .features h2, .technos h2, .support h2 {
                        font-size: 1.5rem;
                        margin-bottom: 25px;
                    }

                    .about p, .history p {
                        font-size: 1rem;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }

                    .tech-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <main>
                {/* About Section */}
                <section className="about">
                    <div className="about-container">
                        <h1>About Freedom Loader</h1>
                        <p>
                            Freedom Loader is a lightweight desktop app built with <strong>Electron</strong> that uses
                            <strong> yt-dlp</strong> to download videos and audio from the web easily and privately.
                            It's made for people who just want control over their media - without ads, limits, or paywalls.
                        </p>
                        <p>
                            I started this project out of frustration with the state of most downloaders.
                            Too many were filled with ads, shady code, or unnecessary restrictions.
                            Freedom Loader exists to put <strong>freedom back into your downloads</strong>.
                        </p>
                    </div>
                </section>

                {/* History Section */}
                <section className="history">
                    <div className="history-container">
                        <h2>The Story Behind It</h2>
                        <p>
                            Freedom Loader was born from a simple need: downloading media without hassle.
                            I wanted a tool that respected privacy, looked clean, and worked - period.
                            No trackers, no "Pro" version, no weird popups.
                            Just a reliable, open-source downloader for everyone.
                        </p>
                        <p>
                            Over time, it became more than a tool - it's a statement against overcomplication.
                            Built during late nights, Freedom Loader is the kind of app I wish existed
                            when I was younger: fast, transparent, and free. Full story available <a href="https://masteracnolo.github.io/Blog/pourquoi-freedom-loader/" target="_blank" rel="noopener noreferrer" style={{ color: "#919191", textDecoration: "none" }}>Here</a>
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features">
                    <h2>Main Features</h2>
                    <div className="features-grid">
                        {features.map((feature, idx) => (
                            <div key={idx} className="feature-card">
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Technologies Section */}
                <section className="technos">
                    <h2>Technologies Used</h2>
                    <div className="tech-grid">
                        {technologies.map((tech, idx) => (
                            <div key={idx} className="tech-card">
                                <img 
                                    src={tech.img} 
                                    alt={tech.name}
                                    style={tech.invert ? { filter: "invert()" } : {}}
                                />
                                <h3>{tech.name}</h3>
                                <p>{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Support Section */}
                <section className="support">
                    <h2>Support the Project</h2>
                    <p>If you want to help Freedom Loader grow, you can contribute or support it directly.</p>
                    <div className="support-actions">
                        <a 
                            href="https://github.com/MasterAcnolo/Freedom-Loader" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn secondary"
                        >
                            Contribute on GitHub
                        </a>
                    </div>
                </section>
            </main>
        </>
    );
}
