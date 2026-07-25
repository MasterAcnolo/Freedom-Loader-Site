import { useState, useEffect } from "react";

function detectOS() {
    const ua = navigator.userAgent;
    if (/Windows/i.test(ua)) return "windows";
    if (/Linux/i.test(ua)) return "linux";
    return "other";
}

const LINUX_OPTIONS = [
    {
        id: "copr",
        label: "Fedora — via COPR",
        tag: "Recommended",
        tagColor: "#4CAF50",
        description: "Install via DNF — updates are handled automatically by your package manager.",
        type: "code",
        code: `sudo dnf copr enable masteracnolo/freedom-loader\nsudo dnf install freedom-loader`,
    },
    {
        id: "rpm",
        label: "RPM",
        tag: "Fedora · RHEL · openSUSE",
        tagColor: "#294172",
        description: "Standard RPM package for Fedora-based distributions.",
        type: "download",
        assetSuffix: ".x86_64.rpm",
        assetPattern: (tag) => `freedom-loader-${tag.replace("v","")}.x86_64.rpm`,
    },
    {
        id: "deb",
        label: "DEB",
        tag: "Debian · Ubuntu",
        tagColor: "#A81D33",
        description: "Standard DEB package for Debian-based distributions.",
        type: "download",
        assetSuffix: ".deb",
        assetPattern: (tag) => `freedom-loader_${tag.replace("v","")}_amd64.deb`,
    },
    {
        id: "appimage",
        label: "AppImage",
        tag: "Universal",
        tagColor: "#1E88E5",
        description: "No installation needed. Download, chmod +x, and run.",
        type: "download",
        assetSuffix: ".AppImage",
        assetPattern: (tag) => `Freedom-Loader-${tag}.AppImage`,
    },
    {
        id: "snap",
        label: "Snap",
        tag: "Any distro with snapd",
        tagColor: "#82BEA0",
        description: "Install via Snap Store — managed by snapd.",
        type: "external",
        url: "https://snapcraft.io/freedom-loader",
        btnLabel: "Open Snap Store",
    },
];

