import { useEffect } from 'react';

export default function Contributing() {
    useEffect(() => {
        document.title = "Contributing - Freedom Loader";
    }, []);

    return (
        <>
            <style>{`
                .contributing {
                    background: var(--bg-secondary);
                    color: var(--text-primary);
                    padding: 80px 20px;
                    min-height: 100vh;
                }

                .container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                h1 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin-bottom: 15px;
                    text-align: center;
                }

                .subtitle {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    text-align: center;
                    margin-bottom: 60px;
                }

                .section {
                    margin-bottom: 50px;
                }

                .section h2 {
                    font-size: 1.6rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    color: var(--text-primary);
                }

                .section h3 {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-top: 25px;
                    margin-bottom: 12px;
                    color: var(--text-primary);
                }

                .section h3:first-of-type {
                    margin-top: 0;
                }

                .section p {
                    color: var(--text-secondary);
                    line-height: 1.7;
                    margin-bottom: 12px;
                }

                .section ul {
                    list-style: none;
                    padding: 0;
                    margin: 15px 0;
                }

                .section li {
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin-bottom: 8px;
                    padding-left: 20px;
                    position: relative;
                }

                .section li:before {
                    content: "•";
                    position: absolute;
                    left: 0;
                    color: var(--accent-primary);
                    font-weight: 700;
                }

                .code-block {
                    background: var(--bg-primary);
                    border: 1px solid var(--border-color);
                    border-radius: 6px;
                    padding: 12px;
                    font-family: "Monaco", "Courier New", monospace;
                    font-size: 0.85rem;
                    overflow-x: auto;
                    margin: 12px 0;
                    color: var(--accent-primary);
                }

                .code-inline {
                    background: var(--bg-primary);
                    padding: 2px 5px;
                    border-radius: 3px;
                    font-family: "Monaco", "Courier New", monospace;
                    font-size: 0.9em;
                    color: var(--accent-primary);
                }

                .cta {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    padding: 35px;
                    text-align: center;
                    margin-top: 60px;
                }

                .cta h3 {
                    margin: 0 0 10px 0;
                }

                .cta p {
                    margin: 0 0 20px 0;
                }

                .cta-links {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .cta-link {
                    padding: 10px 24px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    display: inline-block;
                }

                .cta-primary {
                    background: var(--accent-primary);
                    color: white;
                }

                .cta-primary:hover {
                    background: var(--accent-hover);
                    transform: translateY(-1px);
                }

                .cta-secondary {
                    background: var(--card-bg);
                    color: var(--text-primary);
                    border: 1px solid var(--border-color);
                }

                .cta-secondary:hover {
                    background: var(--bg-primary);
                    border-color: var(--text-secondary);
                }

                @media (max-width: 768px) {
                    .contributing {
                        padding: 60px 20px;
                    }

                    h1 {
                        font-size: 2rem;
                    }

                    .section h2 {
                        font-size: 1.3rem;
                    }

                    .cta-links {
                        flex-direction: column;
                    }

                    .cta-link {
                        width: 100%;
                    }
                }
            `}</style>

            <main className="contributing">
                <div className="container">
                    <h1>Contributing to Freedom Loader</h1>
                    <p className="subtitle">Help make Freedom Loader better. We welcome all contributions.</p>

                    <div className="section">
                        <h2>How to Contribute</h2>
                        <ul>
                            <li>Report bugs with clear steps to reproduce</li>
                            <li>Suggest features or improvements</li>
                            <li>Write code fixes and new features</li>
                            <li>Improve documentation</li>
                            <li>Help others in discussions</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>Getting Started</h2>
                        
                        <h3>Setup</h3>
                        <div className="code-block">git clone https://github.com/MasterAcnolo/Freedom-Loader.git<br/>cd Freedom-Loader<br/>npm install<br/>npm run dev</div>

                        <h3>Quick Tips</h3>
                        <ul>
                            <li>Fork the repository on GitHub</li>
                            <li>Create a feature branch: <span className="code-inline">git checkout -b feature/your-feature</span></li>
                            <li>Make your changes and test</li>
                            <li>Commit with clear messages</li>
                            <li>Push and open a Pull Request</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>Reporting Issues</h2>
                        <p>When reporting bugs, include:</p>
                        <ul>
                            <li>Clear description of the problem</li>
                            <li>Steps to reproduce</li>
                            <li>Expected vs actual behavior</li>
                            <li>Browser/OS information</li>
                            <li>Screenshots if relevant</li>
                        </ul>
                    </div>

                    <div className="section">
                        <h2>Code of Conduct</h2>
                        <p>Be respectful, constructive, and inclusive. Discrimination or harassment will not be tolerated.</p>
                    </div>

                    <div className="cta">
                        <h3>Ready to Contribute?</h3>
                        <p>Check out the issues or start with something small.</p>
                        <div className="cta-links">
                            <a href="https://github.com/MasterAcnolo/Freedom-Loader/issues" target="_blank" rel="noopener noreferrer" className="cta-link cta-primary">
                                View Issues
                            </a>
                            <a href="https://github.com/MasterAcnolo/Freedom-Loader" target="_blank" rel="noopener noreferrer" className="cta-link cta-secondary">
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
