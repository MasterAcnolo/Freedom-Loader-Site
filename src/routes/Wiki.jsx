import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                        <li>Windows 10/11 or a modern Linux distribution (Ubuntu, Fedora, Arch, etc.)</li>
                        <li>Mozilla Firefox Browser (required for secure cookie extraction)</li>
                        <li>Active internet connection</li>
                    </ul>
                    
                    <h3>Windows Installation</h3>
                    <ol>
                        <li>Download the latest <code>.exe</code> from the <Link to="/download">Download page</Link> or GitHub Releases.</li>
                        <li>Run the installer (click "More info" → "Run anyway" if Windows SmartScreen warns you).</li>
                        <li>Follow the setup wizard and launch Freedom Loader.</li>
                    </ol>

                    <h3>Linux Installation</h3>
                    <p>We provide multiple ways to install Freedom Loader on Linux:</p>
                    <ul>
                        <li><strong>Fedora (Copr):</strong> <code>sudo dnf copr enable masteracnolo/freedom-loader</code> then <code>sudo dnf install freedom-loader</code></li>
                        <li><strong>Snap Store:</strong> <code>sudo snap install freedom-loader</code></li>
                        <li><strong>AppImage:</strong> Download the <code>.AppImage</code>, right-click to make it executable (or <code>chmod +x</code>), and run it.</li>
                        <li><strong>DEB / RPM:</strong> Download the respective packages from our GitHub releases and install via your package manager.</li>
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
                    <p>At your first launch, your OS or antivirus might flag the app since it's a new open-source software. This is normal. You may also see terminal windows for yt-dlp binary checks.</p>
                    
                    <h3>Basic Workflow</h3>
                    <ol>
                        <li>Paste a URL into the app (YouTube, Soundcloud, Twitch, etc.).</li>
                        <li>Wait a second for the app to fetch the video/playlist metadata (or enable "Auto Fetch Info" in settings).</li>
                        <li>Select your format: Video (MP4) or Audio (MP3).</li>
                        <li>Select quality (Best, Medium, Worst) or specific resolution.</li>
                        <li>Click Download and monitor the real-time progress bar!</li>
                    </ol>

                    <h3>Settings Panel: Download Options</h3>
                    <p>Click the gear icon to access these powerful download features:</p>
                    <ul>
                        <li><strong>Automation:</strong> 
                            <ul>
                                <li><em>Auto Fetch Info:</em> Automatically fetch information for new downloads as soon as you paste a link.</li>
                                <li><em>Download Playlist automatically:</em> If enabled, playlists will download without confirmation.</li>
                                <li><em>Create Playlist Folders:</em> Create a dedicated folder for each playlist with its name.</li>
                            </ul>
                        </li>
                        <li><strong>Metadata & Media:</strong>
                            <ul>
                                <li><em>Add Metadata / Add Thumbnail:</em> Include metadata and thumbnails directly in downloaded files.</li>
                                <li><em>Keep Playlist Order:</em> Add an index before the output file to keep the correct order.</li>
                                <li><em>Custom Codec:</em> Choose your preferred video codec (H264, AV1, AV01, VP9.2, VP9, H265, Theora).</li>
                            </ul>
                        </li>
                        <li><strong>System Controls:</strong>
                            <ul>
                                <li><em>Notification at the end:</em> Notify when a download finishes.</li>
                                <li><em>Auto Update:</em> Enable automatic app updates.</li>
                                <li><em>Enable Hardware Acceleration:</em> Uses GPU acceleration for rendering when available (requires restart).</li>
                            </ul>
                        </li>
                    </ul>
                </>
            )
        },
        "Customization": {
            icon: "fa-palette",
            content: (
                <>
                    <h2>Themes & Customization</h2>
                    <p>Freedom Loader features a powerful, dynamic theme engine. You can change how the app looks without even restarting it!</p>
                    
                    <h3>Using the Theme Workshop</h3>
                    <ol>
                        <li>Visit the <a href="https://masteracnolo.github.io/Freedom-Loader-Workshop/" target="_blank" rel="noopener noreferrer">Freedom Loader Workshop</a>.</li>
                        <li>Browse community themes or use the creator tool to make your own.</li>
                        <li>Download the theme as a <code>.zip</code> file.</li>
                        <li>Open Freedom Loader, go to Settings, and click <strong>Open Theme Folder</strong> at the bottom.</li>
                        <li>Drop the <code>.zip</code> file inside, click the Refresh icon next to the theme selector, and choose your new theme!</li>
                    </ol>

                    <h3>UI & Interface Options</h3>
                    <ul>
                        <li><strong>Custom Top bar:</strong> Use this if the OS topbar is missing or you prefer our sleek custom one.</li>
                        <li><strong>System Tray:</strong> Minimize app on close, hiding it in the System Tray [EXPERIMENTAL].</li>
                        <li><strong>Discord RPC:</strong> Enable/disable Discord Rich Presence to show off your app activity on Discord.</li>
                    </ul>

                    <h3>Developer Tools</h3>
                    <p>At the bottom of the settings panel, you can find advanced tools:</p>
                    <ul>
                        <li><strong>Verbose Logs:</strong> Show verbose logs for debugging purposes.</li>
                        <li><strong>Open JSON Configuration:</strong> Directly open and edit the raw <code>config.json</code> file.</li>
                    </ul>
                </>
            )
        },
        "Firefox": {
            icon: "fa-brands fa-firefox-browser",
            content: (
                <>
                    <h2>Setting Up Firefox</h2>
                    <p>Freedom Loader requires Firefox to securely extract cookies. This allows you to download age-restricted or members-only videos without typing your password into our app.</p>
                    
                    <h3>How it works</h3>
                    <ol>
                        <li>Install Mozilla Firefox (if you don't have it).</li>
                        <li>Open Firefox and log in to your YouTube account.</li>
                        <li>Play any video on YouTube to establish an active session.</li>
                        <li><strong>Close Firefox completely.</strong></li>
                        <li>Launch Freedom Loader and download your restricted video.</li>
                    </ol>
                    
                    <p><em>Note: If cookies aren't found, try logging out and back into YouTube on Firefox. Chrome/Edge cookie support is currently being explored for future updates.</em></p>
                </>
            )
        },
        "Contributing": {
            icon: "fa-code-branch",
            content: (
                <>
                    <h2>Contributing to Freedom Loader</h2>
                    <p>We love open-source! Whether you are a developer, a designer, or a user finding bugs, your help is welcome.</p>
                    
                    <h3>For Developers</h3>
                    <p>We use a Trunk-Based Development workflow on GitHub. To get started:</p>
                    <ul>
                        <li>Read our <a href="https://github.com/MasterAcnolo/Freedom-Loader/blob/main/DEVELOPMENT.md" target="_blank" rel="noopener noreferrer">DEVELOPMENT.md</a> guide to set up your local environment, Node.js, and native binaries.</li>
                        <li>Read our <a href="https://github.com/MasterAcnolo/Freedom-Loader/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">CONTRIBUTING.md</a> for PR conventions and code style.</li>
                    </ul>
                    
                    <h3>For Theme Designers</h3>
                    <p>Created a cool theme in the Workshop? Submit it to the community by opening an issue on the <a href="https://github.com/MasterAcnolo/Freedom-Loader-Workshop" target="_blank" rel="noopener noreferrer">Workshop Repository</a> with your ZIP file and a screenshot!</p>
                </>
            )
        },
        "Common Issues": {
            icon: "fa-circle-exclamation",
            content: (
                <>
                    <h2>Common Issues & Solutions</h2>
                    
                    <h3>1. App won't launch (Windows)</h3>
                    <p><strong>Solution:</strong> Your antivirus might be blocking the executables (yt-dlp, ffmpeg) inside the app. Add the Freedom Loader installation folder to your antivirus whitelist.</p>
                    
                    <h3>2. Downloads fail immediately</h3>
                    <p><strong>Solution:</strong> Ensure your output folder exists and you have write permissions. You can change the output directory in the Settings panel.</p>
                    
                    <h3>3. Age-Restricted downloads fail</h3>
                    <p><strong>Solution:</strong> Log into YouTube on Firefox, play a video, close Firefox completely, and try again.</p>
                    
                    <h3>4. Linux: Missing Binaries or Permissions</h3>
                    <p><strong>Solution:</strong> If you installed via AppImage or built from source, ensure the internal binaries (yt-dlp, ffmpeg) have executable permissions (<code>chmod +x</code>).</p>
                </>
            )
        },
        "Report Bug": {
            icon: "fa-bug",
            content: (
                <>
                    <h2>How to Report Issues</h2>
                    <p>Found a bug? Help us fix it by providing detailed logs.</p>
                    
                    <h3>Where to find your logs</h3>
                    <ul>
                        <li><strong>Windows:</strong> <code>C:\Users\[USERNAME]\AppData\Local\FreedomLoader\logs\</code></li>
                        <li><strong>Linux:</strong> <code>~/.local/share/FreedomLoader/logs/</code></li>
                    </ul>
                    <p><em>Tip: You can click the "Folder" icon in the app's settings to open this directory instantly!</em></p>

                    <h3>Reporting on GitHub</h3>
                    <ol>
                        <li>Go to our <a href="https://github.com/MasterAcnolo/Freedom-Loader/issues" target="_blank" rel="noopener noreferrer">GitHub Issues</a> page.</li>
                        <li>Select the "Bug Report" template.</li>
                        <li>Attach your log file and describe the steps to reproduce the crash.</li>
                        <li>Include your OS (Windows 11, Fedora, Ubuntu, etc.) and app version.</li>
                    </ol>
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
                    max-width: 1200px;
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
                    word-wrap: break-word;
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
