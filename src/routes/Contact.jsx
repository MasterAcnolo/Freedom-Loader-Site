export default function Contact() {
    return (
        <>
            <style>{`
                .contact {
                    color: var(--text-color);
                    padding: 80px 20%;
                    margin-top: 30px;
                }

                .contact .container {
                    max-width: 900px;
                    margin: 0 auto;
                }

                .contact h1 {
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                    font-family: "Marko One", sans-serif;
                }

                .contact > p {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    opacity: 0.85;
                    margin-bottom: 40px;
                }

                .contact-methods {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 50px;
                }

                .contact-card {
                    background: #1a1a1a;
                    border: 1px solid #2a2a2a;
                    border-radius: 10px;
                    padding: 25px;
                    text-align: center;
                    transition: all 0.3s ease;
                }

                .contact-card:hover {
                    border-color: #444;
                    background: #222;
                    transform: translateY(-4px);
                }

                .contact-card i {
                    font-size: 2.5rem;
                    margin-bottom: 15px;
                    color: #ccc;
                }

                .contact-card h3 {
                    font-size: 1.3rem;
                    margin: 15px 0;
                }

                .contact-card p {
                    font-size: 0.95rem;
                    opacity: 0.7;
                    margin-bottom: 15px;
                }

                .contact-card a {
                    color: #fff;
                    text-decoration: none;
                    font-weight: 600;
                    border-bottom: 2px solid #ccc;
                    transition: all 0.2s ease;
                }

                .contact-card a:hover {
                    color: #ccc;
                    border-bottom: 2px solid #fff;
                }

                .contact-form {
                    background: #1a1a1a;
                    border: 1px solid #2a2a2a;
                    border-radius: 10px;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .contact-form label {
                    font-weight: 600;
                    font-size: 1rem;
                    margin-bottom: 5px;
                }

                .contact-form input,
                .contact-form textarea {
                    background: #121212;
                    border: 1px solid #2a2a2a;
                    border-radius: 6px;
                    color: #fff;
                    padding: 12px 15px;
                    font-size: 1rem;
                    font-family: inherit;
                    transition: all 0.2s ease;
                }

                .contact-form input:focus,
                .contact-form textarea:focus {
                    outline: none;
                    border-color: #444;
                    background: #1a1a1a;
                }

                .contact-form textarea {
                    resize: vertical;
                    min-height: 120px;
                }

                .contact-form button {
                    background: white;
                    color: black;
                    padding: 12px 30px;
                    border-radius: 6px;
                    font-weight: 600;
                    font-size: 1rem;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .contact-form button:hover {
                    background: #f0f0f0;
                    transform: translateY(-1px);
                }

                .contact-form button:active {
                    transform: translateY(0);
                }

                .contact a:not(.contact-card a) {
                    color: #fff;
                    text-decoration: none;
                    position: relative;
                    border-bottom: 2px solid transparent;
                    transition: all 0.2s ease;
                }

                .contact a:not(.contact-card a):hover {
                    border-bottom: 2px solid #fff;
                    color: #ccc;
                }

                @media (max-width: 900px) {
                    .contact {
                        padding: 60px 5%;
                    }

                    .contact h1 {
                        font-size: 2.2rem;
                    }

                    .contact-methods {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 500px) {
                    .contact h1 {
                        font-size: 2rem;
                    }

                    .contact > p {
                        font-size: 1rem;
                    }

                    .contact-form {
                        padding: 20px;
                    }

                    .contact-card {
                        padding: 20px;
                    }
                }
            `}</style>

            <main>
                <section className="contact">
                    <div className="container">
                        <h1>Contact Us</h1>
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
