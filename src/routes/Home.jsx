import { useEffect, useRef, useState } from 'react';

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 2);

const useCountUp = (start, end, duration, shouldStart) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime = null;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / (duration * 1000), 1);
            const easedProgress = easeOutCubic(progress);
            const value = Math.round(start + (end - start) * easedProgress);
            setCount(value);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [shouldStart, start, end, duration]);

    return count;
};

export default function Home() {
    const [startCount, setStartCount] = useState(false);
    const statsRef = useRef(null);
    const countOpen = useCountUp(0, 100, 2, startCount);
    const countData = useCountUp(100, 0, 2, startCount);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true);
                    observer.unobserve(statsRef.current);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <>
            <style>{`
                .home {
                    color: var(--text-primary);
                }

                /* ===== HERO SECTION ===== */
                .hero {
                    background: var(--bg-primary);
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
                    font-weight: 700;
                    margin-bottom: 30px;
                    font-family: "Poppins", sans-serif;
                    background: var(--text-primary);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    line-height: 1.2;
                }

                .hero p {
                    font-size: 1.3rem;
                    color: var(--text-secondary);
                    margin-bottom: 15px;
                    line-height: 1.6;
                }

                .hero .tagline {
                    font-size: 1.1rem;
                    color: var(--text-primary);
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
                    color: var(--text-primary);
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
                    background: var(--text-primary);
                    color: var(--bg-primary);
                }

                .btn-primary:hover {
                    background: var(--text-secondary);
                    transform: translateY(-1px);
                }

                .btn-secondary {
                    background: transparent;
                    color: var(--text-primary);
                    border: 2px solid var(--border-color);
                }

                .btn-secondary:hover {
                    background: var(--card-bg);
                    border-color: var(--text-primary);
                    transform: translateY(-1px);
                }

                .stats {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 30px;
                    margin-top: 80px;
                }

                .stat {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    padding: 25px;
                    transition: all 0.3s ease;
                }

                .stat:hover {
                    transform: translateY(-3px);
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin-bottom: 10px;
                }

                .stat-label {
                    font-size: 1rem;
                    color: var(--text-secondary);
                }

                /* ===== FEATURES SECTION ===== */
                .features {
                    padding: 100px 20px;
                    background: var(--bg-secondary);
                    border-top: 1px solid var(--border-color);
                }

                .section-title {
                    font-size: 3rem;
                    font-weight: 700;
                    text-align: center;
                    margin-bottom: 70px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 30px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .feature-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    padding: 30px;
                    transition: all 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                }

                .feature-icon {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                    color: var(--text-primary);
                }

                .feature-card h3 {
                    font-size: 1.2rem;
                    margin-bottom: 15px;
                    color: var(--text-primary);
                    font-weight: 700;
                }

                .feature-card p {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                /* ===== COMMUNITY SECTION ===== */
                .community {
                    padding: 100px 20px;
                    background: var(--bg-primary);
                    border-top: 1px solid var(--border-color);
                }

                .community-content {
                    max-width: 1000px;
                    margin: 0 auto;
                    text-align: center;
                }

                .community-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .community-text {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
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
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    color: var(--text-primary);
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .community-link:hover {
                    background: var(--card-hover-bg);
                    border-color: var(--text-secondary);
                    transform: translateY(-2px);
                }

                .community-link i {
                    font-size: 1.2rem;
                }

                /* ===== CTA SECTION ===== */
                .cta {
                    background: var(--bg-secondary);
                    padding: 80px 20px;
                    text-align: center;
                    color: var(--text-primary);
                    border-top: 1px solid var(--border-color);
                    margin-bottom: -60px;
                }

                .cta h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                }

                .cta p {
                    font-size: 1.1rem;
                    margin-bottom: 40px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                    color: var(--text-secondary);
                    line-height: 1.6;
                }

                .cta a {
                    background: var(--text-primary);
                    color: var(--bg-primary);
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
                    background: var(--text-secondary);
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
                        <p>Fast, simple, powerful media downloads. <br></br> Not the best in the world - just the safest.</p>
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

                        <div className="stats" ref={statsRef}>
                            <div className="stat">
                                <div className="stat-number">{countOpen}%</div>
                                <div className="stat-label">Open Source</div>
                            </div>
                            <div className="stat">
                                <div className="stat-number">{countData}%</div>
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
                            Freedom Loader thrives because of its vibrant community. Share your experience, contribute ideas, report bugs, or just stay connected with others like-minded users.
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
                    <p>No premium tier, no subscription, no hidden costs. Freedom Loader is free and will always be free. Download now and join all of the happy users.</p>
                    <a href="/download">Get Started Free</a>
                </section>
            </main>
        </>
    );
}
