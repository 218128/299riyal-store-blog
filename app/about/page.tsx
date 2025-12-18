export const metadata = {
        title: 'About Us',
        description: 'Learn more about 299Riyal and our mission.',
    };

    export default function AboutPage() {
        return (
            <div className= "about-page" >
            <h1>About 299Riyal </h1>

                < section className = "about-section" >
                    <h2>Our Mission </h2>
                        <p>
                    We are dedicated to providing you with the most accurate, helpful, and
        up - to - date information.Our goal is to be your trusted resource for 
                    making informed decisions.
                </p>
            </section>

            < section className = "about-section" >
                <h2>What We Do </h2>
                    <p>
                    We research, test, and review products and topics to bring you
        honest, unbiased recommendations.Every piece of content is created
        with your needs in mind.
                </p>
            </section>

            < section className = "about-section" >
                <h2>Meet the Team </h2>
                    < div className = "author-box" >
                        <div className="author-box-avatar" > AA </div>
                            < div className = "author-box-content" >
                                <h4>Ahmed Al-Rashid </h4>
                                    < p className = "author-box-role" > Tech Reviewer </p>
                                        < p className = "author-box-bio" > We are dedicated to bringing you the best content. </p>
                                            </div>
                                            </div>
                                            </section>

                                            < section className = "about-section" >
                                                <h2>Contact Us </h2>
                                                    <p>
                    Have questions or feedback ? We'd love to hear from you. 
                    Reach out to us and we'll get back to you as soon as possible.
            </p>
            </section>
            </div>
    );
    }
    