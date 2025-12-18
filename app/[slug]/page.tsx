import { getArticleBySlug, getAllArticles } from '../../lib/content';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    return {
        title: article?.title || 'Article',
        description: article?.description || '',
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    
    if (!article) {
        return (
            <div className="article">
                <div className="content-wrapper" style={{ textAlign: 'center' }}>
                    <h1>Article Not Found</h1>
                    <p>The article you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }
    
    return (
        <article className="article">
            {/* Article Schema for Rich Results */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": article.title,
                        "description": article.description,
                        "image": article.image || article.featuredImage,
                        "datePublished": article.date,
                        "author": {
                            "@type": "Person",
                            "name": "Ahmed Al-Rashid"
                        }
                    })
                }}
            />
            <header className="article-header">
                <h1>{article.title}</h1>
                <div className="article-meta">
                    <div className="article-author">
                        <span className="author-avatar">AA</span>
                        <span>Ahmed Al-Rashid</span>
                    </div>
                    <span>•</span>
                    <span>{article.date}</span>
                </div>
            </header>
            
            {/* E-E-A-T Trust Signals */}
            <div className="trust-badges">
                <div className="trust-badge trust-badge--verified">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>Expert Reviewed</span>
                </div>
                <div className="trust-badge trust-badge--updated">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                    <span>Updated {article.date}</span>
                </div>
            </div>
            
            <div className="article-content">
                <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
            
            {/* Social Share */}
            <div className="social-share">
                <span className="share-label">Share this article:</span>
                <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-btn--twitter"
                >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>Tweet</span>
                </a>
                <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-btn--facebook"
                >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Share</span>
                </a>
                <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(article.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn share-btn--linkedin"
                >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                </a>
            </div>
            
            <div className="author-box">
                <div className="author-box-avatar">AA</div>
                <div className="author-box-content">
                    <h4>Ahmed Al-Rashid</h4>
                    <p className="author-box-role">Tech Reviewer</p>
                    <p className="author-box-bio">We are dedicated to bringing you the best content.</p>
                </div>
            </div>
        </article>
    );
}
