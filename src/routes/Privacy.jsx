export default function Privacy() {
    return (
        <>
            <style>{`
                .privacy {
                    color: var(--text-primary);
                    padding: 80px 20%;
                    margin-top: 30px;
                    background: var(--bg-primary);
                }

                .privacy .container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .privacy h1 {
                    font-size: 2.5rem;
                    margin-bottom: 40px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .privacy h2 {
                    font-size: 1.5rem;
                    margin-top: 40px;
                    margin-bottom: 15px;
                    font-weight: 600;
                    color: var(--text-primary);
                }

                .privacy p {
                    font-size: 1rem;
                    line-height: 1.8;
                    opacity: 0.85;
                    margin-bottom: 15px;
                    color: var(--text-secondary);
                }

                .privacy ul {
                    margin-left: 20px;
                    margin-bottom: 15px;
                }

                .privacy li {
                    font-size: 1rem;
                    line-height: 1.8;
                    opacity: 0.85;
                    margin-bottom: 10px;
                    color: var(--text-secondary);
                }

                .privacy strong {
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
                    .privacy {
                        padding: 60px 5%;
                    }

                    .privacy h1 {
                        font-size: 2.2rem;
                    }

                    .privacy h2 {
                        font-size: 1.3rem;
                    }
                }

                @media (max-width: 500px) {
                    .privacy h1 {
                        font-size: 2rem;
                    }

                    .privacy h2 {
                        font-size: 1.2rem;
                    }

                    .privacy p,
                    .privacy li {
                        font-size: 0.95rem;
                    }
                }

                .privacy a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s ease;
                }

                .privacy a:hover {
                    border-bottom: 2px solid var(--accent-primary);
                    color: var(--accent-secondary);
                }
            `}</style>

            <main>
                <section className="privacy">
                    <div className="container">
                        <h1>Privacy Policy</h1>
                        <p className="last-updated"><strong>Last updated:</strong> November 13, 2025</p>

                        <p>
                            Freedom Loader respects your privacy. This Privacy Policy explains how we handle any data you might use with the app and how we protect your privacy.
                        </p>

                        <h2>1. Information We Collect</h2>
                        <p>
                            Freedom Loader is a desktop application. We do <strong>not</strong> collect personal information such as names, emails, or browsing history. The only data handled by the app is:
                        </p>
                        <ul>
                            <li><strong>Usage Data:</strong> Logs or error reports generated locally on your machine to help the app function correctly.</li>
                            <li><strong>Optional metadata:</strong> Information from downloaded media (titles, authors, duration) stored locally.</li>
                        </ul>
                        <p>
                            No data is sent to any server unless you explicitly choose to share it (for example, using Discord Rich Presence).
                        </p>

                        <h2>2. Cookies & Tracking</h2>
                        <p>
                            Freedom Loader is a desktop app and does not use cookies or any web tracking technologies.
                        </p>

                        <h2>3. Use of Your Data</h2>
                        <p>
                            Any data processed by the app is used solely to ensure proper functionality, improve performance, and provide features like download logging and Rich Presence. No personal data is shared with third parties.
                        </p>

                        <h2>4. Retention</h2>
                        <p>
                            All usage data and metadata are stored locally on your device and remain there until you delete them. Freedom Loader does not store data remotely.
                        </p>

                        <h2>5. Security</h2>
                        <p>
                            We take reasonable measures to protect your data on your device, but no system is 100% secure. Please use your own discretion when handling downloaded media.
                        </p>

                        <h2>6. Children's Privacy</h2>
                        <p>
                            Freedom Loader is not intended for children under 13, and we do not knowingly collect any personal information from children.
                        </p>

                        <h2>7. Links to Other Websites</h2>
                        <p>
                            Any links to external websites in the app are for convenience. We are not responsible for the privacy practices of other sites.
                        </p>

                        <h2>8. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated "Last updated" date.
                        </p>

                        <h2>Contact</h2>
                        <p>
                            For questions regarding this Privacy Policy, visit our <a href="/contact">contact page</a>.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
