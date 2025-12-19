import { getStructuralPage } from '@/lib/content';
import { notFound } from 'next/navigation';

export const metadata = {
    title: 'Privacy Policy',
    description: 'Privacy policy for 299Riyal. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
    const page = getStructuralPage('privacy');
    
    if (!page) {
        return (
            <div className="structural-page">
                <h1>Privacy Policy</h1>
                <p>Privacy policy content coming soon.</p>
            </div>
        );
    }

    return (
        <div className="structural-page">
            <article className="prose" dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
    );
}
