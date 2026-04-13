import { useState } from "react";

export default function FAQ() {
    const [expanded, setExpanded] = useState(null);

    const faqData = {
        "Installation & Usage": [
            { q: "How do I install Freedom Loader?", a: "Check the download instructions on the Wiki page to get started quickly and easily." },
            { q: "Which operating systems are supported?", a: "Freedom Loader currently supports Windows 10 and above. Linux support is planned for future releases." },
            { q: "Where are my downloaded files stored?", a: "Files are stored locally in the folder you select during download. The default folder is your Downloads directory." },
            { q: "How do I update the application?", a: "Updates are automatically downloaded and applied on launch. You can also manually download the latest version from the Download page." }
        ],
        "Features & Limitations": [
            { q: "What exactly does Freedom Loader do?", a: "Freedom Loader allows you to quickly download video and audio content from the internet with various quality options and formats." },
            { q: "Can I use Freedom Loader with YouTube or other platforms?", a: "Currently, YouTube is fully supported. More platform compatibility will be added in future releases. The user remains responsible for content usage." },
            { q: "Are there advanced options or settings?", a: "Yes! You can change the download quality, choose between video or audio-only formats, select output paths, and customize themes." },
            { q: "Is my personal data collected?", a: "No, all data remains local on your device and is never sent to any server. Your privacy is protected." }
        ],
        "Contributions & Open Source": [
            { q: "Can I contribute to the project?", a: "Absolutely! All contributors are welcome. You can open issues, submit pull requests, or discuss ideas on GitHub." },
            { q: "How do I report a bug or propose a feature?", a: "Use GitHub Discussions or open an issue on the repository to suggest ideas or report problems." },
            { q: "What license does Freedom Loader use?", a: "Freedom Loader is open source under the GNU GPL v3 license. You can copy and redistribute the code while crediting the original author." },
            { q: "Can I use the code in my own projects?", a: "Yes, freely! However, you must keep original credits and respect the GNU GPL v3 license." }
        ],
        "Support & Community": [
            { q: "How can I contact the developer?", a: "You can use the contact form on the Contact page or reach out via GitHub or social media." },
            { q: "Where can I discuss with the community?", a: "Join the GitHub Discussions community or connect via social media platforms to engage with other users." },
            { q: "Is there documentation available?", a: "Yes, comprehensive documentation is available on the Wiki page with guides for installation, usage, and troubleshooting." }
        ],
        "Security & Privacy": [
            { q: "Is Freedom Loader safe?", a: "Yes, the app is designed to run locally and does not transmit any personal data. Your downloads remain private." },
            { q: "How are my files and data protected?", a: "All files remain on your device. Keep your system secure and up-to-date for optimal safety and performance." },
            { q: "What should I do if I encounter a security issue?", a: "Contact the developer immediately via GitHub or the contact form to report security concerns." }
        ]
    };

    const toggleExpand = (category, index) => {
        const key = `${category}-${index}`;
        setExpanded(expanded === key ? null : key);
    };

    return (
        <>
            <style>{`
                main {
                    width: 100%;
                }

                .faq-page {
                    padding: 80px 5%;
                    color: var(--text-primary);
                    margin-top: 30px;
                    background: var(--bg-primary);
                    min-height: 100vh;
                }

                .faq-header {
                    max-width: 1000px;
                    margin: 0 auto 60px;
                    text-align: center;
                }

                .faq-header h1 {
                    font-size: 3.5rem;
                    font-weight: 700;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                    color: var(--text-primary);
                }

                .faq-header p {
                    font-size: 1.1rem;
                    color: var(--text-secondary);
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .faq-container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .faq-category {
                    margin-bottom: 50px;
                }

                .category-title {
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin-bottom: 25px;
                    padding-bottom: 15px;
                    border-bottom: 3px solid var(--accent-primary);
                    color: var(--text-primary);
                }

                .faq-item {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 10px;
                    margin-bottom: 12px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .faq-item:hover {
                    border-color: var(--text-secondary);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .faq-question-btn {
                    width: 100%;
                    padding: 20px;
                    background: transparent;
                    border: none;
                    color: var(--text-primary);
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 15px;
                    transition: all 0.3s ease;
                    text-align: left;
                }

                .faq-question-btn:hover {
                    color: var(--accent-primary);
                }

                .faq-item.expanded .faq-question-btn {
                    color: var(--accent-primary);
                }

                .faq-icon {
                    font-size: 1.3rem;
                    transition: transform 0.3s ease;
                    flex-shrink: 0;
                }

                .faq-item.expanded .faq-icon {
                    transform: rotate(180deg);
                }

                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease;
                }

                .faq-item.expanded .faq-answer {
                    max-height: 500px;
                }

                .faq-answer-content {
                    padding: 0 20px 20px;
                    font-size: 1rem;
                    color: var(--text-secondary);
                    line-height: 1.6;
                    margin: 0;
                }

                .faq-answer-content a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .faq-answer-content a:hover {
                    text-decoration: underline;
                    opacity: 0.8;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .faq-page {
                        padding: 60px 5%;
                    }

                    .faq-header h1 {
                        font-size: 2.5rem;
                    }

                    .category-title {
                        font-size: 1.5rem;
                    }

                    .faq-question-btn {
                        font-size: 1rem;
                        padding: 18px;
                    }
                }

                @media (max-width: 600px) {
                    .faq-page {
                        padding: 50px 5%;
                    }

                    .faq-header h1 {
                        font-size: 2rem;
                    }

                    .faq-header p {
                        font-size: 1rem;
                    }

                    .category-title {
                        font-size: 1.3rem;
                    }

                    .faq-question-btn {
                        font-size: 0.95rem;
                        padding: 15px;
                    }

                    .faq-answer-content {
                        padding: 0 15px 15px;
                        font-size: 0.9rem;
                    }

                    .faq-container {
                        margin-bottom: 40px;
                    }
                }
            `}</style>

            <main>
                <section className="faq-page">
                    {/* Header */}
                    <div className="faq-header">
                        <h1>Frequently Asked Questions</h1>
                        <p>Find answers to all your questions about Freedom Loader. Click any question to reveal the answer.</p>
                    </div>

                    {/* FAQ Categories */}
                    <div className="faq-container">
                        {Object.entries(faqData).map(([category, items]) => (
                            <div key={category} className="faq-category">
                                <h2 className="category-title">{category}</h2>
                                {items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`faq-item ${expanded === `${category}-${idx}` ? "expanded" : ""}`}
                                    >
                                        <button
                                            className="faq-question-btn"
                                            onClick={() => toggleExpand(category, idx)}
                                        >
                                            <span>{item.q}</span>
                                            <i className="fas fa-chevron-down faq-icon"></i>
                                        </button>
                                        <div className="faq-answer">
                                            <p className="faq-answer-content">{item.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
