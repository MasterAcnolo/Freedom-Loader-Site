import { useEffect, useState } from "react";

const faqData = {
    "Installation & updates": [
        {
            q: "How do I install Freedom Loader?",
            a: "Download the Windows installer or choose a Linux package from the Download page. Installation notes and troubleshooting are available in the online documentation.",
        },
        {
            q: "Which operating systems are supported?",
            a: "Freedom Loader currently provides builds for Windows 10/11 and Linux. Linux downloads include AppImage, DEB, RPM, Snap, and Fedora COPR options. There is no official macOS build at this time.",
        },
        {
            q: "How do I update the application?",
            a: "Windows and AppImage builds can update through the app. Snap and Fedora COPR installations are updated by their package managers. For other Linux packages, check the Download page for the latest release.",
        },
    ],
    "Downloads & settings": [
        {
            q: "Where are my downloaded files saved?",
            a: "Downloads are saved to the location selected in the app. You can change the output folder in the app settings.",
        },
        {
            q: "What can I download with Freedom Loader?",
            a: "Freedom Loader uses yt-dlp to retrieve online video and audio. Supported sites and available formats depend on yt-dlp and the source website, and can change over time.",
        },
        {
            q: "Do I need Firefox to use the app?",
            a: "No. Firefox is only used for the optional local-cookie feature, which can help access content that requires an existing browser session. You can use the app without Firefox.",
        },
        {
            q: "Can I customize downloads and the app?",
            a: "Yes. Options include output location, playlist handling, media format and codec choices, metadata, and custom themes. Some options depend on the source media.",
        },
    ],
    "Privacy & security": [
        {
            q: "Does Freedom Loader collect my personal data?",
            a: "The app does not include ads, analytics, or tracking. Download history, logs, settings, and media are stored locally. Network requests are still needed to retrieve media and check for releases; optional features such as Discord Rich Presence may share information when enabled.",
        },
        {
            q: "Is Freedom Loader safe to use?",
            a: "Freedom Loader is open source and designed to process downloads on your device. As with any software, download it from the official site or GitHub releases, and only download media you have the right to access.",
        },
        {
            q: "How do I report a security issue?",
            a: "Please follow the private reporting instructions in the Security policy on the Freedom Loader GitHub repository.",
        },
    ],
    "Help & community": [
        {
            q: "How do I report a bug or suggest an improvement?",
            a: "Report bugs through GitHub Issues, or share ideas and questions in GitHub Discussions.",
        },
        {
            q: "Can I contribute to Freedom Loader?",
            a: "Yes. You can contribute code, documentation, bug reports, or ideas through the project repository on GitHub.",
        },
        {
            q: "Where can I find more help?",
            a: "Visit the online documentation for setup and usage information, or use the Contact page to get in touch.",
        },
    ],
};

