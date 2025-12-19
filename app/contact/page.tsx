import { getStructuralPage } from '@/lib/content';

export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with 299Riyal. We would love to hear from you.',
};

export default function ContactPage() {
    const page = getStructuralPage('contact');
    
    if (!page) {
        return (
            <div className="structural-page">
                <h1>Contact Us</h1>
                <p>Contact information coming soon.</p>
            </div>
        );
    }

    return (
        <div className="structural-page">
            <article className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
    );
}
