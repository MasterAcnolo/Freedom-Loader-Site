import { useState, useEffect } from "react";

export default function Wiki() {
    useEffect(() => {
        document.title = "Wiki - Freedom Loader";
    }, []);

    const [activeTab, setActiveTab] = useState("Installation");

    const wikiSections = {
        "Installation": {
            icon: "fa-download",
            content: (
                <>
                    <h2>Installation</h2>
                    <h3>System Requirements</h3>
                    <ul>
                        <li>Windows 10 or above</li>
                        <li>Firefox Browser with YouTube login</li>
                        <li>Basic computer performance</li>
                    </ul>
                    <h3>Installation Steps</h3>
                    <ol>
                        <li>Download the latest version from the Download page</li>
                        <li>Run the installer and follow the setup wizard</li>
                        <li>Launch Freedom Loader from the Start menu or desktop shortcut</li>
                        <li>Open Firefox and log in to YouTube</li>
                        <li>Play a video on YouTube to verify the session</li>
                        <li>Launch Freedom Loader and start downloading!</li>
                    </ol>
                    <h3>Troubleshooting</h3>
                    <ul>
                        <li><strong>Antivirus blocking:</strong> Temporarily disable your antivirus during installation</li>
                        <li><strong>Update fails:</strong> Try restarting the app or running as Administrator</li>
                        <li><strong>Cookies not found:</strong> Make sure Firefox is properly installed and you're logged into YouTube</li>
                    </ul>
                </>
            )
        },
        "Usage": {
            icon: "fa-play",
            content: (
                <>
                    <h2>Usage Guide</h2>
                    <h3>First Launch</h3>
                    <p>At your first launch, your antivirus might flag the app. This is normal—temporarily disable it to proceed. You may also see a warning about accessing Firefox cookies. This is in line with yt-dlp security.</p>
                    <h3>Requirements</h3>
                    <ul>
                        <li>Be logged into YouTube on Firefox</li>
                        <li>Have a valid Google account</li>
                        <li>Have played at least one video on YouTube to establish a session</li>
                    </ul>
                    <h3>Basic Workflow</h3>
                    <ol>
                        <li>Paste a YouTube URL into the app</li>
                        <li>Select quality (Best, Medium, Worst) or specific resolution</li>
                        <li>Choose format (Video MP4 or Audio MP3)</li>
                        <li>Select output folder</li>
                        <li>Click Download and wait for completion</li>
                    </ol>
                    <h3>Advanced Options available in the settings panel</h3>
                </>
            )
        },
        "Firefox": {
            icon: "fa-brands fa-firefox-browser",
            content: (
                <>
                    <h2>Setting Up Firefox</h2>
                    <p>Freedom Loader requires Firefox to access YouTube cookies for bypassing age restrictions and authentication.</p>
                    <h3>Installation Steps</h3>
                    <ol>
                        <li>Download Firefox from <a href="https://www.mozilla.org/firefox" target="_blank" rel="noopener noreferrer">mozilla.org</a></li>
                        <li>Install Firefox on your computer</li>
                        <li>Open Firefox and log in to your YouTube account</li>
                        <li>Play a video on YouTube to establish the session</li>
                        <li>Close Firefox completely</li>
                        <li>Launch Freedom Loader</li>
                    </ol>
                    <h3>Important Notes</h3>
                    <ul>
                        <li>Firefox must be closed when downloading with Freedom Loader</li>
                        <li>Your YouTube session should be active for cookies to work</li>
                        <li>Age-restricted videos require valid YouTube authentication</li>
                        <li>Chrome support is planned for future versions</li>
                    </ul>
                    <h3>Troubleshooting</h3>
                    <p>If cookies aren't found, try logging out and back into YouTube, then repeat the steps above.</p>
                </>
            )
        },
        "Contributing": {
            icon: "fa-code-branch",
            content: (
                <>
                    <h2>Contributing to Freedom Loader</h2>
                    <p>Thanks for your interest in contributing! All contributions are welcome and appreciated.</p>
                    <h3>Ways to Contribute</h3>
                    <ul>
                        <li><strong>Report bugs:</strong> Open an issue with clear description</li>
                        <li><strong>Feature requests:</strong> Suggest improvements and new features</li>
                        <li><strong>Code contributions:</strong> Submit pull requests with improvements</li>
                        <li><strong>Documentation:</strong> Help improve documentation and guides</li>
                    </ul>
                    <h3>Pull Request Process</h3>
                    <ol>
                        <li>Fork the repository on GitHub</li>
                        <li>Create a feature branch: <code>git checkout -b feature/my-feature</code></li>
                        <li>Make your changes</li>
                        <li>Add tests or verification steps</li>
                        <li>Submit a PR to the main branch</li>
                    </ol>
                    <h3>Guidelines</h3>
                    <ul>
                        <li>Keep PR titles clear and descriptive</li>
                        <li>Document what you changed and why</li>
                        <li>Follow existing code style</li>
                        <li>Be respectful and constructive</li>
                    </ul>
                    <p>Thanks for making Freedom Loader better! 💪</p>
                </>
            )
        },
        "Common Issues": {
            icon: "fa-circle-exclamation",
            content: (
                <>
                    <h2>Common Issues & Solutions</h2>
                    <h3>1. Not logged into YouTube</h3>
                    <p><strong>Problem:</strong> Cookies not retrieved or access denied<br/>
                    <strong>Solution:</strong> Log into YouTube on Firefox, play a video, then close and restart Freedom Loader</p>
                    
                    <h3>2. Antivirus Blocking</h3>
                    <p><strong>Problem:</strong> App won't launch or triggers warnings<br/>
                    <strong>Solution:</strong> Temporarily disable antivirus or add Freedom Loader to whitelist</p>
                    
                    <h3>3. Outdated Cookies</h3>
                    <p><strong>Problem:</strong> Downloads fail after working before<br/>
                    <strong>Solution:</strong> Log out and back into YouTube to refresh cookies</p>
                    
                    <h3>4. Incomplete Video Information</h3>
                    <p><strong>Problem:</strong> Some videos fail to load properly<br/>
                    <strong>Solution:</strong> This may be a YouTube or yt-dlp limitation. Try updating the app</p>
                    
                    <h3>5. Download Speed Issues</h3>
                    <p><strong>Problem:</strong> Downloads are very slow<br/>
                    <strong>Solution:</strong> Check your internet connection and try again. Some videos may be throttled by YouTube</p>
                    
                    <p>For other issues, check the logs or <a href="/contact">contact support</a></p>
                </>
            )
        },
        "Report Bug": {
            icon: "fa-bug",
            content: (
                <>
                    <h2>How to Report Issues</h2>
                    <p>Found a bug or issue? Help us fix it by providing detailed information.</p>
                    <h3>What to Include in Your Report</h3>
                    <ol>
                        <li><strong>Clear title:</strong> Describe the problem in one sentence</li>
                        <li><strong>Steps to reproduce:</strong> List exactly what you did</li>
                        <li><strong>Expected result:</strong> What should have happened</li>
                        <li><strong>Actual result:</strong> What actually happened</li>
                        <li><strong>Screenshots/Logs:</strong> Attach logs from <code>C:\Users\[USERNAME]\AppData\Local\FreedomLoader\logs\</code></li>
                    </ol>
                    <h3>System Information</h3>
                    <p>Include:</p>
                    <ul>
                        <li>Freedom Loader version (shown in window title)</li>
                        <li>Windows version</li>
                        <li>Antivirus software being used</li>
                        <li>Any other relevant details</li>
                    </ul>
                    <h3>Issue Types</h3>
                    <ul>
                        <li><strong>Bug:</strong> App crash or unexpected behavior</li>
                        <li><strong>Feature request:</strong> Idea for new functionality</li>
                        <li><strong>Question:</strong> Need help or clarification</li>
                    </ul>
                    <h3>Where to Report</h3>
                    <p>Report issues on <a href="https://github.com/MasterAcnolo/Freedom-Loader/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> or use the <a href="/contact">contact form</a></p>
                    <p>Thanks for helping improve Freedom Loader! 📈</p>
                </>
            )
        }
    };

    const tabs = Object.keys(wikiSections);

    return (
        <>
            <style>{`
                main {
                    width: 100%;
                }

                .wiki-page {
                    padding: 80px 5%;
                    color: var(--text-primary);
                    background: var(--bg-primary);
                    min-height: 100vh;
                }

                .wiki-header {
                    max-width: 1000px;
                    margin: 0 auto 50px;
                    text-align: center;
                }

                .wiki-header h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                }

                .wiki-header p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                }

                .wiki-container {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                .wiki-tabs {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 12px;
                    margin-bottom: 40px;
                }

                .wiki-tab {
                    padding: 14px 16px;
                    background: var(--card-bg);
                    border: 2px solid var(--border-color);
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: center;
                    font-weight: 600;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                }

                .wiki-tab:hover {
                    border-color: var(--accent-primary);
                    color: var(--accent-primary);
                }

                .wiki-tab.active {
                    background: var(--accent-primary);
                    border-color: var(--accent-primary);
                    color: white;
                }

                .wiki-content {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 40px;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .wiki-content h2 {
                    font-size: 2.2rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    color: var(--text-primary);
                    padding-bottom: 15px;
                    border-bottom: 3px solid var(--accent-primary);
                }

                .wiki-content h3 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-top: 25px;
                    margin-bottom: 15px;
                    color: var(--text-primary);
                }

                .wiki-content p {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: var(--text-secondary);
                    margin-bottom: 15px;
                }

                .wiki-content ol, .wiki-content ul {
                    margin: 15px 0 20px 25px;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.8;
                }

                .wiki-content li {
                    margin-bottom: 10px;
                }

                .wiki-content strong {
                    color: var(--text-primary);
                    font-weight: 600;
                }

                .wiki-content code {
                    background: var(--bg-secondary);
                    color: var(--accent-primary);
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-family: monospace;
                    font-size: 0.9rem;
                }

                .wiki-content a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .wiki-content a:hover {
                    text-decoration: underline;
                    opacity: 0.8;
                }

                @media (max-width: 900px) {
                    .wiki-page {
                        padding: 60px 5%;
                    }

                    .wiki-header h1 {
                        font-size: 2.5rem;
                    }

                    .wiki-tabs {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .wiki-content {
                        padding: 25px;
                    }

                    .wiki-content h2 {
                        font-size: 1.8rem;
                    }
                }

                @media (max-width: 600px) {
                    .wiki-page {
                        padding: 50px 5%;
                    }

                    .wiki-header h1 {
                        font-size: 2rem;
                    }

                    .wiki-tabs {
                        grid-template-columns: 1fr;
                    }

                    .wiki-content {
                        padding: 20px;
                    }

                    .wiki-content h2 {
                        font-size: 1.5rem;
                    }

                    .wiki-content h3 {
                        font-size: 1.1rem;
                    }

                    .wiki-content p, .wiki-content ol, .wiki-content ul {
                        font-size: 0.95rem;
                    }
                }
            `}</style>

            <main>
                <section className="wiki-page">
                    <div className="wiki-header">
                        <h1>Wiki</h1>
                        <p>Complete documentation and guides for Freedom Loader</p>
                    </div>

                    <div className="wiki-container">
                        <div className="wiki-tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    className={`wiki-tab ${activeTab === tab ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    <i className={`fas ${wikiSections[tab].icon}`}></i>
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="wiki-content">
                            {wikiSections[activeTab].content}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
