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
                        <h1>Terms & Conditions</h1>
                        <p className="last-updated">Last updated: November 13, 2025</p>
                        <p>
                            These terms govern your use of the Freedom Loader desktop application. By using the app, you agree to these terms. If you don't agree, don't use the app—simple as that.
                        </p>

                        <h2>1. Using Freedom Loader</h2>
                        <p>
                            Freedom Loader is meant for personal use to download and manage media files. You are responsible for your own actions when using the app. Don't misuse it or distribute illegal content.
                        </p>

                        <h2>2. No Personal Data Collection</h2>
                        <p>
                            We do <strong>not</strong> collect your personal data. All logs, errors, and metadata are stored locally on your device. Any sharing is done manually and explicitly by you (for example via Discord Rich Presence).
                        </p>

                        <h2>3. Intellectual Property & Open Source</h2>
                        <p>
                            Freedom Loader is Open Source and licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU General Public License v3</a>. You are free to copy, modify, and redistribute the app under these terms, <strong>but you must always credit the original author (MasterAcnolo).</strong>
                        </p>
                        <p>
                            All assets, code, and design elements are part of the project. Use them responsibly and respect the license. While Freedom Loader is designed for media management, <strong>we do not condone nor directly provide access to any copyrighted platform content</strong> (like YouTube). Users are solely responsible for how they use the app—so play fair, and keep it legal!
                        </p>

                        <h2>4. Updates and Features</h2>
                        <p>
                            We may release updates or remove features at any time. We aim to improve your experience, but we don't guarantee anything will always work perfectly. Use at your own risk.
                        </p>

                        <h2>5. Liability</h2>
                        <p>
                            Freedom Loader is provided as-is. We are not liable for any damages, data loss, or issues caused by the app. Backup your files and use common sense.
                        </p>

                        <h2>6. Third-Party Links</h2>
                        <p>
                            The app may include links to other websites or services. We are not responsible for their content, privacy policies, or practices.
                        </p>

                        <h2>7. Changes to These Terms</h2>
                        <p>
                            We may update these terms occasionally. Changes will be posted on this page with a new "Last updated" date. Keep an eye out if you want to stay in the loop.
                        </p>

                        <h2>Contact</h2>
                        <p>
                            For questions about these terms, reach out via <a href="https://github.com/MasterAcnolo/Freedom-Loader/discussions" target="_blank">GitHub Discussions</a> or <a href="https://www.linkedin.com/in/axelnicolas25" target="_blank">LinkedIn</a>.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
