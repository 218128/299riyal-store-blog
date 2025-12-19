export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with 299Riyal. We would love to hear from you.',
};

export default function ContactPage() {
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p className="contact-intro">
                Have questions, feedback, or suggestions? We'd love to hear from you!
            </p>
            
            <section className="contact-section">
                <h2>Get in Touch</h2>
                <p>
                    The best way to reach us is through email. We aim to respond to all 
                    inquiries within 24-48 hours.
                </p>
            </section>

            <section className="contact-section">
                <h2>Business Inquiries</h2>
                <p>
                    For advertising, partnerships, or business opportunities, please 
                    include "Business Inquiry" in your message subject.
                </p>
            </section>

            <section className="contact-section">
                <h2>Content Feedback</h2>
                <p>
                    Found an error or have a suggestion for our content? We appreciate 
                    your feedback and are always looking to improve.
                </p>
            </section>

            <section className="contact-section">
                <h2>Follow Us</h2>
                <p>
                    Stay updated with our latest content by following us on social media 
                    or subscribing to our newsletter.
                </p>
            </section>
        </div>
    );
}