export default function Download() {
    useEffect(() => { document.title = "Download - Freedom Loader"; }, []);

    const [latestVersion, setLatestVersion] = useState("");
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [detectedOS, setDetectedOS] = useState("other");
    const [tab, setTab] = useState("auto");

    useEffect(() => {
        const os = detectOS();
        setDetectedOS(os);
        setTab(os === "windows" ? "windows" : os === "linux" ? "linux" : "windows");
    }, []);

    useEffect(() => {
        const fetchLatestRelease = async () => {
            try {
                const res = await fetch("https://api.github.com/repos/MasterAcnolo/Freedom-Loader/releases/latest");
                if (!res.ok) throw new Error(`Status: ${res.status}`);
                const data = await res.json();
                setLatestVersion(data.tag_name);
                setAssets(data.assets || []);
            } catch (e) {
                console.error("Failed to fetch release:", e.message);
            } finally {
                setLoading(false);
            }
        };
        fetchLatestRelease();
    }, []);

    const exeLink = latestVersion
        ? `https://github.com/MasterAcnolo/Freedom-Loader/releases/download/${latestVersion}/Freedom-Loader-Setup-${latestVersion}.exe`
        : null;

    function getAssetUrl(pattern) {
        if (!latestVersion) return null;
        const filename = pattern(latestVersion);
        const asset = assets.find(a => a.name === filename);
        return asset ? asset.browser_download_url : `https://github.com/MasterAcnolo/Freedom-Loader/releases/latest`;
    }

    const osLabel = detectedOS === "windows" ? "Windows" : detectedOS === "linux" ? "Linux" : null;

    return (
        <>
            <style>{`
                .dl-page {
                    color: var(--text-primary);
                    background: var(--bg-primary);
                    padding: 80px 20%;
                    min-height: 80vh;
                }
                .dl-page .container {
                    max-width: 860px;
                    margin: 0 auto;
                }
                .dl-page h2 {
                    font-size: 2.5rem;
                    margin-bottom: 8px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }
                .dl-detected {
                    font-size: 1rem;
                    color: var(--text-secondary);
                    margin-bottom: 40px;
                }
                .dl-detected strong {
                    color: var(--accent-primary);
                }

                /* Tabs */
                .dl-tabs {
                    display: flex;
                    gap: 8px;
                    margin-bottom: 40px;
                    border-bottom: 1px solid var(--border-color);
                    padding-bottom: 0;
                }
                .dl-tab {
                    padding: 10px 24px;
                    border: none;
                    background: transparent;
                    color: var(--text-secondary);
                    font-size: 1rem;
                    font-family: "Poppins", sans-serif;
                    cursor: pointer;
                    border-bottom: 2px solid transparent;
                    margin-bottom: -1px;
                    transition: all 0.15s ease;
                }
                .dl-tab.active {
                    color: var(--accent-primary);
                    border-bottom-color: var(--accent-primary);
                    font-weight: 600;
                }
                .dl-tab:hover:not(.active) {
                    color: var(--text-primary);
                }

                /* Windows block */
                .dl-block {
                    margin-bottom: 50px;
                    padding-bottom: 40px;
                    border-bottom: 1px solid var(--border-color);
                }
                .dl-block:last-child { border-bottom: none; }
                .dl-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 10px;
                }
                .dl-header h3 {
                    font-size: 1.8rem;
                    margin: 0;
                    color: var(--text-primary);
                    font-family: "Poppins", sans-serif;
                }
                .dl-block p {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: var(--text-secondary);
                    margin: 0;
                }
                .dl-version {
                    color: var(--text-primary);
                    font-weight: bold;
                }
                .dl-loading {
                    color: var(--text-secondary);
                    font-style: italic;
                }

                /* Buttons */
                .btn {
                    padding: 10px 25px;
                    border-radius: 15px;
                    font-weight: bold;
                    text-decoration: none;
                    transition: all 0.2s ease;
                    text-align: center;
                    border: none;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 1rem;
                    white-space: nowrap;
                }
                .btn:disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
                .btn.primary { background-color: var(--accent-primary); color: white; }
                .btn.primary:hover:not(:disabled) { background-color: var(--accent-hover); transform: scale(1.03); }
                .btn.secondary { border: 2px solid var(--accent-primary); color: var(--text-primary); background-color: transparent; }
                .btn.secondary:hover:not(:disabled) { background-color: var(--card-bg); color: var(--accent-hover); border-color: var(--accent-hover); transform: scale(1.03); }

                /* Linux options */
                .linux-options {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }
                .linux-option {
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 20px 24px;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 20px;
                    transition: border-color 0.15s;
                }
                .linux-option:hover { border-color: var(--accent-primary); }
                .linux-option-left { flex: 1; min-width: 0; }
                .linux-option-title {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 6px;
                }
                .linux-option-title h4 {
                    font-size: 1.2rem;
                    margin: 0;
                    color: var(--text-primary);
                    font-family: "Poppins", sans-serif;
                }
                .linux-tag {
                    font-size: 0.72rem;
                    font-weight: 700;
                    padding: 3px 8px;
                    border-radius: 20px;
                    color: white;
                    letter-spacing: 0.03em;
                    white-space: nowrap;
                }
                .linux-option p {
                    font-size: 0.92rem;
                    color: var(--text-secondary);
                    margin: 0 0 12px 0;
                    line-height: 1.5;
                }
                .linux-code {
                    background: var(--card-bg, #1a1a2e);
                    border: 1px solid var(--border-color);
                    border-radius: 8px;
                    padding: 12px 16px;
                    font-family: "Courier New", monospace;
                    font-size: 0.88rem;
                    color: var(--text-primary);
                    white-space: pre;
                    overflow-x: auto;
                }
                .linux-option-right {
                    display: flex;
                    align-items: center;
                    flex-shrink: 0;
                    margin-top: 4px;
                }
                .linux-option-right .btn {
                    min-width: 130px;
                    font-size: 0.9rem;
                    padding: 9px 18px;
                }

                /* Other links at bottom */
                .dl-secondary-links {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                    margin-top: 50px;
                }
                .dl-link-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                }
                .dl-link-row h3 {
                    font-size: 1.4rem;
                    margin: 0 0 4px 0;
                    color: var(--text-primary);
                    font-family: "Poppins", sans-serif;
                }
                .dl-link-row p {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    margin: 0;
                }
                .dl-link-left { flex: 1; }

                /* Responsive */
                @media (max-width: 900px) {
                    .dl-page { padding: 60px 5%; }
                    .dl-page h2 { font-size: 2rem; margin-bottom: 6px; }
                    .dl-header { flex-direction: column; align-items: flex-start; }
                    .linux-option { flex-direction: column; }
                    .linux-option-right { margin-top: 0; }
                    .linux-option-right .btn { width: 100%; }
                    .dl-link-row { flex-direction: column; align-items: flex-start; }
                }
                @media (max-width: 500px) {
                    .dl-tabs { gap: 0; }
                    .dl-tab { padding: 10px 14px; font-size: 0.9rem; }
                }
            `}</style>

            <main>
                <section className="dl-page">
                    <div className="container">
                        <h2>Download</h2>

                        {/* Tabs */}
                        <div className="dl-tabs">
                            <button
                                className={`dl-tab${tab === "windows" ? " active" : ""}`}
                                onClick={() => setTab("windows")}
                            >
                                Windows
                            </button>
                            <button
                                className={`dl-tab${tab === "linux" ? " active" : ""}`}
                                onClick={() => setTab("linux")}
                            >
                                Linux
                            </button>
                        </div>

                        {/* Windows tab */}
                        {tab === "windows" && (
                            <div className="dl-block">
                                <div className="dl-header">
                                    <h3>Windows Installer</h3>
                                    {exeLink ? (
                                        <a href={exeLink} className="btn primary" target="_blank" rel="noopener noreferrer">
                                            Download .exe
                                        </a>
                                    ) : (
                                        <button className="btn primary" disabled>
                                            {loading ? "Loading..." : "Unavailable"}
                                        </button>
                                    )}
                                </div>
                                <p>
                                    Installer (.exe), latest stable version:{" "}
                                    <span className="dl-version">
                                        {loading ? <span className="dl-loading">Loading...</span> : latestVersion || "N/A"}
                                    </span>
                                    <br />
                                    If Windows Defender shows a warning, click "More info" {'>'} "Run anyway".
                                </p>
                            </div>
                        )}

                        {/* Linux tab */}
                        {tab === "linux" && (
                            <div className="linux-options">
                                {LINUX_OPTIONS.map((opt) => (
                                    <div className="linux-option" key={opt.id}>
                                        <div className="linux-option-left">
                                            <div className="linux-option-title">
                                                <h4>{opt.label}</h4>
                                                <span className="linux-tag" style={{ backgroundColor: opt.tagColor }}>
                                                    {opt.tag}
                                                </span>
                                            </div>
                                            <p>{opt.description}</p>
                                            {opt.type === "code" && (
                                                <div className="linux-code">{opt.code}</div>
                                            )}
                                        </div>
                                        <div className="linux-option-right">
                                            {opt.type === "download" && (
                                                <a
                                                    href={getAssetUrl(opt.assetPattern) || "#"}
                                                    className="btn secondary"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {loading ? "Loading..." : `Download ${opt.label}`}
                                                </a>
                                            )}
                                            {opt.type === "external" && (
                                                <a
                                                    href={opt.url}
                                                    className="btn secondary"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {opt.btnLabel}
                                                </a>
                                            )}
                                            {opt.type === "code" && (
                                                <a
                                                    href="https://copr.fedorainfracloud.org/coprs/masteracnolo/freedom-loader/"
                                                    className="btn secondary"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    View on COPR
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Bottom links — always visible */}
                        <div className="dl-secondary-links">
                            <div className="dl-link-row">
                                <div className="dl-link-left">
                                    <h3>Latest Changelog</h3>
                                    <p>Release notes for the latest updates, fixes and new features.</p>
                                </div>
                                <a
                                    href="https://github.com/MasterAcnolo/Freedom-Loader/releases/latest"
                                    className="btn secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Changelog
                                </a>
                            </div>
                            <div className="dl-link-row">
                                <div className="dl-link-left">
                                    <h3>GitHub Repository</h3>
                                    <p>Source code, experimental builds, issues and contributions.</p>
                                </div>
                                <a
                                    href="https://github.com/MasterAcnolo/Freedom-Loader"
                                    className="btn secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Open Repository
                                </a>
                            </div>
                            <div className="dl-link-row">
                                <div className="dl-link-left">
                                    <h3>Old Releases</h3>
                                    <p>Browse older versions and archived builds.</p>
                                </div>
                                <a
                                    href="https://github.com/MasterAcnolo/Freedom-Loader/releases"
                                    className="btn secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Old Releases
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}