export default function Contact() {
    return (
        <>
            <style>{`
                .contact {
                    color: var(--text-primary);
                    padding: 50px 20px;
                    margin-top: 30px;
                    display: flex;
                    flex-direction: column;
                    background: var(--bg-primary);
                }

                .contact .container {
                    max-width: 900px;
                    margin: 0 auto;
                    width: 100%;
                }

                .contact h1 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    font-family: "Poppins", sans-serif;
                    text-align: center;
                    font-weight: 700;
                    color: var(--text-primary);
                }

                .contact > p {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    opacity: 0.8;
                    margin-bottom: 40px;
                    text-align: center;
                    color: var(--text-secondary);
                }

                .contact-methods {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                    margin-bottom: 50px;
                }

                .contact-card {
                    background-color: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 25px 20px;
                    width: 250px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .contact-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px var(--shadow-hover);
                    background: var(--card-hover-bg);
                }

                .contact-card i {
                    font-size: 40px;
                    color: var(--accent-primary);
                    margin-bottom: 15px;
                }

                .contact-card h3 {
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                    color: var(--text-primary);
                }

                .contact-card p {
                    font-size: 0.95rem;
                    color: var(--text-secondary);
                    margin-bottom: 15px;
                }

                .contact-card a {
                    color: var(--accent-primary);
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }

                .contact-card a:hover {
                    text-decoration: underline;
                    color: var(--accent-secondary);
                }

                .contact-form {
                    background-color: var(--bg-secondary);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 30px 25px;
                    max-width: 600px;
                    margin: 0 auto 50px auto;
                    display: flex;
                    flex-direction: column;
                }

                .contact-form label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 500;
                    color: var(--text-primary);
                }

                .contact-form input,
                .contact-form textarea {
                    width: 100%;
                    padding: 12px 15px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    border: 1px solid var(--border-light);
                    background-color: var(--card-bg);
                    color: var(--text-primary);
                    font-size: 1rem;
                    outline: none;
                    transition: all 0.3s ease;
                    font-family: inherit;
                    box-sizing: border-box;
                }

                .contact-form input:focus,
                .contact-form textarea:focus {
                    border-color: var(--accent-primary);
                    box-shadow: 0 0 8px var(--accent-primary);
                    background-color: var(--card-hover-bg);
                }

                .contact-form textarea {
                    min-height: 120px;
                    resize: vertical;
                }

                .contact-form button {
                    display: inline-block;
                    padding: 12px 25px;
                    background-color: var(--accent-primary);
                    color: white;
                    font-weight: 600;
                    font-size: 1rem;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    align-self: center;
                    min-width: 150px;
                }

                .contact-form button:hover {
                    background-color: var(--accent-hover);
                    box-shadow: 0 5px 15px var(--shadow-hover);
                }

                @media (max-width: 768px) {
                    .contact-methods {
                        flex-direction: column;
                        align-items: center;
                    }

                    .contact-card {
                        width: 80%;
                    }

                    .contact-form {
                        width: 90%;
                        padding: 25px 15px;
                    }
                }

                @media (max-width: 500px) {
                    .contact h1 {
                        font-size: 2rem;
                    }

                    .contact > p {
                        font-size: 1rem;
                    }

                    .contact-card {
                        width: 100%;
                    }
                }

                .contact a:not(.contact-card a) {
                    color: var(--accent-primary);
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .contact a:not(.contact-card a):hover {
                    text-decoration: underline;
                    color: var(--accent-secondary);
                }
            `}</style>

            <main>
                <section className="contact">
                    <div className="container">
                        <h1>Contact Me</h1>
                        <p>
                            If you have any questions, suggestions, or need support, reach out using the methods below or fill out the form.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-card">
                                <i className="fab fa-github"></i>
                                <h3>GitHub</h3>
                                <p>Join the discussions, report bugs, and contribute to the project:</p>
                                <a
                                    href="https://github.com/MasterAcnolo/Freedom-Loader/discussions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub Discussions
                                </a>
                            </div>

                            <div className="contact-card">
                                <i className="fab fa-linkedin-in"></i>
                                <h3>LinkedIn</h3>
                                <p>Connect for updates, networking, and professional inquiries:</p>
                                <a
                                    href="https://www.linkedin.com/in/axelnicolas25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @axelnicolas25
                                </a>
                            </div>
                        </div>

                        <form
                            className="contact-form"
                            action="https://api.web3forms.com/submit"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="apikey"
                                value="cd8edfb2-7b53-4db9-a545-8a055f04612c"
                            />

                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
