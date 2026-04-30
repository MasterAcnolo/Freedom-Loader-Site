import { useEffect } from 'react';

export default function Terms() {
    useEffect(() => {
        document.title = "Terms - Freedom Loader";
    }, []);

    return (
        <>
            <style>{`
                .terms {
                    color: var(--text-primary);
                    padding: 80px 20%;
                    margin-top: 30px;
                    background: var(--bg-primary);
                }

                .terms .container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .terms h1 {
                    font-size: 2.5rem;
                    margin-bottom: 40px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .terms h2 {
                    font-size: 1.5rem;
                    margin-top: 40px;
                    margin-bottom: 15px;
                    font-weight: 600;
                    color: var(--text-primary);
                }

                .terms p {
                    font-size: 1rem;
                    line-height: 1.8;
                    opacity: 0.85;
                    margin-bottom: 15px;
                    color: var(--text-secondary);
                }

                .terms ul {
                    margin-left: 20px;
                    margin-bottom: 15px;
                }

                .terms li {
                    font-size: 1rem;
                    line-height: 1.8;
                    opacity: 0.85;
                    margin-bottom: 10px;
                    color: var(--text-secondary);
                }

                .terms strong {
                    color: var(--text-primary);
                }

                .last-updated {
                    font-size: 0.9rem;
                    opacity: 0.6;
                    margin-bottom: 30px;
                    font-style: italic;
                    color: var(--text-secondary);
                }

                @media (max-width: 900px) {
                    .terms {
                        padding: 60px 5%;
                    }

                    .terms h1 {
                        font-size: 2.2rem;
                    }

                    .terms h2 {
                        font-size: 1.3rem;
                    }
                }

                @media (max-width: 500px) {
                    .terms h1 {
                        font-size: 2rem;
                    }

                    .terms h2 {
                        font-size: 1.2rem;
                    }

                    .terms p,
                    .terms li {
                        font-size: 0.95rem;
                    }
                }

                .terms a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s ease;
                }

                .terms a:hover {
                    border-bottom: 2px solid var(--accent-primary);
                    color: var(--accent-secondary);
                }
            `}</style>

            <main>
                <section className="terms">
                    <div className="container">
                        <h1>Terms of Use</h1>
                        <p className="last-updated">Last updated: November 13, 2025</p>

                        <p>
                            These terms govern your use of the Freedom Loader desktop application.
                            By installing or using the app, you agree to these terms.
                        </p>

                        <h2>1. Purpose of the Application</h2>
                        <p>
                            Freedom Loader is a <strong>personal, offline media management tool</strong>.
                            It provides a graphical interface around{' '}
                            <a href="https://github.com/yt-dlp/yt-dlp" target="_blank">yt-dlp</a>,
                            allowing users to download publicly accessible media for
                            <strong> strictly personal and offline use</strong>.
                        </p>
                        <p>
                            It is not a streaming platform, not a distribution service,
                            and generates no revenue.
                        </p>

                        <h2>2. License & Open Source</h2>
                        <p>
                            Freedom Loader is licensed under the{' '}
                            <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">
                                GNU GPL v3
                            </a>.
                        </p>
                        <p>You are allowed to:</p>
                        <ul>
                            <li>Use the application for any purpose</li>
                            <li>Study and modify the code</li>
                            <li>Redistribute original or modified versions</li>
                        </ul>
                        <p>Under these conditions:</p>
                        <ul>
                            <li><strong>Credit the original author (MasterAcnolo / Axel NICOLAS)</strong></li>
                            <li>Keep the GPLv3 license</li>
                            <li>Provide source code for modifications</li>
                        </ul>

                        <h2>3. Acceptable Use</h2>
                        <p>
                            Freedom Loader is intended for <strong>personal, non-commercial use</strong>.
                        </p>

                        <p>Allowed:</p>
                        <ul>
                            <li>Downloading publicly accessible content for personal use</li>
                            <li>Archiving content you legitimately access</li>
                        </ul>

                        <p>Forbidden:</p>
                        <ul>
                            <li><strong>Redistributing downloaded content</strong></li>
                            <li><strong>Commercial use without rights</strong></li>
                            <li><strong>Bypassing DRM or paywalls</strong></li>
                            <li><strong>Downloading pirated content</strong></li>
                        </ul>

                        <p>
                            You are solely responsible for how you use the application.
                        </p>

                        <h2>4. Legal Framework</h2>
                        <p>
                            Freedom Loader does not grant rights over content.
                            Downloaded media remains subject to copyright laws.
                        </p>
                        <p>
                            Under French law (Article L122-5), private copies from a
                            lawful source for personal use are permitted.
                        </p>
                        <p>
                            Some platforms may forbid downloading in their Terms of Service.
                            This is contractual (account risk), not criminal — but it's on you.
                        </p>

                        <h2>5. Privacy</h2>
                        <p>
                            <strong>No personal data is collected.</strong>
                        </p>
                        <ul>
                            <li>No tracking, no analytics</li>
                            <li>No account required</li>
                            <li>All data stays local</li>
                        </ul>
                        <p>
                            Network requests are only made to fetch media via yt-dlp.
                        </p>

                        <h2>6. Disclaimer</h2>
                        <p>
                            Freedom Loader is provided <strong>as-is</strong>, without warranty.
                        </p>
                        <ul>
                            <li>No liability for data loss or system damage</li>
                            <li>No liability for legal misuse</li>
                            <li>No guarantee of functionality</li>
                        </ul>

                        <h2>7. Third-Party Tools</h2>
                        <p>
                            Freedom Loader depends on:
                        </p>
                        <ul>
                            <li><strong>yt-dlp</strong> (media extraction)</li>
                            <li><strong>FFmpeg</strong> (processing)</li>
                            <li><strong>Electron</strong> (runtime)</li>
                            <li><strong>Deno</strong> (scripting)</li>
                        </ul>
                        <p>
                            Not affiliated with YouTube, Google, Twitch, or others.
                        </p>

                        <h2>8. Updates</h2>
                        <p>
                            The app may change at any time. Features can break depending
                            on external platforms.
                        </p>
                        <p>
                            Continued use means you accept updated terms.
                        </p>

                        <h2>9. Contact</h2>
                        <p>
                            Questions or legal concerns:
                        </p>
                        <ul>
                            <li>
                                <a href="https://github.com/MasterAcnolo/Freedom-Loader/discussions" target="_blank">
                                    GitHub Discussions
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/axelnicolas25" target="_blank">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
}
