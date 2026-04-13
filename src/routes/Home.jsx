export default function Home() {
    return (
        <>
            <style>{`
                .home {
                    color: var(--text-color);
                }

                /* ===== HERO SECTION ===== */
                .hero {
                    background: #121212;
                    padding: 100px 20px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    z-index: 0;
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .hero h1 {
                    font-size: 4rem;
                    font-weight: 900;
                    margin-bottom: 30px;
                    font-family: "Marko One", sans-serif;
                    background: #ffffff;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    line-height: 1.2;
                }

                .hero p {
                    font-size: 1.3rem;
                    color: #ccc;
                    margin-bottom: 15px;
                    line-height: 1.6;
                }

                .hero .tagline {
                    font-size: 1.1rem;
                    color: #fff;
                    font-weight: 600;
                    margin-bottom: 50px;
                    letter-spacing: 0.5px;
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 25px;
                }

                .tagline-item {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }

                .tagline-item i {
                    font-size: 1.2rem;
                    color: #fff;
                }

                .tagline-item span {
                    font-weight: 600;
                }

                .hero-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 60px;
                }

                .btn-primary, .btn-secondary {
                    padding: 12px 35px;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 1rem;
                    text-decoration: none;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s ease;
                    display: inline-block;
                }

                .btn-primary {
                    background: white;
                    color: black;
                }

                .btn-primary:hover {
                    background: #f0f0f0;
                    transform: translateY(-1px);
                }

                .btn-secondary {
                    background: transparent;
                    color: #fff;
                    border: 2px solid #ccc;
                }

                .btn-secondary:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: #fff;
                    transform: translateY(-1px);
                }

                .stats {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                    margin-top: 80px;
                }

                .stat {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid #2a2a2a;
                    border-radius: 10px;
                    padding: 25px;
                    transition: all 0.3s ease;
                }

                .stat:hover {
                    transform: translateY(-3px);
                    border-color: #444;
                    background: rgba(255, 255, 255, 0.08);
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 900;
                    color: #fff;
                    margin-bottom: 10px;
                }

                .stat-label {
                    font-size: 1rem;
                    color: #ccc;
                }

                /* ===== FEATURES SECTION ===== */
                .features {
                    padding: 100px 20px;
                    background: #1a1a1a;
                }

                .section-title {
                    font-size: 3rem;
                    font-weight: 900;
                    text-align: center;
                    margin-bottom: 70px;
                    font-family: "Marko One", sans-serif;
                    color: #fff;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .feature-card {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid #2a2a2a;
                    border-radius: 10px;
                    padding: 30px;
                    transition: all 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    border-color: #444;
                    background: rgba(255, 255, 255, 0.08);
                }

                .feature-icon {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                    color: #fff;
                }

                .feature-card h3 {
                    font-size: 1.2rem;
                    margin-bottom: 15px;
                    color: #fff;
                    font-weight: 700;
                }

                .feature-card p {
                    font-size: 0.95rem;
                    color: #ccc;
                    line-height: 1.6;
                }

                /* ===== COMMUNITY SECTION ===== */
                .community {
                    padding: 100px 20px;
                    background: #121212;
                    border-top: 1px solid #2a2a2a;
                }

                .community-content {
                    max-width: 1000px;
                    margin: 0 auto;
                    text-align: center;
                }

                .community-title {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin-bottom: 30px;
                    font-family: "Marko One", sans-serif;
                }

                .community-text {
                    font-size: 1.1rem;
                    color: #ccc;
                    margin-bottom: 40px;
                    line-height: 1.8;
                }

                .community-links {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .community-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 25px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid #2a2a2a;
                    border-radius: 8px;
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .community-link:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: #444;
                    transform: translateY(-2px);
                }

                .community-link i {
                    font-size: 1.2rem;
                }

                /* ===== CTA SECTION ===== */
                .cta {
                    background: #1a1a1a;
                    padding: 80px 20px;
                    text-align: center;
                    color: #fff;
                    border-top: 1px solid #2a2a2a;
                    margin-bottom: -60px;
                }

                .cta h2 {
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin-bottom: 20px;
                    font-family: "Marko One", sans-serif;
                }

                .cta p {
                    font-size: 1.1rem;
                    margin-bottom: 40px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    color: #ccc;
                    line-height: 1.6;
                }

                .cta a {
                    background: white;
                    color: black;
                    padding: 12px 40px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1rem;
                    display: inline-block;
                    transition: all 0.2s ease;
                    border: none;
                    cursor: pointer;
                }

                .cta a:hover {
                    background: #f0f0f0;
                    transform: translateY(-1px);
                }

                /* ===== RESPONSIVE ===== */
                @media (max-width: 1024px) {
                    .hero h1 {
                        font-size: 3rem;
                    }

                    .stats {
                        grid-template-columns: 1fr;
                    }

                    .section-title {
                        font-size: 2.2rem;
                    }
                }

                @media (max-width: 768px) {
                    .hero {
                        padding: 60px 20px;
                    }

                    .hero h1 {
                        font-size: 2.5rem;
                    }

                    .hero p {
                        font-size: 1.1rem;
                    }

                    .hero-buttons {
                        flex-direction: column;
                        align-items: center;
                    }

                    .btn-primary, .btn-secondary {
                        width: 100%;
                        max-width: 300px;
                    }

                    .features {
                        padding: 60px 20px;
                    }

                    .community {
                        padding: 60px 20px;
                    }

                    .gallery {
                        padding: 60px 20px;
                    }

                    .cta {
                        padding: 60px 20px;
                    }

                    .cta h2 {
                        font-size: 2rem;
                    }

                    .community-links {
                        flex-direction: column;
                    }

                    .community-link {
                        width: 100%;
                    }

                    .gallery-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 500px) {
                    .hero h1 {
                        font-size: 2rem;
                    }

                    .hero p {
                        font-size: 1rem;
                    }

                    .stat-number {
                        font-size: 2rem;
                    }

                    .section-title {
                        font-size: 1.8rem;
                    }

                    .feature-card {
                        padding: 20px;
                    }

                    .feature-icon {
                        font-size: 2.5rem;
                    }
                }
            `}</style>

            <main className="home">
                {/* HERO SECTION */}
                <section className="hero">
                    <div className="hero-content">
                        <h1>Put Freedom in Your Downloads</h1>
                        <p>The fastest, simplest, and most powerful media downloader on the planet</p>
                        <div className="tagline">
                            <div className="tagline-item">
                                <i className="fas fa-bolt"></i>
                                <span>Free</span>
                            </div>
                            <div className="tagline-item">
                                <i className="fas fa-lock"></i>
                                <span>Privacy First</span>
                            </div>
                            <div className="tagline-item">
                                <i className="fas fa-bullseye"></i>
                                <span> Simple</span>
                            </div>
                        </div>

                        <div className="hero-buttons">
                            <a href="/download" className="btn-primary">Download Now</a>
                            <a href="#features" className="btn-secondary">Learn More</a>
                        </div>

                        <div className="stats">
                            <div className="stat">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Open Source</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">0%</div>
                                <div className="stat-label">Data Collection</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURES SECTION */}
                <section className="features" id="features">
                    <h2 className="section-title">Why You'll Love It</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <i className="fas fa-sliders-h feature-icon"></i>
                            <h3>Configurable</h3>
                            <p>Customize every aspect to your needs. Advanced settings for power users, simple defaults for everyone else. Your choice.</p>
                        </div>

                        <div className="feature-card">
                            <i className="fas fa-lock feature-icon"></i>
                            <h3>100% Private</h3>
                            <p>No tracking, no analytics, no data collection. Everything stays on YOUR machine.</p>
                        </div>

                        <div className="feature-card">
                            <i className="fas fa-music feature-icon"></i>
                            <h3>Any Format</h3>
                            <p>Videos, audio, playlists, streams. If it's online, Freedom Loader can grab it.</p>
                        </div>

                        <div className="feature-card">
                            <i className="fas fa-heart feature-icon"></i>
                            <h3>User First</h3>
                            <p>Built with exceptional UX in mind. Intuitive design, smooth workflows, and a pleasure to use every single day.</p>
                        </div>

                        <div className="feature-card">
                            <i className="fas fa-feather feature-icon"></i>
                            <h3>Zero Bloat</h3>
                            <p>Lightweight, fast, efficient. No ads, no spyware, just pure functionality.</p>
                        </div>

                        <div className="feature-card">
                            <i className="fas fa-download feature-icon"></i>
                            <h3>Super Simple</h3>
                            <p>Click, download, done. No complex settings, no confusing menus. Just simplicity.</p>
                        </div>
                    </div>
                </section>

                {/* COMMUNITY SECTION */}
                <section className="community">
                    <div className="community-content">
                        <h2 className="community-title">Join Our Community</h2>
                        <p className="community-text">
                            Freedom Loader thrives because of its vibrant community. Share your experience, contribute ideas, report bugs, or just stay connected with thousands of like-minded users.
                        </p>
                        <div className="community-links">
                            <a href="https://github.com/MasterAcnolo/Freedom-Loader/discussions" target="_blank" rel="noopener noreferrer" className="community-link">
                                <i className="fas fa-comments"></i>
                                GitHub Discussions
                            </a>
                            <a href="https://github.com/MasterAcnolo/Freedom-Loader" target="_blank" rel="noopener noreferrer" className="community-link">
                                <i className="fab fa-github"></i>
                                Star on GitHub
                            </a>
                            <a href="/contributing" className="community-link">
                                <i className="fas fa-code-branch"></i>
                                Contribute
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="cta">
                    <h2>Completely Free. Forever Free.</h2>
                    <p>No premium tier, no subscription, no hidden costs. Freedom Loader is free and will always be free. Download now and join thousands of happy users.</p>
                    <a href="/download">Get Started Free</a>
                </section>
            </main>
        </>
    );
}
