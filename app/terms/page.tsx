export const metadata = {
    title: 'Terms of Service',
    description: 'Terms of service for 299Riyal. Read our terms and conditions.',
};

export default function TermsPage() {
    return (
        <div className="legal-page">
            <h1>Terms of Service</h1>
            <p className="legal-updated">Last updated: December 19, 2025</p>
            
            <section className="legal-section">
                <h2>Acceptance of Terms</h2>
                <p>
                    By accessing and using 299Riyal, you accept and agree to be bound 
                    by these Terms of Service. If you do not agree, please do not use our site.
                </p>
            </section>

            <section className="legal-section">
                <h2>Use of Content</h2>
                <p>
                    All content on this site is for informational purposes only. We make no 
                    warranties about the accuracy or completeness of the information provided.
                </p>
            </section>

            <section className="legal-section">
                <h2>Intellectual Property</h2>
                <p>
                    All content, including text, images, and graphics, is the property of 
                    299Riyal and is protected by copyright laws.
                </p>
            </section>

            <section className="legal-section">
                <h2>Affiliate Disclosure</h2>
                <p>
                    Some links on our site are affiliate links. We may earn a commission 
                    if you make a purchase through these links, at no additional cost to you.
                </p>
            </section>

            <section className="legal-section">
                <h2>Limitation of Liability</h2>
                <p>
                    299Riyal shall not be liable for any damages arising from your 
                    use of this site or reliance on the information provided.
                </p>
            </section>
        </div>
    );
}
