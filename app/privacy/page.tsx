export const metadata = {
    title: 'Privacy Policy',
    description: 'Privacy policy for 299Riyal. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
    return (
        <div className="legal-page">
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last updated: December 19, 2025</p>
            
            <section className="legal-section">
                <h2>Information We Collect</h2>
                <p>
                    We collect information you provide directly, such as when you subscribe 
                    to our newsletter or contact us. We also collect anonymous usage data 
                    through cookies and analytics tools.
                </p>
            </section>

            <section className="legal-section">
                <h2>How We Use Your Information</h2>
                <p>
                    We use the information we collect to improve our content, personalize 
                    your experience, and communicate with you about updates and offers.
                </p>
            </section>

            <section className="legal-section">
                <h2>Cookies and Tracking</h2>
                <p>
                    Our site uses cookies to enhance your browsing experience. Third-party 
                    services like Google Analytics and advertising partners may also set cookies.
                </p>
            </section>

            <section className="legal-section">
                <h2>Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal data. 
                    Contact us if you have any questions or requests regarding your data.
                </p>
            </section>

            <section className="legal-section">
                <h2>Contact Us</h2>
                <p>
                    If you have questions about this privacy policy, please contact us 
                    through our contact page.
                </p>
            </section>
        </div>
    );
}
