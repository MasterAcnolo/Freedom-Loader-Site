import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Features() {
    useEffect(() => {
        document.title = "Features - Freedom Loader";
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(null);

    const features = [
        // ============= DOWNLOAD =============
        { title: "Multi-Format Downloads", desc: "Download videos in MP4 or audio in MP3 with automatic conversion", icon: "fa-download", v: "1.0.0", cat: "Download" },
        { title: "Video Quality Selection", desc: "Choose from 6 quality options: Best, Medium, Worst, 1080p, 720p, 480p", icon: "fa-bars", v: "1.0.0", cat: "Download" },
        { title: "Playlist Support", desc: "Detect and download complete playlists", icon: "fa-list", v: "1.1.0", cat: "Download" },
        { title: "Video Information Preview", desc: "Preview metadata before download", icon: "fa-eye", v: "1.0.0", cat: "Download" },
        { title: "Auto Check Info", desc: "Automatically fetch video info when pasting URLs", icon: "fa-wand-magic-sparkles", v: "1.0.0", cat: "Download" },
        { title: "Metadata Embedding", desc: "Automatically embed title, artist, duration and thumbnail", icon: "fa-tag", v: "1.1.0", cat: "Download" },
        { title: "Thumbnail Embedding", desc: "Optional thumbnail addition to MP3 files", icon: "fa-image", v: "1.1.0", cat: "Download" },
        { title: "Custom Video Codecs", desc: "Support for 8 video codecs: H.264, H.265, AV1, VP9, VP9.2, VP8, H.263, Theora", icon: "fa-cog", v: "1.4.0", cat: "Download" },
        { title: "Custom Output Directory", desc: "Custom download folder selection", icon: "fa-folder-open", v: "1.1.0", cat: "Download" },
        { title: "Firefox Cookie Integration", desc: "Support Firefox cookies for restricted content", icon: "fa-firefox", v: "1.3.0", cat: "Download" },
        { title: "Real-Time Progress Tracking", desc: "Live progress bar with percentage and speed", icon: " fa-solid fa-hourglass", v: "1.3.0", cat: "Download" },
        { title: "Network Speed Indicator", desc: "Display download speed in real-time", icon: "fa-tachometer-alt", v: "1.3.0", cat: "Download" },
        { title: "Download Cancellation", desc: "Stop current download and clear queue", icon: "fa-ban", v: "1.5.0", cat: "Download" },
        { title: "Playlist Auto-Download Mode", desc: "Automatic playlist downloading without confirmation", icon: "fa-forward", v: "1.4.0", cat: "Download" },
        { title: "Playlist Folder Creation", desc: "Auto-create folders named after playlists", icon: "fa-folder-plus", v: "1.5.0", cat: "Download" },
        { title: "Playlist Info Streaming", desc: "Server-Sent Events streaming for live playlist info", icon: "fa-stream", v: "1.3.0", cat: "Download" },
        { title: "Audio-Only MP3 Conversion", desc: "Audio extraction and optimized MP3 conversion", icon: "fa-music", v: "1.1.0", cat: "Download" },
        { title: "Concurrent Fragment Downloads", desc: "8 fragments downloaded in parallel for acceleration", icon: "fa-network-wired", v: "1.1.0", cat: "Download" },
        { title: "Download Retry Logic", desc: "Automatic retry attempts (10 global retries)", icon: "fa-redo", v: "1.5.0", cat: "Download" },
        { title: "No File Overwrite", desc: "Protection against accidental file overwriting", icon: "fa-shield", v: "1.0.0", cat: "Download" },

        // ============= CUSTOMIZATION =============
        { title: "Dynamic Theme System", desc: "Pre-built theme system with dynamic switching", icon: "fa-palette", v: "1.1.0", cat: "Customization" },
        { title: "Custom Theme Support", desc: "Support for custom themes in .theme.json and ZIP formats", icon: "fa-expand", v: "1.5.0", cat: "Customization" },
        { title: "Custom Top Bar", desc: "Custom title bar and frameless (toggleable)", icon: "fa-window-maximize", v: "1.3.1", cat: "Customization" },
        { title: "Settings Panel", desc: "GUI for live configuration", icon: "fa-sliders", v: "1.4.0", cat: "Customization" },
        { title: "Theme Refresh Button", desc: "Dynamic theme reloading without restart", icon: "fa-sync", v: "1.5.0", cat: "Customization" },

        // ============= SYSTEM =============
        { title: "Automatic App Updates", desc: "Automatic update checking and installation", icon: "fa-repeat", v: "1.3.0", cat: "System" },
        { title: "YT-DLP Auto-Update", desc: "Auto-update yt-dlp engine on startup", icon: "fa-arrow-up", v: "1.2.4", cat: "System" },
        { title: "Single Instance Lock", desc: "Prevent multiple app instances", icon: "fa-lock", v: "1.3.0", cat: "System" },
        { title: "Native Dependency Validation", desc: "Startup validation of yt-dlp, FFmpeg, FFprobe and Deno", icon: "fa-check-circle", v: "1.3.1", cat: "System" },
        { title: "Structured Logging", desc: "Formatted logs with Winston and daily rotation", icon: "fa-file-alt", v: "1.1.2", cat: "System" },
        { title: "Verbose Logging", desc: "Detailed logs mode for advanced debugging", icon: "fa-terminal", v: "1.4.0", cat: "System" },
        { title: "Path Validation", desc: "Download path validation for security", icon: "fa-shield-alt", v: "1.4.0", cat: "System" },
        { title: "FFmpeg Integration", desc: "Full FFmpeg integration for media conversion", icon: "fa-video", v: "1.0.0", cat: "System" },
        { title: "Deno Runtime Integration", desc: "Deno runtime support for youtube challenge", icon: "fa-server", v: "1.3.0", cat: "System" },
        { title: "Firefox Browser Requirement", desc: "Built-in Firefox cookie extraction support", icon: "fa-brands fa-firefox-browser", v: "1.3.0", cat: "System" },
        { title: "Context Isolation", desc: "Electron context isolation for maximum security", icon: "fa-shield", v: "1.5.0", cat: "System" },
        { title: "Splash Screen", desc: "Startup splash screen with progress bar", icon: "fa-spinner", v: "1.5.0", cat: "System" },

        // ============= TOOLS =============
        { title: "System Notifications", desc: "Native Windows notifications when download completes", icon: "fa-bell", v: "1.1.1", cat: "Tools" },
        { title: "Logs Folder Access", desc: "Quick button to open logs folder", icon: "fa-folder", v: "1.1.2", cat: "Tools" },
        { title: "Configuration File Editor", desc: "Direct access to config.json from settings", icon: "fa-edit", v: "1.4.0", cat: "Tools" },
        { title: "Theme Folder Access", desc: "Quick access to themes folder for creation", icon: "fa-folder-open", v: "1.5.0", cat: "Tools" },
        { title: "Version Information", desc: "Display current version in interface", icon: "fa-info-circle", v: "1.4.0", cat: "Tools" },
        { title: "Download Stage Tracking", desc: "Real-time download stage tracking", icon: "fa-tasks", v: "1.3.0", cat: "Tools" },
        { title: "Server-Sent Events (SSE)", desc: "Non-blocking progress updates via streaming", icon: "fa-broadcast-tower", v: "1.3.0", cat: "Tools" },
        { title: "Progress Bar Display", desc: "Visual progress interface with percentage", icon: "fa-bars", v: "1.3.0", cat: "Tools" },
        { title: "IPC Communication", desc: "Secure Electron-Renderer IPC communication", icon: "fa-exchange-alt", v: "1.0.0", cat: "Tools" },
        { title: "Toast Notifications", desc: "Temporary UI notifications for user feedback", icon: "fa-comment", v: "1.5.0", cat: "Tools" },

        // ============= INTEGRATION =============
        { title: "Discord Rich Presence", desc: "Discord integration showing download activity", icon: "fa-brands fa-discord", v: "1.2.0", cat: "Integration" },
        { title: "Official Website Link", desc: "Quick access to official website from app", icon: "fa-globe", v: "1.0.0", cat: "Integration" },
        { title: "Wiki Access", desc: "Link to official documentation/wiki", icon: "fa-book", v: "1.0.0", cat: "Integration" },
        { title: "Theme Workshop", desc: "Access to Freedom Loader Theme Workshop", icon: "fa-tools", v: "1.2.0", cat: "Integration" },
        { title: "GitHub Releases Integration", desc: "GitHub releases integration for updates", icon: "fa-brands fa-github", v: "1.0.0", cat: "Integration" },
        { title: "YT-DLP Backend", desc: "Using yt-dlp as download engine", icon: "fa-download", v: "1.0.0", cat: "Integration" },
    ];

    const categories = ["All", ...new Set(features.map(f => f.cat))];
    const categoryColors = {
        "Download": "#ff6b6b",
        "Customization": "#4ecdc4",
        "System": "#45b7d1",
        "Tools": "#f9ca24",
        "Integration": "#6c5ce7"
    };

    const filteredFeatures = selectedCategory && selectedCategory !== "All" 
        ? features.filter(f => f.cat === selectedCategory)
        : features;

    return (
        <>
            <style>{`
                main {
                    width: 100%;
                }

                .features-page {
                    padding: 80px 5%;
                    color: var(--text-primary);
                    background: var(--bg-primary);
                    min-height: 100vh;
                }

                .features-header {
                    max-width: 1200px;
                    margin: 0 auto 60px;
                    text-align: center;
                }

                .features-header h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .features-header p {
                    font-size: 1.2rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                /* Filter Buttons */
                .category-filter {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 60px;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .filter-btn {
                    padding: 10px 24px;
                    border-radius: 20px;
                    border: 2px solid var(--border-color);
                    background: transparent;
                    color: var(--text-primary);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: 600;
                    font-size: 0.95rem;
                }

                .filter-btn:hover {
                    border-color: var(--accent-primary);
                    color: var(--accent-primary);
                }

                .filter-btn.active {
                    background: var(--accent-primary);
                    color: white;
                    border-color: var(--accent-primary);
                }

                .features-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .category-section {
                    margin-bottom: 60px;
                }

                .category-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 30px;
                    padding-bottom: 15px;
                    border-bottom: 3px solid;
                    display: inline-block;
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 25px;
                    margin-bottom: 40px;
                }

                .feature-card {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 30px;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    position: relative;
                    overflow: hidden;
                }

                .feature-card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                    box-shadow: var(--shadow-hover);
                }

                .feature-card:hover::before {
                    opacity: 1;
                }

                .feature-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 15px;
                }

                .feature-icon {
                    font-size: 1.8rem;
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--bg-secondary);
                    border-radius: 8px;
                    flex-shrink: 0;
                }

                .feature-meta {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    flex: 1;
                }

                .feature-title-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    justify-content: space-between;
                }

                .feature-title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    color: var(--text-primary);
                    margin: 0;
                }

                .feature-badge {
                    display: inline-block;
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    whitespace: nowrap;
                    color: white;
                }

                .feature-version {
                    font-size: 0.80rem;
                    color: var(--text-tertiary);
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .feature-desc {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    line-height: 1.5;
                    margin: 0;
                }

                .features-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 20px;
                    margin-top: 40px;
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .stat-box {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    padding: 25px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .stat-box:hover {
                    border-color: var(--text-secondary);
                    background: var(--card-hover-bg);
                }

                .stat-number {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: var(--accent-primary);
                    margin-bottom: 10px;
                }

                .stat-label {
                    font-size: 0.90rem;
                    color: var(--text-secondary);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-weight: 600;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .features-page {
                        padding: 60px 5%;
                    }

                    .features-header h1 {
                        font-size: 2.5rem;
                    }

                    .features-grid {
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 20px;
                    }

                    .feature-card {
                        padding: 25px;
                    }

                    .category-filter {
                        gap: 8px;
                    }

                    .filter-btn {
                        padding: 8px 18px;
                        font-size: 0.85rem;
                    }
                }

                @media (max-width: 600px) {
                    .features-page {
                        padding: 50px 5%;
                    }

                    .features-header h1 {
                        font-size: 2rem;
                    }

                    .features-header p {
                        font-size: 1rem;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                    }

                    .features-stats {
                        grid-template-columns: 1fr;
                    }

                    .feature-card {
                        padding: 20px;
                    }

                    .feature-title {
                        font-size: 1.1rem;
                    }

                    .category-filter {
                        flex-direction: column;
                    }

                    .filter-btn {
                        width: 100%;
                    }
                }

                /* Coming Soon Section */
                .coming-soon-section {
                    margin-top: 60px;
                    padding: 40px 30px;
                    background: linear-gradient(135deg, var(--card-bg), var(--card-hover-bg));
                    border: 2px solid var(--border-color);
                    border-radius: 12px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    left: 50%;
                    transform: translate(-50%);
                    width: 70%;
                }

                .coming-soon-section::before {
                    content: "";
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
                    opacity: 0.08;
                    pointer-events: none;
                }

                .coming-soon-content {
                    position: relative;
                    z-index: 1;
                }

                .coming-soon-icon {
                    font-size: 2.5rem;
                    margin-bottom: 12px;
                    color: var(--accent-primary);
                }

                .coming-soon-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: var(--text-primary);
                }

                .coming-soon-desc {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 20px;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .roadmap-btn {
                    display: inline-block;
                    padding: 12px 28px;
                    background: var(--accent-primary);
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: all 0.3s ease;
                    border: 2px solid var(--accent-primary);
                }

                .roadmap-btn:hover {
                    background: transparent;
                    color: var(--accent-primary);
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(77, 166, 255, 0.2);
                }

                @media (max-width: 600px) {
                    .coming-soon-section {
                        padding: 30px 20px;
                        margin-top: 50px;
                    }

                    .coming-soon-icon {
                        font-size: 2rem;
                    }

                    .coming-soon-title {
                        font-size: 1.5rem;
                    }

                    .coming-soon-desc {
                        font-size: 0.9rem;
                    }

                    .roadmap-btn {
                        padding: 10px 24px;
                        font-size: 0.9rem;
                    }
                }
            `}</style>

            <main>
                <section className="features-page">
                    {/* Header */}
                    <div className="features-header">
                        <h1>Features</h1>
                        <p>Discover everything Freedom Loader can do. All fully organized by category for easy browsing.</p>
                    </div>

                    {/* Category Filter */}
                    <div className="category-filter">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${selectedCategory === cat || (selectedCategory === null && cat === "All") ? "active" : ""}`}
                                onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="features-stats">
                        <div className="stat-box">
                            <div className="stat-number">{filteredFeatures.length}</div>
                            <div className="stat-label">{selectedCategory && selectedCategory !== "All" ? selectedCategory : "Total Features"}</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number"><i class="fa-solid fa-infinity"></i></div>
                            <div className="stat-label">Possibilities</div>
                        </div>
                    </div>

                    {/* Features by Category */}
                    <div className="features-container">
                        {selectedCategory === null ? (
                            categories.slice(1).map(category => (
                                <div key={category} className="category-section">
                                    <h2 className="category-title" style={{ borderColor: categoryColors[category] || "#1e90ff" }}>
                                        {category}
                                    </h2>
                                    <div className="features-grid">
                                        {features.filter(f => f.cat === category).map((feature, idx) => (
                                            <div key={idx} className="feature-card">
                                                <div className="feature-header">
                                                    <div className="feature-icon" style={{ color: categoryColors[feature.cat] }}>
                                                        <i className={`fas ${feature.icon}`}></i>
                                                    </div>
                                                    <div className="feature-meta">
                                                        <div className="feature-title-row">
                                                            <h3 className="feature-title">{feature.title}</h3>
                                                        </div>
                                                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                                            <span className="feature-badge" style={{ backgroundColor: categoryColors[feature.cat] }}>
                                                                {feature.cat}
                                                            </span>
                                                            <span className="feature-version">v{feature.v}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="feature-desc">{feature.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="category-section">
                                <h2 className="category-title" style={{ borderColor: categoryColors[selectedCategory] }}>
                                    {selectedCategory}
                                </h2>
                                <div className="features-grid">
                                    {filteredFeatures.map((feature, idx) => (
                                        <div key={idx} className="feature-card">
                                            <div className="feature-header">
                                                <div className="feature-icon" style={{ color: categoryColors[feature.cat] }}>
                                                    <i className={`fas ${feature.icon}`}></i>
                                                </div>
                                                <div className="feature-meta">
                                                    <div className="feature-title-row">
                                                        <h3 className="feature-title">{feature.title}</h3>
                                                    </div>
                                                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                                        <span className="feature-badge" style={{ backgroundColor: categoryColors[feature.cat] }}>
                                                            {feature.cat}
                                                        </span>
                                                        <span className="feature-version">v{feature.v}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="feature-desc">{feature.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Coming Soon Section */}
                    <div className="coming-soon-section">
                        <div className="coming-soon-content">
                            <div className="coming-soon-icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <h2 className="coming-soon-title">And more to come...</h2>
                            <p className="coming-soon-desc">
                                These are just the current features. We're constantly working on new features and improvements. 
                                Check out our roadmap to see what's coming next!
                            </p>
                            <Link to="/roadmap" className="roadmap-btn">
                                <i className="fas fa-map"></i> See our Roadmap
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