export default function FAQ() {
    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        document.title = "FAQ - Freedom Loader";
    }, []);

    const toggleExpand = (category, index) => {
        const key = `${category}-${index}`;
        setExpanded((current) => current === key ? null : key);
    };

    return (
        <>
            <style>{`
                .faq-page {
                    min-height: 70vh;
                    padding: clamp(56px, 8vw, 88px) 24px;
                    color: var(--text-primary);
                    background: var(--bg-primary);
                }

                .faq-header {
                    max-width: 760px;
                    margin: 0 auto 52px;
                    text-align: center;
                }

                .faq-header h1 {
                    margin: 0;
                    font-size: clamp(2.2rem, 5vw, 3.5rem);
                    font-weight: 700;
                    letter-spacing: 0;
                    line-height: 1.15;
                }

                .faq-header p {
                    max-width: 600px;
                    margin: 16px auto 0;
                    color: var(--text-secondary);
                    font-size: 1.05rem;
                    line-height: 1.7;
                }

                .faq-container {
                    max-width: 860px;
                    margin: 0 auto;
                }

                .faq-category {
                    margin-bottom: 38px;
                }

                .faq-category:last-child {
                    margin-bottom: 0;
                }

                .faq-category-title {
                    margin: 0 0 14px;
                    padding-bottom: 10px;
                    border-bottom: 1px solid var(--border-color);
                    font-size: 1.35rem;
                    font-weight: 600;
                }

                .faq-item {
                    margin-bottom: 10px;
                    overflow: hidden;
                    border: 1px solid var(--border-color);
                    border-radius: 9px;
                    background: var(--card-bg);
                    transition: border-color 0.2s ease, background-color 0.2s ease;
                }

                .faq-item:hover,
                .faq-item.expanded {
                    border-color: var(--accent-primary);
                    background: var(--card-hover-bg);
                }

                .faq-question-btn {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                    gap: 18px;
                    padding: 18px 20px;
                    border: 0;
                    background: transparent;
                    color: var(--text-primary);
                    font: inherit;
                    font-size: 1rem;
                    font-weight: 600;
                    text-align: left;
                    cursor: pointer;
                }

                .faq-question-btn:hover,
                .faq-item.expanded .faq-question-btn {
                    color: var(--accent-primary);
                }

                .faq-question-btn:focus-visible {
                    outline: 2px solid var(--accent-primary);
                    outline-offset: -3px;
                }

                .faq-icon {
                    flex: 0 0 auto;
                    color: var(--text-tertiary);
                    font-size: 0.9rem;
                    transition: transform 0.2s ease, color 0.2s ease;
                }

                .faq-item.expanded .faq-icon {
                    transform: rotate(180deg);
                    color: var(--accent-primary);
                }

                .faq-answer {
                    display: grid;
                    grid-template-rows: 0fr;
                    transition: grid-template-rows 0.25s ease;
                }

                .faq-item.expanded .faq-answer {
                    grid-template-rows: 1fr;
                }

                .faq-answer-inner {
                    overflow: hidden;
                }

                .faq-answer-content {
                    margin: 0;
                    padding: 0 20px 20px;
                    color: var(--text-secondary);
                    font-size: 0.95rem;
                    line-height: 1.75;
                }

                @media (max-width: 600px) {
                    .faq-page {
                        padding: 48px 16px;
                    }

                    .faq-header {
                        margin-bottom: 40px;
                    }

                    .faq-category-title {
                        font-size: 1.2rem;
                    }

                    .faq-question-btn {
                        padding: 16px;
                        font-size: 0.95rem;
                    }

                    .faq-answer-content {
                        padding: 0 16px 16px;
                        font-size: 0.9rem;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .faq-page *,
                    .faq-page *::before,
                    .faq-page *::after {
                        transition-duration: 0.01ms !important;
                    }
                }
            `}</style>

            <main>
                <section className="faq-page">
                    <header className="faq-header">
                        <h1>Frequently asked questions</h1>
                        <p>Answers about installing, using, and getting help with Freedom Loader.</p>
                    </header>

                    <div className="faq-container">
                        {Object.entries(faqData).map(([category, items], categoryIndex) => (
                            <section key={category} className="faq-category" aria-labelledby={`faq-category-${categoryIndex}`}>
                                <h2 id={`faq-category-${categoryIndex}`} className="faq-category-title">{category}</h2>
                                {items.map((item, index) => {
                                    const key = `${category}-${index}`;
                                    const isExpanded = expanded === key;
                                    const answerId = `faq-answer-${categoryIndex}-${index}`;

                                    return (
                                        <div key={item.q} className={`faq-item ${isExpanded ? "expanded" : ""}`}>
                                            <button
                                                className="faq-question-btn"
                                                id={`${answerId}-question`}
                                                type="button"
                                                aria-expanded={isExpanded}
                                                aria-controls={answerId}
                                                onClick={() => toggleExpand(category, index)}
                                            >
                                                <span>{item.q}</span>
                                                <i className="fas fa-chevron-down faq-icon" aria-hidden="true"></i>
                                            </button>
                                            <div
                                                className="faq-answer"
                                                id={answerId}
                                                role="region"
                                                aria-labelledby={`${answerId}-question`}
                                                aria-hidden={!isExpanded}
                                            >
                                                <div className="faq-answer-inner">
                                                    <p className="faq-answer-content">{item.a}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </section>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
