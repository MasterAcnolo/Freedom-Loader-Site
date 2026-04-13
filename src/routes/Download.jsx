import { useState, useEffect } from "react";

export default function Download() {
    const [latestVersion, setLatestVersion] = useState("");
    const [downloadLink, setDownloadLink] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLatestRelease = async () => {
            try {
                const url = "https://api.github.com/repos/MasterAcnolo/Freedom-Loader/releases/latest";
                const response = await fetch(url);
                if (!response.ok) throw new Error(`Response status: ${response.status}`);
                
                const data = await response.json();
                setLatestVersion(data.tag_name);
                setDownloadLink(
                    `https://github.com/MasterAcnolo/Freedom-Loader/releases/download/${data.tag_name}/Freedom-Loader-Setup-${data.tag_name}.exe`
                );
            } catch (error) {
                console.error("Error fetching latest release:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLatestRelease();
    }, []);

    return (
        <>
            <style>{`

                .download {
                    color: var(--text-color);
                    padding: 80px 20%;
                    margin-top: 30px;
                }

                .download .container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .download h2 {
                    font-size: 2.5rem;
                    margin-bottom: 50px;
                    font-family: "Marko One", sans-serif;
                }

                .download-block {
                    margin-bottom: 50px;
                }

                .download .download-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                    gap: 15px;
                }

                .download .download-header h3 {
                    font-size: 1.8rem;
                    margin: 0;
                }

                .download .btn {
                    padding: 10px 25px;
                    border-radius: 15px;
                    font-weight: bold;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    text-align: center;
                    border: none;
                    cursor: pointer;
                    display: inline-block;
                }

                .download .btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    pointer-events: none;
                }

                .download-block p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    opacity: 0.85;
                    margin: 0;
                }

                .download .version-text {
                    color: var(--text-color);
                    font-weight: bold;
                }

                .download .loading {
                    color: #919191;
                    font-style: italic;
                }

                .download .btn.primary {
                    background-color: #919191;
                    color: var(--text-color);
                }

                .download .btn.primary:hover:not(:disabled) {
                    background-color: #7a7a7a;
                    transform: scale(1.03);
                }

                .download .btn.secondary {
                    border: 2px solid #919191;
                    color: var(--text-color);
                    background-color: transparent;
                }

                .download .btn.secondary:hover:not(:disabled) {
                    background-color: #91919133;
                    transform: scale(1.03);
                }

                /* Bloc principal plus gros */
                .download-block.main-download .download-header h3 {
                    font-size: 2.5rem;
                }

                .download-block.main-download p {
                    font-size: 1.3rem;
                }

                .download-block.main-download .btn {
                    padding: 10px 30px;
                    font-size: 1.1rem;
                }

                /* Blocs secondaires uniformes */
                .download-block:not(.main-download) .download-header h3 {
                    font-size: 1.6rem;
                }

                .download-block:not(.main-download) p {
                    font-size: 1rem;
                }

                .download-block:not(.main-download) .btn {
                    padding: 10px 25px;
                    font-size: 1rem;
                    width: 180px;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .download {
                        padding: 60px 5%;
                    }

                    .download h2 {
                        font-size: 2.2rem;
                        margin-bottom: 40px;
                    }

                    .download .download-header h3 {
                        font-size: 1.5rem;
                    }

                    .download-block p {
                        font-size: 1rem;
                    }

                    .download .download-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }

                    .download .btn {
                        width: 100%;
                    }
                }

                @media (max-width: 500px) {
                    .download h2 {
                        font-size: 2rem;
                    }

                    .download-block.main-download .download-header h3 {
                        font-size: 2rem;
                    }

                    .download-block:not(.main-download) .download-header h3 {
                        font-size: 1.4rem;
                    }

                    .download-block.main-download p {
                        font-size: 1.2rem;
                    }

                    .download-block:not(.main-download) p {
                        font-size: 0.95rem;
                    }
                }
            `}</style>

            <main>
                <section className="download">
                    <div className="container">
                        <div className="download-block main-download">
                            <div className="download-header">
                                <h3>Download for Windows</h3>
                                {downloadLink ? (
                                    <a
                                        href={downloadLink}
                                        className="btn primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download Installer
                                    </a>
                                ) : (
                                    <button className="btn primary" disabled>
                                        Download Installer
                                    </button>
                                )}
                            </div>
                            <p>
                                Installer (.exe), latest stable version: <span className="version-text">
                                    {loading ? <span className="loading">Loading...</span> : latestVersion || "N/A"}
                                </span>
                            </p>
                        </div>

                        <div className="download-block">
                            <div className="download-header">
                                <h3>GitHub Repository</h3>
                                <a
                                    href="https://github.com/MasterAcnolo/Freedom-Loader"
                                    className="btn secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Repository
                                </a>
                            </div>
                            <p>Source code, experimental builds, issues, contributions</p>
                        </div>

                        <div className="download-block">
                            <div className="download-header">
                                <h3>Latest Changelog</h3>
                                <a
                                    href="https://github.com/MasterAcnolo/Freedom-Loader/releases/latest"
                                    className="btn secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Changelog
                                </a>
                            </div>
                            <p>Check out the release notes for the latest updates, fixes, and new features added to Freedom Loader.</p>
                        </div>

                        <div className="download-block">
                            <div className="download-header">
                                <h3>Old Releases</h3>
                                <a
                                    href="https://github.com/MasterAcnolo/Freedom-Loader/releases"
                                    className="btn secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Old Releases
                                </a>
                            </div>
                            <p>Browse older versions and archived builds if you need a previous release or want to test older features.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
