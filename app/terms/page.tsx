import { getStructuralPage } from '@/lib/content';

export const metadata = {
    title: 'Terms of Service',
    description: 'Terms of service for 299Riyal. Read our terms and conditions.',
};

export default function TermsPage() {
    const page = getStructuralPage('terms');
    
    if (!page) {
        return (
            <div className="structural-page">
                <h1>Terms of Service</h1>
                <p>Terms of service content coming soon.</p>
            </div>
        );
    }

    return (
        <div className="structural-page">
            <article className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
    );
}
