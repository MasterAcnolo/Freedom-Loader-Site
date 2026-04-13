import { useState } from "react";

export default function Roadmap() {
    const [expanded, setExpanded] = useState(null);

    const roadmapItems = {
        "Coming Soon": [
            { title: "Batch Processing", desc: "Download multiple videos in parallel with queue management" },
            { title: "Head Less Version", desc: "Expose a Full Api to use Freedom Loader in other Apps" },
            { title: "History & Stats", desc: "Track download history and view detailed statistics (Locally)" },
            { title: "Multi-Language Support", desc: "Full internationalization with multiple language support" }
        ],
        "Working On": [
            { title: "Spotify Support", desc: "Supporting Spotify medias" },        
            { title: "Chrome Cookie Support", desc: "Support All Browser Cookies" },        
            { title: "Custom Commands Injection", desc: "Add other arguments in download process" },        
        ],
        "Future Ideas": [
            { title: "Mobile App", desc: "Native mobile application for iOS and Android platforms" },
            { title: "Linux Version", desc: "Support Ubuntu or other Linux Distro (Because Linus)" },
            { title: "Browser Extension", desc: "Direct integration with web browsers for one-click downloading" },
            { title: "Better Workshop", desc: "Community marketplace for themes, plugins, and tools" },
            { title: "Web Version", desc: "Web-based interface accessible from anywhere" },
        ]
    };

    const colors = {
        "Coming Soon": "#00ff88",
        "Working On": "#4da6ff",
        "Future Ideas": "#ff6b9d"
    };

    return (
        <>
            <style>{`
                main {
                    width: 100%;
                }

                .roadmap-page {
                    padding: 80px 5%;
                    color: var(--text-primary);
                    margin-top: 30px;
                    background: var(--bg-primary);
                    min-height: 100vh;
                }

                .roadmap-header {
                    max-width: 1200px;
                    margin: 0 auto 80px;
                    text-align: center;
                }

                .roadmap-header h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .roadmap-header p {
                    font-size: 1.2rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .roadmap-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                    gap: 30px;
                }

                .roadmap-section {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    position: relative;
                }

                .roadmap-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 4px;
                    height: 42px;
                    border-radius: 2px;
                }

                .roadmap-section.coming-soon::before {
                    background: #00ff88;
                }

                .roadmap-section.in-dev::before {
                    background: #4da6ff;
                }

                .roadmap-section.future::before {
                    background: #ff6b9d;
                }

                .section-header {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 10px;
                    padding-left: 15px;
                }

                .section-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    font-family: "Poppins", sans-serif;
                    margin: 0;
                }

                .section-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    flex-shrink: 0;
                }

                .roadmap-item {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    padding: 18px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .roadmap-item::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 3px;
                    width: 0%;
                    border-radius: 10px 0 0 0;
                    transition: width 0.3s ease;
                }

                .roadmap-item.coming-soon::before {
                    background: #00ff88;
                }

                .roadmap-item.in-dev::before {
                    background: #4da6ff;
                }

                .roadmap-item.future::before {
                    background: #ff6b9d;
                }

                .roadmap-item:hover {
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                    transform: translateY(-4px);
                }

                .roadmap-item:hover::before {
                    width: 100%;
                }

                .item-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                }

                .item-title {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin: 0;
                }

                .item-icon {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    transition: transform 0.3s ease;
                }

                .roadmap-item.expanded .item-icon {
                    transform: rotate(180deg);
                }

                .item-desc {
                    font-size: 0.85rem;
                    color: var(--text-secondary);
                    margin: 0;
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                    margin-top: 0;
                    line-height: 1.5;
                }

                .roadmap-item.expanded .item-desc {
                    max-height: 300px;
                    margin-top: 12px;
                }

                .timdisplay: noner-gradient(180deg, var(--border-color) 0%, transparent 100%);
                    margin: 20px auto;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .roadmap-page {
                        padding: 60px 5%;
                    }1100px) {
                    .roadmap-container {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                @media (max-width: 900px) {
                    .roadmap-page {
                        padding: 60px 5%;
                    }

                    .roadmap-header h1 {
                        font-size: 2.5rem;
                    }

                    .section-title {
                        font-size: 1.3rem;
                    }

                    .roadmap-container {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 600px) {
                    .roadmap-page {
                        padding: 50px 5%;
                    }

                    .roadmap-header h1 {
                        font-size: 2rem;
                    }

                    .roadmap-header p {
                        font-size: 1rem;
                    }

                    .section-title {
                        font-size: 1.3rem;
                    }

                    .roadmap-header {
                        margin-bottom: 50px;
                    }

                    .roadmap-container {
                        gap: 20px;
                    }

                    .roadmap-item {
                        padding: 15px;
                    }

                    .item-title {
                        font-size: 1rem;
                    }

                    .section-header {
                        margin-bottom: 15px;
                        padding-left: 12px;
                    }
                }
            `}</style>

            <main>
                <section className="roadmap-page">
                    {/* Header */}
                    <div className="roadmap-header">
                        <h1>Roadmap</h1>
                        <p>See what's coming next for Freedom Loader. We're constantly innovating and improving.</p>
                    </div>

                    {/* Roadmap Sections */}
                    <div className="roadmap-container">
                        {Object.entries(roadmapItems).map(([stage, items], idx) => (
                            <div 
                                key={stage} 
                                className={`roadmap-section ${
                                    stage === "Coming Soon" ? "coming-soon" :
                                    stage === "Working On" ? "in-dev" : "future"
                                }`}
                            >
                                <div className="section-header">
                                    <div className="section-dot" style={{ backgroundColor: colors[stage] }}></div>
                                    <h2 className="section-title">{stage}</h2>
                                </div>

                                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                    {items.map((item, itemIdx) => (
                                        <div
                                            key={itemIdx}
                                            className={`roadmap-item ${expanded === `${stage}-${itemIdx}` ? "expanded" : ""} ${
                                                stage === "Coming Soon" ? "coming-soon" :
                                                stage === "Working On" ? "in-dev" : "future"
                                            }`}
                                            onClick={() => setExpanded(expanded === `${stage}-${itemIdx}` ? null : `${stage}-${itemIdx}`)}
                                        >
                                            <div className="item-header">
                                                <h3 className="item-title">{item.title}</h3>
                                                <i className="fas fa-chevron-down item-icon"></i>
                                            </div>
                                            <p className="item-desc">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
